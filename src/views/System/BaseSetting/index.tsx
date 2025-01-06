import { Button, Form, Input, Upload } from 'antd'
import type { FormProps } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import './index.scss'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const fields = [
  {
    label: '系统LOGO',
    name: 'logo',
    type: 'upload',
    rules: [{ required: true, message: '请上传图片!', validateTrigger: 'blur' }],
  },
  {
    label: '浏览器页签',
    name: 'icon',
    type: 'upload',
    rules: [{ required: true, message: '请上传图片!', validateTrigger: 'blur' }],
  },
]

const fields2 = [
  {
    label: 'SIP ID',
    name: 'sipId',
    rules: [{ required: false, message: '请输入', validateTrigger: 'blur' }],
  },
  {
    label: 'SIP 域',
    name: 'domain',
    rules: [{ required: false, message: '请输入', validateTrigger: 'blur' }],
  },
  {
    label: 'IP地址',
    name: 'id',
    rules: [{ required: false, message: '请输入', validateTrigger: 'blur' }],
  },
  {
    label: '端口',
    name: 'port',
    rules: [{ required: false, message: '请输入', validateTrigger: 'blur' }],
  },
  {
    label: '接入密码',
    name: 'pwd',
    rules: [{ required: false, message: '请输入', validateTrigger: 'blur' }],
  },
]

const handleSubmit: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('values:', values)
}

const handleSubmitFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('errorInfo:', errorInfo)
}

export default function BaseSetting() {
  return (
    <div className='common-page base-setting-page'>
      <div className='text-16px font-700 text-[#000000e6]'>基础样式设置</div>
      <div className='text-14px text-[#00000066] mt-2px'>自定义系统LOGO以及浏览器页签</div>
      <Form
        name='formName'
        className='custom-form'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
      >
        <div className='w-full flex items-start'>
          {fields.map((field) => {
            return (
              <Form.Item key={field.name} className='flex-1' label={field.label} name={field.name} rules={field.rules}>
                {field.type === 'upload' ? (
                  <Upload>
                    <Button icon={<UploadOutlined />}>上传</Button>
                    <div className='text-[12px] text-[#0006] leading-[20px]'>
                      仅支持png、jpg、jpeg，且不超过500K；建议尺寸：200*50
                    </div>
                  </Upload>
                ) : (
                  <Input placeholder='请输入' />
                )}
              </Form.Item>
            )
          })}
        </div>
      </Form>

      <div className='text-16px font-700 text-[#000000e6] mt-[24px]'>国标服务信息</div>
      <div className='text-14px text-[#00000066] mt-2px'>展示平台国标信令服务信息，可作为下级平台接入注册使用</div>

      <Form
        name='formName2'
        className='custom-form'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
      >
        <div className='w-full flex flex-wrap items-start border-[0px] border-solid border-b-[1px] border-[#d9d9d9]'>
          <Form.Item
            className='w-[50%]'
            label='SIP ID'
            name='sipId'
            rules={[{ required: false, message: '请输入', validateTrigger: 'blur' }]}
          >
            <Input placeholder='请输入' disabled />
          </Form.Item>
          <Form.Item
            className='w-[50%]'
            label='SIP 域'
            name='domain'
            rules={[{ required: false, message: '请输入', validateTrigger: 'blur' }]}
          >
            <Input placeholder='请输入' disabled />
          </Form.Item>
        </div>
        <div className='w-full flex flex-wrap items-start border-[0px] border-solid border-b-[1px] border-[#d9d9d9]'>
          <Form.Item
            className='w-[50%]'
            label='IP地址'
            name='ip'
            rules={[{ required: false, message: '请输入', validateTrigger: 'blur' }]}
          >
            <Input placeholder='请输入' disabled />
          </Form.Item>
          <Form.Item
            className='w-[50%]'
            label='端口'
            name='port'
            rules={[{ required: false, message: '请输入', validateTrigger: 'blur' }]}
          >
            <Input placeholder='请输入' disabled />
          </Form.Item>
        </div>
        <div className='w-full flex flex-wrap items-start'>
          <Form.Item
            className='w-[50%]'
            label='接入密码'
            name='pwd'
            rules={[{ required: false, message: '请输入', validateTrigger: 'blur' }]}
          >
            <Input placeholder='请输入' disabled />
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
