import { useMemo, useState } from 'react'
import { Button, Tree, Table, Input, Modal, Form, Select, TreeSelect } from 'antd'
import type { TreeDataNode } from 'antd'

import './index.scss'

const { TextArea } = Input

type FieldType = {
  nickName?: string
  account?: string
  pwd?: string
  sex?: string
  phoneNum?: string
  email?: string
  deptIds?: string[]
  post?: string
  roleIds?: string[]
}

const { Search } = Input

// 部门树
const deptTreeList = [
  {
    title: '组织架构',
    value: '0',
    key: '0',
    children: [
      {
        title: '总办公室',
        value: '0-0',
        key: '0-0',
        children: [],
      },
      {
        title: '产品部',
        value: '0-1',
        key: '0-1',
      },
      {
        title: '技术部',
        value: '0-2',
        key: '0-2',
      },
      {
        title: '市场部',
        value: '0-3',
        key: '0-3',
      },
      {
        title: '财务部',
        value: '0-4',
        key: '0-4',
      },
      {
        title: '人事部',
        value: '0-5',
        key: '0-5',
      },
      {
        title: '研发部',
        value: '0-6',
        key: '0-6',
      },
    ],
  },
]

// 角色列表
const roleList = [
  {
    label: '管理员',
    value: '0',
  },
  {
    label: '普通用户',
    value: '1',
  },
]

export default function UserPage() {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [deptSelectValue, setDeptSelectValue] = useState<string[]>([])
  const [addForm] = Form.useForm()

  const deptOptions = deptTreeList

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys)
    setAutoExpandParent(false)
  }

  const handleEdit = (text, record, index) => {
    console.log('handleEdit >>>>>  ', text, record, index)
  }

  const treeData: TreeDataNode[] = useMemo(() => {
    return deptTreeList
  }, [])

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '收集号码',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '所属角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 210,
      render(text: string, record, index: number) {
        return (
          <>
            <Button type='link' onClick={() => handleEdit(text, record, index)}>
              编辑
            </Button>
            <Button type='link' onClick={() => handleEdit(text, record, index)}>
              查看详情
            </Button>
            <Button type='link' onClick={() => handleEdit(text, record, index)}>
              禁用
            </Button>
            <Button danger type='link' onClick={() => handleEdit(text, record, index)}>
              删除
            </Button>
          </>
        )
      },
    },
  ]

  const dataSource = useMemo(() => {
    const data = [
      {
        name: '张三',
        account: 'zhangsan',
        phone: '123456789',
        department: '技术部',
        status: '正常',
        role: '管理员',
        operation: '操作',
      },
      {
        name: '李四',
        account: 'lisi',
        phone: '123456789',
        department: '技术部',
        status: '正常',
        role: '管理员',
        operation: '操作',
      },
      {
        name: '王五',
        account: 'wangwu',
        phone: '123456789',
        department: '技术部',
        status: '正常',
        role: '管理员',
        operation: '操作',
      },
      {
        name: '赵六',
        account: 'zhaoliu',
        phone: '123456789',
        department: '技术部',
        status: '正常',
        role: '管理员',
        operation: '操作',
      },
      {
        name: '孙七',
        account: 'sunqi',
        phone: '123456789',
        department: '技术部',
        status: '正常',
        role: '管理员',
        operation: '操作',
      },
    ]
    return data.filter((item) => item.name.includes(searchValue))
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

  const handleChangeDeptTree = (value) => {
    console.log('handleChangeDeptTree >>>>>  ', value)
    setDeptSelectValue(value)
  }

  return (
    <div className='user-manage-page flex'>
      <div className='flex-shrink-0 w-[240px] bg-[#fff] tree-box'>
        <Tree
          className='tree-dom'
          showLine={true}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          treeData={treeData}
          titleRender={(item) => {
            return <div className='flex-shrink-0'>{item.title}</div>
          }}
        ></Tree>
      </div>
      <div className='flex-1 p-[16px]'>
        <div className='table-box'>
          <div className='flex items-center'>
            <Button type='primary' onClick={handleAddNewRole}>
              新增用户
            </Button>
            <Button type='default' className='ml-[8px]'>
              批量导入
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
        title='新增成员'
        okText='保存'
        cancelText='取消'
        open={openModal}
        width={880}
        onOk={handleConfirm}
        onCancel={handleCancel}
      >
        <Form
          form={addForm}
          name='formRef'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          style={{ width: 820 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onFinishFailed={handleSubmitFailed}
          autoComplete='off'
        >
          <div className='text-[16px] mb-[4px]'>基础信息</div>
          <div className='form-table'>
            <Form.Item<FieldType>
              label='姓名'
              className='w-[50%] custom-form-item-row bottom-border'
              name='nickName'
              rules={[{ required: true, message: '请输入姓名!' }]}
            >
              <Input placeholder='请输入姓名' />
            </Form.Item>
            <Form.Item<FieldType>
              label='账号'
              className='w-[50%] custom-form-item-row left-border bottom-border'
              name='account'
              rules={[{ required: true, message: '请输入账号!' }]}
            >
              <Input placeholder='请输入账号' />
            </Form.Item>
            <Form.Item<FieldType>
              className='w-[50%] custom-form-item-row bottom-border'
              label='密码'
              name='pwd'
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input placeholder='请输入密码' />
            </Form.Item>
            <Form.Item<FieldType>
              className='w-[50%] custom-form-item-row left-border bottom-border'
              label='性别'
              name='sex'
              rules={[{ required: true, message: '请选择性别!' }]}
            >
              <Select
                placeholder='请选择性别'
                options={[
                  {
                    value: '1',
                    label: '男',
                  },
                  {
                    value: '2',
                    label: '女',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              className='w-[50%] custom-form-item-row'
              label='手机号'
              name='phoneNum'
              rules={[{ required: true, message: '请输入手机号!' }]}
            >
              <Input placeholder='请输入手机号' />
            </Form.Item>
            <Form.Item<FieldType>
              className='w-[50%] custom-form-item-row left-border'
              label='邮箱'
              name='email'
              rules={[{ required: true, message: '请输入邮箱!' }]}
            >
              <Input placeholder='请输入邮箱' />
            </Form.Item>
          </div>
          <div className='text-[16px] mt-[12px] mb-[4px]'>工作信息</div>
          <div className='form-table'>
            <Form.Item<FieldType>
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 21 }}
              className='w-full custom-form-item-row bottom-border'
              label='所属部门'
              name='deptIds'
              rules={[{ required: true, message: '请选择部门!' }]}
            >
              <TreeSelect
                value={deptSelectValue}
                placeholder='请选择部门'
                treeData={deptOptions}
                onChange={handleChangeDeptTree}
              ></TreeSelect>
            </Form.Item>
            <Form.Item<FieldType>
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 21 }}
              className='w-full  custom-form-item-row bottom-border'
              label='职务'
              name='post'
              rules={[{ required: true, message: '请选择职务!' }]}
            >
              <Input placeholder='请输入' />
            </Form.Item>
            <Form.Item<FieldType>
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 21 }}
              className='w-full  custom-form-item-row'
              label='所属角色'
              name='roleIds'
              rules={[{ required: true, message: '请选择角色!' }]}
            >
              <Select placeholder='请选择' options={roleList} />
            </Form.Item>
          </div>

          {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </div>
  )
}
