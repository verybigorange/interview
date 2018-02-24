const express = require('express');
const app = express();
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const chalk = require('chalk');
const webpackHotMiddleware = require("webpack-hot-middleware");

const port = 3000;

complier = webpack(webpackConfig);

let hotMiddleware = webpackHotMiddleware(complier,{
    log: false,
    heartbeat: 2000,
 })


console.log(chalk.green('> Starting dev server... \n'))

const instance  = webpackDevMiddleware(complier, {
    publicPath: '/',
    quiet: true
})

app.use(instance)

app.use(hotMiddleware);

instance.waitUntilValid(()=>{
    app.listen(port,()=>{
        console.log(chalk.green('\nlistenning port 3000... \n'))
    })
})

