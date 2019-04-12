const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    port: 9000,
    hot: true,
    open: true
  },
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
