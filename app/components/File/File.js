import React from 'react'
import {style} from '~/components/File/File.style'

class File extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var status = false

    if (this.props.status) {
      status = <span style={style.status}>{this.props.status}</span>
    }

    return (
      <li>
        <input 
          type="checkbox" 
          checked={false}
          onChange={(event) => this.props.handleInput(this.props.fileName)}
        />

        {status}

        <span>{this.props.fileName}</span>
      </li>
    )
  }
}

export default File