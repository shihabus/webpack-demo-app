const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common,{
  mode: "development", // default: production. Minifies the code
  output: {
    filename: "main.js", // default: main.js
    path: path.resolve(__dirname, "build"), // default: dist
  },
});
