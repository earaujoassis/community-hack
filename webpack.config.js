const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './web/src/index.js',
  output: {
    path: path.resolve(__dirname, './apps/web/assets/'),
    publicPath: '/public/',
    filename: 'app.js'
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'web/src/components')
    }
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
};
