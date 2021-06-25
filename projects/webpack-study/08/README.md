### webpack devserver
用 webpack 指令会有输出文件
而用webpack server 则不会有输出
自动编译， 热更新
module.exports = {
    entry: '..',
    output: {
        filename: '..',
        path: ..
    },
    module:{
        rules: [{
            test: ...,
            use: [...]
        }, ...]
    },
    plugins: [...],
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
    mode: 'development'
}

