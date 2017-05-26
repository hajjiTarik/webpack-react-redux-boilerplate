var merge = require('webpack-merge');
var serverDev = require('./webpack/devServer');
var publicConfiguration = require('./webpack.public.config');

module.exports = merge([
  publicConfiguration,
  serverDev(),
]);
