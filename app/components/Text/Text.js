import React from 'react'
import {style} from '~/components/Text/Text.style'
import Radium from 'radium'
import combineStyles from '~/helpers/combineStyles'

class Text extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = combineStyles(style, this.props.style)

    return <span style={styles} >{this.props.text}</span>
  }
}

export default Radium(Text)