import {style as textStyle} from '~/components/Text/Text.style'
import update from 'react-addons-update'
import {FONT_SIZES, LINE_HEIGHTS} from '~/constants/fonts'
import {GRID_SIZE} from '~/constants/layout'
import {
  BUTTON_BACKGROUND, 
  BUTTON_BACKGROUND_HOVER,
  BUTTON_BACKGROUND_GREY,
  BUTTON_BACKGROUND_GREY_HOVER
} from '~/constants/colours'

export const style = {
  button: update(textStyle, {
    fontSize: {$set: FONT_SIZES.SMALL},
    lineHeight: {$set: LINE_HEIGHTS.NONE},
    width: {$set: GRID_SIZE * 12},
    display: {$set: 'block'},
    borderRadius: {$set: 0},
    appearance: {$set: 'none'},
    padding: {$set: GRID_SIZE},
    backgroundColor: {$set: BUTTON_BACKGROUND},
    color: {$set: 'white'},
    cursor: {$set: 'pointer'},
    borderWidth: {$set: 0},
    ':hover': {$set: {
      backgroundColor: BUTTON_BACKGROUND_HOVER
    }}
  }),

  grey: {
    backgroundColor: BUTTON_BACKGROUND_GREY,
    ':hover': {
      backgroundColor: BUTTON_BACKGROUND_GREY_HOVER,
    }
  }
}