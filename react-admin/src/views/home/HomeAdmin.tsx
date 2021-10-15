import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import styleJson from './bmap/styleJson'
const BMapGL = window.BMapGL
let map = null

export default () => {

  const [point, setPoint] = useState({
    lat: '',
    lng: '',
    name: ''
  })
  const [addr, setAddr] = useState('')

  // 地图初始化
  useEffect(()=>{
    map = new BMapGL.Map("map")
    var point = new BMapGL.Point(116.404, 39.915)
    // map.centerAndZoom(point, 15)
    map.centerAndZoom('深圳市西部硅谷', 12)

    // 功能：自定义地图样式
    // map.setMapStyleV2({styleId: '51418b9f476ca276051121f0e05e5343'})
    map.setMapStyleV2({styleJson})

    // 功能：使用地图自带控件
    map.addControl(new BMapGL.ScaleControl())
    map.addControl(new BMapGL.ZoomControl())
    map.addControl(new BMapGL.CityListControl())
    // map.addControl(new BMapGL.MapTypeControl())

    map.setZoom(12)
    map.enableScrollWheelZoom(true)
  }, [])

  useEffect(()=>{
    // 功能：给地图绑定事件
    map.addEventListener("click", e => {
      console.log('clicked', e)
      setPoint({...point, ...e.point})
    })
  }, [])

  useEffect(()=>{
    // 功能：添加Marker或覆盖物
    var point = new BMapGL.Point(116.404, 39.915);
    var marker = new BMapGL.Marker(point);        // 创建标注
    map.addOverlay(marker)
  }, [])

  const search = () => {
    // 使用地图api实现搜索
    var myGeo = new BMapGL.Geocoder()
    myGeo.getPoint(addr, (point)=>{
      if(point){
        map.centerAndZoom(point, 16);
        map.addOverlay(new BMapGL.Marker(point, {title: addr}))
        setPoint({...point, shop: addr})
      }else{
        alert('您选择的地址没有解析到结果！')
      }
    }, '中国')
  }

  return (
    <div className='qf-home-admin'>

      <div className='search'>
        <Input placeholder='地址搜索' value={addr} onChange={e=>setAddr(e.target.value)} />
        <Button type='primary' onClick={search}>搜索</Button>
      </div>
      <div className='map' id="map"></div>
      <div className='form'>
        <Input type="text" value={point.lat} disabled /><br/>
        <Input type="text" value={point.lng} disabled /><br/>
        <Input
          type="text"
          value={point.shop}
          onChange={e=>setPoint({...point, name:e.target.value})}
        /><br/>
        <Button type='primary' size='small'>添加店铺</Button>
      </div>
    </div>
  )
}
