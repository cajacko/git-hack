import HtmlToReact from 'html-to-react';
const HtmlToReactParser = HtmlToReact.Parser

export default function(message) { 
  var parts = message
  var lines = parts.split(/(?:\r\n|\r|\n)/g);
  lines.splice(0, 5)

  var lineObjects = []

  lines.forEach(function(line) {
    
    var firstCharacter = line.charAt(0)
    line = line.substring(1);

    lineObjects.push({
      text: line,
      firstCharacter: firstCharacter
    })
  })

  return lineObjects
}