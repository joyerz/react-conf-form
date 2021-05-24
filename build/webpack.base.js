const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
  new CleanWebpackPlugin(),
  new MiniCss({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignore: 'warning',
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
