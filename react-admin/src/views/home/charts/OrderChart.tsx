import React, { useEffect, useRef } from 'react'

type OrderProps = {
  xAxis: Array<string>,
  series: Array<number>
}
export default (props: OrderProps) => {

  const c1 = useRef(null)
  useEffect(()=>{
    var myChart = echarts.init(c1.current)
    var option = {
      title: {
        text: '订单销量'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: props.xAxis
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: props.series
      }]
    }
    myChart.setOption(option)
  }, [props])

  return <div ref={c1} className='c1'></div>
}
