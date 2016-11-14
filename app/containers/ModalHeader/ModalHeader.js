import React from 'react'
import {connect} from 'react-redux'
import ModalHeader from '~/components/ModalHeader/ModalHeader'
import {hideModal} from '~/actions/modal'

class ModalHeaderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.props.dispatch(hideModal())
  }
  
  render() {
    return (
      <ModalHeader title={this.props.title} hideModal={this.hideModal}/>
    )
  }
}

export default connect()(ModalHeaderContainer)