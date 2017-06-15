module.exports = {
  public: () => ({
    entry: [
      'babel-polyfill',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
  }),
};
