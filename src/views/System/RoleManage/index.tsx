import { useMemo, useState } from 'react'
import { Button, Table, Input, Modal, Form } from 'antd'
import type { TreeDataNode } from 'antd'

import './index.scss'

const { TextArea } = Input

type FieldType = {
  roleName?: string
  desc?: string
}

const { Search } = Input

export default function UserPage() {
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [addForm] = Form.useForm()

  const handleEdit = (text, record, index) => {
    console.log('handleEdit >>>>>  ', text, record, index)
  }

  const columns = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    {
      title: '说明',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: '操作',
      key: 'operation',
      dataIndex: 'operation',
      width: 210,
      fixed: 'right',
      render(text: string, record, index: number) {
        return (
          <>
            <Button type='link' onClick={() => handleEdit(text, record, index)}>
              编辑
            </Button>
            <Button type='link' onClick={() => handleEdit(text, record, index)}>
              禁用
            </Button>
            <Button danger type='link' onClick={() => handleEdit(text, record, index)}>
              删除
            </Button>
            <Button type='link' onClick={() => handleEdit(text, record, index)}>
              授权用户
            </Button>
          </>
        )
      },
    },
  ]

  const dataSource = useMemo(() => {
    const data = [
      {
        key: '1',
        roleName: '角色1',
        remark: '这是角色1',
      },
      {
        key: '2',
        roleName: '角色2',
        remark: '这是角色2',
      },
    ]
    return data.filter((item) => item.roleName.includes(searchValue))
  }, [searchValue])

  const onSearch = (value: string) => {
    setSearchValue(value)
  }

  const handleAddNewRole = () => {
    setOpenModal(true)
  }

  const handleConfirm = () => {
    // setOpenModal(false)
    addForm.validateFields().then((values) => {
      console.log('values >>>>>  ', values)
      setOpenModal(false)
    })
  }

  const handleCancel = () => {
    addForm.resetFields()
    setOpenModal(false)
  }

  const handleSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmit = (values: FieldType) => {
    console.log('Success:', values)
  }

  return (
    <div className='user-manage-page flex'>
      <div className='flex-1 p-[16px]'>
        <div className='table-box'>
          <div className='flex items-center'>
            <Button type='primary' onClick={handleAddNewRole}>
              新增角色
            </Button>

            <Search className='ml-auto' placeholder='请输入' onSearch={onSearch} style={{ width: 200 }}></Search>
          </div>
          <div className='mt-[16px]'>
            <Table rowKey='account' bordered dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
      {/* 添加用户弹窗 */}
      <Modal
        title='添加用户'
        okText='确认'
        cancelText='取消'
        open={openModal}
        onOk={handleConfirm}
        onCancel={handleCancel}
      >
        <Form
          form={addForm}
          name='formRef'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onFinishFailed={handleSubmitFailed}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='角色名称'
            name='roleName'
            rules={[{ required: true, message: '请输入角色名称!' }]}
          >
            <Input placeholder='请输入' />
          </Form.Item>
          <Form.Item<FieldType> label='角色描述' name='desc' rules={[{ required: true, message: '请输入角色描述!' }]}>
            <TextArea rows={4} placeholder='请输入' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
