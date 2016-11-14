import React from 'react'
import {connect} from 'react-redux'
import App from '~/components/App/App'
import {getStagedUnstagedFiles} from '~/actions/files'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const thisObject = this

    setInterval(function() {
      thisObject.props.dispatch(getStagedUnstagedFiles(thisObject.props.repo))
    }, 3000)
  }
  
  render() {
    return (
      <App />
    )
  }
}

function mapStateToProps(state) {
  return {
    repo: state.repo
  }
}

export default connect(mapStateToProps)(AppContainer)