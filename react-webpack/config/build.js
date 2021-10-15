// 作用：用于指定生产环境所需要的webpack配置
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
const { BundleAnalyzerPlugin } = WebpackBundleAnalyzer
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  // 在生产环境下，缓存默认是关闭的
  cache: false,
  output: {
    publicPath: './static/'
  },
  plugins: [
    // 用于把打包后的静态资源文件和单页面index.html合并起来。
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: resolve('dist/index.html'),
      minify: true,
      inject: 'body',
      title: 'Hello GP6',
      scriptLoading: 'blocking'
    }),
    // 启动一个bundle分析的端口
    new BundleAnalyzerPlugin({
      analyzerPort: 8888
    }),
    // 在生产打包，把.js文件中的css抽离出来
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            // 这个抽离css的loader不要和style-loader一起用
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 输出路径不对？？？
              publicPath: resolve('dist/static/css')
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      // 对生产环境下中图片压缩
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          { loader: 'image-webpack-loader', options: {} }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react': resolve('node_modules/react/cjs/react.production.min.js')
    }
  },
  optimization: {
    // 使用TerserPlugin进行压缩
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}
