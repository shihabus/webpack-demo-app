# WEBPACK DEMO

1. Split up the files and import accordingly in index.html.

   Make sure the dependencies are loaded before usage inside the index.html script tags.

2. Installing webpack

   1. Init npm `npm init -y`
   2. Install webpack and dependencies `npm i --save-dev webpack webpack-cli`

3. Setting up webpack

   Add a script into package.json as `webpack` and create an `index.js` inside the src directory. Upon running the `script` you can see a new folder called dist being created on the top. This one is the bundle of `index.js` that is created with default webpack config made available out of the box. To see this in action, import the newly created js bundle in `index.html` via a `script` tag.

4. Webpack bundling all code

   Change the code as such the app is started from `index.js`. You might need to take care to export and import the modules as required.

   With the code getting instantiated from `index.js`, webpack will try to bundle all the required dependencies of on its own. One can verify this by removing all the imports expect that of the `dist/main.js`.

   This proves how webpack can help in bundling all the file into a single file. It take cares of proper and ordered dependency loadings. We don't need to bother how our files are organised. We just need to ensure all the dependencies are properly getting imported and exported.

5. Creating webpack config

   In order to specify the config file for webpack, it can be passed as an argument with `--config file_name.js` along with `webpack` command in scripts. The config can be used to override the default configs.

6. Adding webpack loaders

   Different file types are to be handled differently. In order to instruct the webpack about this file type specific handling we make use of loaders. In order handle _.css_ files, we make use of:

   1. style-loader: Which inject css into DOM's `<style>` tag.
   2. css-loader: Convert the CSS into JS.

   In order to load the loaders, the order actually matters. For that we make use of the `use` array in webpack config. **The loaders are loaded in the reverse as they appear in the use array.**

7. Cache busting and plugins

   Cache busting solves the browser caching issue by using a unique file version identifier to tell the browser that a new version of the file is available. Therefore the browser doesn't retrieve the old file from cache but rather makes a request to the origin server for the new file. We can use the `contentHash` in the file name to cache bust. Suppose if we have a main.js file with hash of content, in its filename, it will be hard to import via the script tag in `index.html`. So we need to use plugins to directly inject the files to html via JS.

   ### plugins

   Plugins are options that we can use to customise the webpack build process. For example we can use plugins for code minifying, cleaning redundant files, adding tags to html, tec.

   #### [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

   The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. If required we can provide template the generated html. This plugin is really helpful we are cache busting. **If we are using react or something similar we need to use this custom template, because we need to mention the div id to which react will be injected**

   #### [clean-webpack-plugin](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)

   If we are caching files, with each build a lot of unused and redundant files make end up in your build folder. This plugin can be used to clear this unwanted files.

   #### [html-loader](https://webpack.js.org/loaders/html-loader/)

   This will convert the HTML into string. This helps in finding and replacing tags, if required.

   #### [file-loader](https://webpack.js.org/loaders/file-loader/)

   The file-loader resolves import/require() on a file into a url and emits the file into the output directory.

8. Split webpack configs

   If required we can have different configs in development and production for webpack. The best practise is to use a common config and merge it with the specific changes. For this we make use of `webpack-merge` lib.

9. Webpack-dev-server

   It will really hard to rebuild when we change something in code. Webpack provides a hot-reload enabled server. When a file changes it is automatically re-build. When using the server, the build file is only created in **memory**. We can use `--open` flag to open a new window when the server starts, along with webpack config flag in the `webpack-dev-server` command.
