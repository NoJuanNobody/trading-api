const path = require('path');

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
  }
};
