import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message } from 'antd'
import './style.scss'

import {
  ArticleCateSelect,
  UploadImage,
  ArticleQuill
} from '@/components'

import { addOrEditArticle, getArticleInfo, clearArticle } from '@/store/reducers/article'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useHistory, useParams } from 'react-router-dom'

export default () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { id } = useParams()

  const [form] = Form.useForm()
  // form.setFieldsValue()可以把异步数据填充到表单中去

  const articleInfo = useAppSelector(state=>state.article.articleInfo)
  console.log('articleInfo', articleInfo)

  const [content, setContent] = useState('')

  useEffect(()=>{
    // 有id表示“编辑”，才触发调接口
    console.log('id', id)
    if(id) dispatch(getArticleInfo({id}))
    return ()=>{
      // 清掉redux中的缓存数据
      dispatch(clearArticle())
    }
  }, [])

  useEffect(()=>{
    if(articleInfo._id) {
      form.setFieldsValue(articleInfo)
      // 因为富文本没有进行Form.Item的双向绑定，所以手动填充
      setContent(articleInfo.content)
    }
  }, [articleInfo])

  console.log('id', id)

  // 提交（新增、编辑）
  const onFinish = (values) => {
    // 手动把富文本框中的内容添加到入参上
    values['content'] = content
    if(id) values['id'] = id
    dispatch(addOrEditArticle(values)).then(()=>{
      console.log('文章添加成功')
      message.success((id?'修改成功':'添加成功'), 1).then(()=>{
        history.replace('/article/list')
      })
    })
  }

  return (
    <div className='qf-article-add-edit'>
      <div className='qf-form'>
        <Form
          onFinish={onFinish}
          labelAlign='left'
          name='form'
          initialValues={{}}
          form={form}
        >
          <Form.Item
            label="文章标题"
            rules={[{ required: true }]}
            labelCol={{span:3}}
            name='title'
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="作者"
            rules={[{ required: true }]}
            labelCol={{span:3}}
            name='author'
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="文章类别"
            rules={[{ required: true }]}
            labelCol={{span:3}}
            name='cate'
          >
            {/*被Form.Item包裹的组件，实际给了一个value和onChange*/}
            <ArticleCateSelect />
          </Form.Item>

          <Form.Item
            label="文章缩略图"
            labelCol={{span:3}}
            name='img'
          >
            {/* value, onChange */}
            <UploadImage />
          </Form.Item>

          <Form.Item>
            <ArticleQuill value={content} onChange={content=>setContent(content)} />
          </Form.Item>


          <Form.Item wrapperCol={{ offset: 3 }}>
            <Button type="primary" htmlType="submit">
              { id ? '修改' : '发布'}
            </Button>
          </Form.Item>
        </Form>
      </div>


    </div>
  )
}
