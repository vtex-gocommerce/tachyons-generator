'use strict'

const camelcase = require('camelcase')
const buildCss = require('./lib/build.js')
const DEFAULT_CONFIG = require('./config')

const generateDocs = require('./docs')
const generate = require('./lib/generate')
const generateSrc = require('./lib/generateSrc')
const generatePrint = require('./lib/generatePrint')
const assembleCss = require('./lib/assemble-css')

const DEFAULT_OPTIONS = {
  compileVars: true,
  minify: false,
}

module.exports = config => {
  const _config = Object.assign({}, DEFAULT_CONFIG, config)
  const mediaQueries = _config.customMedia

  generator.modules = async (options) => {
    const modules = await generate(_config, mediaQueries)

    return modules
  }

  generator.generate = async (options) => {

    const modules = await generate(_config, mediaQueries)

    const post = await assembleCss(modules, _config)
    const src = generateSrc(modules, _config)

    const min = await buildCss(post, { compileVars: true, minify: true })
    const css = await buildCss(post, { compileVars: true })

    const docs = generateDocs(_config, { modules, min: min.css })

    return {
      post,
      modules,
      css: css.css,
      min: min.css,
      docs,
      src
    }

  }

  generator.generatePrint = async ({ key = 'print', ...options } = {}) => {
    const generatedCss = await generatePrint(_config, key)
    const { css } = await buildCss(generatedCss, options)
    return css
  }

  generator.docs = async () => {
    const modules = await generate(_config, mediaQueries)

    const post = await assembleCss(modules, _config)
    const src = generateSrc(modules, _config)

    const css = await buildCss(post, { compileVars: true, minify: true })

    const docs = generateDocs(_config, { modules, min: css.css })

    return docs
  }

  function generator() {}
  return generator
}
