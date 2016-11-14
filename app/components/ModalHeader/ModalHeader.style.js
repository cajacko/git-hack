import {FONT_SIZES} from '~/constants/fonts'
import {GRID_SIZE} from '~/constants/layout'
import {LIGHT_BACKGROUND, BORDER_LIGHT} from '~/constants/colours'
import {BORDER_WIDTHS, BORDER_STYLE} from '~/constants/borders'

export const style = {
  container: {
    display: 'flex',
    padding: GRID_SIZE,
    backgroundColor: LIGHT_BACKGROUND,
    borderBottomStyle: BORDER_STYLE,
    borderBottomColor: BORDER_LIGHT,
    borderBottomWidth: BORDER_WIDTHS.THIN
  },

  title: {
    margin: 0,
    padding: 0,
    flex: 1
  },

  titleText: {
    fontSize: FONT_SIZES.LARGE
  },

  button: {

  }
}