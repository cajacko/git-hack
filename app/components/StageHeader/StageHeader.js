import React from 'react'

class StageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.handleClick}>{this.props.buttonText}</button>
      </header>
    );
  }
}

export default StageHeader