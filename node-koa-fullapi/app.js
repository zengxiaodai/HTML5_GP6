const Koa = require('koa')
const path = require('path')
const app = new Koa()

// 连接数据库
require('./utils/connet')

// 静态资源服务：向客户端提供html、css、图片等资源
app.use(require('koa-static')(path.resolve(__dirname, 'public')))

// HTTP的GET参数，在ctx.request.query中取出（不用做其它中间件处理）
// HTTP的POST参数，在ctx.request.body中取出（需要下面这个中间件处理）
app.use(require('koa-body')({multipart: true}))

// vue webapp restful api
app.use(require('./routes/webapp').routes())
// vue element restful api
app.use(require('./routes/element').routes())
// react antd restful api
app.use(require('./routes/antd').routes())
// 小程序接口
app.use(require('./routes/weapp').routes())

app.listen(9999, ()=>console.log('server is running on 9999'))



