require("babel-polyfill");
const path = require('path');
const common = require('./webpack.common');

module.exports = {
  entry: {
    main: path.join(__dirname, "../src/index.js"),
    style: path.join(__dirname, "../src/client/assets/styles/style.scss")
  },
  output: {
    path: path.join(__dirname, '../build/public'),
    filename: 'assets/js/[name].js',
    publicPath: '/'
  },
  ...common,
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true
  }
};