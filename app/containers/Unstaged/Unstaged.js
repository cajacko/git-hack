import React from 'react'
import {getUnstagedFiles} from '~/actions/files'
import {connect} from 'react-redux'
import {stageAll, stageFile} from '~/actions/stage'
import StageContainer from '~/components/StageContainer/StageContainer'

class UnstagedContainer extends React.Component {
  constructor(props) {
    super(props)
    this.checkFile = this.checkFile.bind(this)
    this.stageAll = this.stageAll.bind(this)
    this.returnFileObject = this.returnFileObject.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getUnstagedFiles(this.props.repo))
  }

  stageAll() {
    this.props.dispatch(stageAll(this.props.repo))
  }

  checkFile(fileName, status) {
    this.props.dispatch(stageFile(this.props.repo, fileName, status))
  }

  returnFileObject(status) {
    var files = []

    this.props[status].forEach(function(fileName) {
      files.push({
        fileName: fileName,
        status: status,
        checked: false
      })
    })

    return files
  }

  render() {
    var files = (this.returnFileObject('new'))
    files = files.concat(this.returnFileObject('changed'))
    files = files.concat(this.returnFileObject('deleted'))

    return (
      <StageContainer
        checkFile={this.checkFile}
        loading={this.props.gettingUnstagedFiles}
        error={this.props.getUnstagedFilesError}
        files={files}
        title="Unstaged"
        buttonText="Stage All"
        buttonAction={this.stageAll}
        checked={false}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    new: state.unstagedNewFiles,
    changed: state.unstagedChangedFiles,
    deleted: state.unstagedDeletedFiles,
    gettingUnstagedFiles: state.gettingUnstagedFiles,
    getUnstagedFilesError: state.getUnstagedFilesError,
    repo: state.repo
  }
}

export default connect(mapStateToProps)(UnstagedContainer)