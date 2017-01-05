import React from 'react'
import FileDiff from '~/components/FileDiff/FileDiff'
import {connect} from 'react-redux'
import {getFileDiff} from '~/actions/selectedFile'

class FileDiffContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      diff: false
    }
  }

  componentDidMount() {
    if (!this.props.selectedFile) {
      return false
    }

    this.props.dispatch(getFileDiff(this.props.repo, this.props.selectedFile))
  }

  render() {
    return <FileDiff hunks={this.props.fileDiff}/>
  }
}

function mapStateToProps(state) {
  return {
    repo: state.repo,
    selectedFile: state.selectedFile,
    fileDiff: state.fileDiff
  }
}

export default connect(mapStateToProps)(FileDiffContainer)
