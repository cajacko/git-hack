export default function(file, extensions) {
  const parts = file.split('.')

  if (!parts.length || parts.length < 2) {
    return false
  }

  const extension = parts[parts.length - 1]

  if (extensions.indexOf(extension) != -1) {
    return true
  }

  return false
}