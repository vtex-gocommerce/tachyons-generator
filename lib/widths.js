const { step, mqSteps } = require('./docs-helper')

const docs = (widths, mqs) => `
/*

  WIDTHS
  Docs: http://tachyons.io/docs/layout/widths/

  Base:
    w = width
    vw = viewport width

  Modifiers
    ${ widths.map((_, idx) => step({ nth: 'width scale' }, idx + 1)).join('\n    ')}

    -10  = literal value 10%
    -15  = literal value 15%
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
    -85  = literal value 85%
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
    .map((width, idx) => `.g-w${idx + 1} { width: ${width}rem; }`)
    .concat([
      '.w-15 {  width:  15%; }',
      '.w-85 {  width:  85%; }'
    ])

  if (!fullConfig.print) {
    widths = widths.concat([
      '.vw-10 {  width:  10vw; }',
      '.vw-20 {  width:  20vw; }',
      '.vw-25 {  width:  25vw; }',
      '.vw-30 {  width:  30vw; }',
      '.vw-33 {  width:  33vw; }',
      '.vw-34 {  width:  34vw; }',
      '.vw-40 {  width:  40vw; }',
      '.vw-50 {  width:  50vw; }',
      '.vw-60 {  width:  60vw; }',
      '.vw-70 {  width:  70vw; }',
      '.vw-75 {  width:  75vw; }',
      '.vw-80 {  width:  80vw; }',
      '.vw-90 {  width:  90vw; }',
      '.vw-100 { width: 100vw; }',
      '.vw-third { width: calc(100vw / 3); }',
      '.vw-two-thirds { width: calc(100vw / 1.5); }',
    ])
  }

  return widths.join('\n')
}


module.exports = {
  css,
  docs,
}
