<template>
<div class="qf-user">
  <h1>个人中心</h1>
  <router-link to='/user/articles' tag='span' active-class='on'>文章</router-link>
  <router-link to='/user/columns' tag='span' active-class='on'>专栏</router-link>

  <!-- 用于显示二级菜单所匹配到的children路由组件 -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.qf-user {
  span {
    padding: 0 15px;
  }
}
.on {
  color: red;
}
</style>
