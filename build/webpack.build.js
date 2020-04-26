const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
// const Visualizer = require('webpack-visualizer-plugin')

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
            drop_console: true, // 删除console
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    mangleWasmImports: true,
    mergeDuplicateChunks: true,
    portableRecords: true,
  },

  entry: path.resolve(__dirname, '../Form/index.tsx'),
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
    // library: 'react-json-form',
    // libraryTarget: 'commonjs2',
    libraryTarget: 'umd',
    // libraryExport: 'default',
    filename: 'index.js',
    crossOriginLoading: 'anonymous',
  },

  module: {
    rules: [
      // {
      //   loader: 'webpack-ant-icon-loader',
      //   enforce: 'pre',
      //   // options: {
      //   //   chunkName: 'antd-icons',
      //   // },
      //   include: [
      //     require.resolve('@ant-design/icons/lib/dist'),
      //   ],
      // },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        // use: ['awesome-typescript-loader', 'eslint-loader']
        use: ['ts-loader', 'eslint-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      { enforce: 'pre', test: /\.(js|ts)$/, loader: 'source-map-loader' },
      {
        oneOf: [
          {
            test: /\.less$/,
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
    new CleanWebpackPlugin(),
    //
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new MiniCss({
      filename: 'index.css',
    }),

    // new Visualizer({
    //   filename: './statistics.html',
    // }),

    // /* 压缩优化代码结束 */
    // new WebpackHTMLPlugin({
    //   template: path.resolve(__dirname, '../src/index.html'),
    //   filename: './index.html',
    //   inject: true,
    // }),
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
    axios: 'axios',
    '@types/axios': '@types/axios',
    'memoize-one': 'memoize-one',
    memoize: 'memoize-one',
  },
}
