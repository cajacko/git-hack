import {GRID_SIZE, GRID_SIZES} from '~/constants/layout'
import {FONT_SIZES, FONT_FAMILY_MONO} from '~/constants/fonts'
import {GREEN_LIGHTER, RED_LIGHTER, GREEN_LIGHT, RED_LIGHT, BORDER_LIGHT, LIGHT_BACKGROUND} from '~/constants/colours'
import {BORDER_WIDTHS, BORDER_STYLE} from '~/constants/borders'

const lineHeight = 16
const iconSize = FONT_SIZES.SMALL
const fontSize = FONT_SIZES.SMALL
const iconPadding = (lineHeight - iconSize) / 2
const textPadding = (lineHeight - fontSize) / 2

export const style = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },

  lines: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'table',
    width: '100%'
  },

  line: {
    display: 'table-row',
    whiteSpace: 'no-wrap',
  },

  table: {
    display: 'table',
    borderBottomWidth: BORDER_WIDTHS.THIN,
    borderBottomStyle: BORDER_STYLE,
    borderBottomColor: BORDER_LIGHT,
    width: '100%'
  },

  lineNumberTable: {
    display: 'table'
  },

  file: {
    overflowX: 'auto'
  },

  row: {
    display: 'table-row'
  },

  cell: {
    display: 'table-cell',
    verticalAlign: 'top'
  },

  messageCell: {
    width: '100%'
  },

  lineNumberText: {
    display: 'table-cell',
    textAlign: 'center',
    paddingLeft: GRID_SIZES.D2,
    paddingRight: GRID_SIZES.D2,
    paddingTop: textPadding,
    paddingBottom: textPadding,
    fontSize: fontSize,
    height: lineHeight,
    lineHeight: 1,
    boxSizing: 'border-box',
    overflow: 'hidden'
  },

  icon: {
    display: 'table-cell',
    textAlign: 'center',
    paddingLeft: GRID_SIZE,
    paddingRight: GRID_SIZE,
    paddingTop: iconPadding,
    paddingBottom: iconPadding,
    fontSize: iconSize,
    height: lineHeight,
    lineHeight: 1,
    boxSizing: 'border-box',
    overflow: 'hidden'
  },

  lineNumer: {
    backgroundColor: LIGHT_BACKGROUND
  },

  addMessage: {
    backgroundColor: GREEN_LIGHTER
  },

  addIcon: {
    backgroundColor: GREEN_LIGHT
  },

  removeMessage: {
    backgroundColor: RED_LIGHTER
  },

  removeIcon: {
    backgroundColor: RED_LIGHT
  },

  text: {
    fontSize: fontSize,
    fontFamily: FONT_FAMILY_MONO,
    display: 'table-cell',
    paddingRight: GRID_SIZE,
    height: lineHeight,
    lineHeight: 1,
    paddingTop: textPadding,
    paddingBottom: textPadding,
    boxSizing: 'border-box',
    overflow: 'hidden',
    paddingLeft: GRID_SIZES.D2
  }
}