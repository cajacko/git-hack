import {LINE_HEIGHTS, FONT_SIZES, FONT_WEIGHTS} from '~/constants/fonts'
import {LIGHT_BACKGROUND, BORDER_LIGHT} from '~/constants/colours'
import {GRID_SIZE} from '~/constants/layout'
import {BORDER_WIDTHS, BORDER_STYLE} from '~/constants/borders'

export const style = {
  header: {
    display: 'flex',
    backgroundColor: LIGHT_BACKGROUND,
    padding: GRID_SIZE,
    borderBottomStyle: BORDER_STYLE,
    borderBottomColor: BORDER_LIGHT,
    borderBottomWidth: BORDER_WIDTHS.THIN, 
  },

  title: {
    margin: 0,
    flex: 1
  },

  titleText: {
    fontSize: FONT_SIZES.LARGE,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    lineHeight: LINE_HEIGHTS.NONE
  }
}