
module.exports = {
  entry: {
    app: __dirname + '/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: 'chunks/[name].js'
  },
  mode: 'development',
  devtool: `cheap-module-eval-source-map`,
  target: 'web',
};
