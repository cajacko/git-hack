import React from 'react'
import {style} from '~/components/FileDiff/FileDiff.style'
import diffToJsx from '~/helpers/formatting/diffToJsx'
import Text from '~/components/Text/Text'
import Radium from 'radium'

class FileDiff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var message = false

    if (this.props.message) {
      var lines = diffToJsx(this.props.message)
      var key = 0

      message = (
        <ul style={style.lines}>
          {
            lines.map(function(line) {
              key++
              var styles = [style.line]

              switch(line.firstCharacter) {
                case '+':
                  styles.push(style.add)
                  break
                case '-':
                  styles.push(style.remove)
                  break
              }

              return (
                <li key={key} style={styles}>
                  <Text text={line.firstCharacter} style={style.icon} />
                  <Text text={line.text} style={style.text} />
                </li>
              )
            })
          }
        </ul>
      )
    }

    return (
      <div style={style.container}>
        {message}
      </div>
    );
  }
}

export default Radium(FileDiff)