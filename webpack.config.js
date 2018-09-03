import path from 'path';
import webpack from 'webpack';

export default {
  mode: 'none',
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client', // include hot reloader here
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '*']
  }
};