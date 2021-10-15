// pages/find/find.js
const { calDate, rpx2px } = require('../../utils/util.js')
const { fetchQqMusic } = require('../../utils/request')



const str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.top&searchid=57450921421276595&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E8%85%BE%E8%AE%AF%E9%9F%B3%E4%B9%90%E7%9B%9B%E5%85%B8&_=1629358336444&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&uin=0&g_tk_new_20200303=5381&g_tk=5381&hostUin=0&loginUin=0'
const params = {}
str.split('&').map(ele=>{
    const arr = ele.split('=')
    params[arr[0]] = arr[1]
})
params.w = ''

const list = [
    {id: 1, label:'新品',type:'new', img: ''},
    {id: 2, label:'推荐',type:'rec', img: ''},
    {id: 3, label:'',type:'', img: ''},
]

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgs: [
            { id: 1, src: '/assets/1.png', color: 'red' },
            { id: 2, src: '/assets/2.png', color: 'green' },
            { id: 3, src: '/assets/3.png', color: 'blue' }
        ],
        curIdx: 0,
        name: "王菲",
        page: 1,

        cateArr: [
            { id: 1, label: '内地', value: 'aaa' },
            { id: 2, label: '欧美', value: 'bbb' },
            { id: 3, label: '日韩', value: 'ccc' },
            { id: 4, label: '粤语', value: 'ddd' }
        ],
        curCateIdx: 0,
        curDate: '18日',
        curTime: '上午',

        musicArr: [],
    },

    init() {
        // 如何希望缓存页面，建议在这里调接口
        params.w = this.data.name
        params.p = this.data.page
        fetchQqMusic(params).then(res=>{
            console.log('音乐', res)
            const list = res.data.song.list || []
            this.setData({musicArr: [...this.data.musicArr, ...list]})
            wx.stopPullDownRefresh()
        })
    },

    onLoad(){
        this.init()
    },
    onShow(){
        // 页面每次进入前台时，都会触发
    },
    onReady(){},
    onHide(){},
    onUnload(){},

    onPullDownRefresh: function () {
        this.setData({page: 1, musicArr: []})
        this.init()
    },
    onReachBottom: function () {
        this.setData({page: this.data.page+1})
        this.init()
    },
    onPageScroll(e) {
        console.log('页面滚动', e)
    },

    swiperChange(e) {
        // console.log('e indx', e.detail.current)
        this.setData({curIdx:e.detail.current})
    },
    nameChange(e) {
        // 表单手动取值
        this.setData({name: e.detail.value})
        console.log(this.data.name)
    },
    confirmSearch() {
        console.log('调接口发生搜索')
        this.setData({page:1,musicArr:[]})
        this.init()
    },
    cancelSearch() {
        this.setData({name: ''})
    },
    scroll() {
        console.log('focus')
        wx.pageScrollTo({scrollTop: rpx2px(528)})
    },

    catePickerChange(e) {
        console.log('cate change', e)
        this.setData({curCateIdx: parseInt(e.detail.value)})
    },
    datePickerChange(e) {
        this.setData({curDate: e.detail.value.split('-')[2]+'日'})
    },
    timePickerChange(e) {
        console.log('time change', e)
        var curTime = parseInt(e.detail.value.split(':')[0]) > 12 ? '下午' : '上午'
        console.log(curTime)
        this.setData({curTime})
    }
})