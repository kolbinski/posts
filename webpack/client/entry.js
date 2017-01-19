var path = require('path')

module.exports = function(production) {
  var port = parseInt(process.env['APP_SERVER_PORT']) + 10 || 3010
  if (production) {
    return {
      client: [
        './client.js'
      ],
      head: [
        'classlist-polyfill',
        'babel-polyfill'
      ]
    }
  }
  return {
    client: [
      'webpack-dev-server/client?http://' + (process.env['DEV_IP'] || 'localhost') + ':' + port,
      'webpack/hot/only-dev-server',
      './client.js'
    ],
    head: [
      'classlist-polyfill',
      'babel-polyfill'
    ]
  }
}
