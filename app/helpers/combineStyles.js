export default function(defaultStyle, additionalStyles) {
  var styles

  if (additionalStyles && Array.isArray(additionalStyles)) {
    styles = additionalStyles
  } else if (additionalStyles) {
    styles = [additionalStyles]
  } else {
    styles = []
  }

  styles.unshift(defaultStyle)

  return styles
}