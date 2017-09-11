var glob = require('glob')
var path = require('path')

function getEntry(globPath, dirPath) {
  var entries = {},
    basename, tmp, pathname;

  dirPath = dirPath || './src/'

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.replace(dirPath, '').split('/');
    tmp = tmp.splice(0, tmp.length - 1);
    tmp.push(basename);
    pathname = tmp.join('/'); // 正确输出js和html的路径
    entries[pathname] = entry;
  });

  return entries;
}
module.exports = getEntry;
