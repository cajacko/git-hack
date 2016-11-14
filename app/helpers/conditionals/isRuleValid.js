import {ruleTypes} from '~/constants/ruleTypes'

export default function(rule) {
  if (!rule.extensions) {
    return false
  }

  if (!Array.isArray(rule.extensions)) {
    return false
  }

  if (!rule.extensions.length) {
    return false
  }

  if (!rule.messages) {
    return false
  }

  if (!Array.isArray(rule.messages)) {
    return false
  }

  if (!rule.messages.length) {
    return false
  }

  if (!rule.type) {
    return false
  }

  if (ruleTypes.indexOf(rule.type) == -1) {
    return false
  }

  return true
}
