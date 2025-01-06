import { Timeline } from 'antd'

export default function Welcome() {
  return (
    <div className='w-full h-full p-[24px]'>
      <div className='bg-[#fff] rounded-[8px] p-[16px]'>
        <div className='mb-[24px] text-[16px]'>欢迎来到React + Vite项目中</div>
        <Timeline
          className=''
          pending='继续补充中...'
          items={[
            {
              children: '2024-01-02 14:45:39  创建项目',
            },
            {
              children: '2024-01-02 15:01:23  项目init完成',
            },
            {
              children: '2024-01-02 17:28:03  项目添加eslint语法检测',
            },
            {
              children: '2024-01-03 14:20:49  项目添加prettier等统一格式化配置',
            },
            {
              children: '2024-01-04 09:48:13  项目添加styleLint等css格式化配置',
            },
            {
              children: '2024-01-04 14:51:58  项目添加路由配置',
            },
          ]}
        />
      </div>
    </div>
  )
}
