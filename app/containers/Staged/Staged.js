import React from 'react'
import {getStagedFiles} from '~/actions/files'
import {connect} from 'react-redux'
import {unStageAll, unStageFile} from '~/actions/stage'
import StageContainer from '~/components/StageContainer/StageContainer'

class StagedContainer extends React.Component {
  constructor(props) {
    super(props)
    this.unStageAll = this.unStageAll.bind(this)
    this.checkFile = this.checkFile.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getStagedFiles(this.props.repo))
  }

  unStageAll() {
    this.props.dispatch(unStageAll(this.props.repo))
  }

  checkFile(fileName) {
    this.props.dispatch(unStageFile(this.props.repo, fileName))
  }

  render() {
    var files = []

    this.props.stagedFiles.forEach(function(fileName) {
      files.push({
        fileName: fileName,
        status: false,
        checked: true
      })
    })

    return (
      <StageContainer
        loading={this.props.gettingStagedFiles}
        error={this.props.getStagedFilesError}
        checkFile={this.checkFile}
        files={files}
        title="Staged"
        buttonText="Unstage All"
        buttonAction={this.unStageAll}
        checked={true}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    stagedFiles: state.stagedFiles,
    gettingStagedFiles: state.gettingUnstagedFiles,
    getStagedFilesError: state.getUnstagedFilesError,
    repo: state.repo
  }
}

export default connect(mapStateToProps)(StagedContainer)