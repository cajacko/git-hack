import React from 'react'
import RuleMessage from '~/components/RuleMessage/RuleMessage'
import Button from '~/components/Button/Button'
import {style} from '~/components/Rule/Rule.style'

class Rule extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var messageIndex = -1
    const props = this.props

    var confirm = false

    if (this.props.type == 'warning') {
      var buttonType = false
      var buttonText = 'Confirm'

      if (this.props.validated) {
        buttonType = 'grey'
        buttonText = 'Unconfirm'
      }

      confirm = (
        <Button 
          onClick={() => this.props.confirmRule(this.props.ruleIndex)}
          buttonType={buttonType}
          style={style.button}
        >
          {buttonText}
        </Button>
      )
    }

    return (
      <div style={style.container}>
        <ul style={style.list}>
          {
            this.props.messages.map(function(message) {
              messageIndex++ 
              
              return (
                <RuleMessage 
                  key={messageIndex}
                  messageIndex={messageIndex}
                  ruleIndex={props.ruleIndex}
                  message={message.message} 
                  validated={message.validated}
                  type={props.type}
                  confirmMessage={props.confirmMessage}
                />
              )
            })
          }
        </ul>

        {confirm}
      </div>
    )
  }
}

export default Rule