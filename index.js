/* eslint-disable */

let RJForm = null;
if (process.env.NODE_ENV !== 'production') {
  RJForm = require('./cjs/index.development');
  module.exports = RJForm;
} else {
  RJForm = require('./cjs/index');
}
module.exports = RJForm;
