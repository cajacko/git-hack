import {Z_INDEX} from '~/constants/zIndexes'
import {GRID_SIZE} from '~/constants/layout'

export const style = {
  container: {
    zIndex: Z_INDEX.MODAL_CONTENT,
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto',
    background: 'white',
    marginTop: GRID_SIZE * 4
  }
}