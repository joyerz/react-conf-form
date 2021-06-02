if (process.env.NODE_ENV === 'production') {
  require('./src/umd/index.css');
  module.exports = require('./src/umd/index.js');
} else {
  require('./src/umd/index.dev.css');
  module.exports = require('./src/umd/index.dev.js');
}
