// 小程序中调接口会跨域，但没有CORS同源策略，所以不用做什么代理。
const baseURL = 'http://localhost:9999'
// 上线时，要把baseUrl改成 https 协议的线上地址，
// 并且要在小程序管理后台的“开发设置”中添加这个baseURL。

function fetch(url,method,data) {
    return new Promise((resolve, reject)=>{
        wx.request({
          url,
          method,
          data,
          // 添加token，也建议使用同步方法添加token
          headers: {
            Authorization: wx.getStorageSync('token')
          },
          success(res){
            resolve(res.data)
          },
          fail(err){
            wx.showToast({
                title: '网络异常',
                icon: 'error',
                duration: 2000
            })
          }
        })
    })
}

function fetchLogin(data) {
    return fetch(
        'http://localhost:9999/api/v1/weapp/login', 
        'post', 
        data
    )
}

function fetchQqMusic(data) {
    return fetch(
        'https://c.y.qq.com/soso/fcgi-bin/client_search_cp',
        'get',
        data
    )
}


module.exports = {
    fetchLogin,
    fetchQqMusic
}