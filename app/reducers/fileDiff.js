import * as types from '~/actions/actionTypes.js';

export default function(state = false, action) { 
  switch(action.type) {
    case types.GOT_FILE_DIFF:
      return action.payload
      
    default:
      return state
  }
}