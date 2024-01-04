import React from 'react'
import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Menus from './Menus'

import myImg from '../assets/react.svg'

const { Content, Sider } = Layout

const LayoutComponent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout hasSider>
      <Sider
        width={239}
        style={{
          overflow: 'auto',
          height: '100vh',
          width: '239px',
          maxWidth: '239px',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className='w-[239px] h-[60px] bg-[#001529] text-[#fff] border-[0] border-b-[1px] border-solid border-[#000]'>
          <img className='h-[60px]' src={myImg} />
        </div>
        <Menus></Menus>
      </Sider>
      <Layout style={{ marginLeft: 239 }}>
        <Header colorBgContainer={colorBgContainer}></Header>
        <Content className='h-[calc(100vh-60px)]'>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
