import React from 'react'
import Button from '~/components/Button/Button'
import Text from '~/components/Text/Text'
import {style} from '~/components/RepoToolbar/RepoToolbar.style'

class RepoToolbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={style.container}>
        <Button onClick={this.props.changeDir} style={style.button}>Change Repo</Button>
        <Text style={style.path} text={this.props.path} />
      </div>
    )
  }
}

export default RepoToolbar