/**
 * Imports
 */

var reduce = require('@f/reduce-array')

/**
 * Expose extractOpengraph
 */

module.exports = extractOpengraph

/**
 * extractOpengraph
 */

function extractOpengraph (node, prefix) {
  prefix = prefix || 'og:'
  if (node.document) node = node.document

  return reduce(function (acc, node) {
    var name = node.getAttribute('property')
    if (name && name.indexOf(prefix) === 0) {
      acc[name.slice(prefix.length)] = node.getAttribute('content')
    }

    return acc
  }, {}, node.querySelectorAll('meta'))
}
