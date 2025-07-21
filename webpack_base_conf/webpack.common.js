const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const srcPath = path.join(__dirname, "../src");
const distPath = path.join(__dirname, "../dist");
//

module.exports = {
  entry: path.join(srcPath, "index.js"),
  output: {
    path: distPath,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        include: srcPath,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // loader 的执行顺序是：从后往前
        use: ["style-loader", "css-loader", "postcss-loader"], // 加了 postcss  需要配置postcss.config.js
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
    }),
  ],
};
