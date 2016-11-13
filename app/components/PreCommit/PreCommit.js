import React from 'react'
import Rule from '~/components/Rule/Rule'

class PreCommit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.rules) {
      return false
    }

    var count = 0

    return (
      <div>
        <h2>PreCommit</h2>

        {
          this.props.rules.map(function(rule) {
            count++

            return (
              <Rule 
                key={count} 
                messages={rule.messages} 
                type={rule.type}
              />
            )
          })
        }

      </div>
    )
  }
}

export default PreCommit