import React from 'react'
import Button from '~/components/Button/Button'
import {style} from '~/components/RuleMessage/RuleMessage.style'
import Text from '~/components/Text/Text'

class RuleMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var confirm = false

    if (this.props.type == 'confirm') {
      var buttonType = false
      var buttonText = 'Confirm'

      if (this.props.validated) {
        buttonType = 'grey'
        buttonText = 'Unconfirm'
      }

      confirm = (
        <Button 
          onClick={() => this.props.confirmMessage(this.props.ruleIndex, this.props.messageIndex)}
          buttonType={buttonType}
          style={style.button}
        >
          {buttonText}
        </Button>
      )
    }

    return (
      <li style={style.listItem}>
        <Text style={style.message} text={this.props.message} />
        {confirm}
      </li>
    )
  }
}

export default RuleMessage