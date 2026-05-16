import { useState } from 'react'
import { motion } from 'framer-motion'
import { potteryStyles } from '../data/pottery-styles.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { MapPin } from 'lucide-react'

function StyleCard({ style, i }) {
  const [ref, visible] = useScrollReveal()
  const [imgFailed, setImgFailed] = useState(false)
  const big = i % 4 === 0 || i % 7 === 0
  const gradient = `linear-gradient(135deg, ${style.palette[0]} 0%, ${style.palette[1]} 60%, ${style.palette[2]} 100%)`
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="surface group relative overflow-hidden"
      style={{ background: 'var(--surface)', padding: 0 }}
    >
      {/* Image / visual */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: big ? '4 / 5' : '4 / 3.2',
          background: gradient,
        }}
      >
        {style.img && !imgFailed && (
          <img
            src={style.img}
            alt={`${style.name} — ${style.state}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
        {/* Decorative SVG pot motif — only shown when image hasn't loaded */}
        {imgFailed && (
          <svg viewBox="-50 -50 100 100" className="absolute inset-0 w-full h-full opacity-25" aria-hidden>
            <ellipse cx="0" cy="-26" rx="14" ry="3" fill="rgba(255,255,255,0.5)" />
            <path
              d="M -22 18 Q -28 -4 -20 -22 Q -10 -32 0 -32 Q 10 -32 20 -22 Q 28 -4 22 18 Q 14 28 0 30 Q -14 28 -22 18 Z"
              fill="rgba(255,255,255,0.18)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.6"
            />
            <line x1="-22" y1="0" x2="22" y2="0" stroke="rgba(255,255,255,0.25)" strokeWidth="0.4" strokeDasharray="2 2" />
          </svg>
        )}
        {/* Vignette overlay for badge contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,8,4,0.45) 0%, rgba(13,8,4,0) 28%, rgba(13,8,4,0) 60%, rgba(13,8,4,0.65) 100%)',
          }}
        />
        <div className="absolute top-3 left-3 flex gap-2 items-center">
          {style.gi && (
            <span
              className="mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-sm"
              style={{ background: 'rgba(13,8,4,0.55)', color: '#D4A843', border: '1px solid #D4A843' }}
            >
              GI · TAG
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 mono text-[10px] uppercase tracking-[0.2em] flex items-center gap-1.5" style={{ color: '#F5EDD8' }}>
          <MapPin size={11} /> {style.state}
        </div>
      </div>

      <div className="p-6">
        <h3 className="h-display text-2xl mb-1.5 leading-tight">{style.name}</h3>
        <div
          className="mono text-[10.5px] tracking-[0.18em] uppercase mb-3"
          style={{ color: 'var(--accent-2)' }}
        >
          {style.feature}
        </div>
        <p style={{ color: 'var(--muted)' }} className="text-[15.5px] leading-relaxed text-pretty">
          {style.body}
        </p>
        <div
          className="italic mt-4 pt-4 border-t flex items-baseline justify-between gap-3"
          style={{ borderColor: 'var(--line)', color: 'var(--accent)', fontSize: '0.92rem' }}
        >
          <span>{style.quote}</span>
          {style.credit && (
            <span
              className="mono not-italic text-[9px] tracking-[0.16em] uppercase opacity-50 shrink-0"
              style={{ color: 'var(--muted)' }}
              title={style.img}
            >
              {style.credit}
            </span>
          )}
        </div>
      </div>

      {/* Bottom border slide-in on hover */}
      <span
        aria-hidden
        className="absolute left-0 right-0 bottom-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: 'linear-gradient(90deg, var(--c-terracotta), var(--accent))' }}
      />
    </motion.article>
  )
}

export default function Styles() {
  return (
    <section id="styles" className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 mb-14 items-end">
          <div>
            <div className="eyebrow mb-4">Regional Traditions</div>
            <h2
              className="h-display title-mark text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              Twelve <em>vocabularies</em> in clay
            </h2>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            Each region of India has developed a distinct ceramic language — shaped by local geology,
            firing tradition, religious patronage, and the genius of hereditary craft families. Eleven
            of these traditions hold Geographical Indication protection; many more await it.
          </p>
        </div>

        <div className="masonry-3">
          {potteryStyles.map((style, i) => (
            <StyleCard key={style.name} style={style} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
