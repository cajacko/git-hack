import HtmlToReact from 'html-to-react';
const HtmlToReactParser = HtmlToReact.Parser

export default function(message) {
  var html = message

  html = html.replace(/(?:\r\n|\r|\n)/g, '<br />');

  html = '<div>' + html + '</div>'

  const htmlToReactParser = new HtmlToReactParser()
  const jsx = htmlToReactParser.parse(html)

  if (jsx) {
    return jsx
  }

  return false
}