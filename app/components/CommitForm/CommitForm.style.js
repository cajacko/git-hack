import {GRID_SIZE, GRID_SIZES} from '~/constants/layout'
import {LIGHT_BACKGROUND, BORDER_LIGHT} from '~/constants/colours'
import {BORDER_WIDTHS, BORDER_STYLE} from '~/constants/borders'
import {FONT_SIZES, FONT_WEIGHTS} from '~/constants/fonts'

export const style = {
  form: {
    display: 'flex',
    flexDirection: 'column'
  },

  main: {
    paddingLeft: GRID_SIZE,
    paddingRight: GRID_SIZE,
    paddingTop: GRID_SIZE,
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: GRID_SIZES.X2
  },

  label: {
    marginBottom: GRID_SIZES.D2
  },

  textInput: {
    padding: GRID_SIZES.D2,
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: FONT_WEIGHTS.LIGHT
  },

  textarea: {
    minHeight: '200px'
  },

  message: {
    marginTop: GRID_SIZE,
    marginBottom: GRID_SIZES.X2,
    padding: GRID_SIZE,
    fontFamily: 'monospace',
    lineHeight: 1,
    backgroundColor: LIGHT_BACKGROUND,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_LIGHT,
    borderWidth: BORDER_WIDTHS.THIN, 
  },

  footer: {
    display: 'flex',
    backgroundColor: LIGHT_BACKGROUND,
    padding: GRID_SIZE,
    borderTopStyle: BORDER_STYLE,
    borderTopColor: BORDER_LIGHT,
    borderTopWidth: BORDER_WIDTHS.THIN
  },

  pushContainer: {
    flex: 1
  }
}