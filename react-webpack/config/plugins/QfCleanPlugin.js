const del = require("del")
const path = require("path")

// 自定义定义插件
class QfCleankPlugin {
  // apply是webpack plugin的入口方法
  apply(compiler) {
    // 触发插件运行
    compiler.hooks.emit.tap('qf-clean-plugin', () => {
      // 使用del这个库执行删除操作
      try {
        const deleted = del.sync(['*'], {
          cwd: path.resolve(__dirname, '../../dist'),
          dot: true,
          ignore: []
        })
      } catch (error) {
        throw error
      }
    })
  }
}
module.exports = QfCleankPlugin
