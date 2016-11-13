import {GRID_SIZE} from '~/constants/layout'
import {BORDER_STYLE, BORDER_WIDTHS} from '~/constants/borders'
import {BORDER_LIGHT} from '~/constants/colours'

export const style = {
  listItem: {
    display: 'flex',
    paddingTop: GRID_SIZE,
    paddingBottom: GRID_SIZE,
    borderBottomStyle: BORDER_STYLE,
    borderBottomWidth: BORDER_WIDTHS.THIN,
    borderBottomColor: BORDER_LIGHT
  },

  message: {
    flex: 1
  },

  button: {

  }
}