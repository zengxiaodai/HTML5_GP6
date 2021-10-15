import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { getCateList } from '@/store/reducers/article'

import { Select } from 'antd'
const { Option} = Select

// 封装业务组件：带有具体业务的组件
// 封装UI组件（二次封装）：不带有具体的业务，只是为了复用

type CateSelectProps = {
  value: string,
  onChange: (val: string) => void,
  allowClear?: boolean,
  showAll?: boolean
}

// const ArticleCateSelect: React.FC<CateSelectProps> = ({value, onChange, allowClear, showAll}) => {}
// export default ArticleCateSelect

export default (props: CateSelectProps) => {
  const {value, onChange, allowClear, showAll} = props
  const dispatch = useAppDispatch()
  const cateList = useAppSelector(state=>state.article.cateList)
  useEffect(()=>{
    dispatch(getCateList())
  }, [])
  return (
    <div className='qf-article-cate-select'>
      <Select
        style={{width:'100px'}}
        value={value}
        onChange={val=>onChange&&onChange(val)}
        placeholder='全部'
        allowClear={allowClear||false}
      >
      {
        showAll && <Option value=''>全部</Option>
      }
      {
        cateList.map(ele=>(
          <Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Option>
        ))
      }
      </Select>
    </div>
  )
}
