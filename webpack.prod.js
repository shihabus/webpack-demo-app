const path = require("path");
const merge = require("webpack-merge");

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
    filename: "main.[contentHash].js", // default: main.js
    path: path.resolve(__dirname, "build"), // default: dist
  },
});
