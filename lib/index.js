var S = require('string');
var P = require('path');
var extend = require('extend');

/** JSON INDEX: Metalsmith Plugin to output
  * an index of pages in a site in JSON,
  * useful for JS-based "searching".
  *
  * @param {Object} options (optional)
  * @return {Function}
  */

module.exports = function(opts) {

  // Plugin options

  var opts = extend({
    indexFile: 'search.json'
  }, opts || {})



}
