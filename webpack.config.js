const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return {
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
    resolve: {
      alias: {
        // nice path alias. used in docs/examples to import.
        // linting error: need eslint-import-resolver-webpack & settings rules in .eslintrc
        'tequila-ui': path.resolve(__dirname, './src/components')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.jsx?$/,
          include: /node_modules/,
          use: ['react-hot-loader/webpack']
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          include: [/node_modules/]
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          exclude: [/node_modules/]
        }
      ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
};
