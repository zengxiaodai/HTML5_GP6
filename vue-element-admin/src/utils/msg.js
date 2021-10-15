import { Message } from 'element-ui'

export default {
  success(message,duration,callback) {
    Message.success({
      message,
      duration
    })
    setTimeout(()=>{
      callback && callback()
    }, duration)
  }
}
