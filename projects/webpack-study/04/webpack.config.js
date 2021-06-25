// loader ： 下载 + 使用（配置loader）

// plugins： 下载 + 引入require + 使用（配置loader）
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
      rules: []
    },
    plugins: [
        // 'html-webpack-plugin'
        // 默认会创建一个空 html 文件，并且自动引入output 输出的文件（JS/CSS）
        // new HtmlWebpackPlugin()

    //    若想要有结构的html文件
        new HtmlWebpackPlugin({
            // 复制 ./src/index.html 文件，并且自动引入打包输出的文件（JS/CSS）
            template: './src/index.html'
        })
    ],
    mode: 'development'
}