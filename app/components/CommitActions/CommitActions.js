import React from 'react'
import Button from '~/components/Button/Button'
import {style} from '~/components/CommitActions/CommitActions.style'

class CommitActions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={style.container}>
        <Button style={style.commit} onClick={this.props.validate}>Commit</Button>
        
        <div style={style.wipContainer}>
          <Button style={style.wipButton} onClick={this.props.commitWip}>Commit WIP</Button>
          <Button style={style.wipHelp}>?</Button>
        </div>
      </div>
    )
  }
}

export default CommitActions