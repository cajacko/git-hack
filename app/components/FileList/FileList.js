import React from 'react'
import File from '~/components/File/File'
import {style} from '~/components/FileList/FileList.style'

class FileList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var count = 0
    const props = this.props

    return (
      <ul style={style.list}>
        {
          this.props.files.map(function(file) {
            count++;

            return (
              <File 
                key={count} 
                fileName={file.fileName} 
                status={file.status} 
                handleInput={props.checkFile} 
                checked={props.checked}
              />
            )
          })
        }
      </ul>
    );
  }
}

export default FileList