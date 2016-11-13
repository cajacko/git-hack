import React from 'react'
import {style} from '~/components/ModalContent/ModalContent.style'

class ModalContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={style.container}>
        {this.props.children}
      </div>
    )
  }
}

export default ModalContent