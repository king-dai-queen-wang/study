### polyfill 降级 解决ie浏览器不认识promise等 es6 语法

* 全部引入
````javascript
// webpackage.config.js中配置
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
                    presets: ['@babel/preset-env'],
                }
            }
        ]
    },

// 在js文件中引入
import '@babel/polyfill';
````
* 按需加载

下载corejs

```javascript
// webpack.config.js 中配置
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
// 在js文件中删除
// import '@babel/polyfill';
```

### 压缩html代码
```javascript
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
```