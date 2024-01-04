import { useSelector } from 'react-redux'
import Layout from './Layout'
import { Navigate } from 'react-router'
import type { AllState } from '@/store/index'

export default function AuthLayout() {
  let token = useSelector((state: AllState) => state.user.token)
  if (!token) {
    token = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token') as string) : null
  }
  console.log('token >>>>>  ', token)
  if (token) {
    return <Layout></Layout>
  } else {
    return <Navigate to='/login' />
  }
}
