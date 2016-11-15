import * as types from '~/actions/actionTypes.js';

export default function(state = false, action) {
  // return 'prototype/views/store/configureStore.dev.js'
  
  switch(action.type) {
    case types.SELECT_FILE:
      return action.payload
      
    default:
      return state
  }
}