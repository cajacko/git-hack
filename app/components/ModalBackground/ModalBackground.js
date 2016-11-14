import React from 'react'
import {style} from '~/components/ModalBackground/ModalBackground.style'

class ModalBackground extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={this.props.hideModal} style={style.background}></button>
    )
  }
}

export default ModalBackground