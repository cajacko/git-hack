import * as types from '~/actions/actionTypes'

export function showModal(type, args) {
  return {
    type: types.SHOW_MODAL,
    payload: {
      type: type,
      args: args
    }
  }
}

export function hideModal() {
  return {
    type: types.HIDE_MODAL
  }
}