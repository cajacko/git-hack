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
    var icons = false

    if (this.props.message) {
      var lines = diffToJsx(this.props.message)
      var key = 0

      message = (
        <ul style={style.lines}>
          {
            lines.map(function(line) {
              key++
              var styles = [style.line, style.lineMessage]

              switch(line.firstCharacter) {
                case '+':
                  styles.push(style.add)
                  styles.push(style.addMessage)
                  break
                case '-':
                  styles.push(style.remove)
                  styles.push(style.removeMessage)
                  break
              }

              return (
                <li key={key} style={styles}>
                  <Text text={line.text} style={style.text} />
                </li>
              )
            })
          }
        </ul>
      )

      icons = (
        <ul style={style.lines}>
          {
            lines.map(function(line) {
              key++
              var styles = [style.line, style.lineIcon]

              switch(line.firstCharacter) {
                case '+':
                  styles.push(style.add)
                  styles.push(style.addIcon)
                  break
                case '-':
                  styles.push(style.remove)
                  styles.push(style.removeIcon)
                  break
              }

              return (
                <li key={key} style={styles}>
                  <Text text={line.firstCharacter} style={style.icon} />
                </li>
              )
            })
          }
        </ul>
      )
    }

    return (
      <div style={style.container}>
        <div style={style.table}>
          <div style={style.row}>
            <div style={style.cell}>
              {icons}
            </div>
            <div style={[style.cell, style.messageCell]}>
              {message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(FileDiff)
