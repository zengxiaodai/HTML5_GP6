<template>
<div class="qf-tabbar">
  <van-tabbar route active-color='#ed3f41'>
    <van-tabbar-item
      to="/home"
      icon="home-o">
      首页
    </van-tabbar-item>
    <van-tabbar-item
      to="/cate"
      icon="search">
      分类
    </van-tabbar-item>
    <van-tabbar-item
      to="/cart"
      icon="shopping-cart-o">
      购物车
    </van-tabbar-item>
    <van-tabbar-item
      to="/user"
      icon="user-circle-o">
      我的
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
