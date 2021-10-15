<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="box" v-text='msg'></view>
		<QfButton />
		<button @tap="skip">跳转到发现页面</button>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import { QfButton } from '@/components'
	export default {
		components: {
			QfButton
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {
			...mapState('test', ['msg'])
		},
		onLoad() {

		},
		methods: {
			skip() {
				uni.navigateTo({
					url: 'pages/find?id=100'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.box {
		width: 750rpx;
		background-color: red;
	}
</style>
