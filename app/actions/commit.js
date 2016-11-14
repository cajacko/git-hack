import * as types from '~/actions/actionTypes'
import runGitCommand from '~/helpers/runGitCommand'
import {getStagedUnstagedFiles} from '~/actions/files'

export function commit(gitDir, message) {
  return dispatch => {
    dispatch({
      type: types.COMMITTING,
      payload: message
    })

    const command = 'commit -m"' + message + '"' //TODO: escape any other ""

    runGitCommand(gitDir, command, function(error, response) {
      if (error) {
        return dispatch({
          type: types.COMMIT_ERROR,
          payload: {
            error: error,
            message: message
          }
        })
      }

      dispatch({
        type: types.COMMITTED,
        payload: message
      })

      dispatch(getStagedUnstagedFiles(gitDir))
    })
  }
}