const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require('./webpack.entry.js');

module.exports = (env) => {
  const config = {
    entry,
    output: {
      filename: 'entry/[name].js',
      path: path.join(__dirname, '..', 'release'),
      publicPath: '/',
    },
    externals: {
      Iugu: 'Iugu',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: './src/static',
          from: '**/*',
          to: './',
        },
      ]),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['es2015', 'react'],
            },
          }],
        }, {
          test: /\.(jpg|png|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 30000,
              name: 'img/[name].[ext]',
            },
          }],
        }, {
          test: /\.svg$/,
          use: [{
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          }],
        },
      ],
    },
  };

  config.plugins.push(new HtmlWebpackPlugin({
    template: `./src/html/index.ejs`,
    production: env === 'production',
    filename: 'index.html',
    chunks: ['index', 'modules'],
    inject: true,
  }));

  return config;
};
