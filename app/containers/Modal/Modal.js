import React from 'react'
import * as modalRoutes from '~/constants/modalRoutes'
import {connect} from 'react-redux'
import ModalCommit from '~/components/ModalCommit/ModalCommit'

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

    var args = false

    if (this.props.modal.args) {
      args = this.props.modal.args
    }

    switch(this.props.modal.type) {
      case modalRoutes.COMMIT:
        return <ModalCommit {...args} />

      default:
        return false
    }
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(ModalContainer)