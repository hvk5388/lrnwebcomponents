const path = require("path");
const fs = require("fs");  
var node_modules = fs.readdirSync('node_modules').filter(function(x) { return x !== '.bin' });

module.exports = ({ config }) => {
  config.target = "node";
  config.externals = node_modules;
  config.output = {libraryTarget: "commonjs2"};
  config.resolve.alias = {
    './lib': path.join(
      __dirname,
      "../lib"
    )
  }
  config.module.rules.push({
    //VTT files need to be in the same place at the demo
    test: /\.(vtt|csv|gltf)$/,
    loader: "file-loader"
  });
  config.module.rules.push({
    test: [/\.js$/],
    loader: require.resolve(
      "@open-wc/webpack-import-meta-loader"
    )
  });
  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve("@storybook/source-loader")],
    enforce: "pre"
  });

  // Searches through all exclude rules and replaces them if they exclude node_modules
  // Replacement will exclude node_modules with the exeption of listed below packages
  for (let i = 0; i < config.module.rules.length; i += 1) {
    const rule = config.module.rules[i];
    if (rule.exclude) {
      for (let j = 0; j < rule.exclude.length; j += 1) {
        if (rule.exclude[j] === path.resolve("node_modules")) {
          rule.exclude[j] = modulePath => {
            return (
              /node_modules/.test(modulePath) &&
              !/node_modules\/@polymer/.test(modulePath) &&
              !/node_modules\/lit-html/.test(modulePath) &&
              !/node_modules\/lit-element/.test(modulePath) &&
              !/node_modules\/@open-wc/.test(modulePath)
            );
          };
        }
      }
    }
  }

  return config;
};
