if (process.env.NODE_ENV === 'production') {
  module.exports = require('./src/umd/index.js')
}
else {
  module.exports = require('./src/umd/index.dev.js')
}
