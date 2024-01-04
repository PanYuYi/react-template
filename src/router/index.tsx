import { Navigate, createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/layout/AuthLayout'
import DataSet from '@/views/DataCenter/DataSet'
import DataSource from '@/views/DataCenter/DataSource'
import NotFound from '@/views/NotFound'
import Welcome from '@/views/Welcome'
import About from '@/views/About'
import { LoginPage } from '@/views/Login/index'

const routers = createBrowserRouter([
  {
    path: '/dataCenter',
    element: <AuthLayout />,
    children: [
      {
        path: 'welcome',
        // element: <Welcome />,
        element: () => import('@/views/Welcome'),
      },
      {
        path: 'dataSet',
        element: <DataSet />,
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
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to='/dataCenter/welcome'></Navigate>,
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
