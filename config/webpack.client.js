const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, "../src/index.js"),
    common: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'assets/js/[name].js'
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
      },
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      excludeAssets: [/main.js/, /common.js/],
      template: path.join(__dirname, "../src/client/index.html"),
      filename: "./index.html"
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new CopyWebpackPlugin(
      [{
      from: path.resolve(__dirname + "./../src/client/assets"),
      to: path.resolve(__dirname + "./../build/assets")
    }])
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    hot: true,
    inline: true,
    host: "localhost",
    port: 8888,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true
  },
  devtool: 'eval-source-map'
};