const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'dist')
    },
    module:{
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
        //   排除了css，js，html 的其他资源
            exclude: /\.(css|js|html)$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
      new htmlWebpackPlugin({
          template: './src/index.html'
      })
    ],
    mode: 'development'
}