Vue.component('qf-cnode-list', {
  template:`
  <div class='article-list'>
    <div class='article' v-for='row in data'>
      <img :src='row.author.avatar_url' />
      <div class='num'>
        <span v-text='row.reply_count'></span>
        <span>/</span>
        <span v-text='row.visit_count'></span>
      </div>
      <span
        :class='{
          label: true,
          on: (row.top || row.good)
        }'
        v-text='row.label'
        v-if='(row.top || row.good || (!["share","ask","good","job"].includes(row.tab)))'
      ></span>
      <span class='title' v-text='row.title'></span>
      <span class='time' v-cloak>{{row.last_reply_at | time}}</span>
    </div>
  </div>
  `,
  props: {
    data: { type: Array, required: false, default: [] }
  },
  filters: {
    time(val) {
      var s = Math.floor((Date.now()-Date.parse(val))/1000) // 单位：秒
      // 分钟前  小时前  天前  月前  年前
      var d = s/(60*60*24) // 单位：天
      return d>=30 ? (d/30>12 ? (Math.floor(d/(30*12))+'年前') : Math.floor(d/30)+'月前' )
      : (d<1 ? (d*24<1 ? (Math.floor(d*24*60)+'分钟前'): (Math.floor(d*24)+'小时前')) : Math.floor(d)+'天前')
    }
  },
  updated() {
    console.log('newList', this.data)
  }
})

// 如果row.top=true  显示、绿色的置顶
// row.good=true  显示、绿色的精华
