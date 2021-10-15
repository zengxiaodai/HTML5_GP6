// 作用：用于指定开发环境所需要的webpack配置
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap({
  // 指定环境：打包=production，启动本地服务=development
  mode: 'development',
  // 当src源码报错时，在浏览器控制台中打印的代码行号是源码位置，而不是编译后的代码位置。
  devtool: 'inline-source-map',
  // cache:true这个功能在开发环境默认是开启
  cache: {
    type: 'memory'
  },
  plugins: [
    // 用于把打包后的静态资源文件和单页面index.html合并起来。
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      title: 'Hello GP6'
    }),
    // v5中使用ESlint的最新写法
    // 这个plugin工作时(也就是eslint工作时)会读取.eslintrc.js这个配置文件。
    new ESLintPlugin({
      extensions: ['js','jsx'],
      exclude: 'node_modules',
      threads: false
    })
  ],
  devServer: {
    port: 8000,
    open: true,
    contentBase: resolve('public'),
    // HMR = Hot Module Replacement
    // 原理：加上这个配置之后，当我们再启动本地服务时，就会在node服务器上开启一个websocket长连接。每当代码有变化时，通过WS长连接通信把变化的代码推送到客户端（浏览器）进行自动更新。
    hot: true,
    // 当代码报错时(一般是ESLint级别的错误)，弹出遮罩层。
    overlay: true,
    proxy: {
      '/api': {
        target: 'https://cnodejs.org',
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      // v4写法：当加载文件遇到.jpg结尾的模块时，使用file-loader进行处理
      // { test: /\.(png|jpg|gif|jpeg|svg)$/, use: 'file-loader' }

      // v5写法：已经不用安装file-loader了。
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },

      // 作用：用于处理.css的文件模块
      // 当有多个loader配合工作时，使用use:[]数组语法
      // 注意：当使用多个loader时，有严格的顺序要求，数组中越往后的loader越先工作。
      // { test: /\.css$/i, use: ['style-loader', 'css-loader']},

      // sass-loader，只是用于加载.scss文件，交给sass编译器进行编译，得到css代码
      // css-loader，用于加载上一步中编译得到的css文件。
      // style-loader，用于把css代码注入到DOM树中去。
      // { test: /\.scss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(css|scss)$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
      // 如何支持less？自已思考！

      // v4中使用ESlint的旧写法
      // 当项目运行时，使用eslint-loader加载.js文件，交给eslint这个检测工具进行检测。
      // exclude，指定忽略掉node_modules包
      // enforce:'pre'表示这条规则是前置规则，只有当代码通过这条检测时，其它后置loader才能开始工作。
      // {test:/\.(js|jsx)$/i,use:['eslint-loader'],exclude:/node_modules/,enforce:'pre'}

      {
        test: /\.(js|jsx)$/i,
        use: [
          'cache-loader',
          { loader: 'happypack/loader', options: {threads: 3}}
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'react': resolve('node_modules/react/cjs/react.development.js')
    }
  },
  optimization: {
    minimize: false
  }
})
