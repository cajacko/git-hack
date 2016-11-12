import React from 'react'
import {connect} from 'react-redux'
import App from '~/components/App/App'
import {getStagedUnstagedFiles} from '~/actions/files'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.dispatch(getStagedUnstagedFiles())
  }

  openCommit() {
    console.log('openCommit')
  }
  
  render() {
    return (
      <App 
        refresh={this.handleClick} 
        openCommit={this.openCommit}
      />
    )
  }
}

export default connect()(AppContainer)