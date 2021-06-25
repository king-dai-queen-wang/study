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
            // 兼容性处理需要babel-loader @babel/core @babel/preset-env
            // 只能处理一般的基本语法，但如promise 不能转换.处理方法是下载@babel/polyfill,index.js 引入（不过是全部加载）
            // 如果要按需加载 -》 corejs
            {
                test: /\.js$/,
                // 排除node_modules
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env',
                        {
                        //    按需加载
                            useBuiltIns: 'usage',
                            corejs: {
                                version: 3
                            },
                            targets: {
                                chrome: '60',
                                firefox: '50',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }
                    ]],
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 压缩html
            minify: {
                // 移除空格
                collapseWhitespace: true,
            //     移除注释
                removeComments: true
            }
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