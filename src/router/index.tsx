import { Navigate, createBrowserRouter } from 'react-router-dom'

import { LoginPage } from '@/views/Login/index'
import AuthLayout from '@/layout/AuthLayout'
import DataPacket from '@/views/DataCenter/DataPacket'
import DataSet from '@/views/DataCenter/DataSet'
import DataSetDetails from '@/views/DataCenter/DataSetDetails'
import DataSource from '@/views/DataCenter/DataSource'
import NotFound from '@/views/NotFound/index'
import Welcome from '@/views/Welcome'
import About from '@/views/About'
import BaseSetting from '@/views/System/BaseSetting'
import UserPage from '@/views/System/UserManage'
import RolePage from '@/views/System/RoleManage'
import MenuManage from '@/views/System/MenuManage'

const routers = createBrowserRouter([
  {
    path: '/dataCenter',
    element: <AuthLayout />,
    children: [
      {
        path: 'welcome',
        element: <Welcome />,
      },
      // 第一种方式
      // {
      //   path: 'dataPacket',
      //   element: <DataPacket />,
      //   children: [
      //     {
      //       path: 'dataSet',
      //       element: <DataSet />,
      //       children: [
      //         {
      //           index: true,
      //           path: 'dataSetDetails',
      //           element: <DataSetDetails />,
      //         },
      //       ],
      //     },
      //   ],
      // },
      // 第二种方式
      // 这种方式不好匹配路由
      {
        id: '数据包',
        path: 'dataPacket',
        element: <DataPacket />,
      },
      {
        path: 'dataPacket/dataSet',
        element: <DataSet />,
      },
      {
        path: 'dataPacket/dataSet/dataSetDetails',
        element: <DataSetDetails />,
      },

      {
        path: 'dataSource',
        element: <DataSource />,
      },
    ],
  },
  {
    path: '/system',
    element: <AuthLayout />,
    children: [
      {
        path: 'baseSetting',
        element: <BaseSetting />,
      },
      {
        path: 'menuManage',
        element: <MenuManage />,
      },
      {
        path: 'roleManage',
        element: <RolePage />,
      },
      {
        path: 'userManage',
        element: <UserPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to='/dataCenter'></Navigate>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/*',
    element: <NotFound></NotFound>,
  },
])

export { routers }
