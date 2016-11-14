import React from 'react'
import {connect} from 'react-redux'
import App from '~/components/App/App'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <App />
    )
  }
}

export default connect()(AppContainer)