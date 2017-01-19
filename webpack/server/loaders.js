var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (production, devel) {
  if (production) {
    return [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', !devel
        ? 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader'
        : 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.(png|ico)$/,
        loaders: ['file-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.svg$/i,
        loaders: ['raw-loader']
      }
    ]
  }
  return [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    },
    {
      test: /\.(png|ico)$/,
      loaders: ['file-loader']
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.svg$/i,
      loaders: ['raw-loader']
    }
  ]
}
