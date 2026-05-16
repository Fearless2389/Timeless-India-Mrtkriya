import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { id: 'about', label: '01 · Origin' },
  { id: 'timeline', label: '02 · Timeline' },
  { id: 'process', label: '03 · Process' },
  { id: 'styles', label: '04 · Styles' },
  { id: 'culture', label: '05 · Culture' },
  { id: 'engineering', label: '06 · Engineering' },
  { id: 'community', label: '07 · Kumbhara' },
  { id: 'quiz', label: '08 · Quiz' },
  { id: 'references', label: '09 · Sources' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', ...links.map((l) => l.id)]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled ? 'color-mix(in srgb, var(--bg) 78%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div className="container-wide flex items-center justify-between h-[72px]">
          <button onClick={() => go('hero')} className="flex items-center gap-3 group" data-cursor>
            <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden>
              <ellipse cx="16" cy="9" rx="9" ry="2.4" fill="var(--c-gold)"/>
              <path d="M7 9 Q5 19 9 26 Q16 29 23 26 Q27 19 25 9 Z" fill="var(--c-terracotta)" stroke="var(--c-gold)" strokeWidth="0.6"/>
            </svg>
            <div className="leading-none">
              <div className="h-cinzel text-[14px] tracking-[0.25em]">MRTKRIYA</div>
              <div className="deva text-[10px] opacity-70 mt-0.5">मृत्क्रिया</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-cursor
                className="relative mono text-[11px] px-3 py-2 tracking-[0.15em] uppercase opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: active === l.id ? 'var(--c-gold)' : 'inherit', opacity: active === l.id ? 1 : 0.6 }}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-px"
                    style={{ background: 'var(--c-gold)' }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              data-cursor
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center border rounded-full"
              style={{ borderColor: 'var(--c-gold)', color: 'var(--c-gold)' }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setOpen(true)}
              data-cursor
              className="lg:hidden w-10 h-10 flex items-center justify-center border rounded-full"
              style={{ borderColor: 'var(--c-gold)', color: 'var(--c-gold)' }}
              aria-label="Menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ background: 'color-mix(in srgb, var(--bg) 96%, transparent)', backdropFilter: 'blur(18px)' }}
          >
            <div className="container-wide pt-6 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center border rounded-full"
                style={{ borderColor: 'var(--c-gold)', color: 'var(--c-gold)' }}
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="container-wide mt-10 space-y-3"
            >
              {links.map((l) => (
                <motion.li
                  key={l.id}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                  }}
                >
                  <button
                    onClick={() => go(l.id)}
                    className="h-display text-4xl text-left w-full"
                    style={{ color: 'var(--fg)' }}
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
