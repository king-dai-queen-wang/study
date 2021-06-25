const {resolve} = require('path');
module.exports = {
    // 输入
    entry: './index.js',
    // 输出
    output: {
      filename: 'build.js',
      path: resolve(__dirname, 'build')
    },
    // loader
    module:{
        rules: [
            {
                test: /\.s[c|a]ss$/, // 捕获后缀的文件
                // 使用的loader
                use: [
                    // 第三步，，在html创建style标签并且引入 将js文件中的样式信息。添加到header中生效
                    'style-loader',
                    // 第二步 用commonjs 的规范 将css文件 添加到js中
                    'css-loader',
                    // 第一步，sass-loader 将scss/sass 的文件翻译成css文件
                    'sass-loader'
                ]
            }
        ]
    },
    mode: 'development'
}