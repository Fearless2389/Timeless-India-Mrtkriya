import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function About() {
  const [r1, v1] = useScrollReveal()
  const [r2, v2] = useScrollReveal()

  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-wide">
        <motion.div
          ref={r1}
          initial={{ opacity: 0, y: 28 }}
          animate={v1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20"
        >
          <div>
            <div className="eyebrow mb-5">Origin · Etymology</div>
            <h2 className="h-display title-mark" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
              <em>Mrt</em> · clay.<br />
              <em>Kriya</em> · the doing of it.
            </h2>
            <div className="rule my-8" />
            <p className="text-lg md:text-xl text-pretty" style={{ color: 'var(--muted)' }}>
              The Sanskrit compound <span className="italic" style={{ color: 'var(--accent)' }}>Mrtkriya</span> —
              from <em>mrt</em> (clay; cf. <em>mrttika</em>, earthen vessel) and <em>kriya</em> (action, process,
              craft) — captures both the elemental simplicity and the intentional craft of the discipline. In
              classical enumerations of the <span className="mono">64 Kalas</span>, Mrtkriya occupies a
              position that acknowledges not merely aesthetic skill but practical knowledge of materials, fire,
              and form — a proto-engineering science embedded in cultural life.
            </p>
          </div>

          <motion.div
            ref={r2}
            initial={{ opacity: 0, y: 28 }}
            animate={v2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <blockquote
              className="surface p-8 md:p-10 relative"
              style={{
                borderLeft: '3px solid var(--c-terracotta)',
                background: 'var(--surface-2)',
              }}
            >
              <span
                className="absolute top-3 left-4 deva text-7xl leading-none"
                style={{ color: 'var(--accent-2)', opacity: 0.3 }}
              >
                ॥
              </span>
              <p
                className="italic text-xl md:text-2xl text-balance pl-6"
                style={{ color: 'var(--fg)', lineHeight: 1.45 }}
              >
                "Kumbhakāra is the first of all craftsmen, for from clay comes the vessel that holds life
                itself — water, food, and fire."
              </p>
              <footer
                className="mono text-[11px] tracking-[0.2em] uppercase mt-6 pl-6"
                style={{ color: 'var(--accent)' }}
              >
                — Vishwakarma Purāṇa
              </footer>
            </blockquote>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { k: '64', l: 'Classical Kalas' },
                { k: 'c. 7000 BCE', l: 'Mehrgarh Origins' },
                { k: '9,000 yrs', l: 'Unbroken Lineage' },
                { k: '17+', l: 'GI Pottery Tags' },
              ].map((x, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={v2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="surface p-5"
                >
                  <div className="h-display text-3xl" style={{ color: 'var(--accent)' }}>
                    {x.k}
                  </div>
                  <div className="mono text-[10px] tracking-[0.2em] uppercase mt-1.5 opacity-70">
                    {x.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
