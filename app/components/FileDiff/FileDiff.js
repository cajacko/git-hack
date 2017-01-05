import React from 'react'
import {style} from '~/components/FileDiff/FileDiff.style'
import Text from '~/components/Text/Text'
import Radium from 'radium'
import Hunk from '~/components/Hunk/Hunk'

class FileDiff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.hunks) {
      var key = 0

      return (
        <div style={style.container}>
          {
            this.props.hunks.map(function(lines) {
              key++
              return (
                <Hunk
                  key={key}
                  lines={lines}
                />
              )
            })
          }
        </div>
      )
    }

    return <div style={style.container}></div>
  }
}

export default Radium(FileDiff)
