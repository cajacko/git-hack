import React from 'React'
import RuleMessage from '~/components/RuleMessage/RuleMessage'

class Rule extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var count = 0
    const type = this.props.type
    const confirm = this.props.confirm

    return (
      <ul key={count}>
        {
          this.props.messages.map(function(message) {
            count++ 
            
            return (
              <RuleMessage 
                key={count} 
                message={message} 
                type={type}
                confirm={confirm}
              />
            )
          })
        }
      </ul>
    )
  }
}

export default Rule