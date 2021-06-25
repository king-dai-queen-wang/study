const {resolve} = require('path');
const htmlWebpackPlugins = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            // 这种处理方式有个问题: 处理不了html中的图片引入
            test: /\.(jpg|png|jpeg)$/,
            // 若多个loader 则使用use， 若单个loader 则用loader
            // 引入图片 需要下周url-loader 和file-loader
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        // 若图片大小小于8kb，就会被base64 处理
                        // 优点：减少server请求数量，减轻服务器压力
                        // 缺点是图片体积会变大(文件请求速度更慢)
                        limit: 8 * 1024,
                        //   问题:以为url-loader默认使用es6模块化解析,而html-loader引入图片是commonjs
                        //    解析时候会出现[object Module]
                        //     关闭url-loader的es6模块化,使用commonjs解析
                        esModule: false,
                        // 给图片重命名, [hash:10] 是指截取前10位,ext是原文件后缀名
                        // 名字过长的话存储体积也大
                        name: '[hash:10].[ext]'
                    }
                }
            ],
            type: 'javascript/auto'
        },{
            test: /\.html$/,
            // 专门处理html中引入的img,从而能被url-loader处理
            loader: "html-loader"
        }]
    },
    plugins: [
      new htmlWebpackPlugins({
          template: './src/index.html'
      })
    ],
    mode: 'development'
}