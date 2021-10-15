// index.js

const { rpx2px, getImage } = require('../../utils/util')

const app = getApp()

console.log('全局数据', app.globalData)

Page({
  data: {
    avatar: '',
    order_no: 'QF2021082008282832738'
  },

  onReady() {
    this.initDraw()
  },

  start1() {
    // this.animate()的语法说明
    // 第一个参数：执行动画的目标元素
    // 第二个参数：一组帧动画
    // 第三个参数：这一组动画执行的总时间（单位是毫秒）
    // 第四个参数：用于性能优化，清除目标元素身上的动画
    this.animate(
      '.container', 
      [
        { opacity: 1.0, scale: [1,1], rotate: 0, backgroundColor: '#FF0000' },
        { opacity: 0.5, scale: [0.8, 0.8],  rotate: 45, backgroundColor: '#00FF00'},
        { opacity: 0.3, scale: [0.5, 0.5], rotate: 75, backgroundColor: '#f0f098' },
        { opacity: 0.1, scale: [0.2, 0.2], rotate: 80, backgroundColor: '#FF0000' },
      ], 
      5000, 
      () => {
        // this.clearAnimation的语法说明
        // 第一个参数：要清楚哪个目标元素上的动画
        // 第二个参数：是否清除最后一帧动画属性的状态，默认是false，默认不清除最后一帧
        // 第三个参数：表示动画清除已完成的回调
        this.clearAnimation(
          '.container', 
          { opacity: true, rotate: true, scale: true }, 
          () => {
            console.log("当前元素动画已清楚")
          }
        )
      }
    )
  },

  start2() {
    this.animate(
      '.door',
      [
        { width: '100%' },
        { width: '60%' },
        { width: '80%' },
        { width: '35%' },
        { width: 0 }
      ],
      5000,
      ()=>{
        this.clearAnimation(
          '.door',
          {},
          ()=>console.log('动画清除成功')
        )
      }
    )
  },

  initDraw() {
    const $ = wx.createSelectorQuery()
    $.select('#can')
    .fields({ node: true, size: true })
    .exec((res)=>{
      // 通过DOM节点获取上下文对象（得到一支画笔）
      const can = res[0].node
      this.can = can
      const ctx = can.getContext('2d')
      // 画矩形
      ctx.fillStyle = 'red'
      ctx.fillRect(0,0,rpx2px(750),rpx2px(400))
      // 画文字
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      const fs = rpx2px(60)
      ctx.font = 'bold '+fs+'px serif'
      ctx.fillText('优惠券', rpx2px(375)-fs*1.5, fs+10)
      // 画一张图片
      getImage('../../assets/a.png').then(image=>{
        ctx.drawImage(image, rpx2px(375)-100, rpx2px(120), 100, 100)
      })
      
  })},
  save() {
    wx.canvasToTempFilePath({
      canvas: this.can,  // 新写法时用canvas实例对象
      x: 0,
      y: 0,
      width: rpx2px(750),
      height: rpx2px(400),
      destWidth: 2000,
      height: 2000*400/750,
      success(res){
        console.log('临时路径', res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath
        })
      },
      fail(err) {
        console.log('图片失败', err)
      } 
    })
  },

  startPlay() {
    const audioCtx = wx.createInnerAudioContext()
    console.log('ctx', audioCtx)
    audioCtx.play()
  },

  takeCamera() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          avatar: res.tempImagePath
        })
      }
    })
  },

  selectPay() {
    // 从底部弹起一个选择器
    wx.showActionSheet({
      itemList: ['使用积分兑换', '直接支付'],
      success (res) {
        console.log('用户选择的兑换方式是：', res.tapIndex)
        if(res.tapIndex===1) {
          console.log('调用微信支付')
          // 1、调后端接口，把商品信息传递给后端
          // 2、后端对这些商品、appid、app密钥，当作入参，向微信服务器发起支付请求
          // 3、接收后端返回的支付信息（package、signture、）
          // 4、wx.requestPayment({})
        }else if(res.tapIndex===0) {
          console.log('跳转到积分支付页面')
        }
      }
    })
  },

  chooseImg() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log('tempFilePaths', tempFilePaths)
      }
    })
  },

  copy() {
    // 小程序是App，默认没有这个交互“长按复制”
    wx.setClipboardData({
      data: this.data.order_no
    })
  },

  scan() {
    var that = this
    wx.scanCode({
      scanType: 'barCode',
      success(res){
        console.log('扫码结果', res)
        that.setData({order_no: res.result})
      }
    })
  }
})
