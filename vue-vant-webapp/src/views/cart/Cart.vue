<template>
<div class="qf-cart">
  <QfNavBar>
    <template #default>
      <span>购物车</span>
    </template>
    <template #right>
      <span>筛选</span>
    </template>
  </QfNavBar>

  <!-- v-if/v-else-if/v-else，不能和v-for不能作用在同一个标签元素 -->
  <QfNoData :show='loaded && list.length===0' />
  <van-swipe-cell v-for='(item,idx) in list' :key='item._id'>
    <van-row type="flex" justify="center" align='center'>
      <van-col span='4'>
        <van-checkbox
          v-model="item.checked"
          @click='rowClick'
        />
      </van-col>
      <van-col span='20'>
        <van-card
          :num="item.num"
          :price="item.good_info.price"
          :desc="item.good_info.desc"
          :title="item.good_info.name"
          :thumb="$img.cdn+item.good_info.img"
        >
          <template #footer>
            <div class="row-btns">
              <span @touchstart='updateNum(item, idx, -1)'>
                <van-button  size="mini">-</van-button>
              </span>
              <span @touchstart='updateNum(item, idx, 1)'>
                <van-button size="mini">+</van-button>
              </span>
            </div>
          </template>
        </van-card>
      </van-col>
    </van-row>
    <template #right>
      <van-button
        square text="删除"
        type="danger"
        style="height:100%;"
        class="delete-button"
        @click='delRow(item, idx)'
      />
    </template>
  </van-swipe-cell>

  <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
    <van-checkbox
      v-model="full"
      @click='fullClick'
    >
      全选
    </van-checkbox>
    <template #tip>
      你的收货地址不支持同城送, <span @click="onEditAddr">修改地址</span>
    </template>
  </van-submit-bar>

</div>
</template>

<script>
import { QfNavBar, QfNoData } from '@/components'
export default {
  name: 'Cart',
  components: {
    QfNavBar,
    QfNoData
  },
  data() {
    return {
      loaded: false,
      full: false,
      list: []
    }
  },
  watch: {
    list() {
      if(this.list.length===0) this.full = false
    }
  },
  computed: {
    total() {
      let t = 0
      this.list.map(ele=>{
        if(ele.checked) t+= ele.num*ele.good_info.price*100
      })
      return t
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$api.fetchCartList().then(res=>{
        console.log('我的购物车列表', res)
        this.list = res.list
        // 异步接口调完成
        this.loaded = true
      })
    },
    isFull() {
      // 每当行checkbox发生变化时，都要判断选中的行数和list.length是否相等
      const checkedRows = this.list.filter(ele=>ele.checked)
      this.full = checkedRows.length === this.list.length
    },
    delRow(item, idx) {
      this.$dialog.confirm({
        title: '警告',
        message: `你确定要删除 ${item.good_info.name} 吗？`,
      }).then(() => {
        // 先弹框
        this.$api.fetchCartDel({cart_id: item._id}).then(()=>{
          this.list.splice(idx, 1)
          // 每次删除完了也要判断是否全选
          this.isFull()
        })
      })
    },
    updateNum(item, idx, num) {
      console.log('num', num)
      // 如果当前数据等于1，不能再减
      if(num===-1 && item.num===1) return false
      const params = { cart_id: item._id, new_num: item.num + num }
      this.$api.fetchCartUpd(params).then(()=>{
        this.list[idx].num = params.new_num
      })
    },
    // 功能：当行的checkbox发生变化时触发
    rowClick() {
      this.isFull()
    },
    fullClick() {
      // 当"全选"checkbox变化时，上面的行列表都同步变化
      this.list.map((ele,idx)=>{
        this.list[idx].checked = this.full
      })
      this.list = JSON.parse(JSON.stringify(this.list))
    },
    onSubmit() {
      console.log('购买')
      let ids = ''
      this.list.map(ele=>{
        if(ele.checked) ids+= (';'+ele._id)
      })
      this.$api.fetchCartSubmit({ids}).then(()=>{
        this.init()
      })
    },
    onEditAddr() {
      console.log('修改地址')
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-cart {
  padding-top: 1.25rem;
  padding-bottom: 2.67rem;
  .van-swipe-cell {
    border-bottom: 1px solid #eeeeee;
    .van-card {
      background-color: white;
      padding-left: 0;
    }
  }
  .van-row {
    background-color: white;
    .row-btns {
      &>span {
        padding: 0 .13rem;
        .van-button {
          padding: 0 .2rem;
        }
      }
    }
  }
}
</style>
