// pages/shop_info/shop_info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: {
            id: 3,
            shop_name: "尊宝比萨",
            logo: '',
            longitude: 120.507520,
            latitude: 29.984060,
            addr: '创业一路45号',
            phone: '0755-89897878'         
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opt) {
        // 只能在这个生命周期中接收路由的传参数
        console.log('opt', opt.id)
        // 使用id调接口，获取店铺详情
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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

        /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function (e) {
        if(e.from==='menu') {
            // 点击右上角胶囊按钮进行分享
            return {
                title: this.data.info.shop_name,
                path: '/pages/shop_info/shop_info',
                imageUrl: '/assets/b.png'
            }
        }else{
            // 点击 button[open-type='share']分享
            return {
                title: '分享赢取积分',
                path: '/pages/index/index',
                imageUrl: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/191989/28/9554/48356/60d041cdEbe671d6d/2f0735d2ddda2c0c.jpg.webp'
            }
        }
    },


    navTo() {
        // 打开微信内置的腾讯地图，进一步引导用户到第三方地图App中去导航
        wx.openLocation({
            latitude: this.data.info.latitude,
            longitude: this.data.info.longitude,
            name: this.data.info.shop_name,
            address: this.data.info.addr
        })
    },
    call() {
        wx.makePhoneCall({
            phoneNumber: this.data.info.phone
        })
    }
})