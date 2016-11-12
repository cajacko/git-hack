import {combineReducers} from 'redux';
import newFiles from '~/reducers/newFiles';
import changedFiles from '~/reducers/changedFiles'
import deletedFiles from '~/reducers/deletedFiles'
import gettingFiles from '~/reducers/gettingFiles'
import errorGettingFiles from '~/reducers/errorGettingFiles'

const app = combineReducers({
  newFiles,
  changedFiles,
  deletedFiles,
  gettingFiles,
  errorGettingFiles
})

export default app