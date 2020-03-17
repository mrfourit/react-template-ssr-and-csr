require("babel-polyfill");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
  devServer: {
    host: "localhost",
    port: 8888,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true
  },
  devtool: 'source-map'
};