import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'

// 先做人再做事
export default inject(['study'])(observer(
  ({study}) => {

    // console.log('study list', study.list.slice())

    useEffect(()=>{
      // study.getCnodeList({page:1,limit:5})
      study.getCnodeList2({page:1, limit:5})
    }, [])

    return (
      <div>
        <h1>文章列表</h1>
        {
          study.list.map(ele=>(
            <div key={ele.id}>{ele.title}</div>
          ))
        }
        <h1>文章总共有：{study.total} 篇</h1>
      </div>
    )
  }
))
