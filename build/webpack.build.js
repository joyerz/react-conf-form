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
      new OptimizeCSSAssetsPlugin({}),
    ],
    mangleWasmImports: true,
    mergeDuplicateChunks: true,

    portableRecords: true,
  },

  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    filename: 'js/[name].[hash:8].bundle.js',
    chunkFilename: 'js/[name].[chunkhash].js',
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
};

