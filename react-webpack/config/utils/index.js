const path = require('path')

function resolve(arg) {
  return path.resolve(__dirname, '../../', arg)
}

module.exports = {
  resolve
}
