/**
 * 需要配置的入口页面
 */

var getEntry = require('./get-entry');
var pages = getEntry('./src/page/**/*.html');
let result = [];

for (var key in pages) {
  result.push({
    name: key.substr(4, key.length),
    url: pages[key].substr(5, pages[key].length),
    compile: false,
    entryName: key
  });
}

result = result.concat([{
  name: '/',
  url: '/page/index/index.html',
  compile: true,
  entryName: 'page/index/index'
}, {
  name: '/index',
  url: '/page/index/index.html',
  compile: true,
  entryName: 'page/index/index'
}, {
  name: '/uikit',
  url: '/page/uikit/index.html',
  compile: false,
  entryName: 'page/uikit/index'
}, {
  name: '/list',
  url: '/page/list/list.html',
  compile: false,
  entryName: 'page/list/list'
}, {
  name: '/404',
  url: '/page/static/404.html',
  compile: false,
  entryName: 'page/static/404'
}]);

module.exports = result;
