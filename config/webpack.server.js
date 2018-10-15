const path = require('path');

module.exports = {
  entry: path.join(__dirname, "../server/server.js"),
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
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  target: 'node',
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