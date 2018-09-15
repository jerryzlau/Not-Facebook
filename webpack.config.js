import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'server/index.html',
      title: 'Not Facebook',
      favicon: './server/facebook.ico'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '*']
  },
  devServer: {
    port: 9000
  }
};