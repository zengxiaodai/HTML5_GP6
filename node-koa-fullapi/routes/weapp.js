const KoaRouter = require('@koa/router')
const router = new KoaRouter()

const v = '/api/v1/weapp'
const W = require('../controllers/weapp')

// RESTful API 规范（一种需要鉴权，一种不需要鉴权）
router
.post(`${v}/login`, W.login)

module.exports = router
