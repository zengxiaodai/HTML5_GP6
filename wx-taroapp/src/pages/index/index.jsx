import { Component, useState } from 'react'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro, { useReady } from '@tarojs/taro'

import './index.scss'

const arr = [
  {id:1, label:'推荐1',value:'a'},
  {id:2, label:'推荐2',value:'b'},
  {id:3, label:'推荐3',value:'c'},
  {id:4, label:'推荐4',value:'d'},
  {id:5, label:'推荐5',value:'e'},
  {id:6, label:'推荐6',value:'f'},
  {id:7, label:'推荐7',value:'g'},
  {id:8, label:'推荐8',value:'h'},
  {id:9, label:'推荐9',value:'i'},
  {id:10, label:'推荐10',value:'j'},
  {id:11, label:'推荐11',value:'k'},
  {id:12, label:'推荐12',value:'l'}
]

export default inject(['study'])(observer(({study})=>{

  const [toView, setToView] = useState('n1')
  const [onView, setOnView] = useState(1)

  const navTap = ele => {
    console.log('ele', ele)
    setToView('n'+(ele.id-2))
    setOnView(ele.id)
  }

  const skip = ele => {
    Taro.navigateTo({url:'/pages/detail/detail?id='+ele.id})
  }

  return (
    <View className='index'>
      <View style={{height:'400rpx',width:'100%',background:'red'}}></View>
      <ScrollView
        className='navs'
        scrollX
        scrollWithAnimation
        scrollIntoView={toView}
      >
        {
          arr.map(ele=>(
            <View
              id={'n'+ele.id}
              className=''
              key={ele.id}
              onTap={()=>navTap(ele)}
              className={['item',ele.id===onView ? 'on':'']}
            >
              {ele.label}
            </View>
          ))
        }
      </ScrollView>
      <View>
      {
        arr.map(ele=>(
          <View
            key={ele.id}
            style={{lineHeight:'60rpx',textAlign:'center'}}
            onTap={()=>skip(ele)}
          >
          {ele.id}-{ele.label}
          </View>
        ))
      }
      </View>
    </View>
  )
}))
