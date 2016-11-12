import * as types from '~/actions/actionTypes';
import {exec} from 'child_process'
import parseFilesFromResponse from '~/helpers/formatting/parseFilesFromResponse'
import * as fileTypes from '~/constants/fileTypes'

function getFiles(command, callback) {
  exec(command, function(error, stdout, stderr) {
    if (error) {
      callback(true, stderr)
      return false
    }

    const files = parseFilesFromResponse(stdout)

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

  getFiles('git ls-files -m', function(error, files) {
    if (error) {
      callback(error)
      doneCount = 1000
      return false
    }

    doneCount++

    files.forEach(function(file) {
      allFiles[file] = fileTypes.CHANGED
    })

    getFiles('git ls-files -d', function(error, files) {
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

  getFiles('git ls-files --others --exclude-standard', function(error, files) {
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

    var fileObject = {}

    for (var key in files) {
      if (files.hasOwnProperty(key)) {
        if (!fileObject[files[key]]) {
          fileObject[files[key]] = []
        }

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
      type: types.GETTING_FILES
    })
    
    getChangeArray(function(error, files) {
      if (error) {
        return dispatch({
          type: types.GET_FILES_ERROR
        })
      }

      dispatch({
        type: types.GOT_FILES,
        payload: files
      })
    })
  }
}