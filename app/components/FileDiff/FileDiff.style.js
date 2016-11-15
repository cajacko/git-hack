import {GRID_SIZE, GRID_SIZES} from '~/constants/layout'
import {FONT_SIZES, FONT_FAMILY_MONO} from '~/constants/fonts'
import {GREEN_LIGHT, RED_LIGHT} from '~/constants/colours'

export const style = {
  container: {
    flex: 1,
    padding: GRID_SIZE,
    overflowY: 'auto'
  },

  lines: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },

  icon: {
    display: 'inline-block',
    width: GRID_SIZES.X2
  },

  add: {
    backgroundColor: GREEN_LIGHT
  },

  remove: {
    backgroundColor: RED_LIGHT
  },

  text: {
    fontSize: FONT_SIZES.SMALL,
    fontFamily: FONT_FAMILY_MONO
  }
}