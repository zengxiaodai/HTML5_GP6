import React from 'react'
import { Chart, LineAdvance} from 'bizcharts'

type Item = {
  month: string,
  city: "Tokyo" | "London",
  temperature: number
}

type ChartProps = {
  data: Array<Item>
}

export default (props: ChartProps) => {
  // 数据源
  return (
    <div className='c2'>
      <Chart padding={[10, 20, 50, 40]} autoFit  data={props.data} >
        <LineAdvance
          shape="smooth"
          point
          area
          position="month*temperature"
          color="city"
        />
      </Chart>
    </div>
  )
}
