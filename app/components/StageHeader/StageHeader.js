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
    return (
      <header style={style.header}>
        <h2 style={style.title}>
          <Text 
            style={style.titleText} 
            text={this.props.title} 
          />
        </h2>

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