<template>
<view>
  <!-- 文章详情页面 -->
  <web-view
    :src="info.src+'?id'+info.id"
    :webview-styles="styles"
    @onPostMessage='getH5Msg'
  >
  </web-view>
</view>
</template>

<script>
export default {
  data() {
    return {
      styles: {
        progress: {
          color: '#FF3333'
        }
      },
      info: {
        id: 123,
        src: 'https://uniapp.dcloud.io/static/web-view.html', // vue/react
        comments: [],
        jifen: 20
      }
    }
  },
  onLoad(opt) {
    console.log('id', opt)
    // 调接口，获取文章详情
  },
  methods: {
    getH5Msg(e) {
      console.log('H5有消息来了', e)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
