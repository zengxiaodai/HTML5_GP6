<template>
  <div class='app'>
    <keep-alive>
      <router-view name='alive'></router-view>
    </keep-alive>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
html,body { padding: 0; margin: 0; height: 100%; width: 100%; }
.app {
  height: 100%;
  width: 100%;
  background-color: rgba(246, 246, 246, 1);
}

// 修改vant-ui自带的一些样式
.van-notice-bar__content {
  width: 100%;
}
// 解决购物车中的checkbox左右居中的问题
.van-checkbox__icon {
  margin: 0 auto;
}
</style>
