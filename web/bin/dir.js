'use strict'

var logger = console
var path = require('path')

var commondir = function commondir(basedir, relfiles) {
  /*! Commondir utility
   * https://github.com/substack/node-commondir
   */

  var files = relfiles
    ? relfiles.map(function(r) {
        return path.resolve(basedir, r)
      })
    : basedir

  var res = files.slice(1).reduce(function(ps, file) {
    if (!file.match(/^([A-Za-z]:)?\/|\\/)) {
      throw new Error('relative path without a basedir')
    }

    var xs = file.split(/\/+|\\+/)
    // eslint-disable-next-line curly
    for (var i = 0; ps[i] === xs[i] && i < Math.min(ps.length, xs.length); i++);
    return ps.slice(0, i)
  }, files[0].split(/\/+|\\+/))

  // Windows correctly handles paths with forward-slashes
  return res.length > 1 ? res.join('/') : '/'
}

var rawDirs = process.argv.slice(2).filter(function(item) {
  return item
})

var dirs = rawDirs.map(function(dir) {
  return path.dirname(path.resolve(dir))
})

if (dirs.length > 0) {
  logger.log(commondir(dirs))
}
