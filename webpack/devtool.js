module.exports = function (production) {
  if (production) {
    return 'source-map'
  }
  return 'eval'
}
