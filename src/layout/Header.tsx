import { Button, Layout, Dropdown, Modal } from 'antd'
import type { MenuProps } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { removeToken } from '@/store/user'
import BreadcrumbComp from './Breadcrumb'
import NowTime from '@/components/NowTime'
// import { TimeOutPage } from '@/components/TimeOut'

import userLogo from '@/assets/itman.png'
// import dayjs from 'dayjs'

const { Header } = Layout

interface Iprops {
  colorBgContainer: string
}

export default function HeaderComp({ colorBgContainer }: Iprops) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [modal, contextHolder] = Modal.useModal()

  // 退出登录
  const handleLoginOut = () => {
    modal.confirm({
      title: '提示',
      content: <div className='text-[14px]'>确认退出吗？</div>,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        dispatch(removeToken())
        navigate('/login')
      },
    })
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Button type='link'>修改密码</Button>,
    },
    {
      key: '2',
      label: (
        <Button type='link' onClick={handleLoginOut}>
          退出登录
        </Button>
      ),
    },
  ]

  return (
    <Header
      style={{ height: '60px', padding: 0, background: colorBgContainer, borderBottom: '1px solid rgb(238, 238, 238)' }}
    >
      {contextHolder}
      <div className='h-full flex justify-between items-center pr-[8px]'>
        <BreadcrumbComp className='ml-[8px]'></BreadcrumbComp>
        {/* <div className='text-[24px] flex items-center'>
          倒计时：<TimeOutPage endTime={dayjs().format('YYYY/MM/DD') + ' 18:00:00'} startTime={''}></TimeOutPage>
        </div> */}
        <div className='flex justify-end'>
          <NowTime className='mr-[18px]'></NowTime>
          <Dropdown menu={{ items }} placement='bottomRight'>
            <div className='flex justify-center items-center'>
              <span className='text-[16px] font-bold text-[#333] mr-[6px]'>管理员</span>
              <img
                src={userLogo}
                className='w-[48px] h-[48px] rounded-[50%] border-[#ccc] border-solid border-[1px]'
              ></img>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}
