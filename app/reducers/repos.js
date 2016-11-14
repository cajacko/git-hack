import * as types from '~/actions/actionTypes.js';

export default function(state = [], action) {
  switch(action.type) {
    case types.CHANGE_REPO:
      var repos = Object.assign([], state)

      var exists = false

      repos.forEach(function(repo) {
        if (repo == action.payload) {
          exists = true
        }
      })

      if (!exists) {
        repos.push(action.payload)
      }

      repos.sort()
      
      return repos
      
    default:
      return state
  }
}