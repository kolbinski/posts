var webpack = require('webpack')
var path = require('path')

var entry = require('./entry.js')
var outputPath = require('../output-path.js')
var publicPath = require('../public-path.js')
var devtool = require('../devtool.js')
var loaders = require('./loaders.js')
var plugins = require('./plugins.js')
var postcss = require('../postcss.js')

var isProduction = process.env.NODE_ENV === 'production'
var isDevel = process.env.APP_ENV === 'devel'

module.exports = {
  context: path.join(__dirname, '../..', 'src'),
  entry: entry(isProduction),
  output: {
    path: outputPath(isProduction, 'dist/static'),
    filename: '[name].js',
    publicPath: publicPath(isProduction)
  },
  devtool: devtool(isProduction),
  module: {
    loaders: loaders(isProduction, isDevel)
  },
  postcss: postcss(),
  resolve: {
    fallback: path.resolve(__dirname, '../..', 'node_modules'),
    root: [path.resolve(__dirname, '../..', 'node_modules')],
    alias: {
      src: path.join(__dirname, '../..', 'src')
    }
  },
  resolveLoader: {
    fallback: path.resolve(__dirname, '../..', "node_modules")
  },
  plugins: plugins(isProduction)
}
