import React from 'react'
import {style} from '~/components/File/File.style'
import Text from '~/components/Text/Text'
import Radium from 'radium'

class File extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var status = false

    var fileStyles = [style.file]
    var statusStyles = [style.status]
    var textStyles = [style.fileName]

    if (this.props.fileName == this.props.selectedFile) {
      fileStyles.push(style.active)
      statusStyles.push(style.statusActive)
      textStyles.push(style.fileNameActive)
    }

    if (this.props.status) {
      status = <Text style={statusStyles} text={this.props.status} />
    }

    return (
      <li style={fileStyles}>
        <input 
          type="checkbox" 
          checked={this.props.checked}
          onChange={(event) => this.props.handleInput(this.props.fileName)}
          style={style.checkbox}
        />

        <button style={style.button} onClick={() => this.props.selectFile(this.props.fileName)}>
          {status}

          <Text style={textStyles} text={this.props.fileName} />
        </button>
      </li>
    )
  }
}

export default Radium(File)