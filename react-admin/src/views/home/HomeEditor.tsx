import React, { useEffect, useMemo } from 'react'
import './style.scss'
import OrderChart from './charts/OrderChart'
import TempChart from './charts/TempChart'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { getDashAnalyse } from '@/store/reducers/analyse'

export default () => {
  const dispatch = useAppDispatch()
  const editorAnalyse = useAppSelector(state=>state.analyse.editorAnalyse)

  console.log('editorAnalyse', editorAnalyse)

  const [xAxis, series] = useMemo(()=>{
    let arr1 = []
    let arr2 = []
    if(editorAnalyse.orderSale) {
      editorAnalyse.orderSale.map(ele=>{
        arr1.push(ele.name)
        arr2.push(ele.sale)
      })
    }
    return [arr1, arr2]
  }, [editorAnalyse])

  const tempList = useMemo(()=>{
    let res = []
    if(editorAnalyse.cityTemp) {
      editorAnalyse.cityTemp.map(ele1=>{
        ele1.list.map((ele2,idx)=>{
          res.push(
            {
              month: (idx+1)+'月',
              city: ele1.city,
              temperature: ele2
            }
          )
        })
      })
    }
    console.log('tempList', res)
    return res
  }, [editorAnalyse])

  useEffect(()=>{
    dispatch(getDashAnalyse())
  }, [])
  return (
    <div className='qf-home-editor'>
      <div>
        <OrderChart xAxis={xAxis} series={series} />
        <TempChart data={tempList} />
      </div>
    </div>
  )
}
