import * as types from '~/actions/actionTypes.js';

export default function(state = false, action) {
  switch(action.type) {
    case types.CHANGE_REPO:
      return action.payload
      
    default:
      return state
  }
}