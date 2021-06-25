const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'js/build.js'
    },
    module: {
        rules: [
            /*{
            //    语法检查 只检查用户自己写的js代码，不检查node_modules
            //     检查规则是package.json中的eslintConfig中设置
            //    推荐airbnb -》 下载 eslint eslint-plugin-import eslint-config-airbnb-base
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {

                }
            }*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ESLintPlugin({
            context: './src',
            // 排除node_modules
            exclude: 'node_modules',
            extensions: 'js',
            // 自动修复报错
            fix: true
        })
    ],
    mode: 'development'
}