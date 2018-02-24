const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglifyjs = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const resolve = dir => path.join(__dirname,dir)

const env = process.env.NODE_ENV;


// 不同的环境用不同的配置
let plugins = [
    new htmlWebpackPlugin({
        filename: 'index.html',
        template: resolve('index.html'),
        inject: true
    }),       
];
let entry = [resolve('src/main.js')];

if(env==='development'){
    plugins.push(new webpack.HotModuleReplacementPlugin())
    entry.push('webpack-hot-middleware/client?noInfo=true&reload=true')
}else{
    plugins.push(new uglifyjs())
}

module.exports = {
    entry:entry,
    output:{
        path:resolve('dist'),
        filename:'bundle.js',
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.json']
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:[resolve('node_modules')]
            },
        ]
    },
    plugins:plugins
}