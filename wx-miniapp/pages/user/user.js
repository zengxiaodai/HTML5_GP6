// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canUseProfile: wx.canIUse('getUserProfile'),
        info: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 调接口，从后端数据库中获取用户信息
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


    getInfo(e) {
        console.log('用户信息', e.detail.userInfo)
        // 用户点击button[open-type='getUserInfo']
        // 在回调事件中拿到用户信息（头像、用户名等）
        // 调接口，把用户信息传递给后端，进行持久化存储
        // 下次，再进入个人中心时，先调getUserInfo后端接口获取用户info
        if(this.data.canUseProfile) {
            const that = this
            wx.getUserProfile({
                desc: '为了更好体验请登录',
                success(res) {
                    console.log('用户信息', res)
                    that.setData({info: res.userInfo})
                }
            })
        }else{
            
            
            const that = this
            wx.getUserInfo({
                success(res){
                    console.log(res);
                    that.setData({info:res.userInfo})
                }
            })
          

        }
    }
})