import React, { useState } from 'react'

import { Layout } from 'antd'

import QfContent from './QfContent'
import QfSider from './QfSider'
import QfHeader from './QfHeader'
import './style.scss'

const { Header, Sider, Content } = Layout

export default props => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='qf-layout'>

      <Layout>

        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <QfSider value={collapsed} onChange={bol=>setCollapsed(bol)} />
        </Sider>

        <Layout>

          <Header>
            <QfHeader />
          </Header>

          <Content>
            <QfContent />
          </Content>

        </Layout>
      </Layout>
    </div>
  )
}
