<template>
  <div class="qf-container">
    <!-- 视图容器：用于显示url匹配成功的vue组件 -->
    <!-- 这个视图容器是有名字，叫default -->
    <router-view></router-view>
    <!-- <router-view name='default'></router-view> -->
    <router-view name='qf'></router-view>

  </div>
</template>

<script>
export default {
  name: 'QfContainer'
}
</script>

<style lang="scss" scoped>
.qf-container {
  width: 700px;
  margin: 20px auto;
  text-align: center;
}
</style>
