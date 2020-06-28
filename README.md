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
