var merge = require('webpack-merge');
var entries = require('../webpack/entries');
var loaders = require('../webpack/loaders');
var outputs = require('../webpack/outputs');
var plugins = require('../webpack/plugins');

module.exports = merge([
  entries.public(),
  loaders(),
  { devtool: 'eval-source-map' },
  plugins.dev(),
  outputs.dev(),
]);
