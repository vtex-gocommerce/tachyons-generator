const { getColor } = require('./config-utils')
const { step, mqSteps } = require('./docs-helper')

const docs = () =>
  `
/*

    NESTED
    Tachyons module for styling nested elements
    that are generated by a cms.

*/
`

const css = (nested, fullConfig) => {
  return `
.nested-copy-line-height p,
.nested-copy-line-height ul,
.nested-copy-line-height ol {
  line-height: 1.5;
}

.nested-headline-line-height h1,
.nested-headline-line-height h2,
.nested-headline-line-height h3,
.nested-headline-line-height h4,
.nested-headline-line-height h5,
.nested-headline-line-height h6 {
  line-height: 1.25;
}

.nested-list-reset ul,
.nested-list-reset ol {
  padding-left: 0;
  margin-left: 0;
  list-style-type: none;
}

.nested-copy-indent p+p {
  text-indent: 1em;
  margin-top: 0;
  margin-bottom: 0;
}

.nested-copy-separator p+p {
  margin-top: 1.5em;
}

.nested-img img {
  width: 100%;
  max-width: 100%;
  display: block;
}

.nested-links a {
  color: ${getColor(
    fullConfig,
    nested && nested.links && nested.links.length > 0 && nested.links[0],
    'blue'
  )};
  transition: color .15s ease-in;
}

.nested-links a:hover,
.nested-links a:focus {
  color: ${getColor(
    fullConfig,
    nested && nested.links && nested.links.length > 0 && nested.links[1],
    'light-blue'
  )};
  transition: color .15s ease-in;
}
`
}

module.exports = {
  css,
  docs,
}