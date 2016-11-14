import {showModal} from '~/actions/modal'
import getGitHackRules from '~/helpers/getGitHackRules'
import getApplicableRules from '~/helpers/getApplicableRules'
import * as modalRoutes from '~/constants/modalRoutes'

export function preCommit(stagedFiles) {
  return dispatch => {
    dispatch({
      type: 'checking rules'
    })

    getGitHackRules(function(err, rules) {
      if (err) {
        return dispatch({
          type: 'Error getting rules'
        })
      }

      if (!rules) {
        return dispatch(showModal(modalRoutes.COMMIT))
      }

      const applicableRules = getApplicableRules(stagedFiles, rules)

      if (applicableRules.err) {
        return dispatch({
          type: 'Error validating rules'
        })
      }

      if (applicableRules.rules && applicableRules.rules.length) {
        return dispatch(showModal(modalRoutes.PRE_COMMIT, applicableRules.rules))
      } else {
        return dispatch(showModal(modalRoutes.COMMIT))
      }
    })
  }
}