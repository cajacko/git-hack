import * as types from '~/actions/actionTypes'
import runGitCommand from '~/helpers/runGitCommand'
import {getStagedUnstagedFiles} from '~/actions/files'

export function commit(message) {
  return dispatch => {
    dispatch({
      type: 'COMMITTING',
      payload: message
    })

    const command = 'commit -m"' + message + '"' //TODO: escape any other ""

    runGitCommand(command, function(error, response) {
      if (error) {
        return dispatch({
          type: 'COMMITT_ERROR',
          payload: {
            error: error,
            message: message
          }
        })
      }

      dispatch({
        type: 'COMMITTED',
        payload: message
      })

      dispatch(getStagedUnstagedFiles())
    })
  }
}