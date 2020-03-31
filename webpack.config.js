//@ts-check

'use strict';

const path = require('path');

/**@type {import('webpack').Configuration}*/
const config = {
  target: 'web',
  entry: './src/fontawesome-svg-loader.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fontawesome-svg-loader.js',
    library: 'awesomeLoader',
    libraryTarget: 'umd',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
          ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
      }
    ]
  }
};

module.exports = config;
