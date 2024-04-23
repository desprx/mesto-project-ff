const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/scripts/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: 'babel-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
//       },

//       {
//         test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
//         type: 'asset/resource',
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin(),
//   ],
// };
module.exports = {
  mode: 'development',
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
