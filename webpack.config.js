var webpack = require('webpack');

var config = {
  entry: {
    app: ['webpack/hot/dev-server', './app/app.js'],
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.json$/, include: /node_modules/, loader: 'json-loader'}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;