import {Z_INDEX} from '~/constants/zIndexes'

export const style = {
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    display: 'block',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    zIndex: Z_INDEX.MODAL_BACKGROUND
  }
}