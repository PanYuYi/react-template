import { Button, Input } from 'antd'
import { getListData } from '@/api'
import { useEffect, useMemo, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import './index.scss'

import folderIcon from '@/assets/svgs/icon-folder.svg'
import { useMatches, useNavigate } from 'react-router-dom'

const { Search } = Input

interface DataType {
  name: string
  id: string | number
  createBy?: string
}

export default function DataPacket() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState<string>('')
  const [dataList, setDataList] = useState<DataType[]>([])

  // 计算属性，根据searchValue和dataList计算得出展示列表
  const showDataList = useMemo(() => {
    return dataList.filter((v) => (!searchValue && v) || v.name.includes(searchValue))
  }, [dataList, searchValue])

  const matches = useMatches()
  console.log('matches >>>>>  ', matches)

  const handleSearch = (e: string) => {
    console.log('handleSearch >>>>>  ', e)
    setSearchValue(e)
  }

  const handleAddNewFolder = () => {
    console.log('新建文件夹 >>>>> ')
  }

  // 跳转数据集
  const handleGoto = (item: DataType) => {
    console.log('item >>>>>  ', item)
    navigate(`dataSet?id=${item.id}`)
  }

  useEffect(() => {
    getListData().then((res: DataType[]) => {
      setDataList(res)
    })
  }, [])

  return (
    <div className='w-full h-full '>
      <div className='flex justify-between items-center p-[24px] pb-[0px]'>
        <div className='flex justify-center items-center'>
          <Button type='primary' onClick={handleAddNewFolder}>
            <PlusOutlined className='mr-[4px]' />
            新建文件夹
          </Button>
          <span className='ml-[24px] mr-[24px]'>|</span> 这是您的资源
        </div>
        <Search className='w-[240px]' defaultValue={searchValue} onSearch={handleSearch}></Search>
      </div>
      <div className='data-set-list h-[calc(100%-56px)] p-[24px]'>
        {showDataList.map((item) => {
          return (
            <div className='data-set-item' key={item.id} onClick={() => handleGoto(item)}>
              <div className='flex'>
                <img src={folderIcon} />
                <div className='ml-[4px]'>
                  <div className='text-[14px]'>{item.name}</div>
                  <div className='text-[12px] text-[#333] mt-[2px]'>创建人：{item.createBy}</div>
                </div>
              </div>
              <div className='text-[12px] text-[#333] mt-[4px]'>更新时间：2024-1-5 09:31:49</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
