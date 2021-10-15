const articleModel = require('../../models/article')

class ArticleController {
	static getCates(ctx) {
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {
				list: [
					{ _id: 1, cate: 'news', cate_zh: '企业新闻' },
					{ _id: 2, cate: 'product', cate_zh: '明星产品' },
					{ _id: 3, cate: 'society', cate_zh: '社会公益' }
				]
			}
		}
	}
	static async articleAddOrEdit(ctx) {
		let { title, author, img, cate, content, id } = ctx.request.body
		const u = ctx.user
		let ele = {
			title,
			author,
			img,
			cate,
			content
		}
		let info = null
		if(id) {
			ele['check_status'] = 0
			ele['create_time'] = Date.now()
			info = await articleModel.updateOne({_id: id}, {$set: ele})
		}else{
			info =  await articleModel.insertMany([ele])
		}
		ctx.body = { err: 0, msg: 'success', data: {info}}
	}
	static async articleList(ctx) {
		let { page, size, title, cate, start_time, end_time } = ctx.request.query
		page = parseInt(page||1)
		size = parseInt(size||10)
		start_time = parseInt((start_time||0))
		end_time = parseInt((end_time||0))
		console.log('size---', size)
		const params = {
			title: new RegExp((title||''), 'img'),
			cate: cate || '',
			status: 1,
			create_time: { $gte: start_time, $lte: end_time }
		}
		if (!start_time) delete params.create_time
		if (!params.cate) delete params.cate
		const total = await articleModel.find(params).count()
		const list = await articleModel.find(params).limit(size).skip((page-1)*size).sort({create_time: -1})
		ctx.body = { err: 0, msg: 'success', data: {total, list }}
	}
	
	static async articleInfo(ctx) {
		let { id } = ctx.request.query
		const info =  await articleModel.findOne({_id: id})
		ctx.body = {err: 0, msg: 'success', data: {info }}
	}
}

module.exports = ArticleController