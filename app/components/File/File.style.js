import {FONT_SIZES} from '~/constants/fonts'
import {GRID_SIZE} from '~/constants/layout'
import {BORDER_LIGHT, BUTTON_BACKGROUND, WHITE} from '~/constants/colours'
import {BORDER_WIDTHS, BORDER_STYLE} from '~/constants/borders'

export const style = {
  file: {
    borderBottomWidth: BORDER_WIDTHS.THIN,
    borderBottomStyle: BORDER_STYLE,
    borderBottomColor: BORDER_LIGHT,
    display: 'flex'
  },

  active: {
    backgroundColor: BUTTON_BACKGROUND
  },

  checkbox: {
    margin: GRID_SIZE
  },

  status: {
    display: 'inline-block',
    marginLeft: GRID_SIZE,
    width: '50px',
    fontSize: FONT_SIZES.SMALL
  },

  statusActive: {
    color: WHITE
  },

  fileName: {
    marginLeft: GRID_SIZE,
    fontSize: FONT_SIZES.SMALL
  },

  fileNameActive: {
    color: WHITE
  },

  button: {
    appearance: 'none',
    background: 'none',
    border: 0,
    flex: 1,
    margin: 0,
    padding: 0,
    textAlign: 'left',

    ':focus': {
      outline: 'none'
    }
  }
}