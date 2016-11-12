import React from 'react'
import UnstagedContainer from '~/containers/Unstaged/Unstaged'
import StagedContainer from '~/containers/Staged/Staged'
import CommitFormContainer from '~/containers/CommitForm/CommitForm'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.refresh}>Refresh</button>

        <StagedContainer />

        <UnstagedContainer 
          new={this.props.newFiles}
          changed={this.props.changedFiles}
          deleted={this.props.deletedFiles}
        />

        <button onClick={this.props.openCommit}>Commit</button>

        <CommitFormContainer />
      </div>
    )
  }
}

export default App