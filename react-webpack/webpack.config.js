// 语法：CommonJS语法，实际上就是node代码。

// merge(obj1, obj2, obj3) 这是一种浅合并
const { merge } = require('webpack-merge')

const common = require('./config/common')
const serve = require('./config/serve')
const build = require('./config/build')

// const isDev = process.env.NODE_ENV === 'development'

// module.exports = {}
// module.exports = function() { return {} }
module.exports = env => merge(common, env.development ? serve : build)


// 理解webpack

// - 作用：把前端工程化中各种资源文件打包并编译成浏览器能够兼容处理的静态资源（html、css、ES5版本的js、图片资源）。
// - 理解：实际上webpack就是一个打包器。在webpack的眼中，一切文件皆文件。只要给webpack配置了相关的loader或plugin，它可以对一切文件进行打包、编译。
// - webpack是核心API包
// - webpack-cli是webpack命令行的工具包

// 面试题系列：
// 一、如何做webpack构建优化（打包优化），你有哪些策略？
// - devtool:'source-map'
// - mode:'production'
// - vendor提取（提取公共第三方包）
// - 配置loaders时，使用exclude或include来指定目录
// - resolve路径解析优化（alias、extensions、modules）
// - 使用HappyPack开启多线程构建
// - MiniCssExtractPlugin 抽离CSS
// - 使用压缩效率更高的TerserWebpackPlugin插件来进行生产压缩
// - 使用 Tree-Shaking 把自定义模块中的从未使用到的变量或方法移除掉


// 二、如何提升webpack的运行速度（开发环境），你有哪些策略？
// - cache-loader 优先使用webpack的缓存资源
// - optimization.minimize 关闭压缩功能
// - SpeedMeasurePlugin对所有插件进行加速


// 三、如何自已编写loaders、plugins等？
