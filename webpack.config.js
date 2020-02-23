const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'x5Notify.js',
    libraryTarget: 'umd',
    library: 'x5Notify',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  externals: {
    vue: 'vue',
  },
  plugins: [new VueLoaderPlugin()],
}
