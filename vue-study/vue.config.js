// module.exports = {}
// 每次修改vue.config.js都要重启项目
module.exports = function() {
  return {
    devServer: {
      // 代理
      proxy: {
        '/soso': {
          target: 'https://c.y.qq.com',
          changeOrigin: true
        },
        '/api': {
          target: 'https://cnodejs.org',
          changeOrigin: true
        }
      }
    }
  }
}
