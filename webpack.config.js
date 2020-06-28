const path = require("path");

module.exports = {
  mode: "development", // default: production. Minifies the code
  // devtool: "none", // stop putting eval
  entry: "./src/index.js", // default: src/index.js
  output: {
    filename: "main.js", // default: main.js
    path: path.resolve(__dirname, "build"), // default: dist
  },
};
