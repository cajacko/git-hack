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

  render() {
    return (
      <App handleClick={this.handleClick} />
    )
  }
}

export default connect()(AppContainer)