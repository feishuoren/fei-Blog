const path = require('path');

module.exports = {
  entry: './public/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: ['**/node_modules/'],
    poll: 1000,
    aggregateTimeout: 600,
  },
  devtool: 'source-map',  // 代码调试
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};
