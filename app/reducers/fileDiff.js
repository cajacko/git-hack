import * as types from '~/actions/actionTypes.js'
import parseFileDiff from '~/helpers/formatting/parseFileDiff'

export default function(state = false, action) {
  switch(action.type) {
    case types.GOT_FILE_DIFF:
      return parseFileDiff(action.payload)

    default:
      return state
  }
}
