require('./check-versions')()
require('shelljs/global')

process.env.NODE_ENV = 'production'

var ora = require('ora') // 一个很好看的 loading 插件
var rm = require('rimraf') // 删除文件工具
var path = require('path')
var chalk = require('chalk') // 命令行显示美化
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var replaceString = require('./replace')

var spinner = ora('building for production...') // 使用 ora 打印出 loading + log
spinner.start() // 开始 loading 动画

// 删除打包路径下的静态资源
rm(`${config.build.assetsRoot}/{page,static}/!(.svn)`, err => {
  if (err) throw err
  // var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
  // mkdir(`dist/static/images`);
  // mkdir(`dist/static/images/assets`);
  // mkdir(`dist/static/images/assets/merchant`);
  // cp('-R', 'src/assets/images/merchant/favicon.ico', `${assetsPath}/images/assets/merchant`)
  // 开始 webpack 的编译
  webpack(webpackConfig, function (err, stats) {
    // 编译成功的回调函数
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
    replaceString();
  })
})
