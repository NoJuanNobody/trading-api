const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './out/App.js',
  output: {
    path: path.resolve(__dirname, 'www/js'),
    filename: 'app.js'
  },
  mode: 'development',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
