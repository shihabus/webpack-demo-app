var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { O_DIRECTORY } = require("constants");

module.exports = {
  // devtool: "none", // stop putting eval
  entry: "./src/index.js", // default: src/index.js
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // custom template
    }),
  ],
  module: {
    // loaders load in reverse order
    // first it will pass the file through css-loader then pass it to style-loader
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
      // Exports HTML as string. HTML is minimized when the compiler demands.
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // when any one of the tag is encountered they are moved into
      // images folder inside the build O_DIRECTORY, with name as
      // name.hash.extension
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
};
