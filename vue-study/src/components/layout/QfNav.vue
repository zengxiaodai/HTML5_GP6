<template>
<!-- 菜单 -->
<div class="qf-nav">
  <div class="nav-wrap">
    <span>LOGO</span>
    <router-link to='/' tag='span' exact exact-active-class='on'>
      <span>首页</span>
    </router-link>
    <router-link to='/user' tag='span' exact exact-active-class='on'>
      <span>会员</span>
    </router-link>
    <!-- <router-link to='/find' tag='span' exact exact-active-class='on'>
      <span>发现</span>
    </router-link> -->
    <router-link :to='{name:"f"}' tag='span' active-class='on'>
      <span>发现</span>
    </router-link>
    <router-link to='/ask' tag='span' exact exact-active-class='on'>
      <span>等你来答</span>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.qf-nav {
  .nav-wrap {
    width: 80%;
    margin: 0 auto;
    &>span {
      padding: 0 20px;
      cursor: pointer;
      line-height: 80px;
      &>span {
        border-bottom: 3px solid transparent;
      }
    }
    &>span.on span {
      font-weight: bold;
      border-bottom-color: blue;
    }
  }
}
</style>
