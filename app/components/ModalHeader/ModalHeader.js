import React from 'react'
import Text from '~/components/Text/Text'
import Button from '~/components/Button/Button'
import {style} from '~/components/ModalHeader/ModalHeader.style'

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var header

    if (this.props.noHeader || (!this.props.title && this.props.noClose)) {
      return false
    } else {
      var title;

      if (this.props.title) {
        title = <h2 style={style.title}><Text style={style.titleText} text={this.props.title} /></h2>
      }

      var close;

      if (this.props.noClose) {
        close = false
      } else {
        close = <Button style={style.button} onClick={this.props.hideModal}>Close</Button>
      }

      return (
        <header style={style.container}>
          {title}
          {close}
        </header>
      )
    }
  }
}

export default Modal