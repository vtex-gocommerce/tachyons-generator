const { step, mqSteps } = require('./docs-helper')

const docs = (heights, mqs) => `
/*

  HEIGHTS
  Docs: http://tachyons.io/docs/layout/heights/

  Base:
    h = height
    min-h = min-height
    min-vh = min-height vertical screen height
    vh = vertical screen height

  Modifiers
    ${ heights.map((_, idx) => step({ nth: 'height scale' }, idx + 1)).join('\n    ') }

    -25   = literal value 25%
    -50   = literal value 50%
    -75   = literal value 75%
    -100  = literal value 100%

    -auto = string value of auto
    -inherit = string value of inherit

  Media Query Extensions:
    ${mqSteps(mqs)}

*/`

const css = heights =>
  heights
    .map((height, idx) => `.g-h${idx+1} { height: ${height}rem; }`)
    .join('\n')

module.exports = {
  css,
  docs
}
