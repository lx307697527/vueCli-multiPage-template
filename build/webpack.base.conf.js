// 使用 NodeJS 自带的文件路径插件
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var getEntry = require('./get-entry');

// node环境中获取文件绝对路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
// 获取js文件入口
var entries = getEntry('./src/page/**/*.js');

module.exports = {
  entry: {
    'page/index/index': ['./src/page/index/index.js']
  }, // 编译文件入口
  output: {
    path: config.build.assetsRoot, // 编译输出的静态资源根路径
    filename: '[name].js', // 编译输出的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? // 正式发布环境下编译输出的上线路径的根路径
      config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [
      '.js', '.vue', '.json'
    ], // 自动补全的扩展名
    alias: { // 默认路径代理，例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
      'vue$': 'vue/dist/vue.esm.js',
      'element-ui': resolve('src/components/lib/element-ui'),
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'data': resolve('src/data'),
      'router': resolve('src/router')
    }
  },
  module: {
    // 需要处理的文件及使用的 loader
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(mp4|swf)(\?.*)?$/,
        loader: 'file-loader'
      }
    ]
  }
}
