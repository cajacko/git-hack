const path = window.require('path')
const fs = window.require('fs')

export default function(gitDir, callback) {
  try {
    const configPath = gitDir + '/.gitHack'

    fs.readFile(configPath, 'utf8', function (err,data) {
      if (err) {
        callback(err)
      }

      const json = JSON.parse(data)

      var config = []

      json.rules.forEach(function(rule) {
        var newRule = Object.assign({}, rule)
        newRule.messages = []

        rule.messages.forEach(function(message) {
          newRule.messages.push(json.messages[message])
        })

        config.push(newRule)
      })

      if (config.length) {
        return callback(null, config)
      }

      callback(true)
    });
  } catch(e) {
    if (e) {
      return callback(e)
    }

    callback(true)
  }
}