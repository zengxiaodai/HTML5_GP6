# 关于SSR相关简介

### 面试题：MVC、MVP、MVVM之间的差异？

- M + V 是如何组装起来的？在哪里执行组装的？

- 对软件架构来讲：前后端分离、前后端分离、同构开发
- 对软件架构来讲：CS架构（java桌面应用、.net桌面应用）、BS架构（现代应用）
- 对MVVM框架来讲：SSR服务端渲染、BSR客户端渲染

### 面试题：SSR和BSR分别有哪些优势和劣势？

- SSR应用场景：首屏优化，一些对SEO有比较高要求的页面。

- SSR，视图和数据在服务端器进行组装，服务端压力较大，前后端不用分离，业务维护难度较大，不利于做复杂交互。用户访问时显示速度更快、体验更好、有利于SEO优化。
- BSR，完全相反。

### 推论出一个问题

- 在同一个应用程序中，如果有一部分需要SSR，其它页面BSR，那怎么办？同构开发——在同一个应用程序既有SSR，也有BSR。

### 两个服务端渲染框架

- Next.JS -> 是基于React技术栈的一个SSR框架。
Nuxt.JS -> 是基于Vue技术栈的一个SSR框架。

- 注意：无论是Next.JS还是Nuxt.JS都是基于Node.JS的服务端应用程序，最后上线都要部署到云服务器上并跑进来。


# 环境搭建

```
# 创建Next项目

cnpm i create-next-app -g
create-next-app react-ssr-next

# 启动项目
cd react-ssr-next
npm run dev

# 打包上云服务
npm run build
npm start
```
