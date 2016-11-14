import React from 'react'
import {style} from '~/components/StageHeader/StageHeader.style'
import Radium from 'radium'
import Text from '~/components/Text/Text'
import Button from '~/components/Button/Button'

class StageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var status = false

    if (!this.props.repo) {
      status = "No valid git repo selected"
    } else if (this.props.loading) {
      // status = "Loading" // TODO: Better way of displaying loading? Maybe only when manually click?
    } else if (this.props.error) {
      status = "Error"
    }

    if (status) {
      status = <Text style={style.status} text={status} />
    }

    return (
      <header style={style.header}>
        <h2 style={style.title}>
          <Text 
            style={style.titleText} 
            text={this.props.title} 
          />
        </h2>

        {status}

        <Button 
          style={style.button} 
          onClick={this.props.handleClick}
        >
          {this.props.buttonText}
        </Button>
      </header>
    );
  }
}

export default Radium(StageHeader)