export default function(type, files) {
  if (!files) {
    return false
  }

  if (!files[type]) {
    return false
  }

  if (!Array.isArray(files[type])) {
    return false
  }

  if (!files[type].length) {
    return []
  }

  return files[type]
}