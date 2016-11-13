import React from 'react'
import {style} from '~/components/Button/Button.style'
import Radium from 'radium'
import combineStyles from '~/helpers/combineStyles'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick() {
    console.log('No button action, please define an action')
  }

  render() {
    var styles = [style.button]

    if (this.props.buttonType) {
      styles.push(style.grey)
    }
    
    styles = combineStyles(styles, this.props.style)

    var onClick = this.onClick

    if (this.props.onClick) {
      onClick = this.props.onClick
    }

    return (
      <button 
        onClick={onClick} 
        style={styles}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Radium(Button)