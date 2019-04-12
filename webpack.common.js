const path = require('path');

module.exports = {
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
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      // nice path alias. used in docs/examples to import.
      // linting error: need eslint-import-resolver-webpack & settings rules in .eslintrc
      'tequila-ui': path.resolve(__dirname, './src/components')
    }
  }
};
