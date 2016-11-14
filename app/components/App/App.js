import React from 'react'
import UnstagedContainer from '~/containers/Unstaged/Unstaged'
import StagedContainer from '~/containers/Staged/Staged'
import CommitFormContainer from '~/containers/CommitForm/CommitForm'
import PreCommitContainer from '~/containers/PreCommit/PreCommit'
import CommitActionsContainer from '~/containers/CommitActions/CommitActions'
import {style} from '~/components/App/App.style'
import ModalContainer from '~/containers/Modal/Modal'
import RepoToolbar from '~/containers/RepoToolbar/RepoToolbar'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={style.container}>
        <RepoToolbar />

        <StagedContainer />

        <UnstagedContainer 
          new={this.props.newFiles}
          changed={this.props.changedFiles}
          deleted={this.props.deletedFiles}
        />

        <CommitActionsContainer />

        <ModalContainer />
      </div>
    )
  }
}

export default App