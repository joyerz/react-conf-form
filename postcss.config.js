const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({ preset: 'default' });

const plugins = [
  autoprefixer({
    overrideBrowserslist: [
      '> 0.15% in CN',
    ],
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano);
}

module.exports = {
  plugins,
};
