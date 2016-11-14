import isRuleValid from '~/helpers/conditionals/isRuleValid'
import ifFileHasExtension from '~/helpers/conditionals/ifFileHasExtension'

export default function(stagedFiles, rules) {
  var error = false
  var applicableRules = []

  rules.forEach(function(rule) {
    if (error || !isRuleValid(rule)) {
      error = true
      return false
    }

    var addRule = false

    stagedFiles.forEach(function(file) {
      if (addRule) {
        return true
      }

      if (ifFileHasExtension(file, rule.extensions)) {
        addRule = true
        return true
      }
    })

    if (addRule) {
      applicableRules.push(rule)
    }
  })

  return {
    err: error,
    rules: applicableRules
  }
}