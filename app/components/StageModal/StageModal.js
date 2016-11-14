import React from 'react'
import {style} from '~/components/StageModal/StageModal.style'
import Text from '~/components/Text/Text'

class StageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var text = false

    if (!this.props.repo) {
      text = <div>No valid git repo selected</div>
    } else if (this.props.loading) {
      text = <div>Loading</div>
    } else if (this.props.error) {
      text = <div>Error</div>
    } else {
      return false
    }

    return (
      <div style={style.container}>
        <Text text={text} />
      </div>
    );
  }
}

export default StageModal