import {GIT_DIR} from '~/constants/gitDir'
const exec = window.require('child_process').exec

export default function(gitCommand, callback) {
  var command = 'git -C '
  command += GIT_DIR + ' '
  command += gitCommand

  exec(command, function(error, stdout, stderr) {
    if (error) {
      var errorMessage = 'Error running the command, no message given'

      if (stderr) {
        errorMessage = stderr
      }

      return callback(errorMessage)
    }

    callback(null, stdout)
  })
}