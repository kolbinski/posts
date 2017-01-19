var autoprefixer = require('autoprefixer')

module.exports = function () {
  return [
    autoprefixer({
      browsers: ['last 2 versions', 'Android 4'],
      cascade: false
    })
  ]
}
