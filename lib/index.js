var _ = require('lodash');
var S = require('string');
var P = require('path');
var extend = require('extend');
var check = require('./helpers/check');

/** JSON INDEX: Metalsmith Plugin to output
  * an index of pages in a site in JSON,
  * useful for JS-based "searching".
  *
  * @param {Object} options (optional)
  * @return {Function}
  */

var settings = ['default', 'indexFile', 'pattern'];

module.exports = function(opts) {

  // Plugin options

  var opts = extend({
    default: 'search.json',
    indexFile: 'search.json'
  }, opts || {});

  var def = opts.default || 'layouts/index.json';
  var pattern = opts.pattern;

  var params = _.omit(opts, settings);

  return function(files, metalsmith, done) {
    var meta = metalsmith.metadata();
    var matches = {};

    Object.keys(files).forEach(function(file){
      if(!check(files, file, pattern, def)) {
        return;
      }

      var data = files[file];
      data.contents = data.contents.toString();
      matches[file] = data;
    });

    done();
  }

}
