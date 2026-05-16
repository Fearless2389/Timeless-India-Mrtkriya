import { motion } from 'framer-motion'
import { timeline } from '../data/timeline.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function Item({ item, index }) {
  const [ref, visible] = useScrollReveal()
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className="relative grid md:grid-cols-[1fr_80px_1fr] gap-4 md:gap-6 mb-12 md:mb-20 items-start"
    >
      {/* Spacer for desktop layout */}
      <div className={`hidden md:block ${isLeft ? '' : 'order-1'}`} aria-hidden />

      {/* Center marker */}
      <motion.div
        initial={{ scale: 0 }}
        animate={visible ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 240, damping: 14 }}
        className="hidden md:flex items-start justify-center relative md:order-2"
        style={{ alignSelf: 'flex-start', paddingTop: '2.4rem' }}
      >
        <div
          className="absolute top-0 bottom-[-5rem] left-1/2 -translate-x-1/2 w-px"
          style={{ background: 'var(--c-gold)', opacity: 0.25 }}
        />
        <div
          className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mono text-[10px]"
          style={{
            background: 'var(--bg)',
            border: '1.5px solid var(--c-terracotta)',
            color: 'var(--c-terracotta-lt)',
            letterSpacing: '0.15em',
          }}
        >
          <div
            className="absolute inset-1 rounded-full"
            style={{ border: '1px solid var(--c-gold)', opacity: 0.4 }}
          />
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={visible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={isLeft ? 'md:order-1' : 'md:order-3'}
      >
        <div className={`surface p-7 md:p-8 ${isLeft ? 'md:text-right' : ''}`}>
          <div
            className="mono text-[11px] tracking-[0.22em] uppercase mb-2"
            style={{ color: 'var(--c-gold)' }}
          >
            {item.period}
          </div>
          <h3 className="h-display text-2xl md:text-3xl mb-2">{item.title}</h3>
          <div className="mono text-[10px] tracking-[0.18em] uppercase opacity-60 mb-3">
            {item.place}
          </div>
          <p style={{ color: 'var(--muted)' }} className="text-pretty">
            {item.body}
          </p>
          <div
            className={`tag-pill mt-4 ${isLeft ? 'md:ml-auto' : ''}`}
            style={{ display: 'inline-flex' }}
          >
            {item.keyword}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="section relative"
      style={{ background: 'var(--surface-2)' }}
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 mb-16 items-end">
          <div>
            <div className="eyebrow mb-4">Through the Ages</div>
            <h2
              className="h-display title-mark text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              A <em>timeline</em> of Indian pottery
            </h2>
          </div>
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            Six milestones across nine millennia — from coiled vessels in a Balochistan bonfire
            kiln to plasma-sprayed yttria-stabilised zirconia on Indian turbine blades.
          </p>
        </div>

        <div className="relative">
          {timeline.map((item, i) => (
            <Item key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
