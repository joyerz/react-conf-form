const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const WebpackHTMLPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const resolve = {
  extensions: ['.js', '.ts', '.tsx', '.jsx', '.scss', '.less', '.json'],
  alias: {
    '@components': path.resolve(__dirname, '../src/components'),
    '@assets': path.resolve(__dirname, '../src/assets'),
    '@pages': path.resolve(__dirname, '../src/pages'),
    '@': path.resolve(__dirname, '../src'),
  },
};

const rules = [
  {
    test: /\.(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader'],
  },
  {
    oneOf: [
      {
        test: /\.css$/,
        include: /node_modules[\\/]antd/,
        use: [
          {
            loader: MiniCss.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCss.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]--[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      }],
  },
];

const plugins = [
  new StyleLintPlugin({
    context: 'src',
    configFile: path.resolve(__dirname, '../stylelint.config.js'),
    files: '**/*.(less|css|scss)',
    failOnError: false,
    quiet: true,
    fix: true, // 修复不规范的样式代码
    syntax: 'less',
  }),

  new MiniCss({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignore: 'warning',
  }),

  /*压缩优化代码结束*/
  new WebpackHTMLPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
    filename: './index.html',
    inject: true,
    // favicon: path.resolve(__dirname, '../src/assets/images/favicon.png')
  }),
];

const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
  historyApiFallback: true,
  open: true,
  inline: true,
};

module.exports = {
  resolve,
  rules,
  plugins,
  devServer,
  MiniCss,
};
