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
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};

module.exports = config;
