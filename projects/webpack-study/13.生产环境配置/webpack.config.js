const {resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// 定义nodejs环境变量，决定使用browserlist哪个的环境
process.env.NODE_ENV = 'production';

const common_css_loader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
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
]
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // 'style-loader',
                // 将css通过link写入html中
                ...common_css_loader
            ]
        },{
            test: /\.scss$/,
            use: [
                ...common_css_loader,
                'sass-loader'
            ]
        },
            // 正常来说一种文件 对应一种处理loader，若一类文件被多个loader处理，那么一定要搞清楚loader执行顺序
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        // 只能处理箭头函数一类基本es6语法，不能处理promise等语法
                        '@babel/preset-env',
                        // 解决上面的引入类似promise等es6语法，按需加载
                        {
                            useBuiltIns: 'usage',
                            // 用的corejs version是3版本
                            corejs: {version: 3},
                            // 兼容到chrome 60， firefox 50, ie 11
                            targets: {
                                chrome: '60',
                                firefox: '50',
                                ie: '11'
                            }
                        }
                    ]
                ]
            }
        },{
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 1024,
                name: '[hash:10].[ext]',
                outputPath: 'imgs',
                esModule: false
            },
                type: 'javascript/auto'
        }, {
                // 使html 能够处理img标签直接引入的图片
                // 值得注意的是 这里用的commonjs 规范，
                // 而上面的url-loader默认使用es6 模块规范，
                // 所以要设置url-loader的esModule 为false
                test: /\.html$/,
                loader: 'html-loader'
            },{
                exclude: /\.(js|css|scss|html|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'built.css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin(),
        // 在.eslintrc 文件中定义检查规则 airbnb
        new ESLintPlugin({
            context: './src',
            // 排除node_modules
            exclude: 'node_modules',
            extensions: 'js',
            // 自动修复报错
            fix: true
        }),
        new HtmlWebpackPlugin({
            // 默认的html 模板
            template: './src/index.html',
            // 压缩html
            minify: {
                // 去除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        })
    ],
    // 生产模式自动开启js压缩
    mode: 'production',
    // 开发服务器devServer： 用来自定义（自动编译，自动打开浏览器，自动刷新浏览器）
    // 特点是只会在内存中编译，不会有任何输出 即【没有dist目录】！！！！
    // 启动devServer指令是： webpack-dev-server
    devServer: {
        // 构建后的路径
        contentBase: resolve(__dirname, 'dist'),
        // 开启gzip
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}