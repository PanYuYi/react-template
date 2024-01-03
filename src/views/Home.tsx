import { Outlet } from 'react-router'

export default function Home() {
  return (
    <>
      <div>欢迎来到react + vite + @reduxjs/toolkit 项目</div>
      <Outlet></Outlet>
    </>
  )
}
