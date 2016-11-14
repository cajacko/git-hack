import {FONT_SIZES} from '~/constants/fonts'
import {GRID_SIZE} from '~/constants/layout'
import {BORDER_LIGHT} from '~/constants/colours'
import {BORDER_WIDTHS, BORDER_STYLE} from '~/constants/borders'

export const style = {
  file: {
    padding: GRID_SIZE,
    borderBottomWidth: BORDER_WIDTHS.THIN,
    borderBottomStyle: BORDER_STYLE,
    borderBottomColor: BORDER_LIGHT
  },

  status: {
    display: 'inline-block',
    marginLeft: GRID_SIZE,
    width: '50px',
    fontSize: FONT_SIZES.SMALL
  },

  fileName: {
    marginLeft: GRID_SIZE,
    fontSize: FONT_SIZES.SMALL
  }
}