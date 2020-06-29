var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // default: production. Minifies the code
  // devtool: "none", // stop putting eval
  entry: "./src/index.js", // default: src/index.js
  output: {
    // cache busting:
    // browsers  can cache files.But when content has changed, the cached file
    // is no more valid. So we need to fetch the latest file
    // out of the box, webpack provide a hash of content as contentHash
    // so if content changes the md5-hash also changes
    // so to cache bust we can use this content hash in filename,
    // which prevents the browser loading stale old files
    filename: "main.[contentHash].js", // default: main.js
    path: path.resolve(__dirname, "build"), // default: dist
  },
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
    ],
  },
};
