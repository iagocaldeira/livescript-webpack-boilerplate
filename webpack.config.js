// Generated by LiveScript 1.5.0
module.exports = {
  entry: './index.ls',
  output: {
    path: './dist',
    filename: 'hello.js'
  },
  module: {
    loaders: [{
      test: /\.ls$/,
      loader: 'livescript-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.ls']
  }
};