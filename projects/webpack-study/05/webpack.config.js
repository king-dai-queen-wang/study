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
            loader: 'url-loader',
            options: {
                // 若图片大小小于8kb，就会被base64 处理
                // 优点：减少server请求数量，减轻服务器压力
                // 缺点是图片体积会变大(文件请求速度更慢)
                limit: 8 * 1024
            }
        }]
    },
    plugins: [
      new htmlWebpackPlugins({
          template: './src/index.html'
      })
    ],
    mode: 'development'
}