webpapp：长得像、交互也像APP的H5网页。

- PC官网：https://www.jd.com/
- H5官网：https://m.jd.com/

- webpapp常用：vw/vh，rem。

px   绝对单位
em   相对单位，相对于最近一个父组件元素的font-size。
rem  相对单位，永远相对html根元素的font-size。

iphoneX  html.fz = 37.5
iphone plus html.fz = 41.4  

原理：无论什么屏幕，页面开始渲染时，手动通过DOM操作，把html.fontSize=当前屏幕总宽度的1/10。
