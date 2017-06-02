module.exports = {
  public: () => ({
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
  }),
};
