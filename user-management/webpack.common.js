const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = ({ outputFile, assetFile }) => ({
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: `${outputFile}.js`,
    chunkFilename: `${outputFile}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/react'] },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg?g|gif|png|svg|woff2?|ttf|eot)$/,
        generator: {
          filename: `./images/${assetFile}.[ext]`,
        },
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new EslintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
});
