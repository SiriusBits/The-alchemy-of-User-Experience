/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        loader: "html-loader!markdown-loader?gfm=false"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.mp4$/,
        loader: "url-loader?limit=10000&mimetype=video/mp4",
        include: path.join(__dirname, "assets")
      }
    ]
  }
};
