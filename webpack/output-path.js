var path = require('path')

module.exports = function (production, base) {
  return path.join(__dirname, '../', base)
}
