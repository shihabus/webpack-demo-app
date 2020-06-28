# WEBPACK DEMO

1. Split up the files and import accordingly in index.html.

   Make sure the dependencies are loaded before usage inside the index.html script tags.

2. Installing webpack

   1. Init npm `npm init -y`
   2. Install webpack and dependencies `npm i --save-dev webpack webpack-cli`

3. Setting up webpack

   Add a script into package.json as `webpack` and create an `index.js` inside the src directory. Upon running the `script` you can see a new folder called dist being created on the top. This one is the bundle of `index.js` that is created with default webpack config made available out of the box. To see this in action, import the newly created js bundle in `index.html` via a `script` tag.
