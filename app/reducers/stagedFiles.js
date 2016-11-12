import * as types from '~/actions/actionTypes.js';

export default function(state = [], action) {
  switch(action.type) {
    case types.GOT_STAGED_FILES:
      return action.payload

    default:
      return state
  }
}