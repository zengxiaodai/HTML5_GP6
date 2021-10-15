import React from 'react'
import {
  Link,
  withRouter,
  useHistory
} from 'react-router-dom'

import { Menu } from 'antd'

import routes from '@/views'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import img from '@/utils/img'

const Toggle = ({value, onChange}) => (
  <div className='toggle'>
    {
      value
      ? <MenuUnfoldOutlined onClick={()=>onChange(false)} />
      : <MenuFoldOutlined onClick={()=>onChange(true)} />
    }
  </div>
)

const { SubMenu } = Menu

// react-router-dom特点：
// 1、那些被Route直接包裹过的组件，其props上有路由API。
// 2、那些未被Route直接包裹过的组件，其props上没有路由API。

// 解决方案有三种？
// 1、使用“属性继承”来传递路由API，前提是当前组件的父级组件有路由API。
// 2、使用 withRouter 这个高阶组件向React组件中注入路由API。(react路由v4、v5中都可以用)
  // 语法：withRouter(MyComponent)
// 3、使用路由 Hooks API （只有react路由v5中才能使用）

export default props => {
  console.log('QfSider props', props)

  const history = useHistory()
  const skip = ()=> history.replace('/')

  return (
    <div className='qf-sider'>

      <div className={`logo ${props.value?"off":""}`}>
        <img src={img.logo} onClick={skip} />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
      >
      {
        routes.map(ele=>(
          <SubMenu key={ele.id} icon={ele.icon} title={ele.text}>
          {
            ele.children && ele.children.map(ele=>(
              <Menu.Item key={ele.id}>
                <Link to={ele.path}>{ele.text}</Link>
              </Menu.Item>
            ))
          }
          </SubMenu>
        ))
      }
      </Menu>

      {/* 属性继承 */}
      <Toggle {...props} />
    </div>
  )
}
