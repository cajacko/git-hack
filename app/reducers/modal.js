import * as types from '~/actions/actionTypes.js';

export default function(state = false, action) {
  switch(action.type) {
    case types.SHOW_MODAL:
      return {
        type: action.payload.type,
        args: action.payload.args
      }

    case types.HIDE_MODAL:
      return false
      
    default:
      return false
  }
}