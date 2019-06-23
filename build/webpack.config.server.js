const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')


module.exports = webpackMerge(baseConfig, {
    //不同在于需要添加target,看在哪个环境中执行
    target:'node', 
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output:{
        filename:'server-entry.js',
        libraryTarget:'commonjs2'
    },
   
})