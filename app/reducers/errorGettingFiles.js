import * as types from '~/actions/actionTypes';

export default function(state = false, action) {
  switch(action.type) {
    case types.GOT_FILES:
      return false

    case types.GET_FILES_ERROR:
      return true

    default:
      return state
  }
}