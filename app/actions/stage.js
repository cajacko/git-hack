import * as types from '~/actions/actionTypes'
import runGitCommand from '~/helpers/runGitCommand'
import {getStagedUnstagedFiles} from '~/actions/files'

function stageUnstage(args) {
  return dispatch => {
    dispatch({
      type: args.getting,
      payload: args.fileName
    })

    var command = args.command

    if (args.fileName) {
      command += ' ' + args.fileName
    }

    runGitCommand(command, function(error, response) {
      if (error) {
        return dispatch({
          type: args.error,
          payload: {
            error: error,
            fileName: args.fileName
          }
        })
      }

      dispatch({
        type: args.got,
        payload: args.fileName
      })

      dispatch(getStagedUnstagedFiles())
    })
  }
}

export function stageAll() {
  return stageUnstage({
    fileName: false,
    getting: 'STAGING_ALL_FILES',
    command: 'add -A',
    error: 'STAGE_ALL_FILES_ERROR',
    got: 'STAGED_ALL_FILES'
  })
}

export function unStageAll() {
  return stageUnstage({
    fileName: false,
    getting: 'UNSTAGING_ALL_FILES',
    command: 'reset HEAD -- .',
    error: 'UNSTAGE_ALL_FILES_ERROR',
    got: 'UNSTAGED_ALL_FILES'
  })
}

export function unStageFile(fileName) {
  return stageUnstage({
    fileName: fileName,
    getting: 'UNSTAGING_FILE',
    command: 'reset --',
    error: 'UNSTAGE_FILE_ERROR',
    got: 'UNSTAGED_FILE'
  })
}

export function stageFile(fileName) {
  return stageUnstage({
    fileName: fileName,
    getting: 'STAGING_FILE',
    command: 'add',
    error: 'STAGE_FILE_ERROR',
    got: 'STAGED_FILE'
  })
}
