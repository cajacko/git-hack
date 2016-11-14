import React from 'react'
import Modal from '~/components/Modal/Modal'
import ModalHeader from '~/containers/ModalHeader/ModalHeader'
import CommitFormContainer from '~/containers/CommitForm/CommitForm'
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
          <ModalHeader title="Commit"/>
          <CommitFormContainer wip={this.props.wip} />
        </ModalContent>

        <ModalBackground />
      </Modal>
    )
  }
}

export default ModalCommit