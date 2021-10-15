
var app = new Vue({
  el: '#app',
  data: {
    cates: [
      { id: 1, label: '全部', tab: '' },
      { id: 2, label: '精华', tab: 'good' },
      { id: 3, label: '问答', tab: 'ask' },
      { id: 4, label: '招聘', tab: 'job' },
      { id: 5, label: '分享', tab: 'share' }
    ],
    tab: '',
    page: 1,
    list: []
  },
  computed: {
    newList() {
      // this.cates  this.list
      this.list.map((ele,idx)=>{
        // 根据当前ele.tab，去this.cates找到对应的中文
        // var re = this.cates.find(ele2=>ele2.tab = ele.tab)
        var re = this.cates.filter(e=>e.tab===ele.tab)
        console.log('re', re)
        this.list[idx]['label'] = ele.top ? "置顶" : (ele.good ? "精华": (re[0]?.label||""))
        // 当tab是“全部”时，我就手动修改后端给的tab，将其变成""
        this.list[idx]['tab'] = this.tab==="" ? "" : ele.tab
      })
      return this.list
    }
  },
  created() {
    this.init()
  },
  watch: {
    tab() {
      this.page = 1
      this.init()
    },
    page() { this.init() }
  },
  methods: {
    init() {
      var data = {
        tab: this.tab,
        page: this.page,
        limit: 5,
        mdrender: true
      }
      fetch('/topics', 'get', data).then(list=>{
        console.log('文章列表', list)
        this.list = list
      })
    }
  }
})
