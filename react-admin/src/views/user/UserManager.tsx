import React, { useState, useEffect, useMemo } from 'react'

import { Row, Col, Input, Table, Button, Modal, Select } from 'antd'

import { useAppDispatch, useAppSelector } from '@/hooks'
import {
  addUser,
  getUserList,
  changeUserStatus
} from '@/store/reducers/user'

import './style.scss'

const { Option } = Select

// 枚举
enum Role {
  'admin' = '系统管理员',
  'manager'='管理员',
  'editor' = '运营编辑'
}

export default () => {
  const dispatch = useAppDispatch()

  const total = useAppSelector(({user})=>user.total)
  const list = useAppSelector(({user})=>user.list)

  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(true)

  const [userBol, setUserBol] = useState(false)
  const [user, setUser] = useState({username:'', role:''})

  // 功能：获取用户列表
  useEffect(()=>{
    dispatch(getUserList({name,page}))
  }, [count, page])

  // 功能：确定添加用户
  const submitUser = () => {
    dispatch(addUser(user)).then(()=>{
      console.log('添加成功，刷新页面')
      resetUser()
      setCount(count+1)
    })
  }

  // 功能：取消用户弹框
  const resetUser = () => {
    console.log('取消')
    setUser({username:'', role: ''})
    setUserBol(false)
  }

  // 功能：禁用与启用
  const toggleUser = ({_id}, status) => {
    // dispatch()
    dispatch(changeUserStatus({id:_id,status})).then(()=>{
      console.log('toggled')
      setCount(count+1)
    })
  }

  const columns = useMemo(()=>(
    [
      {
        title: '用户名',
        dataIndex: 'username',
        align:'center'
      },
      {
        title: '角色名称',
        dataIndex: 'role',
        align:'center',
        render: role => (Role[role])
      },
      {
        title: '状态',
        dataIndex: 'status',
        align:'center',
        render: s => (s?'正常':'离职')
      },
      {
        title: '操作',
        dataIndex: 'status',
        align: 'center',
        render: (s, row) => {
          return [
            <Button
              type='primary'
              size='small'
              disabled={s===1}
              onClick={()=>toggleUser(row,1)}
              key='1'>
              启用
            </Button>,
            <Button
              style={{marginLeft:'10px'}}
              danger
              disabled={s===0}
              onClick={()=>toggleUser(row,0)}
              size='small'
              key='2'>
              禁用
            </Button>
          ]
        }
      }
    ]
  ), [list])

  return (
    <div className='qf-user-manager'>
      <div className='qf-filter'>
        <Row align='middle'>
          <Col span={2}>
            <span>用户名:</span>
          </Col>
          <Col span={4}>
            <Input
              allowClear
              placeholder="用户名搜索"
              value={name}
              onChange={e=>setName(e.target.value)}
              onPressEnter={()=>setCount(count+1)}
            />
          </Col>
        </Row>
      </div>
      <div className='qf-table'>
        <div style={{paddingBottom:'10px'}}>
          <Row>
            <Col span={2}>用户列表</Col>
            <Col span={2} offset={20}>
              <Button
                type='primary'
                sizi='small'
                onClick={()=>setUserBol(true)}>
                添加用户
              </Button>
            </Col>
          </Row>
        </div>
        <Table
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys, selectedRows) => {
              console.log('rowSelection', selectedRowKeys, selectedRows)
            }
          }}
          columns={columns}
          dataSource={list}
          rowKey='_id'
          pagination={{
            total: total,
            current: page,
            pageSizeOptions: ['2','5','10','20'],
            showTotal: (total,range)=>{
              return <div>第{range[0]}-{range[1]}条/总共{total}条</div>
            },
            size: 'small',
            onChange: page=>setPage(page)
          }}
        />
      </div>

      {/* 添加用户的弹框 */}
      <Modal
        title="添加用户"
        visible={userBol}
        onOk={submitUser}
        onCancel={resetUser}
      >
        <div>
          <span>用户名：</span>
          <Input
            value={user.username}
            onChange={e=>setUser({...user, username:e.target.value})}
          />
        </div>
        <div>
          <span>选择身份：</span>
          <Select
            value={user.role}
            onChange={val=>setUser({...user, role: val})}
          >
          {
            [
              {id:1,roleName:'系统管理员',role:'manager'},
              {id:2,roleName:'运营编辑',role:'editor'}
            ].map(ele=>(
              <Option key={ele.id} value={ele.role}>{ele.roleName}</Option>
            ))
          }
          </Select>
        </div>
      </Modal>

    </div>
  )
}
