const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './build/'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ]
});
