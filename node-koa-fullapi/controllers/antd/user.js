const { creataToken, verifyToken } = require('../../utils/jwt')
// 引入model
const userModel = require('../../models/user')

class UserController {
	static async login(ctx) {
		let { username, password } = ctx.request.body
		const user = await userModel.findOne({username,password})
		
		// 根status状态判断用户是否被禁用了，如果被禁用了，不给token。
		if(user && user._id) {
			if(user.status) {
				const token = creataToken(user)
				ctx.body = { err: 0, msg: 'success', data: {token} }
			}else{
				ctx.body = { err: -1, msg: '你已经被辞退，不能再登录' }
			}
		}else{
			ctx.body = { err: -1, msg: '用户名和密码不匹配' }
		}
	}
	static async getUserInfo(ctx) {
		const u = ctx.user 
		const user = await userModel.findOne({_id: u._id})
		ctx.body = { err: 0, msg: 'success', data: { user }}		
	}
	static async addUser(ctx) {
		let { username, role } = ctx.request.body
		let ele = {
			username,
			password: '666666',
			role,
			role_name: role
		}
		await userModel.insertMany([ele])
		ctx.body = { err: 0, msg: 'success' }
	}
	static async getUserList(ctx) {
		let { name, page, size } = ctx.request.query
		page = parseInt(page || 1)
		size = parseInt(size || 10)
		const params = {
			username: new RegExp((name||''), 'img')
		}
		const total = await userModel.find(params).count()
		const list = await userModel.find(params).limit(size).skip((page-1)*size)
		ctx.body = { err: 0, msg: 'success', data: { total, list }}
	}
	static async changeUserStatus(ctx) {
		let { id, status } = ctx.request.query
		await userModel.updateOne({_id: id}, {$set: {status: parseInt((status)) }})
		ctx.body = {err: 0, msg: 'success'}
	}
}

module.exports = UserController