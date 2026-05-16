import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const cards = [
  {
    label: 'Vedic Literature',
    title: 'Pot as cosmos · Kumbha · Hiranyagarbha',
    body:
      'The Rigveda invokes the kumbha as metaphor for body, womb, and cosmos. The Shatapatha Brahmana describes construction of the agnichayana fire-altar — unfired clay bricks moulded from specific locations (anthill, riverbank, field) — a ritual text that doubles as a ceramic engineering manual.',
    icon: '𑁍',
  },
  {
    label: 'Ritual & Ceremony',
    title: 'Ghatasthapana · Purna-kumbha · Antyesti',
    body:
      'Pottery permeates the calendar of every Indian religious community: Navratri\'s ghatasthapana, Pongal\'s overflow pot, the purna-kumbha at wedding pavilions, the kapala-kriya skull-breaking at funeral rites. The clay vessel mediates between life and afterlife in Hindu mortuary ritual.',
    icon: '𑁋',
  },
  {
    label: 'Sufi & Folk',
    title: 'Pir, dargah, votive horses',
    body:
      'Clay votive offerings — miniature horses, cradles, hands — are presented at Sufi shrines across the subcontinent by devotees seeking boons. The horse-riders of Bankura preserve iconographies traceable to Mohenjo-daro\'s terracotta riders.',
    icon: '𑁉',
  },
  {
    label: 'Daily Material Culture',
    title: 'Kulhad · matka · ghatam · tandoor',
    body:
      'The matka cools water 5–8°C through evaporative micro-porosity — passive refrigeration of sophisticated efficiency. The tandoor shapes North Indian bread cuisine. The kulhad — a disposable, biodegradable, flavour-imparting cup — gained renewed policy interest in the 1990s as a plastic alternative.',
    icon: '𑁇',
  },
]

const stats = [
  { v: '5 – 8°C', l: 'Matka evaporative cooling' },
  { v: '700+', l: 'Years of Molela tradition' },
  { v: '17+', l: 'GI-tagged pottery traditions' },
  { v: '64', l: 'Classical Kalas' },
]

function Card({ c, i }) {
  const [ref, visible] = useScrollReveal()
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="surface p-7 md:p-8 relative"
      style={{ background: 'var(--surface)' }}
    >
      <div
        className="deva text-4xl mb-4"
        style={{ color: 'var(--accent)', opacity: 0.7 }}
        aria-hidden
      >
        {c.icon}
      </div>
      <div className="mono text-[10.5px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
        {c.label}
      </div>
      <h3 className="h-display text-xl md:text-2xl leading-tight mb-3">{c.title}</h3>
      <p style={{ color: 'var(--muted)' }} className="text-pretty">
        {c.body}
      </p>
    </motion.article>
  )
}

export default function Culture() {
  const [qref, qvis] = useScrollReveal()

  return (
    <section id="culture" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 mb-14 items-end">
          <div>
            <div className="eyebrow mb-4">Cultural & Religious</div>
            <h2
              className="h-display title-mark text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              The <em>soul</em> of clay
            </h2>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            In Indian civilisational thought, clay is not merely a raw material but a cosmogonic
            substance — the earth itself as potential form. Pottery participates in a web of meaning
            spanning creation mythology, ritual purity, time-marking, and the management of life and
            death.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {cards.map((c, i) => (
            <Card key={c.label} c={c} i={i} />
          ))}
        </div>

        <motion.blockquote
          ref={qref}
          initial={{ opacity: 0, y: 28 }}
          animate={qvis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="surface p-8 md:p-12 relative max-w-4xl mx-auto"
          style={{
            background: 'var(--surface-2)',
            borderLeft: '3px solid var(--accent)',
          }}
        >
          <span
            className="absolute top-2 left-4 deva text-7xl leading-none pointer-events-none"
            style={{ color: 'var(--accent)', opacity: 0.18 }}
            aria-hidden
          >
            ॐ
          </span>
          <p
            className="italic text-xl md:text-2xl text-balance pl-6 md:pl-8"
            style={{ color: 'var(--fg)', lineHeight: 1.45 }}
          >
            "Prajāpati, desiring to propagate, formed a bowl of clay, saying — <em>Let this be the
            world</em>; and the clay was the earth; the water with which he moistened it was the
            ocean."
          </p>
          <footer
            className="mono text-[11px] tracking-[0.22em] uppercase mt-6 pl-6 md:pl-8"
            style={{ color: 'var(--accent)' }}
          >
            — Aitareya Brāhmaṇa, 5.32 (trans. Haug)
          </footer>
        </motion.blockquote>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((s, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="surface p-6 text-center"
              >
                <div className="h-display text-3xl md:text-4xl" style={{ color: 'var(--accent-2)' }}>
                  {s.v}
                </div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase mt-2 opacity-70">
                  {s.l}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
