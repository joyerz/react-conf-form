const path = require('path');
const webpack = require('webpack');
const WebpackHTMLPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const base = require('./webpack.base');

const {
  devServer, rules, resolve, plugins,
} = base;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/example/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules,
  },
  resolve,
  devServer,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    /*压缩优化代码结束*/
    new WebpackHTMLPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: './index.html',
      inject: true,
      // favicon: path.resolve(__dirname, '../src/assets/images/favicon.png')
    }),

    new StyleLintPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      files: '**/*.(less|css|scss)',
      failOnError: false,
      quiet: true,
      fix: true, // 修复不规范的样式代码
      syntax: 'less',
      exclude: /node_modules]/,
    }),

    ...plugins,
  ],
};

