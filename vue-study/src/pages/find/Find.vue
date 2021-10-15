<template>
<div>
  <h1>发现</h1>
  <!-- 使用router-link实现路由跳转，被称为“声明式导航” -->
  <!-- <div class='article' v-for='item in list' :key='item.id'>
    <router-link tag='div' :to='`/find/detail?id=${item.id}`'>
      <div v-text='item.title'></div>
      <div>文章描述。。。。</div>
      <div>2021-6-30</div>
    </router-link>
  </div> -->

  <!-- 使用this.$router()实现路由跳转，被称为“编程式导航” -->
  <!-- <div class='article'
    v-for='item in list'
    :key='item.id'
    @click='skipToDetail(item)'>
    <div v-text='item.title'></div>
    <div>文章描述。。。。</div>
    <div>2021-6-30</div>
  </div> -->

  <!-- <router-link tag='div' :to='`/find/detail/${item.id}`'> -->
  <!-- <div class='article' v-for='item in list' :key='item.id'>
    <router-link tag='div' :to='{name:"fd", params:{id:item.id+""}}'>
      <div v-text='item.title'></div>
      <div>文章描述。。。。</div>
      <div>2021-6-30</div>
    </router-link>
  </div> -->

  <div
    class='article'
    v-for='item in list'
    :key='item.id'
    @click='skipToDetail2(item)'>
    <div v-text='item.title'></div>
    <div>文章描述。。。。</div>
    <div>2021-6-30</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: '学习Vue就这么简单', desc: '' },
        { id: 2, title: '学习React就这么简单', desc: '' },
        { id: 3, title: '学习小程序就这么简单', desc: '' },
        { id: 4, title: '学习Webpack就这么简单', desc: '' }
      ]
    }
  },
  methods: {
    skipToDetail(item) {
      console.log('$route', this.$route)
      console.log('$router', this.$router)
      // this.$router.push()/replace()/back()
      // 路由操作，实际上是一个“栈”操作，先进后出。
      // .push() 向路由栈中追加一条路由信息（入栈操作）
      // .replace() 把路由栈最顶部的那条路由信息替换成新的路由信息
      // .back() 把路由栈顶的路由信息删除（出栈操作）
      this.$router.push(`/find/detail?id=${item.id}`)
    },
    skipToDetail2(item) {
      // this.$router.push(`/find/detail/${item.id}`)
      this.$router.push({name:'fd',params:{id: item.id+''}})
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
</style>
