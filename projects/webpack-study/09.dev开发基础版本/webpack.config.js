/* 开发环境 配置*/
const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        // 入口文件存放的位置 dist/js/build.js
        filename: 'js/build.js',
        path: resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        name: '[hash:10].[ext]',
                        esModule: false,
                        // 输出的文件路径都是以output/path 为根目录，下的imgs目录
                        outputPath: 'imgs'
                    }
                }],
                type: 'javascript/auto',


            },
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(css|scss|sass|jpg|jpeg|png|gif|html|js)$/,
                loader: 'file-loader',
                options: {
                    // 输出的文件路径都是以output/path 为根目录，下的 media 目录
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',

    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true
    }
}