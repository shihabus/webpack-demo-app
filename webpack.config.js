const path = require("path");

module.exports = {
  mode: "development", // default: production. Minifies the code
  // devtool: "none", // stop putting eval
  entry: "./src/index.js", // default: src/index.js
  output: {
    filename: "main.js", // default: main.js
    path: path.resolve(__dirname, "build"), // default: dist
  },
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
          "sass-loader" // 1. Turn sass into css
        ]
      },
    ],
  },
};
