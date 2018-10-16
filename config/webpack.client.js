const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "../src/index.js"),
    common: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, '../build-client'),
    filename: '[name].js'
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
      template: path.join(__dirname, "../src/client/index.html"),
      filename: "./index.html"
    })
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