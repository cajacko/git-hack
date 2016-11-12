import * as types from '~/actions/actionTypes';
import ifFileTypeExists from '~/helpers/conditionals/ifFileTypeExists'
import * as fileTypes from '~/constants/fileTypes'

export default function(state = [], action) {
  switch(action.type) {
    case types.GOT_FILES:
      const files = ifFileTypeExists(fileTypes.NEW, action.payload)

      if (files) {
        return files
      } else {
        return state
      }

    default:
      return state
  }
}