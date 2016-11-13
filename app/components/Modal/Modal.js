import React from 'react'
import {style} from '~/components/Modal/Modal.style'

class Modal extends React.Component {
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

export default Modal