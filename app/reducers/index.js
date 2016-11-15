import {combineReducers} from 'redux';
import unstagedNewFiles from '~/reducers/unstagedNewFiles';
import unstagedChangedFiles from '~/reducers/unstagedChangedFiles'
import unstagedDeletedFiles from '~/reducers/unstagedDeletedFiles'
import gettingUnstagedFiles from '~/reducers/gettingUnstagedFiles'
import getUnstagedFilesError from '~/reducers/getUnstagedFilesError'
import stagedFiles from '~/reducers/stagedFiles'
import modal from '~/reducers/modal'
import repo from '~/reducers/repo'
import repos from '~/reducers/repos'
import fileDiff from '~/reducers/fileDiff'
import selectedFile from '~/reducers/selectedFile'

const app = combineReducers({
  unstagedNewFiles,
  unstagedChangedFiles,
  unstagedDeletedFiles,
  gettingUnstagedFiles,
  getUnstagedFilesError,
  stagedFiles,
  modal,
  repo,
  repos,
  fileDiff,
  selectedFile
})

export default app