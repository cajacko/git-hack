import {GRID_SIZE, GRID_SIZES} from '~/constants/layout'
import {LIGHT_BACKGROUND, BORDER_LIGHT} from '~/constants/colours'
import {BORDER_STYLE, BORDER_WIDTHS} from '~/constants/borders'
import {FONT_COLOURS, FONT_WEIGHTS, FONT_SIZES} from '~/constants/fonts'

const wipHelpSize = GRID_SIZES.X2
const wipHelpColour = FONT_COLOURS.BLACK
const wipHelpFontSize = FONT_SIZES.SMALL

const containerBackgroundColor = LIGHT_BACKGROUND

export const style = {
  container: {
    display: 'flex',
    padding: GRID_SIZE,
    backgroundColor: containerBackgroundColor,
    borderTopStyle: BORDER_STYLE,
    borderTopWidth: BORDER_WIDTHS.THIN,
    borderTopColor: BORDER_LIGHT
  },

  wipContainer: {
    display: 'flex'
  },

  commit: {
    marginRight: GRID_SIZE
  },

  wipButton: {

  },

  wipHelp: {
    color: wipHelpColour,
    borderStyle: BORDER_STYLE,
    borderWidth: BORDER_WIDTHS.THIN,
    borderColor: wipHelpColour,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    marginTop: -GRID_SIZES.D2,
    marginLeft: -(wipHelpSize / 2),
    backgroundColor: containerBackgroundColor,
    height: wipHelpSize,
    width: wipHelpSize,
    fontSize: wipHelpFontSize,
    borderRadius: '50%',
    padding: 0,
    ':hover': {
      backgroundColor: containerBackgroundColor
    }
  }
}