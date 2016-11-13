import React from 'react'
import {connect} from 'react-redux'
import ModalBackground from '~/components/ModalBackground/ModalBackground'
import {hideModal} from '~/actions/modal'

class ModalBackgroundContainer extends React.Component {
  constructor(props) {
    super(props)
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.props.dispatch(hideModal())
  }
  
  render() {
    return (
      <ModalBackground hideModal={this.hideModal}/>
    )
  }
}

export default connect()(ModalBackgroundContainer)