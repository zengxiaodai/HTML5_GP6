module.exports = api => {
  api.cache(true)
  return {
    // Babel预设：用于编译JS语法版本（ES6、TS、JSX）
    // @babel/core 是Babel编译的核心代码（它不是预设）
    // @babel/preset-env 用于编译ES6代码
    // @babel/preset-typescript 用于编译TS代码
    // @babel/preset-react 用于编译JSX代码
    presets: [
      ['@babel/preset-env', {}],
      ['@babel/preset-react', {}]
    ],
    // Babel插件：用于弥补Babel预设中的漏洞和不足。
    plugins: [
      // 用于支持ES6中的装饰器语法
      ['@babel/plugin-proposal-decorators', {legacy:true}],
      ['@babel/plugin-syntax-dynamic-import', {}]
    ]
  }
}
