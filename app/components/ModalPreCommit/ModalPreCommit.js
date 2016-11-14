import React from 'react'
import Modal from '~/components/Modal/Modal'
import ModalHeader from '~/containers/ModalHeader/ModalHeader'
import PreCommit from '~/containers/PreCommit/PreCommit'
import ModalBackground from '~/containers/ModalBackground/ModalBackground'
import ModalContent from '~/components/ModalContent/ModalContent'

class ModalCommit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Modal>
        <ModalContent>
          <ModalHeader title="Validate to commit"/>
          <PreCommit rules={this.props.rules} />
        </ModalContent>

        <ModalBackground />
      </Modal>
    )
  }
}

export default ModalCommit