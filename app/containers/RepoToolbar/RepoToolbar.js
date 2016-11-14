import React from 'react'
import {connect} from 'react-redux'
import RepoToolbar from '~/components/RepoToolbar/RepoToolbar'
const {dialog} = window.require('electron').remote
import {changeRepo} from '~/actions/repo'
import {getStagedUnstagedFiles} from '~/actions/files'

class RepoToolbarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.changeDir = this.changeDir.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  changeDir() {
    const dialogOptions = {
      properties: ['openDirectory', 'createDirectory']
    }

    const thisObject = this

    dialog.showOpenDialog(dialogOptions, function(dir) {
      if (dir && dir.length == 1 && dir[0]) {
        thisObject.props.dispatch(changeRepo(dir[0]))
      }
    })
  }

  refresh() {
    this.props.dispatch(getStagedUnstagedFiles(this.props.path))
  }

  render() {
    return (
      <RepoToolbar
        path={this.props.path}
        changeDir={this.changeDir}
        refresh={this.refresh}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    stagedFiles: state.stagedFiles,
    path: state.repo
  }
}

export default connect(mapStateToProps)(RepoToolbarContainer)