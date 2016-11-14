import React from 'react'

class StageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var modal = false

    if (!this.props.repo) {
      modal = <div>No valid git repo selected</div>
    } else if (this.props.loading) {
      modal = <div>Loading</div>
    } else if (this.props.error) {
      modal = <div>Error</div>
    } else {
      return false
    }

    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default StageModal