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
    mode: 'development',
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