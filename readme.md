# tachyons-generator [![Build Status](https://secure.travis-ci.org/tachyons-css/tachyons-generator.svg?branch=master)](https://travis-ci.org/tachyons-css/tachyons-generator) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This repo is currently under active development.
It isn't currently ready for production, but we hope to have a beta out soon.
Pull requests and issues welcome!
If you'd like to lend a hand but don't know where to start please ping @johnotander :heart:.

Generate a custom Tachyons build with a json configuration.
Inspiration from [this tachyons issue](https://github.com/tachyons-css/tachyons/issues/224).

## Installation

```bash
npm i -S tachyons-generator
```

Or, use a curl request to generate css and docs

```sh
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"typeScale": [5,4,3,2,1,0.5] }' \
     https://tachyons.pub
```

or post the config.json file

```sh
curl -X POST \
     -H "Content-Type: application/json" \
     -d @config.json \
     https://tachyons.pub
```

## Usage
This will generate an index.html file with the generated style guide as well as a static css file.

```javascript
const fs = require('fs')

const tachyonsGenerator = require('tachyons-generator')
const config = require('./config.json')

const generate = async () => {
  const tachy = tachyonsGenerator(config)

  // Minify CSS
  const out1 = await tachy.generate({ minify: true })
  fs.writeFileSync('tachyons.min.css', out1)

  // Keep colors as CSS variables
  const out2 = await tachy.generate({ compileVars: false })
  fs.writeFileSync('tachyons-with-vars.css', out2)

  // Generate docs website
  const docs = await tachy.docs()
  fs.writeFileSync('index.html', docs)
}

generate()
```

#### Example config

```js
{
  "typeScale": [
    3, 2.25, 1.5, 1.25, 1, 0.875
  ],
  "spacing": [2, 4, 6, 8, 10, 12, 14],
  "lineHeight": [1, 1.25, 1.5],
  "customMedia": [
    { "m": 48 },
    { "l": 64 },
    { "xl": 128 }
  ],
  "colors": {
    "black": "#000",
    "near-black": "#111",
    "dark-gray": "#333",
    "mid-gray": "#555",
    "gray": "#777",
    "silver": "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    "white": "#fff",
    "dark-red": "#f00008",
    "red": "#ff3223",
    "orange": "#f3a801",
    "gold": "#f2c800",
    "yellow": "#ffde37",
    "purple": "#7d5da9",
    "light-purple": "#8d4f92",
    "hot-pink": "#d62288",
    "dark-pink": "#c64774",
    "pink": "#f49cc8",
    "dark-green": "#006C71",
    "green": "#41D69F",
    "navy": "#001b44",
    "dark-blue": "#00449e",
    "blue": "#357edd",
    "light-blue": "#96ccff",
    "lightest-blue": "#cdecff",
    "washed-blue": "#f6fffe",
    "washed-green": "#e8fdf5",
    "washed-yellow": "#fff8d5",
    "light-pink": "#efa4b8",
    "light-yellow": "#f3dd70",
    "light-red": "#ffd3c0"
  },
  "nested": {
    "links": ["blue", "light-blue"]
  },
  "borderWidths": [0, 0.125, 0.25, 0.5, 1, 2],
  "borderRadius": [0, 0.125, 0.25, 0.5, 1],
  "widths": [1, 2, 4, 8, 16],
  "maxWidths": [1, 2, 4, 8, 16, 32, 48, 64, 96],
  "heights": [1, 2, 4, 8, 16],
  "tables": {
    "striped": ["light-silver", "moon-gray", "light-gray", "near-white"],
    "stripe": ["light", "dark"]
  },
  "typography":{
    "measure": [30, 34, 20]
  },
  "opacity": [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05, 0.025, 0]
}
```


#### Other configs

#### `namespace`

You can pass a `namespace` property to namespace the CSS generated (including the normalize module).

Example:

```json
 "namespace": "my-namespace",
```

Will generate the following CSS:

```css
.my-namespace .bg-black { background-color: #000; }
```


#### `skipModules`

You can also omit the partials you don't need with the key `skipModules`, for example if you don't want normalize.css in the bundle you can do:

```js
{
  "skipModules": ["normalize"]
}
```

#### Example npm commands
You can automate the generation and publishing using something like this pattern
```
  "start": "npm run build && npm run publish",
  "build": "node index.js",
  "publish": "curl -X POST -H 'Content-Type: application/json' -d @config.json  https://tachyons.pub"
```


## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
