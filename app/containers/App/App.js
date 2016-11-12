import React from 'react'
import ReactDOM from 'react-dom'
import UnstagedContainer from '~/containers/Unstaged/Unstaged'
import {Provider} from 'react-redux'
import {getUnstagedFiles} from '~/actions/files'
import {connect} from 'react-redux'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getUnstagedFiles())
  }

  handleClick() {
    this.props.dispatch(getUnstagedFiles())
  }

  render() {
    var count = 0

    return (
      <div>
        <button
          onClick={() => this.handleClick()}
        >Refresh</button>

        <UnstagedContainer 
          new={this.props.newFiles}
          changed={this.props.changedFiles}
          deleted={this.props.deletedFiles}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    newFiles: state.newFiles,
    changedFiles: state.changedFiles,
    deletedFiles: state.deletedFiles
  }
}

export default connect(mapStateToProps)(AppContainer)