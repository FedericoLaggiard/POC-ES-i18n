/**
 *
 * Webpack configuration script
 *
 * Created by federicolaggiard on 08/07/15.
 */

'use strict';

module.exports = {

  //entry files to be compiled
  entry: {
    app: [
      './src/index.js'
    ]
  },

  //output file
  output: {
    path:     './dist',
    filename: 'bundle.js'
  },

  //external modules
  module: {
    loaders: [
      //babel ECMAScript 6 compiler
      {
        test:    /\.js?$/,
        exclude: /node_modules/,
        loader:  'babel-loader'
      }
    ]
  },

  //source map for js
  devtool: 'source-map',

  //dev server with hot mode (no puns intended..)
  devServer: {
    contentBase: "./dist",
    hot:         true,
    inline:      true,
    colors:      true,
    port:        3000,
    ip:          '0.0.0.0'
  }

};