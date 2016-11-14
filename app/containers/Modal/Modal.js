import React from 'react'
import * as modalRoutes from '~/constants/modalRoutes'
import {connect} from 'react-redux'
import ModalCommit from '~/components/ModalCommit/ModalCommit'
import ModalPreCommit from '~/components/ModalPreCommit/ModalPreCommit'

class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.modal) {
      return false
    }

    if (!this.props.modal.type) {
      return false
    }

    var args = this.props.modal.args

    switch(this.props.modal.type) {
      case modalRoutes.COMMIT:
        return <ModalCommit wip={args} />

      case modalRoutes.PRE_COMMIT:
        return <ModalPreCommit rules={this.props.modal.args} />

      default:
        return false
    }
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps)(ModalContainer)