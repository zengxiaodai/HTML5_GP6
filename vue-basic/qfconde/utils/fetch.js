var baseURL = 'https://cnodejs.org/api/v1'

function fetch(url, method, data) {
  return new Promise(function(resolve, reject){
    $.ajax({
      url: baseURL+url,
      method,
      data,
      success(res) {
        // 数据过滤
        if(res.success) resolve(res.data)
        else reject({err: 1, msg: 'fail'})
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
