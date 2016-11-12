import React from 'react'
import File from '~/components/File/File'

class FileList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var count = 0
    const props = this.props

    return (
      <ul>
        {
          this.props.files.map(function(file) {
            count++;

            return (
              <File 
                key={count} 
                fileName={file.fileName} 
                status={file.status} 
                handleInput={props.checkFile} 
              />
            )
          })
        }
      </ul>
    );
  }
}

export default FileList