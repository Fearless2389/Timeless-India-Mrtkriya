import { motion } from 'framer-motion'
import { references } from '../data/references.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { BookOpen } from 'lucide-react'

export default function References() {
  const [hRef, hVis] = useScrollReveal()
  return (
    <section id="references" className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="container-wide">
        <motion.div
          ref={hRef}
          initial={{ opacity: 0, y: 24 }}
          animate={hVis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1fr_1.3fr] gap-10 mb-12 items-end"
        >
          <div>
            <div className="eyebrow mb-4">Sources · Bibliography</div>
            <h2
              className="h-display title-mark text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
            >
              The <em>scholarship</em> behind this report
            </h2>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            Every claim, statistic, and quote on this page is drawn from these thirteen
            primary sources — the academic record that grounds Mrtkriya as both heritage
            and engineering science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {references.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="surface p-5 md:p-6 flex gap-4"
              style={{ background: 'var(--surface)' }}
            >
              <div
                className="mono text-[11px] tracking-[0.16em] uppercase shrink-0"
                style={{ color: 'var(--c-gold)' }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center border rounded-full mb-2"
                  style={{ borderColor: 'var(--c-gold)' }}
                >
                  <BookOpen size={14} />
                </div>
                <span>[{String(i + 1).padStart(2, '0')}]</span>
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="mono text-[10px] tracking-[0.18em] uppercase mb-1.5"
                  style={{ color: 'var(--c-terracotta-lt)' }}
                >
                  {r.tag} · {r.year}
                </div>
                <div className="h-display text-lg md:text-[1.3rem] leading-snug mb-1.5 text-balance">
                  {r.title}
                </div>
                <div style={{ color: 'var(--muted)' }} className="text-[15px] leading-snug">
                  <span style={{ color: 'var(--fg)' }}>{r.authors}</span>{' '}
                  ({r.year}). <em>{r.title}</em>. {r.publisher}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
