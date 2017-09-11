var chalk = require('chalk') // 命令行显示美化
var config = require('../config')
var replace = require("replace");
var glob = require("glob")

module.exports = function () {
  glob(`${config.build.assetsRoot}/page/**/*.vm`, {}, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    replace({
      regex: "_STATIC_DOMAIN_PLACEHOLDER_",
      replacement: "${staticServer}/${partnerName}",
      // paths: [`${config.build.assetsRoot}/static/js`],
      paths: files,
      // include: "manifest.*.js",
      silent: true,
    });
    console.log(chalk.green(
      '  replace vm finished'
    ));
  })

  glob(`${config.build.assetsRoot}/static/js/**/manifest.*.js`, {}, function (er, files) {
    replace({
      regex: '"_STATIC_DOMAIN_PLACEHOLDER_"',
      replacement: "window.STATIC_DOMAIN",
      paths: files,
      silent: true,
    });
    console.log(chalk.green(
      '  replace js finished'
    ));
  })

  function replaceCss(len) {
    let relativePath = '';
    let relativeString = '*/';
    let cssRelativePath = '../';
    let cssRelativeString = '../';

    for (let i = 0; i < len; i++) {
      relativePath += relativeString;
      cssRelativePath += cssRelativeString
    }
    // console.log('relativePath', relativePath);
    // console.log('cssRelativePath', cssRelativePath);
    glob(`${config.build.assetsRoot}/static/${relativePath}*.css`, {}, function (er, files) {
      // console.log(len, files);
      replace({
        regex: "_STATIC_DOMAIN_PLACEHOLDER_",
        replacement: cssRelativePath,
        paths: files,
        silent: true,
      });
      if (len === 12 - 1) {
        console.log(chalk.green(
          '  replace css finished'
        ));
      }
    })
  }

  for (let i = 0; i < 12; i++) {
    replaceCss(i);
  }
}
