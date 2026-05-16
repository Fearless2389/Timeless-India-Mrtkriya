import { useEffect, useRef, useState } from 'react'

export function useCounter(end, { duration = 1600, startWhen = true, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const startRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!startWhen) return
    cancelAnimationFrame(rafRef.current)
    startRef.current = null
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)
    const step = (ts) => {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - startRef.current
      const p = Math.min(1, elapsed / duration)
      const v = end * easeOut(p)
      setValue(decimals ? Number(v.toFixed(decimals)) : Math.floor(v))
      if (p < 1) rafRef.current = requestAnimationFrame(step)
      else setValue(end)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [end, duration, startWhen, decimals])

  return value
}
