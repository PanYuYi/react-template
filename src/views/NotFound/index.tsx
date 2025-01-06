import './index.scss'

export default function NotFound() {
  return (
    <div className='w-[100vw] h-[100vh] relative not-found-page'>
      <div className='tips'>
        <div className='number'>404</div>
        <div className='text'>路径不存在，请检查路径是否有误</div>
      </div>
    </div>
  )
}
