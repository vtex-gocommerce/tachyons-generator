module.exports = (cssObj, config) => {
  return {
    _colors: `
      :root {
        ${cssObj.colors}
      }
    `
  }
}
