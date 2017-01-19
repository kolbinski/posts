var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var publicPath = require('../public-path.js')
var devtool = require('../devtool.js')
var loaders = require('./loaders.js')
var externals = require('./external-modules.js')
var postcss = require('../postcss.js')
var isProduction = process.env.NODE_ENV === 'production'
var isDevel = process.env.APP_ENV === 'devel'

module.exports = {
  context: path.join(__dirname, '../..' , 'src'),
  name: 'server',
  target:'node',
  entry: ['babel-polyfill', './server.js'],
  output: {
    path: path.join(__dirname, '../..', 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: publicPath(isProduction)
  },
  postcss: postcss(),
  devtool: devtool(isProduction),
  module: {
    loaders: loaders(isProduction, isDevel),
  },
  resolve: {
    fallback: path.join(__dirname, '../..', 'node_modules'),
    root: [path.resolve(__dirname, '../..', 'node_modules')],
    alias: {
      src: path.join(__dirname, '../..', 'src'),
    }
  },
  externals: externals(),
  resolveLoader: {
    fallback: path.join(__dirname, '../..', "node_modules")
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.__APP__SERVER__': true,
      'process.env.__APP__CLIENT__': false
    })
  ]
}
