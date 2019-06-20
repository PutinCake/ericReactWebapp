const path = require('path')


module.exports = {
    //不同在于需要添加target,看在哪个环境中执行
    target:'node', 
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output:{
        filename:'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public',
        libraryTarget:'commonjs2'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader:'babel-loader'
            },
            {
                test: /\.js?$/,
                loader:'babel-loader',
                exclude:[
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
   
}