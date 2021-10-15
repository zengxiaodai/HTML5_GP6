<template>
<div class="qf-home">
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <!-- 通知栏 -->
    <van-notice-bar
      color="#ffffff"
      background="#000000"
      mode="closeable"
      v-if='noticeShow'
      left-icon="info-o">
      <template>
        <div class="notice">打开京东APP，购物更轻松</div>
      </template>
      <template #left-icon>
        <div class="left">
          <span @click='noticeShow=false'>X</span>
          <span>JD</span>
        </div>
      </template>
      <template #right-icon>
        <div class='open'>立即打开</div>
      </template>
    </van-notice-bar>

    <!-- 搜索框 S -->
    <van-search
      show-action
      disabled
      label="地址"
      :placeholder="tip"
      background='#c82519'
      shape="round"
    >
      <template #action>
        <div v-show='!token' class="login" @click="onLogin">登录</div>        
      </template>
      <template #left>
        <div class="nav">
          <img :src='$img.navIcon' />
        </div>
      </template>
      <template #label>
        <div class="logo">
          <span>JD</span>
        </div>
      </template>
    </van-search>
    <!-- 搜索框 E -->

    <!-- 轮播图 S -->
    <van-swipe
      indicator-color="white"
      :autoplay='3000'
    >
      <van-swipe-item v-for='item in imgs' :key='item.id'>
        <img v-lazy="item.src" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 E -->

    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      商品列表
    </van-divider>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="page++"
      :immediate-check='false'
    >
      <!-- 商品列表 S -->
      <div v-for='i in (Math.floor(list.length/2))' :key='i'>
        <GoodGrid :row='[list[2*i-2], list[2*i-1]]'  />
      </div>
    </van-list>
  </van-pull-refresh>
  <!-- 商品列表 E -->

  <QfTabBar />
</div>
</template>

<script>
import GoodGrid from './components/GoodGrid.vue'
import { QfTabBar } from '@/components'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    GoodGrid,
    QfTabBar
  },
  data() {
    return {
      noticeShow: true,
      tips: [
        { id: 1, tip: '华为机顶盒', good_id: 'HW568782' },
        { id: 2, tip: '小米手机', good_id: 'HW568781' },
        { id: 3, tip: '苹果电脑', good_id: 'HW568783' },
        { id: 4, tip: '千锋书包', good_id: 'HW568784' }
      ],
      imgs: [
        { id: 1, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/36481/38/15938/127272/60ebf22aE910355f6/b127c8e967f182f2.jpg!cr_1053x420_4_0!q70.jpg.dpg' },
        { id: 2, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/190104/7/11081/159243/60dd2b9fE061590d0/3cb23988b097f1b9.jpg!cr_1053x420_4_0!q70.jpg.dpg' },
        { id: 3, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/173909/3/18818/110589/60e7b451Ef30b72da/c52163e004bc176d.jpg!cr_1053x420_4_0!q70.jpg.dpg' }
      ],
      list: [],
      // 理解：表示“触底加载”这个交互行为正在发生（还没有结束）
      // 问题：如果loading=true，将导致下一次的“触底加载”行为失效
      // 方案：当触底时调接口成功后，把loading=false
      loading: false,
      // 理解：表示“下拉刷新”这个交互行为正在发生（还没有结束）
      // 问题：如果refreshing=true，下拉刷新的效果“卡”住了
      // 方案：当下拉刷新时，在调接口成功后把refreshing=false
      refreshing: false,
      // 理解：表示数据库是否还有数据，一般需要后端返回一个total。
      // 问题：如果finished=true，这会导致下拉刷新后触底加载“失效”
      // 方案：每次下拉刷新这个行为完成后，把finished=false
      finished: false,
      page: 1
    }
  },
  computed: {
    ...mapState(['token']),
    tip() {
      return this.tips[Math.floor(Math.random()*this.tips.length)].tip
    }
  },
  mounted() {
    // this.onLoad()
    console.log('token', this.token)
    this.getList()
  },
  watch: {
    page() {
      this.getList()
    }
  },
  methods: {
    getList() {
      this.$api.fetchGoodList({page: this.page, size:6}).then(res=>{
        console.log('商品列表', res)
        if(this.page===1) {
          this.list = res.list
          this.finished = false
          this.refreshing = false
        }else{
          this.list = [...this.list, ...res.list]
          this.loading = false
          // 如果数据库没有数据了，要把“触底加载”功能关闭掉
          if(this.list.length >= res.total) {
            this.finished = true
          }
        }
      })
    },
    onRefresh() {
      this.page = 1
      this.getList()
    },
    onLogin() {
      console.log('登录')
    }

  }
}
</script>

<style lang="scss" scoped>
.qf-home {
  background: rgba(246, 246, 246, 1);
  padding-bottom: 2rem;
}

// 编写notice-bar的样式
.van-notice-bar {
  padding-right: 0;
  .open {
    background: red;
    height: 100%;
    padding: 0 .13rem;
    line-height: 1.07rem;
  }
  .notice {
    text-align: center;
    width: 100%;
  }
  .left {
    &>span:first-child {
      padding-right: .21rem;
    }
  }
}

// 编写search的样式
.van-search {
  .nav {
    width: .67rem;
    height: .67rem;
    padding-right: .4rem;
    &>img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .login {
    color: white;
  }
  .logo {
    font-size: .4rem;
    color: #c82519;
  }
}

.van-swipe {
  margin-top: .27rem;
  img {
    display: block;
    width: 9.33rem;
    height: 3.73rem;
    margin: 0 auto;
  }
}



</style>
