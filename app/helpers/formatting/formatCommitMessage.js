export default function(args) {
  var message = '';

  if (args.type && args.type.length) {
    message += args.type 
  } else {
    message += 'General'
  }

  message += ': '

  if (args.summary && args.summary.length) {
    message += args.summary
  } else {
    message += 'No summary'
  }

  message += '\n\n'

  if (args.description && args.description.length) {
    message += args.description
    message += '\n\n'
  }

  if (args.issueId && args.issueId.length) {
    message += 'Issue ID: ' + args.issueId
  }

  return message
}