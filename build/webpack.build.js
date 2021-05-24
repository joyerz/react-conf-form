const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const base = require('./webpack.base');

const {
  rules, resolve, plugins,
} = base;

module.exports = {
  mode: 'production',
  devtool: false,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: {
            drop_console: false, // 删除console
          },
        },
      }),
      // new OptimizeCSSAssetsPlugin({}),
    ],
    mangleWasmImports: true,
    mergeDuplicateChunks: true,
    portableRecords: true,
  },

  entry: path.resolve(__dirname, '../src/Form/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../src/cjs'),
    // library: 'react-json-form',
    // libraryTarget: 'commonjs2',
    libraryTarget: 'umd',
    filename: 'index.js',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules,
  },
  resolve,
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    ...plugins,
  ],

  externals: {
    antd: 'antd',
    '@ant-design': '@ant-design',
    '@ant-icons': '@ant-icons',
    react: 'react',
    'react-dom': 'react-dom',
    'react-router': 'react-router',
    'react-router-dom': 'react-router-dom',
    moment: 'moment',
    classnames: 'classnames',
    '@types/axios': '@types/axios',
    'memoize-one': 'memoize-one',
    memoize: 'memoize-one',
    axios: 'axios',
  },
};

