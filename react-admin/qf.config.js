// 模仿vue脚手架对create-react-app环境进行二次封装

const path = require('path')

module.exports = {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  devServer: {
    port: 9001,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [

    ]
  },
  plugins: []
}
