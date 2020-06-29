const path = require("path");
const merge = require("webpack-merge");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production", // default: production. Minifies the code
  output: {
    // cache busting:
    // browsers  can cache files.But when content has changed, the cached file
    // is no more valid. So we need to fetch the latest file
    // out of the box, webpack provide a hash of content as contentHash
    // so if content changes the md5-hash also changes
    // so to cache bust we can use this content hash in filename,
    // which prevents the browser loading stale old files
    filename: "[name].[contentHash].bundle.js", // default: main.js
    path: path.resolve(__dirname, "build"), // default: dist
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html", // custom template
      minify: {
        // to minify html
        removeAttributeQuotes: true,
        collapseWhiteSpace: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. extract to separate css files
          "css-loader", // 2. css into common js
          "sass-loader", // 1. Turn sass into css
        ],
      },
    ],
  },
});
