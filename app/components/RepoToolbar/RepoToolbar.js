import React from 'react'
import Button from '~/components/Button/Button'
import Text from '~/components/Text/Text'
import {style} from '~/components/RepoToolbar/RepoToolbar.style'

class RepoToolbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var select = false

    if (this.props.repos.length) {
      var key = 0

      select = (
        <select 
          style={style.select} 
          defaultValue={this.props.path} 
          onChange={this.props.changeRepo}
        >
          {
            this.props.repos.map(function(repo) {
              key++
              return <option key={key} value={repo}>{repo}</option>
            })
          }
        </select>
      )
    } 

    return (
      <div style={style.container}>
        <Button onClick={this.props.changeDir}>Add Repo</Button>

        {select}

        <Text style={style.path} text={this.props.path} />
        <Button onClick={this.props.refresh}>Refresh</Button>
      </div>
    )
  }
}

export default RepoToolbar