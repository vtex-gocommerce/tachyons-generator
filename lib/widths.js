const { step, mqSteps } = require('./docs-helper')

const docs = (widths, mqs) => `
/*

  WIDTHS
  Docs: http://tachyons.io/docs/layout/widths/

  Base:
    w = width

  Modifiers
    ${ widths.map((_, idx) => step({ nth: 'width scale' }, idx + 1)).join('\n    ') }

    -10  = literal value 10%
    -20  = literal value 20%
    -25  = literal value 25%
    -30  = literal value 30%
    -33  = literal value 33%
    -34  = literal value 34%
    -40  = literal value 40%
    -50  = literal value 50%
    -60  = literal value 60%
    -70  = literal value 70%
    -75  = literal value 75%
    -80  = literal value 80%
    -90  = literal value 90%
    -100 = literal value 100%

    -third      = 100% / 3 (Not supported in opera mini or IE8)
    -two-thirds = 100% / 1.5 (Not supported in opera mini or IE8)

    -auto       = string value auto

  Media Query Extensions:
    ${mqSteps(mqs)}

*/`

const css = widths =>
  widths
    .map((width, idx) => `.g-w${idx+1} { width: ${width}rem; }`)
    .join('\n')

module.exports = {
  css,
  docs
}
