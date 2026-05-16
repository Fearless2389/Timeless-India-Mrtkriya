import { motion } from 'framer-motion'
import { processSteps } from '../data/process.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function Card({ step, i }) {
  const [ref, visible] = useScrollReveal()
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="relative surface p-7 md:p-8 overflow-hidden group"
      style={{
        background: 'var(--surface)',
        borderLeft: '1px solid var(--line)',
      }}
    >
      <span
        aria-hidden
        className="absolute -top-2 right-4 h-display font-bold pointer-events-none select-none"
        style={{
          fontSize: '5.5rem',
          color: 'var(--c-terracotta)',
          opacity: 0.07,
          letterSpacing: '-0.05em',
        }}
      >
        {step.no}
      </span>
      <div
        className="mono text-[10px] tracking-[0.22em] uppercase mb-3"
        style={{ color: 'var(--accent)' }}
      >
        Step {step.no} · {step.note}
      </div>
      <h3 className="h-display text-2xl md:text-[1.65rem] mb-3 leading-tight">{step.title}</h3>
      <p style={{ color: 'var(--muted)' }} className="text-pretty">
        {step.body}
      </p>
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'var(--c-terracotta)' }}
      />
    </motion.article>
  )
}

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 mb-14 items-end">
          <div>
            <div className="eyebrow mb-4">Step by Step</div>
            <h2
              className="h-display title-mark text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              The <em>making</em> — nine ancient steps
            </h2>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            From riverbank to vitrified vessel, refined over millennia. The Indian <span className="mono">chak</span>
            — a heavy flywheel given a burst of energy and worked by momentum — internalises the physics of angular
            deceleration. Hand-building methods (pinching, coiling, paddle-and-anvil <em>thapi/patri</em>) work
            alongside the wheel for forms it cannot reach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, i) => (
            <Card key={step.no} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
