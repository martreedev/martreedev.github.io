import { useState, useEffect, useRef } from 'react'

export function useCountUp(end: number, duration = 1600) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) setTriggered(true)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered])

  useEffect(() => {
    if (!triggered) return
    let frame: number
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Quartic ease-out — fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(end * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
      else setCount(end)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [triggered, end, duration])

  return { count, ref }
}
