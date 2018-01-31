'use strict'

const camelcase = require('camelcase')
const buildCss = require('tachyons-build-css')

const DEFAULT_CONFIG = require('./config')

const generateDocs = require('./docs')
const generate = require('./lib/generate')
const assembleCss = require('./lib/assemble-css')

module.exports = config => {
  const _config = Object.assign({}, DEFAULT_CONFIG, config)
  const mediaQueries = _config.customMedia

  generator.generate = async () => {
    const modules = await generate(_config, mediaQueries)

    const post = await assembleCss(modules, _config)

    const min = await buildCss(post, { minify: true })
    const css = await buildCss(post)

    const docs = generateDocs(_config, { modules, min: min.css })

    return {
      post,
      modules,
      css: css.css,
      min: min.css,
      docs
    }
  }

  function generator() {}
  return generator
}
