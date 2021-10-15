import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 构建函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 是 initMixin 这个装饰器给的
  this._init(options)
}

// “局部”装饰器
initMixin(Vue)  // _init()
stateMixin(Vue)  // 把与响应式有关的东西都放在this上
eventsMixin(Vue) // 把$on/$off/$emit放在this上
lifecycleMixin(Vue)  // _update  把$destroy/$forceUpdate放在this上
renderMixin(Vue) // _render  把$nextTick放在this上

export default Vue
