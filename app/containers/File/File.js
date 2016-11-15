import React from 'react'
import File from '~/components/File/File'
import {connect} from 'react-redux'
import {selectFile} from '~/actions/selectedFile'

class FileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.selectFile = this.selectFile.bind(this)
  }

  selectFile(file) {
    this.props.dispatch(selectFile(this.props.repo, file))
  }

  render() {
    return (
      <File 
        fileName={this.props.fileName} 
        status={this.props.status} 
        handleInput={this.props.handleInput} 
        checked={this.props.checked}
        selectFile={this.selectFile}
        selectedFile={this.props.selectedFile}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedFile: state.selectedFile,
    repo: state.repo
  }
}

export default connect(mapStateToProps)(FileContainer)