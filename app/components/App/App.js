import React from 'react'
import UnstagedContainer from '~/containers/Unstaged/Unstaged'
import StagedContainer from '~/containers/Staged/Staged'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.handleClick()}
        >Refresh</button>

        <StagedContainer

        />

        <UnstagedContainer 
          new={this.props.newFiles}
          changed={this.props.changedFiles}
          deleted={this.props.deletedFiles}
        />
      </div>
    )
  }
}

export default App