import React from 'React'

class RuleMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var action = false

    if (this.props.type == 'confirm') {
      // action = <button onClick={this.props.confirm}>Confirm</button>
      action = <button>Confirm</button>
    }

    return (
      <li>
        <span>{this.props.message}</span>
        {action}
      </li>
    )
  }
}

export default RuleMessage