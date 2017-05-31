var webpack = require('webpack');

module.exports = () => ({
  common () : ({

  })
  prod () : ({
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin,
      new webpack.HotModuleReplacementPlugin(),
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
      new webpack.LoaderOptionsPlugin({ minimize: true }),
    ]
  }),
  dev () : ({
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.HotModuleReplacementPlugin(),
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
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    ]
  }),
})