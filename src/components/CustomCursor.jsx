import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return

    let revealed = false
    const reveal = () => {
      if (revealed) return
      revealed = true
      if (dot.current) dot.current.style.opacity = '1'
      if (ring.current) ring.current.style.opacity = '1'
    }
    const hide = () => {
      revealed = false
      if (dot.current) dot.current.style.opacity = '0'
      if (ring.current) ring.current.style.opacity = '0'
    }

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
      reveal()
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
    window.addEventListener('mouseleave', hide)
    window.addEventListener('mouseenter', reveal)

    // Delegate hover for cursor expansion so dynamically-added buttons also work
    const onDocOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor]')
      if (el) onHoverIn()
      else onHoverOut()
    }
    document.addEventListener('mouseover', onDocOver)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', hide)
      window.removeEventListener('mouseenter', reveal)
      document.removeEventListener('mouseover', onDocOver)
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
