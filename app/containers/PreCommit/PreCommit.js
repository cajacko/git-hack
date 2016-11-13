import React from 'react'
import {connect} from 'react-redux'
import PreCommit from '~/components/PreCommit/PreCommit'
import {showModal} from '~/actions/modal'
import * as modalRoutes from '~/constants/modalRoutes'

class PreCommitContainer extends React.Component {
  constructor(props) {
    super(props)

    const rules = this.setupInvalidRules(this.props.rules)

    this.state = {
      rules: rules
    }

    this.confirmMessage = this.confirmMessage.bind(this)
    this.confirmRule = this.confirmRule.bind(this)
    this.areAllRulesValid = this.areAllRulesValid.bind(this)
  }

  setupInvalidRules(rules) {
    var rulesWithValidation = []

    rules.forEach(function(rule) {
      var ruleWithValidation = Object.assign({}, rule)

      ruleWithValidation.validated = false
      ruleWithValidation.messages = []

      rule.messages.forEach(function(message) {
        ruleWithValidation.messages.push({
          message: message,
          validated: false
        })
      })

      rulesWithValidation.push(ruleWithValidation)
    })

    return rulesWithValidation
  }

  areAllRulesValid(rules) {
    var rulesValid = true

    rules.forEach(function(rule) {
      if (!rule.validated) {
        rulesValid = false
      }
    })

    if (rulesValid) {
      this.props.dispatch(showModal(modalRoutes.COMMIT, false))
    } 
  }

  confirmMessage(ruleIndex, messageIndex) {
    var rules = Object.assign([], this.state.rules)

    rules[ruleIndex].messages[messageIndex].validated = true

    var ruleCompleted = true

    rules[ruleIndex].messages.forEach(function(message) {
      if (!message.validated) {
        ruleCompleted = false
      }
    })

    if (ruleCompleted) {
      rules[ruleIndex].validated = true
    }

    this.setState({
      rules: rules
    })

    this.areAllRulesValid(rules)
  }

  confirmRule(ruleIndex) {
    var rules = Object.assign([], this.state.rules)

    rules[ruleIndex].validated = true

    this.setState({
      rules: rules
    })

    this.areAllRulesValid(rules)
  }

  render() {
    return (
      <PreCommit
        rules={this.state.rules} 
        confirmMessage={this.confirmMessage}
        confirmRule={this.confirmRule}
      />
    )
  }
}

export default connect()(PreCommitContainer)