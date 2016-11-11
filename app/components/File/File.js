import React from 'react'

class File extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input 
          type="checkbox" 
          checked={this.props.checked}
          onChange={(event) => this.props.handleInput(this.props.status, this.props.fileName, event.target.checked)}
        />
        <span>{this.props.status}</span>
        <span>{this.props.fileName}</span>
      </li>
    )
  }
}

export default File