import React from 'React'
import CommitForm from '~/components/CommitForm/CommitForm'
import {commit} from '~/actions/commit'
import {connect} from 'react-redux'
import formatCommitMessage from '~/helpers/formatting/formatCommitMessage'

class CommitFormContainer extends React.Component {
  constructor(props) {
    super(props)

    var state = {
      type: 'Commit Form',
      summary: 'Added ability to save commit',
      description: 'A description of some sort',
      issueId: '34657907hfoihr90'
    }

    state.message = formatCommitMessage(state)

    this.state = state
    this.textInputChange = this.textInputChange.bind(this)
    this.saveCommit = this.saveCommit.bind(this)
  }

  saveCommit(event) {
    event.preventDefault()
    console.log(this.state.message)
    this.props.dispatch(commit(this.state.message))
  }

  textInputChange(prop, value) {
    var state = Object.assign({}, this.state)

    state[prop] = value
    state.message = formatCommitMessage(state)

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

export default connect()(CommitFormContainer)