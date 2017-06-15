var paths = require('../../paths');

module.exports = () => ({
  devServer: {
    contentBase: paths.output,
    hot: true,
    watchContentBase: true,
    port: 9000,
    host: 'localhost',
    setup: (app) => {
      app.set('views', paths.templatesDirectory);
      app.set('view engine', 'ejs');
      app.get('/', (_, res) => (
        res.render('index', {
          asset: 'server.js',
        })
      ));
    },
  },
});
