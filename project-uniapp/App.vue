<script>
	export default {
		onLaunch: function() {
			console.log('App Launch', '启动了')

			// #ifndef MP-WEIXIN
			// uni.login({
			// 	success(res) {
			// 		console.log('code', res)
			// 	}
			// })
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
