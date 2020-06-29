const path = require("path");
const { O_DIRECTORY } = require("constants");

module.exports = {
  // devtool: "none", // stop putting eval
  entry: {
    main: "./src/index.js", // default: src/index.js
    vendor: "./src/vendor.js",
  },
  module: {
    // loaders load in reverse order
    // first it will pass the file through css-loader then pass it to style-loader
    rules: [
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
