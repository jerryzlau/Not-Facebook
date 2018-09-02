import express from 'express';
import path from 'path';

/**
 * variables
 */
let app = express();
import models from '../models';
let config = {
  app: require('../config/app')
};

/**
 * Import routes
 */
import ApiUsers from './routes/api/users';

/**
 * webpack variables
 */
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webackHotMiddleware from 'webpack-hot-middleware';

/**
 * Webpack config
 */
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html')); // this line sends client code to index.html
});

/**
 * Initialise req variables
 */
app.use(function (req, res, next) {
  req._config = config;
  req._models = models;
  req._app = app;
});

/**
 * API Routes
 */
app.use('/api/users', ApiUsers);

app.listen(config.app.port, () => {
  console.log('Express Server running on localhost:' + config.app.port);
});