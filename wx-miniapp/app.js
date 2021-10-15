// App根组件（入口文件）

const { fetchLogin } = require('./utils/request')

App({
  // 是App根组件的第一个生命周期
  onLaunch() {

    const that = this

    // 获取用户有哪些可用的授权
    wx.getSetting({
      success (res) {
        console.log('settings', res.authSetting)
        if(!res['scope.userLocation']) {
          // 用户第一次访问当前小程序时，使用下面这个api,
          // 同时在app.json中添加 permission字段，才能弹框
          wx.getLocation({
            type: 'wgs84',
            success (res) {
              console.log('获取用户位置成功', res)
              // 把用户位置数据放在全局的globalData上
              console.log('this', that)
              that.globalData.pos = res
            },
            fail(err) {
              console.log('获取用户位置失败', err)
            }
          })
        }
      }
    })

    // 小程序登录流程（这是真正的登录，用户是没有感知的）
    // 什么是code？是微信服务给用户的一个临时登录凭证（它的有效期是5分钟）
    wx.login({
      success(res){
        console.log('获取code成功', res)
        const code = res.code
        // 通过request请求把code发送给后端服务器，能得到token。
        return
        fetchLogin({code}).then(res=>{
          console.log('登录成功', res)
          // 这里建议使用同步方法存储token，原因app.js执行进入首页要调接口（需要token）
          wx.setStorageSync('token', res.data.token)
        })
      }
    })

  },
  // 这个globalData相当于是web中window，它没有响应式
  // 它不是状态管理工具，当globalData发生变化，页面不会自动更新
  // 在Page组件或者Component组件中，getApp().globalData 可以访问这些全局数据
  globalData: {
    userInfo: null,
    num: 100,
    pos: {}
  }
})
