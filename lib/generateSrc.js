const buildCss = require('tachyons-build-css')

writeColorsCss = colors => {
  let css = '\n'

  for (const [key, value] of Object.entries(colors)) {
    css += `--${key}: ${value};\n`
  }

  return `:root {
  ${css}
}`
}

writeSpacingCss = spacing => {
  let css = '\n'

  for (const [key, value] of Object.entries(spacing)) {
    css += `--spacing-${key}: ${value > 0 ? value + 'rem' : value};\n`
  }

  return `:root {
  ${css}
}`
}

module.exports = (cssObj, config) => {
  const colors = writeColorsCss(config.colors)
  const spacing = writeSpacingCss(config.spacing)

  return {
    _colors: colors,
    // '_font-weight': cssObj.fontWeight,
    // '_border-radius': cssObj.borderRadius,
    // '_border-widths': cssObj.borderWidths,
    '_box-shadow': cssObj.boxShadow,
    _heights: cssObj.heights,
    '_max-widths': cssObj.maxWidths,
    _opacity: cssObj.opacity,
    '_type-scale': cssObj.typeScale,
    _spacing: spacing,
    _widths: cssObj.widths
  }
}
