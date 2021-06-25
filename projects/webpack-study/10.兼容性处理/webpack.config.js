/* 开发环境 配置*/
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 设置nodejs环境变量
// process.env.NODE_ENV = 'development';

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
                    MiniCssExtractPlugin.loader,
                    // 将css 整合到js中
                    'css-loader',
                    // 若要兼容性处理则用 postcss-loader postcss-preset-env
                    // 帮postcss找到package.json中的browerslist 配置，通过配置加载指定css兼容性样式
                    /*
                    * "browserslist": {
                    // * 开发模式
                        " development": [
                          "last 1 chrome version", 最新的chrome
                          "last 1 firefox version",最新的firefox
                          "last 1 safari version"最新的safari
                        ],
                        生产模式
                        "production": [
                          ">0.2%", 要兼容99.8%的浏览器
                          "not dead", 不要死的浏览器
                          "not op_mini all" 不要opera 所有的浏览器
                        ]
                      }
                    * */
                    // 默认是 ‘postcss-loader’，若要修改则写成对象形式如下
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
            filename: 'build.css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: 'development',

    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true
    }
}