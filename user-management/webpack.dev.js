const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = merge(commonConf({ outputFile, assetFile }), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    static: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
});
