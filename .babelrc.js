const config = {
  presets: [
    "@babel/typescript",
    [
      "@babel/preset-env",
      {
        "targets": "> 0.25%, not dead"
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "@babel/plugin-proposal-private-methods",
      {
        "loose": true
      }
    ],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    //    [
    //      "react-css-modules",
    //      {
    //        "generateScopedName": "[name]__[local]___[hash:base64:10]",
    //        "filetypes": {
    //          ".scss": {
    //            "syntax": "postcss-scss"
    //          }
    //        }
    //      }
    //    ],
    
  ]
}

if (['dev', 'prod'].indexOf(process.env.NODE_ENV) === -1 || true) {
  config.plugins.push([
    "import",
    {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
      // 会加载 less 文件 "style": "css"
    }
  ])
}

module.exports = config;