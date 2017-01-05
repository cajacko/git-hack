import React from 'react'
import {style} from '~/components/Hunk/Hunk.style'
import Text from '~/components/Text/Text'
import Radium from 'radium'

class Hunk extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var message = false
    var icons = false
    var lineNumbers = false

    if (this.props.lines) {
      var lines = this.props.lines
      console.log(lines)
      var key = 0

      message = (
        <ul style={style.lines}>
          {
            lines.map(function(line) {
              key++
              var styles = [style.line, style.lineMessage]

              switch(line.type) {
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
              var styles = [style.line]

              switch(line.type) {
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
                  <Text text={line.type} style={style.icon} />
                </li>
              )
            })
          }
        </ul>
      )

      lineNumbers = (
        <ul style={style.lines}>
          {
            lines.map(function(line) {
              key++

              return (
                <li key={key} style={[style.line, style.lineNumer]}>
                  <Text text={line.originalLine} style={style.lineNumberText} />
                  <Text text={line.modifiedLine} style={style.lineNumberText} />
                </li>
              )
            })
          }
        </ul>
      )
    }

    return (
      <div style={style.container}>
        <div style={style.lineNumberTable}>
          <div style={style.row}>
            <div style={style.cell}>
              {lineNumbers}
            </div>
          </div>
        </div>
        <div style={style.file}>
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
      </div>
    );
  }
}

export default Radium(Hunk)
