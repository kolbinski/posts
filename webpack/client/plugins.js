var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var publicPath = require('../public-path.js')
var outputPath = require('../output-path.js')

module.exports = function (production) {
  if (production) {
    return [
      new ExtractTextPlugin('main.css', {allChunks: true}),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env.__APP__SERVER__': false,
        'process.env.__APP__CLIENT__': true,
        'process.env.NODE_ENV': '"production"'
      })
    ]
  }
  return [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.__APP__SERVER__': false,
      'process.env.__APP__CLIENT__': true
    })
  ]
}
