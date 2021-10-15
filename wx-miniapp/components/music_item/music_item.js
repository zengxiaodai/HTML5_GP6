// 小程序自定义组件
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        music: { type: Object, default: {} }
    },

    /**
     * 组件的初始数据
     */
    data: {
        label: {
            0: { label: '新歌', color: '#56E156' },
            1: { label: '老歌', color: '#D8A0FE' }
        }
    },

    ready() {
        console.log('来自父组件传递的数据', this.properties.music)
    },

    lifetimes: {

    },

    pageLifetimes: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        skip(e) {
            // 假如：点击时回传一个音乐id给父组件
            // 在父组件中，有两种方式接收

            // 1、使用自定义事件abc，来接收回传的数据
            this.triggerEvent('abc', e.target.dataset.random)
            
            // 2、model:xxx= 双向绑定语法来接收，tiggerEvent('input')
            // this.triggerEvent('input', e.target.dataset.random)
        }
    }
})
