import * as types from '~/actions/actionTypes';
import parseFilesFromResponse from '~/helpers/formatting/parseFilesFromResponse'
import * as fileTypes from '~/constants/fileTypes'
import runGitCommand from '~/helpers/runGitCommand'

function getFiles(command, callback) {
  runGitCommand(command, function(error, response) {
    if (error) {
      return callback(true)
    }

    const files = parseFilesFromResponse(response)

    if (files) {
      callback(null, files)
    } else {
      callback(true)
    }
  })
}

function getAllChanges(callback) {
  var allFiles = {}
  var doneCount = 0

  getFiles('ls-files -m', function(error, files) {
    if (error) {
      callback(error)
      doneCount = 1000
      return false
    }

    doneCount++

    files.forEach(function(file) {
      allFiles[file] = fileTypes.CHANGED
    })

    getFiles('ls-files -d', function(error, files) {
      if (error) {
        callback(error)
        doneCount = 1000
        return false
      }

      doneCount++

      files.forEach(function(file) {
        allFiles[file] = fileTypes.DELETED
      })

      if (doneCount >= 3) {
        callback(null, allFiles)
      }
    })
  })

  getFiles('ls-files --others --exclude-standard', function(error, files) {
    if (error) {
      callback(error)
      doneCount = 1000
      return false
    }

    doneCount++

    files.forEach(function(file) {
      allFiles[file] = fileTypes.NEW
    })

    if (doneCount >= 3) {
      callback(null, allFiles)
    }
  })
}

function getChangeArray(callback) {
  getAllChanges(function(error, files) {
    if (error) {
      callback(error)
      return false
    }

    var fileObject = {
      [fileTypes.DELETED]: [],
      [fileTypes.CHANGED]: [],
      [fileTypes.NEW]: []
    }

    for (var key in files) {
      if (files.hasOwnProperty(key)) {
        fileObject[files[key]].push(key)
      } else {
        return callback(true)
      }
    }

    callback(null, fileObject)
  })
}

export function getUnstagedFiles() {
  return dispatch => {
    dispatch({
      type: types.GETTING_UNSTAGED_FILES
    })
    
    getChangeArray(function(error, files) {
      if (error) {
        return dispatch({
          type: types.GET_UNSTAGED_FILES_ERROR
        })
      }

      dispatch({
        type: types.GOT_UNSTAGED_FILES,
        payload: files
      })
    })
  }
}

export function getStagedFiles() {
  return dispatch => {
    dispatch({
      type: types.GETTING_STAGED_FILES
    })

    getFiles('diff --name-only --cached', function(error, files) {
      if (error) {
        return dispatch({
          type: types.GET_STAGED_FILES_ERROR
        })
      }

      dispatch({
        type: types.GOT_STAGED_FILES,
        payload: files
      })
    })
  }
}

export function getStagedUnstagedFiles() {
  return dispatch => {
    dispatch(getStagedFiles())
    dispatch(getUnstagedFiles())
  }
}