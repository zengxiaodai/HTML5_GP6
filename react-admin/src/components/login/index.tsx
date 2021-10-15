import React from 'react'
import { useAppDispatch } from '@/hooks'
import { useHistory } from 'react-router-dom'

import {
  Form, Input, Button, Checkbox
} from 'antd'

import { login } from '@/store/reducers/user'

import './style.scss'

export default () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  // 表单提交
  const onFinish = (values) => {
    // login先获取token，接着获取用户信息
    dispatch(login(values)).then((action)=>{
      console.log('login action', action)
      if(action.payload) history.push('/')
    })
  }

  return (
    <div className='qf-login'>
      <div className='wrap'>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
