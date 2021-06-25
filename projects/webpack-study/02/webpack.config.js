const {resolve} = require('path')

module.exports = {
    // 五大核心配置
    //01 五大核心配置之 入口
    entry: './src/index.js',
//    02 五大核心配置之 输出
    output:{
    //   输出文件名称
        filename: 'build.js',
    //    输出路径 __dirname 是nodejs里的全局变量，代表当前webpack。config.js文件的[【[目录]】！！！]绝对路径 即02目录
    //    path : 02目录下的build 目录
        path: resolve(__dirname, 'build')
    },
    //03 五大核心配置之 loader
    module: {
        rules: [
        //    详细的loader配置
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use 的顺序是从右往左执行（从下到上）
                    // 第二步， 创建style标签，将js中的样式字符串（第一步的结果）资源插入进行，添加到页面的header中生效
                    'style-loader',
                    // 第一步，将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
//  04. 五大核心配置之 plugins
    plugins: [

    ],
    // 05 五大核心配置之 模式 development 和 production 模式
    mode: 'development'
}