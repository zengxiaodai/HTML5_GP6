<template>
<div class="qf-cate">
  <QfNavBar>
    <template #default>
      <span>品类</span>
    </template>
  </QfNavBar>

  <div class='panel'>
    <div class="left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item.cate_zh"
          v-for='item in cateList'
          :key='item._id'
        />
      </van-sidebar>
    </div>
    <div class="right">
      <QfNoData width='35%' :show='cache[activeKey] && cache[activeKey].length===0' />
      <van-grid :column-num="3">
        <van-grid-item
          v-for="item in cache[activeKey]"
          :key="item._id"
        >
        <template>
          <div class='good'>
            <img :src='`http://localhost:9999${item.img}`' />
            <div v-text='item.name'></div>
          </div>
        </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
  <QfTabBar />
</div>
</template>

<script>
import { QfNavBar, QfTabBar, QfNoData } from '@/components'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Cate',
  components: {
    QfNavBar,
    QfTabBar,
    QfNoData
  },
  data() {
    return {
      activeKey: 0,
      cateList: []
    }
  },
  computed: {
    ...mapState('good', ['cache']),
    payload() {
      const idx = this.activeKey
      return { idx, cate: this.cateList[idx].cate }
    }
  },
  watch: {
    activeKey() {
      // 当左侧索引变化时，我们先判断vuex->cache有没有当前索引所对应的缓存？
      // 有，直接用，不触发调接口了；
      // 没有，触发调接口，走vuex流程。
      if(!this.cache[this.activeKey]) this.getList(this.payload)
    }
  },
  async created() {
    const res = await this.$api.fetchAllCates({})
    this.cateList = res.list
    this.getList(this.payload)
  },
  methods: {
    ...mapActions('good', ['getList']),
    ...mapMutations('good', ['cleanCache'])
  },
  beforeDestroy() {
    this.cleanCache()
  }
}
</script>

<style lang="scss" scoped>
.qf-cate {
  .left {
    position: fixed;
    top: 1.23rem;
    bottom: 1.33rem;
    left: 0;
    width: 2.27rem;
    overflow-y: scroll;
    .van-sidebar-item--select::before {
      background-color: transparent;
    }
    .van-sidebar-item--select {
      color: red;
    }
  }
  .left::-webkit-scrollbar {
    display: none;
  }
  .right {
    position: fixed;
    top: 1.23rem;
    bottom: 1.33rem;
    left: 2.27rem;
    right: 0;
    overflow-y: scroll;
    .good {
      &>img {
        display: block;
        width: 1.87rem;
        height: 1.87rem;
        margin: 0 auto;
      }
      text-align: center;
      font-size: .32rem;
    }
  }
  .right::-webkit-scrollbar {
    display: none;
  }
}
</style>
