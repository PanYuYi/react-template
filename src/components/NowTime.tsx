import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

interface Iprops {
  className?: string
}

export default function NowTime({ className }: Iprops) {
  const [now, setNow] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    console.log('nowTime组件 >>> ')
    const timerId = setInterval(() => {
      setNow(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => clearInterval(timerId)
  }, [])

  return <span className={className}>{now}</span>
}
