// 使用一些小工具
var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var getEntry = require('./get-entry');
var merge = require('webpack-merge')
// 加载 webpack.base.conf
var baseWebpackConfig = require('./webpack.base.conf')
/* 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
/* Friendly-errors-webpack-plugin recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience. */
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 将 Hol-reload 相对路径添加到 webpack.base.conf 的 对应 entry 前
Object
  .keys(baseWebpackConfig.entry)
  .forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
  })
/* 将 webpack.dev.conf.js 的配置和 webpack.base.conf.js 的配置合并 */
module.exports = merge(baseWebpackConfig, {
  module: {
    // 使用 styleLoaders
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    /* definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串 */
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
      'PROJECT': JSON.stringify(config.build.project)
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    /* HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件 */
    new webpack.HotModuleReplacementPlugin(),
    /* 使用了 NoErrorsPlugin 后页面中的报错不会阻塞，但是会在编译结束后报错 */
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'page/index/index.html', template: './src/page/index/index.html', // 模板路径
      chunks: [
        'page/index/index', 'vendor', 'manifest'
      ], // 每个html引用的js模块
      inject: true, // js插入位置
      title: config.build.project,
      desc: config.build.desc,
      keywords: config.build.keywords
    })
  ]
})

// html文件入口 var pages = getEntry('./src/page/**/*.html'); for (var pathname in
// pages) {   // 配置生成的html文件，定义路径等   var conf = {};   console.log(conf);   //
// 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象   module     .exports     .plugins
// .push(new HtmlWebpackPlugin(conf)); }
