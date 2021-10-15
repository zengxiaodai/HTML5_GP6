import React, { useState, useEffect } from 'react'
import { useAppSelector } from '@/hooks'

import ImgCrop from 'antd-img-crop'
import { Upload } from 'antd'
import img from '@/utils/img'


type UploadProps = {
  value: string,
  onChange: (val:string) => void
}

export default (props: UploadProps) => {

  const {value, onChange} = props

  const token = useAppSelector(state=>state.user.token)

  const [list, setList] = useState([])

  useEffect(()=>{
    if(value) setList([{thumbUrl: img.imgBase+value}])
  }, [value])

  const imgSuccess = (e) => {
    console.log('上传成功', e)
    setList(e.fileList)
    // 把后端返回的图片访问地址，给到父组件
    // onChange
    if(e.file.status === 'done') {
      onChange && onChange(e.file.response.data.img)
    }
  }

  return (
    <div className='qf-upload-image'>
      <ImgCrop rotate>
        <Upload
          action={img.uploadImgUrl}
          name='good'
          listType="picture-card"
          fileList={list}
          onChange={imgSuccess}
          headers={{
            Authorization: token
          }}
          maxCount={1}
        >
          {
            list.length >= 1
            ? null
            : '+ Upload'
          }
        </Upload>
      </ImgCrop>
    </div>
  )
}
