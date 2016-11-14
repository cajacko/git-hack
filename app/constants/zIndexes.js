const order = [
  'MODAL',
  'MODAL_BACKGROUND',
  'MODAL_CONTENT'
]

var indexes = {}

order.forEach(function(key, zIndex) {
  zIndex++
  indexes[key] = zIndex * 10
})

export const Z_INDEX = indexes