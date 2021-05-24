/* eslint-disable */

let RJForm = null;
if (process.env.NODE_ENV !== 'production') {
  RJForm = require('./Form/index');
  module.exports = RJForm;
} else {
  RJForm = require('./cjs/index');
}
module.exports = RJForm;
