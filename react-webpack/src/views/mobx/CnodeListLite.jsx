import React, { useState, useEffect } from 'react'

import { useStore } from '@/hooks'

import {
  observer,
  useLocalObservable
} from 'mobx-react-lite'

export default observer(()=> {

  // const abc = useLocalObservable(()=>({
  //   count: 0,
  //   changeCount() {
  //     this.count++
  //   }
  // }))
  // console.log('state msg', state.msg)

  const study = useStore('study')

  useEffect(()=>{
    study.getCnodeList({limit: 5})
  }, [])

  return (
    <div>

    {
      study.list.map(ele=>(
        <div key={ele.id}>{ele.title}</div>
      ))
    }

    {/*
      <h1>{abc.count}</h1>
      <button onClick={()=>abc.changeCount()}>自增</button>
    */}
    </div>
  )
})
