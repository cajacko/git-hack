import React from 'react'
import FileList from '~/components/FileList/FileList'
import StageHeader from '~/components/StageHeader/StageHeader'
import StageModal from '~/components/StageModal/StageModal'
import {style} from '~/components/StageContainer/StageContainer.style'

class StageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.container}>
        <StageHeader
          title={this.props.title}
          buttonText={this.props.buttonText}
          handleClick={this.props.buttonAction}
        />

        <FileList 
          files={this.props.files} 
          checkFile={this.props.checkFile}
        />

        <StageModal
          loading={this.props.loading}
          error={this.props.error}
        />
      </div>
    );
  }
}

export default StageContainer