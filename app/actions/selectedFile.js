import runGitCommand from '~/helpers/runGitCommand'
import * as types from '~/actions/actionTypes'

export function getFileDiff(repo, file) {
  return dispatch => {
    if (!file) {
      return false
    }

    dispatch({
      type: types.GET_FILE_DIFF,
      payload: {
        repo: repo,
        file: file
      }
    })

    var command = 'diff --text ' + file

    runGitCommand(repo, command, function(err, response) {
      if (err) {
        console.log(err)
        return false
      }

      dispatch({
        type: types.GOT_FILE_DIFF,
        payload: response
      })
    })
  }
}

export function selectFile(repo, file) {
  return dispatch => {
    dispatch({
      type: types.SELECT_FILE,
      payload: file
    })

    dispatch(getFileDiff(repo, file))
  }
}