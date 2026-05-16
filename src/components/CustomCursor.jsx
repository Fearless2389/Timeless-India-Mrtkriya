import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }

    const tick = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    const onHoverIn = () => {
      if (ring.current) {
        ring.current.style.width = '56px'
        ring.current.style.height = '56px'
        ring.current.style.borderColor = 'var(--c-terracotta-lt)'
      }
    }
    const onHoverOut = () => {
      if (ring.current) {
        ring.current.style.width = '36px'
        ring.current.style.height = '36px'
        ring.current.style.borderColor = 'var(--c-gold)'
      }
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onHoverIn)
      el.addEventListener('mouseleave', onHoverOut)
    })

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', onMove)
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', onHoverIn)
        el.removeEventListener('mouseleave', onHoverOut)
      })
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches) return null

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  )
}
