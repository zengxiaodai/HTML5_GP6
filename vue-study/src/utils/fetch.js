var baseURL = 'https://cnodejs.org/api/v1'



var $ = window.$

export default function fetch(url, methods, data) {
  return new Promise((resolve, reject)=>{
    $.ajax({
      url: baseURL+url,
      methods,
      data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
