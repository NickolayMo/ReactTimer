'use strict';
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app'
    ],
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve:{
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias:{
            appStyles: 'app/styles/app.scss'
        }

    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.NoErrorsPlugin()
    ],
    sassLoader:{
        includePaths:[
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    }



};