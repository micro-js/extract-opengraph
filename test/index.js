/**
 * Imports
 */

var $ = require('jsdom').env
var extract = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  $('<html><head><meta property="og:title" content="this is a test" /></head><body></body></html>', function (err, wnd) {
    var result = extract(wnd)

    t.equal(Object.keys(result).length, 1)
    t.equal(result.title, 'this is a test')

    t.end()
  })
})
