var merge = require('webpack-merge');
var webpack = require('webpack');
var conf = require('../config');

const common = () => ({
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(conf.version),
      'process.env': {
        NODE_ENV: JSON.stringify(conf.env),
      },
    }),
  ],
});

const prodPlugins = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      sourceMap: true,
      comments: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: false,
      },
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
});

const devPlugins = () => ({
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = {
  prod: () => (
    conf.env === 'production'
      ? merge([common(), prodPlugins()]) : common()
  ),
  module: () => (
    common()
  ),
  dev: () => (
    merge([common(), devPlugins()])
  ),
};
