
class DashController {
	static getAnalyseData(ctx) {
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {
				orderSale: [
					{ id: 11, name: '衬衫', sale: 5 },
					{ id: 12, name: '羊毛衫', sale: 20 },
					{ id: 13, name: '雪纺衫', sale: 36 },
					{ id: 14, name: '裤子', sale: 10 },
					{ id: 15, name: '高跟鞋', sale: 10 },
					{ id: 16, name: '袜子', sale: 30 }
				],
				cityTemp: [
					{
						id: 1,
						city: '伦敦',
						list: [2,5,7,8,9,4,6,8,9,2,12,15]
					},
					{
						id: 2,
						city: '东京',
						list: [2,25,7,28,19,4,6,8,19,12,12,15]
					}
				]
			}
		}
	}
}

module.exports = DashController