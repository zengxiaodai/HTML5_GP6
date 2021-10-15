const KoaRouter = require('@koa/router')
const router = new KoaRouter()
const checkToken = require('../middlewares/checkToken')

const v = '/api/v1/antd'
const U = require('../controllers/antd/user')
const A = require('../controllers/antd/article')
const Up = require('../controllers/upload')
const D = require('../controllers/antd/dash')

router
.post(`${v}/user/login`, U.login)
.get(`${v}/user/info`, checkToken, U.getUserInfo)
.post(`${v}/user/add`, checkToken, U.addUser)
.get(`${v}/user/list`, checkToken, U.getUserList)
.get(`${v}/user/status`, checkToken, U.changeUserStatus)
.get(`${v}/article/cates`, checkToken, A.getCates)
.post(`${v}/article/update/add`, checkToken, A.articleAddOrEdit)
.get(`${v}/article/list`,checkToken, A.articleList)
.get(`${v}/article/info`, checkToken, A.articleInfo)
.post(`${v}/upload/img`, checkToken, Up.uploadImg)
.get(`${v}/dash/analyse`, checkToken, D.getAnalyseData)


module.exports = router