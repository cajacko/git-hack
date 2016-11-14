export default function(response) {
  var files = []
  var regex = /(\r\n|\n|\r)/gm

  const parts = response.split(regex)

  parts.forEach(function(file) {
    if (file && file.length && !file.match(regex)) {
      files.push(file)
    }
  })

  return files
}