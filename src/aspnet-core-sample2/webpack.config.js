"use strict";

var path = require('path');

module.exports = {
    entry: {
        app1: "./ClientApp/app1.js",
    },
    output: {
        path: path.join(__dirname, "./wwwroot", "./dist"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};