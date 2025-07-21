const path = require("path");
const webpack = require("webpack");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const srcPath = path.join(__dirname, "../src");
const distPath = path.join(__dirname, "../dist");

module.exports = merge(webpackCommonConf, {
  mode: "development",
  module: {
    rules: [
      // 直接引入图片 url
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify("development"),
    }),
  ],
  devServer: {
    port: 8080,
    open: true, // 自动打开浏览器
    client: {
      progress: true,
    },
    compress: true, // 启动 gzip 压缩
    static: {
      directory: path.join(__dirname, '../public'),
      publicPath: '/public',
    }
  },
});