import {combineReducers} from 'redux';
import unstagedNewFiles from '~/reducers/unstagedNewFiles';
import unstagedChangedFiles from '~/reducers/unstagedChangedFiles'
import unstagedDeletedFiles from '~/reducers/unstagedDeletedFiles'
import gettingUnstagedFiles from '~/reducers/gettingUnstagedFiles'
import getUnstagedFilesError from '~/reducers/getUnstagedFilesError'
import stagedFiles from '~/reducers/stagedFiles'

const app = combineReducers({
  unstagedNewFiles,
  unstagedChangedFiles,
  unstagedDeletedFiles,
  gettingUnstagedFiles,
  getUnstagedFilesError,
  stagedFiles
})

export default app