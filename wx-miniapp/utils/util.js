function calDate() {
  var at = (Date.now()%(1000*60*60*24) - 1000*60*60*12) > 0 ? '下午' : '上午'
  return at
}

function rpx2px(num) {
  const info = wx.getSystemInfoSync()
  return parseInt(info.windowWidth*num/750)
}

// 用于支持最新drawImage()写法
async function getImage(path) {
  const c = wx.createOffscreenCanvas({type: '2d'})
  const image = c.createImage()
  await new Promise(resolve => {
      image.onload = resolve
      image.src = path
  })
  return image
}

// 模块化语法：CommonJS模块化语法
module.exports = {
  calDate,
  rpx2px,
  getImage
}
