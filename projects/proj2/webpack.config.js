var webpack = require('webpack');
var path = require('path');

const VENDER_LIBS = [
    'faker',
    'lodash',
    'react',
    'react-dom',
    'react-input-range',
    'react-redux',
    'react-router',
    'redux',
    'redux-form',
    'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vender: VENDER_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender'
    })
  ]
};
