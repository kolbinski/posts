var path = require('path')

module.exports = function (production) {
  if (production) {
    return '/static/'
  }
  var port = parseInt(process.env['APP_SERVER_PORT']) + 10 || 3010
  return 'http://' + (process.env['DEV_IP'] || 'localhost') + ':' + port + '/static/'
}
