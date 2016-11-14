import {GRID_SIZE, GRID_SIZES} from '~/constants/layout'
import {LIGHT_BACKGROUND} from '~/constants/colours'

export const style = {
  container: {
    marginBottom: GRID_SIZES.X2,
    marginTop: GRID_SIZE,
    backgroundColor: LIGHT_BACKGROUND,
    display: 'flex',
    flexDirection: 'column'
  },

  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: GRID_SIZE,
    marginBottom: GRID_SIZE
  }
}