# 环境搭建

- TypeScript是JS的超集
- TypeScript是强类型语言
- 新增两大类知识：类型、面向对象OOP

```
cnpm i typescript -g
tsc -v
tsc -h
```
```
# 创建配置文件
tsc --init
```
- 在node环境默认不支持.ts代码的运行，怎么办？
```
tsc hello.ts
node hello.js
```

# 类型知识点

- null、undefined 也是一种TS类型，但它们是其它类型的子类型
