const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
    entry: "./src/index.js",
    output: {
        path: resolve('./dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },    
    resolve: {
        extensions: ['.js','.jsx','.css']
       }, 
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    } ,           
    devServer: {
        contentBase: 'dist'
    }
};
module.exports = config;