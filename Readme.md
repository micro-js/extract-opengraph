
# extract-opengraph

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Extract opengraph metadata from a DOM or dom-like thing (e.g. jsdom) into an object of key-value pairs

## Installation

    $ npm install @f/extract-opengraph

## Usage

```js
var extract = require('@f/extract-opengraph')
var jsdom = require('jsdom')

jsdom.env('https://www.instagram.com/p/2VBMcXMYxV/', function (err, wnd) {
  var meta = extract(wnd)

  /* {
    site_name: 'Instagram',
    title: 'Elliot on Instagram: “📷@oclaire #dogsofinstagram #schnauzer #minischnauzer”',
    image: 'https://scontent.cdninstagram.com/t51.2885-15/e15/11232648_1432672043716347_905139025_n.jpg?ig_cache_key=OTc4NjkzNzQ3MTU3MDc3MDc3.2',
    description: '“📷@oclaire #dogsofinstagram #schnauzer #minischnauzer”',
    url: 'https://www.instagram.com/p/2VBMcXMYxV/',
    type: 'instapp:photo'
  } */
})

```

## API

### extractOpengraph(node, prefix)

- `node` - The node (or window element) you want to extract OG metadata from.
- `prefix` - Optional. Defaults to 'og:'. If you want to extract metadata with a prefix other than `og:`, you may specify it here.

**Returns:** An object containing key value pairs extracted from your meta tags that match the prefix, with the `property` attributes as the keys (with the prefix stripped) and the `content` attributes as the values.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/extract-opengraph.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/extract-opengraph
[git-image]: https://img.shields.io/github/tag/micro-js/extract-opengraph.svg
[git-url]: https://github.com/micro-js/extract-opengraph
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/extract-opengraph.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/extract-opengraph
