import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clayTypes, ceramicClassification, glazeChemistry, modernApplications } from '../data/engineering.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const tabs = [
  { id: 'clay', label: 'Clay Mineralogy' },
  { id: 'class', label: 'Classification' },
  { id: 'glaze', label: 'Glaze Chemistry' },
  { id: 'apps', label: 'Modern Applications' },
]

function ClayPanel() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {clayTypes.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="surface p-6"
          style={{ background: 'var(--surface)' }}
        >
          <div className="flex items-baseline justify-between mb-1">
            <h4 className="h-display text-2xl">{c.name}</h4>
            <span
              className="mono text-[10px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--c-gold)' }}
            >
              {c.burn}
            </span>
          </div>
          <div
            className="mono text-[11px] mb-3 inline-block px-2 py-1 rounded-sm"
            style={{ background: 'var(--surface-2)', color: 'var(--c-terracotta-lt)' }}
          >
            {c.formula}
          </div>
          <p style={{ color: 'var(--muted)' }} className="text-pretty text-[15.5px] leading-relaxed">
            {c.body}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

function ClassPanel() {
  return (
    <div className="surface p-2 md:p-5" style={{ background: 'var(--surface)' }}>
      <div className="scroll-x-wrap">
        <table className="data-table min-w-[760px]">
          <thead>
            <tr>
              <th>Type</th>
              <th>Firing Temp.</th>
              <th>Water Absorption</th>
              <th>Flexural Strength</th>
              <th>Vickers Hardness</th>
              <th>Indian Examples</th>
            </tr>
          </thead>
          <tbody>
            {ceramicClassification.map((row) => (
              <tr key={row.type}>
                <td>
                  <div
                    className="h-display text-[1.15rem]"
                    style={{ color: 'var(--c-terracotta-lt)' }}
                  >
                    {row.type}
                  </div>
                </td>
                <td>{row.temp}</td>
                <td>{row.absorption}</td>
                <td>{row.strength}</td>
                <td>{row.hardness}</td>
                <td style={{ color: 'var(--muted)' }}>{row.examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        className="mono text-[11px] tracking-[0.18em] uppercase mt-4 opacity-60 px-3"
      >
        Source: report § 3.5 · Kingery, Bowen & Uhlmann (1976)
      </p>
    </div>
  )
}

function GlazePanel() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {glazeChemistry.map((g, i) => (
        <motion.div
          key={g.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="surface p-6 relative overflow-hidden"
          style={{ background: 'var(--surface)' }}
        >
          <div
            className="absolute -top-6 -right-3 h-display pointer-events-none select-none"
            style={{ fontSize: '5.2rem', color: 'var(--c-gold)', opacity: 0.08, letterSpacing: '-0.05em' }}
          >
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className="mono text-[10.5px] tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--c-gold)' }}>
            {g.role}
          </div>
          <h4 className="h-display text-2xl mb-2">{g.name}</h4>
          <div
            className="mono text-[11px] mb-3 inline-block px-2 py-1 rounded-sm"
            style={{ background: 'var(--surface-2)', color: 'var(--c-terracotta-lt)' }}
          >
            {g.formula}
          </div>
          <p style={{ color: 'var(--muted)' }} className="text-pretty text-[15.5px] leading-relaxed">
            {g.body}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

function AppsPanel() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {modernApplications.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="surface p-6"
          style={{ background: 'var(--surface)' }}
        >
          <div
            className="text-3xl mb-3"
            style={{ color: 'var(--c-terracotta-lt)', fontFamily: 'serif', lineHeight: 1 }}
            aria-hidden
          >
            {a.icon}
          </div>
          <h4 className="h-display text-2xl mb-3">{a.title}</h4>
          <p style={{ color: 'var(--muted)' }} className="text-pretty text-[15.5px] leading-relaxed mb-4">
            {a.body}
          </p>
          <div
            className="mono text-[10.5px] tracking-[0.22em] uppercase pt-3 border-t"
            style={{ borderColor: 'var(--line)', color: 'var(--c-gold)' }}
          >
            {a.actors}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Engineering() {
  const [tab, setTab] = useState('clay')
  const [hRef, hVis] = useScrollReveal()

  return (
    <section
      id="engineering"
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--surface-2) 0%, var(--bg) 100%)',
      }}
    >
      <div className="container-wide">
        <motion.div
          ref={hRef}
          initial={{ opacity: 0, y: 24 }}
          animate={hVis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1fr_1.3fr] gap-10 mb-14 items-end"
        >
          <div>
            <div className="eyebrow mb-4">Materials · Chemistry · Industry</div>
            <h2
              className="h-display title-mark text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              Ceramic <em>engineering</em>
            </h2>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            Ceramic engineering applies materials science to inorganic, non-metallic substances
            consolidated at high temperatures — bridging chemistry, mineralogy, and mechanical
            design. Indian traditional pottery, viewed through this lens, represents empirically
            optimised ceramic processing that frequently anticipates formal scientific understanding.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div
          className="relative flex flex-wrap gap-1 mb-10 border-b"
          style={{ borderColor: 'var(--line)' }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              data-cursor
              className="relative mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase px-4 py-3"
              style={{
                color: tab === t.id ? 'var(--c-gold)' : 'var(--muted)',
                opacity: tab === t.id ? 1 : 0.85,
              }}
            >
              {t.label}
              {tab === t.id && (
                <motion.span
                  layoutId="eng-tab"
                  className="absolute left-0 right-0 -bottom-px h-[2px]"
                  style={{ background: 'var(--c-gold)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {tab === 'clay' && <ClayPanel />}
            {tab === 'class' && <ClassPanel />}
            {tab === 'glaze' && <GlazePanel />}
            {tab === 'apps' && <AppsPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
