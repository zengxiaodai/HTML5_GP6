// var https = require('https')
const axios = require('axios')
const { creataToken } = require('../utils/jwt')


class WeappController {
	// 小程序登录（后端逻辑）
	static async login(ctx) {
		const { code } = ctx.request.body
		// 使用 code、appid、appsecret当作入参，调微信服务器的api接口
		// 获取 openid, session_key ，入库、生成token，响应前端
		const params = {
			js_code: code,
			appid: 'wx2f8b38986e5e2ccf',
			secret: '935ba4a3f3a0c74426493678dd7e5912',
			grant_type: 'authorization_code'
		}
		const res = await axios({
			url: 'https://api.weixin.qq.com/sns/jscode2session',			
			method: 'get',
			params
		})
		console.log('来自微信服务器返回的用户数据', res.data)
		// 把openid添加用户表中（省略）
		// 根据 openid 和 session_key 生成token
		const token = creataToken(res.data)
		// 响应前端
		ctx.body = {
			err: 0,
			msg: 'success',
			data: { token }
		}
	}
}

module.exports = WeappController