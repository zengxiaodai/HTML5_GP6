// 作用：用于配置开发环境和生产环境都相同的webpack配置

const { resolve } = require('./utils')
const webpack = require('webpack')
const HappyPack = require('happypack')
const QfCleankPlugin = require('./plugins/QfCleanPlugin')

module.exports = {
  // 入口
  // 入口中的路径可以用相对路径，也可以使用绝对路径
  // entry: './src/main.js',
  // entry: path.resolve(__dirname, './src/main.js'),
  entry: {
    // 理解：把多个chunk中公共的包（往往是第三方包）抽离出来，缩减业务的体积.
    vendor: ['react', 'react-dom'],
    app: {
      import: resolve('./src/main.js'),
      dependOn: ['vendor']
    }
  },
  // 出口
  // 出口中的路径只能使用绝对路径
  output: {
    // path用于指定打包的结果放在哪里
    path: resolve('dist/static'),
    // filename用于指定打包成功后js文件的名字
    // bundle，表示“一束”“一捆”
    // filename: 'bundle.js'
    // [name]指的是entry对象中js文件的key名
    // [chunkhash]当webpack打包、进行代码分割（分割的结果是生成一堆chunk文件），每次打包只有与当前chunk相关的文件代码发生变化时，再次打包这个chunk文件的hash值才会发生变化。
    filename: '[name].[chunkhash].js',
    // 每次build时，都先删除掉旧的dist目录
    // v5中实现删除dist目录的写法：缺陷是publicPath外面的文件无法删除。
    // clean: true
  },
  plugins: [    
    new webpack.ProgressPlugin({}),
    // 支持多线程构建
    new HappyPack({ loaders: [ 'babel-loader' ] }),
    // 使用自定义插件清除dist目录
    new QfCleankPlugin(),
  ],
  // 在webpack眼中一切皆模块（module）
  // loaders，作用是用于处理各种模块文件（.js/.png/.scss/.vue/.ts/.jsx）
  module: {
    // rules用于定义一系列的处理模块的规则
    rules: [
        // 当webpack运行遇到.js文件时，使用babel-loader加载这个.js文件，然后交给一系列的@babel/*编译器进行编译，进而得到能够兼容浏览器的ES5代码。
      // 当这条规则起作用时，环境会读取根目录中的babal.config.js文件、加载配置好的Babel预设和插件。
      // { test: /\.js$/i, use: [{loader: 'babel-loader', options: {}}] }
      // { test: /\.(js|jsx)$/i, use: ['babel-loader'], exclude: /node_modules/ }

      // 开启多线程来加载并编译.js代码
      {
        test: /\.(js|jsx)$/i,
        use: [
          { loader: 'happypack/loader', options: {threads: 3}}
        ],
        exclude: /node_modules/
      },

      // 使用自定义loader
      { test: /\.txt$/i, use: ['./config/loaders/txt-loader.js'] }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js','.jsx','.ts','.tsx'],
    alias: {
      '@': resolve('src')
    }
  }
}
