// 解决ESLint报错常用的五种方案
// 1、找到eslint的配置文件，修改eslint规则
// 2、使用eslint注释的方式，临时关闭对代码的检测
// 3、在webpack中找到eslint的插件或eslint-loader进行exclude
// 4、使用.eslintignore临时忽略对代码的检测
// 5、老老实实地把eslint错误的改好（建议的做法）

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [ "react", "react-hooks"],
  // 指定检测选项
  parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
  },
  env: {
    es6: true,
    browser: true,
    node: false
  },
  // 用户自定义修改ESLint规则
  // ESLint检测代码有三种检测级别：error=2红色报错，warn=1黄色警告，off=0关闭这条规则。
  rules: {
    // "semi": 0,
    "semi": "off",
    "no-console": "error"
  }
}
