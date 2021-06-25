/* 开发环境 配置*/
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
                test: /\.(css)$/,
                use: [
                    // 创建style标签，将样式放入html的header中
                    // 'style-loader',
                    //下面这个loader取代style-loader，作用是提起js中的css成单独文件
                    {
                        "loader": MiniCssExtractPlugin.loader,
                    },
                    // 将css 整合到js中
                    'css-loader',
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
                exclude: /\.(css|scss|jpg|jpeg|png|gif|html|js)$/,
                loader: 'file-loader',
                options: {
                    // 输出的文件路径都是以output/path 为根目录，下的 media 目录
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 对输出的css 重命名
            filename: 'build.css',
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