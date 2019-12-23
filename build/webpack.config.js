const path = require('path')
const webpack = require('webpack')
const WebpackHTMLPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.scss', '.less', '.json'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@com': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@conf': path.resolve(__dirname, '../src/conf'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@Form': path.resolve(__dirname, '../Form'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    crossOriginLoading: 'anonymous',
  },

  module: {
    rules: [
      {
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        // options:{
        //   chunkName:'antd-icons'
        // },
        include: [
          require.resolve('@ant-design/icons/lib/dist'),
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        // use: ['awesome-typescript-loader', 'eslint-loader']
        // use: ['babel-loader', 'eslint-loader'],
        use: ['babel-loader'],
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader', 'eslint-loader'],
      // },
      { enforce: 'pre', test: /\.(js|ts)$/, loader: 'source-map-loader' },
      {
        oneOf: [
          {
            test: /\.css$/,
            include: [/node_modules[\\/]antd/, /dist/],
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
            include: [/node_modules[\\/]antd/, /node_modules[\\/]react-conf-form/],
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
              {
                loader: 'less-loader', // compiles Less to CSS
                options: {
                  paths: [path.resolve(__dirname, 'node_modules/antd')],
                  modifyVars: {
                    // 'primary-color': '#1DA57A',
                    // 'link-color': '#1DA57A',
                    // 'border-radius-base': '2px',
                    // or
                    hack: 'true; @import \'./src/assets/antd/variable.less\'',
                  },
                  javascriptEnabled: true,
                },
              },
            ],
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
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
                // options: {
                //   modules: true,
                //   localIdentName: '[name]__[local]___[hash:base64:10]',
                // },
              },
              'sass-loader',
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.resolve(__dirname, '../src/assets/styles/variable.scss'),
                },
              },
            ],
          },
        ],
      },
    ],
  },

  plugins: [
    //
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    // extractCSS,
    new MiniCss({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css',
      ignore: 'warning',
    }),

    /* 压缩优化代码结束 */
    new WebpackHTMLPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: './index.html',
      inject: true,
    }),
  ],
  // stats: 'errors-only',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3022,
    host: '0.0.0.0',
    proxy: {
      '/api/**': {
        target: 'https://www.apiopen.top/',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
}
