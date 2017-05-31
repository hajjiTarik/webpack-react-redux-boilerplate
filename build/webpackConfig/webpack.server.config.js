var merge = require('webpack-merge');
var serverDev = require('../webpack/devServer');
var publicConfiguration = require('./webpack.dev.config.js');

module.exports = merge([
  publicConfiguration,
  serverDev(),
]);
