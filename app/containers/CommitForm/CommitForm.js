import React from 'react'
import CommitForm from '~/components/CommitForm/CommitForm'
import {commit} from '~/actions/commit'
import {connect} from 'react-redux'
import formatCommitMessage from '~/helpers/formatting/formatCommitMessage'

class CommitFormContainer extends React.Component {
  constructor(props) {
    super(props)

    var state = {
      type: '',
      summary: '',
      description: '',
      issueId: ''
    }

    const messageArgs = this.getMessageArgs(state)
    state.message = formatCommitMessage(messageArgs)

    this.state = state
    this.textInputChange = this.textInputChange.bind(this)
    this.saveCommit = this.saveCommit.bind(this)
    this.getMessageArgs = this.getMessageArgs.bind(this)
  }

  getMessageArgs(state) {
    var messageArgs = Object.assign({}, state);
    messageArgs.wip = this.props.wip

    return messageArgs
  }

  saveCommit(event) {
    event.preventDefault()
    console.log(this.state.message)
    this.props.dispatch(commit(this.props.repo, this.state.message))
  }

  textInputChange(prop, value) {
    var state = Object.assign({}, this.state)
    state[prop] = value

    const messageArgs = this.getMessageArgs(state)
    state.message = formatCommitMessage(messageArgs)

    this.setState(state)
  }

  render() {
    return (
      <CommitForm 
        saveCommit={this.saveCommit} 
        textInputChange={this.textInputChange} 
        summary={this.state.summary}
        description={this.state.description}
        issueId={this.state.issueId}
        type={this.state.type}
        message={this.state.message}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    repo: state.repo
  }
}

export default connect(mapStateToProps)(CommitFormContainer)