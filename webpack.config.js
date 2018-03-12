const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
  //  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  watch: true,
  entry: './src/js/index.js',
  output: {
    // move bundle.js to a folder instead the root
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  devServer: {
     contentBase: './build'
   },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader:  "babel-loader",
        exclude: /node_modules/
      },
      {
       test: /\.css$/,
       use: ["style-loader","css-loader"]

     },
     {
      test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property
      loader:"file-loader",
      query:{
        name:'[name].[ext]',
        outputPath:'images/'
        //the images will be emmited to public/assets/images/ folder
        //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
      }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule
      loader: "url-loader",
      query:{
        limit:'10000',
        name:'[name].[ext]',
        outputPath:'fonts/'
        //the fonts will be emmited to public/assets/fonts/ folder
        //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
      }
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader","css-loader","sass-loader"]
    }

    ]
  },
  plugins: [
    new UnminifiedWebpackPlugin(),
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      minify:false,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./src/index.html'),
    }),
  ]
}
