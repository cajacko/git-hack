import React from 'react'
import {connect} from 'react-redux'
import CommitActions from '~/components/CommitActions/CommitActions'
import {showModal} from '~/actions/modal'
import * as modalRoutes from '~/constants/modalRoutes'

class CommitActionsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.commitWip = this.commitWip.bind(this)
  }

  validateCommit() {
    console.log('validateCommit')
  }

  commitWip() {
    this.props.dispatch(showModal(modalRoutes.COMMIT, {wip: true}))
  }
  
  render() {
    return (
      <CommitActions 
        validateCommit={this.validateCommit} 
        commitWip={this.commitWip} 
      />
    )
  }
}

export default connect()(CommitActionsContainer)