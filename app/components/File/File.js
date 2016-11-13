import React from 'react'
import {style} from '~/components/File/File.style'
import Text from '~/components/Text/Text'

class File extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var status = false

    if (this.props.status) {
      status = <Text style={style.status} text={this.props.status} />
    }

    return (
      <li style={style.file}>
        <input 
          type="checkbox" 
          checked={false}
          onChange={(event) => this.props.handleInput(this.props.fileName)}
        />

        {status}

        <Text style={style.fileName} text={this.props.fileName} />
      </li>
    )
  }
}

export default File