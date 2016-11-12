import * as types from '~/actions/actionTypes.js';

export default function(state = false, action) {
  switch(action.type) {
    case types.GOT_UNSTAGED_FILES:
      return false

    case types.GET_UNSTAGED_FILES_ERROR:
      return true

    default:
      return state
  }
}