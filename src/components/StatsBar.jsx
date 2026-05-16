import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCounter } from '../hooks/useCounter.js'

const stats = [
  { v: 9000, suffix: '+', l: 'Years of History' },
  { v: 23, suffix: ' Lakh', l: 'Pottery Artisans' },
  { v: 55000, suffix: ' Cr', prefix: '₹', l: 'Industry Turnover' },
  { v: 17, suffix: '+', l: 'GI-Tagged Styles' },
  { v: 700, suffix: '+', l: 'Morbi Kiln Units' },
  { v: 64, suffix: '', l: 'Classical Kalas' },
]

function StatCell({ s, start }) {
  const val = useCounter(s.v, { duration: 1700, startWhen: start })
  return (
    <div className="text-center px-4 py-7">
      <div className="h-display text-4xl md:text-5xl" style={{ color: '#F5EDD8' }}>
        {s.prefix || ''}
        {val.toLocaleString()}
        <span style={{ color: 'var(--c-gold)' }}>{s.suffix}</span>
      </div>
      <div
        className="mono text-[10px] tracking-[0.22em] uppercase mt-2"
        style={{ color: 'rgba(245,237,216,0.62)' }}
      >
        {s.l}
      </div>
    </div>
  )
}

export default function StatsBar() {
  const [start, setStart] = useState(false)
  return (
    <section
      id="stats-bar"
      className="relative"
      style={{
        background:
          'linear-gradient(135deg, #8B3514 0%, #C4521E 50%, #8B3514 100%)',
        borderTop: '1px solid var(--c-gold)',
        borderBottom: '1px solid var(--c-gold)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        onViewportEnter={() => setStart(true)}
        viewport={{ once: true, margin: '-40px' }}
        className="container-wide"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(800px 200px at 50% 50%, rgba(212,168,67,0.25), transparent 60%)' }} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 relative">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(245,237,216,0.18)' : 'none',
              }}
              className="border-r"
            >
              <StatCell s={s} start={start} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
