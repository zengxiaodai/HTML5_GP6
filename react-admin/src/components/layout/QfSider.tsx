import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import { Menu } from 'antd'

import routes, { constRoutes } from '@/views/index.tsx'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import img from '@/utils/img'
import { useAppSelector } from '@/hooks'

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

export default props => {

  const history = useHistory()
  const skip = ()=> history.replace('/')
  const u = useAppSelector(({user})=>user.user)

  const renderMenu = (arr, flag) => {
    return arr.map(ele=>(
      (!flag || ele.permission.includes(u.roleName))
      && <SubMenu key={ele.id} icon={ele.icon} title={ele.text}>
      {
        ele.children && ele.children.map(ele=>(
          (!flag || ele.permission.includes(u.roleName))
          && <Menu.Item key={ele.id}>
            <Link to={ele.path}>{ele.text}</Link>
          </Menu.Item>
        ))
      }
      </SubMenu>
    ))
  }

  return (
    <div className='qf-sider'>

      <div className={`logo ${props.value?"off":""}`}>
        <img src={img.logo} onClick={skip} alt='qf' />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
      >
      { renderMenu(constRoutes, false)}
      { u.roleName && renderMenu(routes, true) }
      </Menu>

      {/* 属性继承 */}
      <Toggle {...props} />
    </div>
  )
}
