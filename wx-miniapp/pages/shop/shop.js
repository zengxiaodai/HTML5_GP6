// pages/shop/shop.js

const { getAddr, calDis } = require('../../utils/map.js')

const list = [
    {
        id: 1,
        shop_name: "奈雪的茶PRO",
        logo: '',
        longitude: 116.307520,
        latitude: 39.984060,
    },
    {
        id: 2,
        shop_name: "瑞幸咖啡",
        logo: '',
        longitude: 100.507520,
        latitude: 39.984060,
    },
    {
        id: 3,
        shop_name: "尊宝比萨",
        logo: '',
        longitude: 120.507520,
        latitude: 29.984060,
    }
]

Page({

    /**
     * 页面的初始数据
     */
    data: {
        pos: {},
        street: '',
        list: [],
        disPad: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const info = wx.getSystemInfoSync()
        const h = info.statusBarHeight
        this.setData({disPad: h+10})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var that = this

        wx.getLocation({
            type: 'wgs84',
            success (res) {
              console.log('获取用户位置成功', res)
              that.setData({pos: res})

              getAddr(res).then(res=>{
                console.log('解析成功', res.address_component.street)
                that.setData({street: res.address_component.street})
              })

              that.init()
            },
            fail(err) {
              console.log('获取用户位置失败', err)
            }
        })
    },

    init(flag) {
        setTimeout(()=>{
            // 计算距离的任务，在每次调接口成功时执行
            calDis(this.data.pos, list).then(res=>{
                console.log('list dis', res.elements)
                var newList = list.map((ele,idx)=>({...ele, dis: res.elements[idx].distance}))
                this.setData({list: flag ? [...this.data.list, ...newList] : newList})
                wx.stopPullDownRefresh()
            })
        }, 500)
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        this.init()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.init(true)
    },

    skipToDetail(e) {
        // console.log()
        const item = e.currentTarget.dataset.item
        // 只能通过查询字符串进行路由传参
        wx.navigateTo({
          url: '/pages/shop_info/shop_info?id='+item.id
        })
    }
})