import React from 'react'
import {connect} from 'react-redux'
import CommitActions from '~/components/CommitActions/CommitActions'
import {showModal} from '~/actions/modal'
import {preCommit} from '~/actions/preCommit'
import * as modalRoutes from '~/constants/modalRoutes'

class CommitActionsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.commitWip = this.commitWip.bind(this)
    this.preCommit = this.preCommit.bind(this)
  }

  preCommit() {
    this.props.dispatch(preCommit(this.props.repo, this.props.stagedFiles))
  }

  commitWip() {
    this.props.dispatch(showModal(modalRoutes.COMMIT, true))
  }
  
  render() {
    return (
      <CommitActions 
        preCommit={this.preCommit} 
        commitWip={this.commitWip} 
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    stagedFiles: state.stagedFiles,
    repo: state.repo
  }
}

export default connect(mapStateToProps)(CommitActionsContainer)