var paths = require('../../paths');

module.exports = {
  public: () => ({
    output: {
      filename: 'bundle.js',
      library: 'public',
      libraryTarget: 'umd',
      path: paths.output,
    },
  }),
};
