var paths = require('../../paths');

module.exports = {
  prod: () => ({
    output: {
      filename: 'bundle.js',
      library: 'public',
      libraryTarget: 'umd',
      path: paths.output,
    },
  }),
  dev: () => ({
    output: {
      filename: 'server.js',
      library: 'public',
      libraryTarget: 'umd',
      path: paths.output,
    },
  }),
};
