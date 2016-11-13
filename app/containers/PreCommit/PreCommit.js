import React from 'react'
import {connect} from 'react-redux'
import PreCommit from '~/components/PreCommit/PreCommit'
import getGitHackConfigFile from '~/helpers/getGitHackConfigFile'

class PreCommitContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rules: false
    }
  }

  componentDidMount() {
    const thisObject = this

    const gitHackConfig = getGitHackConfigFile(function(err, rules) {
      if (err) {
        return false
      }

      thisObject.setState({
        rules: rules
      })
    })
  }

  render() {
    return (
      <PreCommit
        rules={this.state.rules}
      />
    )
  }
}

export default connect()(PreCommitContainer)