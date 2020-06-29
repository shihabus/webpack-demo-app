const path = require("path");
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development", // default: production. Minifies the code
  output: {
    filename: "[name].bundle.js", // default: main.js
    path: path.resolve(__dirname, "build"), // default: dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // custom template
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. css into common js
          "sass-loader", // 1. Turn sass into css
        ],
      },
    ],
  },
});
