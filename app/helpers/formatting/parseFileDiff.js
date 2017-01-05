function getLineNumbers(gitResponseLine) {
  const re = /@@ ([+-])([0-9]*),([0-9]*) ([+-])([0-9]*),([0-9]*)/g
  const match = re.exec(gitResponseLine)

  return {
    original: {
      sign: match[1],
      startingLine: match[2],
      lineCount: match[3]
    },
    modified: {
      sign: match[4],
      startingLine: match[5],
      lineCount: match[6]
    }
  }
}

export default function(gitResponse) {
  var parts = gitResponse
  var lines = parts.split(/(?:\r\n|\r|\n)/g)
  lines.splice(0, 4)

  var hunks = []
  var hunk = []
  var start = true
  var originalLineCount = 0
  var modifiedLineCount = 0

  lines.forEach(function(line) {
    var firstCharacter = line.charAt(0)

    if (firstCharacter === '@') {
      if (!start) {
          hunks.push(hunk)
          hunk = []
      }

      const lineCounts = getLineNumbers(line)
      originalLineCount = lineCounts.original.startingLine - 1
      modifiedLineCount = lineCounts.modified.startingLine - 1
    } else {
      var lineObject = {}

      if (firstCharacter === '+' || firstCharacter === '-') {
        lineObject.type = firstCharacter
      } else {
        lineObject.type = false
      }

      var originalLine = false
      var modifiedLine = false

      if (firstCharacter === '-') {
        originalLineCount++
        originalLine = originalLineCount
      } else if (firstCharacter === '+') {
        modifiedLineCount++
        modifiedLine = modifiedLineCount
      } else {
        originalLineCount++
        modifiedLineCount++
        originalLine = originalLineCount
        modifiedLine = modifiedLineCount
      }

      lineObject.originalLine = originalLine
      lineObject.modifiedLine = modifiedLine
      lineObject.text = line.substring(1)
      hunk.push(lineObject)
    }

    start = false
  })

  hunks.push(hunk)

  return hunks
}
