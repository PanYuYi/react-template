import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

interface IProp {
  startTime?: string
  endTime?: string
  type?: string
}

export function TimeOutPage({ startTime, endTime }: IProp) {
  const [time, setTime] = useState<number | string>(
    dayjs(endTime || '2024/2/6 18:00:00').diff(startTime ? dayjs(startTime) : dayjs(), 'second'),
  )

  useEffect(() => {
    const timerId = setInterval(() => {
      const t = dayjs(endTime || '2024/2/6 18:00:00').diff(startTime ? dayjs(startTime) : dayjs(), 'second')
      setTime(t > 0 ? t : 0)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [startTime, endTime])

  return (
    <span className='text-[32px]'>
      <span className='text-[32px] font-bold'>{time}</span> 秒
    </span>
  )
}
