import * as types from '~/actions/actionTypes';

export default function(state = false, action) {
  switch(action.type) {
    case types.GOT_UNSTAGED_FILES:
    case types.GET_UNSTAGED_FILES_ERROR:
      return false

    case types.GETTING_UNSTAGED_FILES:
      return true

    default:
      return state
  }
}