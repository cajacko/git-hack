import * as types from '~/actions/actionTypes'
import {getStagedUnstagedFiles} from '~/actions/files'

export function changeRepo(gitDir) {
  return dispatch => {
    dispatch({
      type: types.CHANGE_REPO,
      payload: gitDir
    })

    dispatch(getStagedUnstagedFiles(gitDir))
  }
}