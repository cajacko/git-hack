import React from 'react'
import Rule from '~/components/Rule/Rule'
import {style} from '~/components/PreCommit/PreCommit.style'

class PreCommit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.rules) {
      return false
    }

    var ruleIndex = -1
    const props = this.props

    return (
      <div style={style.container}>
        {
          this.props.rules.map(function(rule) {
            ruleIndex++

            return (
              <Rule 
                key={ruleIndex} 
                ruleIndex={ruleIndex}
                messages={rule.messages} 
                type={rule.type}
                confirmMessage={props.confirmMessage}
                confirmRule={props.confirmRule}
                validated={rule.validated}
              />
            )
          })
        }

      </div>
    )
  }
}

export default PreCommit