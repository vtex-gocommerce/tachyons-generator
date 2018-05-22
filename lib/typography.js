const { step, mqSteps } = require('./docs-helper')

const docs = (typography, mqs) => `
/*

  TYPOGRAPHY
  http://tachyons.io/docs/typography/measure/

  Measures:
    measure = literal value ${typography.measure[0]}em (base line length)
    measure-narrow = literal value ${typography.measure[1]}em (narrow line length)
    measure-wide = literal value ${typography.measure[2]}em (wide line length)

  Media Query Extensions:
    ${mqSteps(mqs)}

*/`

const css = typography => ``;

module.exports = {
  css,
  docs
}
