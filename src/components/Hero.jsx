import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useCounter } from '../hooks/useCounter.js'
import { ArrowDown, Sparkles } from 'lucide-react'

function PottersWheelSVG() {
  return (
    <svg viewBox="-200 -200 400 400" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="bgGlow" cx="0" cy="0" r="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C4521E" stopOpacity="0.32" />
          <stop offset="60%" stopColor="#8B3514" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0D0804" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="potGrad" x1="0" x2="0" y1="-1" y2="1">
          <stop offset="0%" stopColor="#E8DAB8" />
          <stop offset="40%" stopColor="#D4956A" />
          <stop offset="100%" stopColor="#6B3914" />
        </linearGradient>
        <linearGradient id="ringG1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#D4A843" stopOpacity="0.65" />
          <stop offset="50%" stopColor="#D4A843" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#D4A843" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="ringG2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#C4521E" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#C4521E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C4521E" stopOpacity="0.7" />
        </linearGradient>
        <pattern id="ticks" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(0)">
          <line x1="0" y1="0" x2="0" y2="2" stroke="#D4A843" strokeWidth="0.4" opacity="0.6" />
        </pattern>
      </defs>

      <circle r="200" fill="url(#bgGlow)" />

      {/* Outer ring — 20s */}
      <g style={{ transformOrigin: '0 0', animation: 'spin 20s linear infinite' }}>
        <circle r="180" fill="none" stroke="url(#ringG1)" strokeWidth="1" strokeDasharray="2 6" />
        <circle r="172" fill="none" stroke="#D4A843" strokeWidth="0.4" opacity="0.5" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2
          const x1 = Math.cos(a) * 168
          const y1 = Math.sin(a) * 168
          const x2 = Math.cos(a) * 180
          const y2 = Math.sin(a) * 180
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4A843" strokeWidth="0.7" opacity="0.55" />
        })}
      </g>

      {/* Middle ring — 14s reverse */}
      <g style={{ transformOrigin: '0 0', animation: 'spin 14s linear infinite reverse' }}>
        <circle r="142" fill="none" stroke="url(#ringG2)" strokeWidth="0.8" />
        <circle r="148" fill="none" stroke="#C4521E" strokeOpacity="0.25" strokeWidth="0.3" />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2
          const x = Math.cos(a) * 145
          const y = Math.sin(a) * 145
          return <circle key={i} cx={x} cy={y} r="0.8" fill="#D4A843" opacity="0.7" />
        })}
      </g>

      {/* Inner ring — 30s */}
      <g style={{ transformOrigin: '0 0', animation: 'spin 30s linear infinite' }}>
        <circle r="118" fill="none" stroke="#D4A843" strokeWidth="0.4" opacity="0.4" />
        <circle r="108" fill="none" stroke="#C4521E" strokeWidth="0.4" opacity="0.4" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2
          return (
            <text
              key={i}
              x={Math.cos(a) * 128}
              y={Math.sin(a) * 128}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="DM Mono, monospace"
              fontSize="6.5"
              fill="#D4A843"
              opacity="0.7"
              transform={`rotate(${(a * 180) / Math.PI + 90} ${Math.cos(a) * 128} ${Math.sin(a) * 128})`}
            >
              MRTKRIYA · {String(i + 1).padStart(2, '0')}
            </text>
          )
        })}
      </g>

      {/* Spokes group — 6s */}
      <g style={{ transformOrigin: '0 0', animation: 'spin 6s linear infinite' }}>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2
          return (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={Math.cos(a) * 100}
              y2={Math.sin(a) * 100}
              stroke="#C4521E"
              strokeWidth="1.2"
              opacity="0.55"
            />
          )
        })}
        <circle r="100" fill="none" stroke="#C4521E" strokeWidth="0.7" opacity="0.45" />
        <circle r="60" fill="none" stroke="#D4A843" strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* Wheel base */}
      <circle r="48" fill="#1A100A" stroke="#D4A843" strokeWidth="0.6" opacity="0.92" />
      <ellipse cx="0" cy="2" rx="48" ry="6" fill="#0D0804" opacity="0.65" />

      {/* Clay pot — floating */}
      <g className="pot-float" style={{ animation: 'floatPot 4s ease-in-out infinite', transformOrigin: '0 0' }}>
        <g transform="translate(0,-6)">
          <ellipse cx="0" cy="42" rx="36" ry="6" fill="#0D0804" opacity="0.55" />
          {/* Body */}
          <path
            d="M -30 22
               Q -42 -2 -28 -32
               Q -16 -56 0 -58
               Q 16 -56 28 -32
               Q 42 -2 30 22
               Q 22 38 0 40
               Q -22 38 -30 22 Z"
            fill="url(#potGrad)"
            stroke="#3A2218"
            strokeWidth="0.8"
          />
          {/* Lip */}
          <ellipse cx="0" cy="-58" rx="14" ry="3.6" fill="#3A2218" />
          <ellipse cx="0" cy="-58.5" rx="11" ry="2.4" fill="#1A100A" />
          {/* Decoration bands */}
          <path d="M -32 0 Q 0 8 32 0" fill="none" stroke="#3A2218" strokeWidth="0.6" opacity="0.7" />
          <path d="M -32 6 Q 0 14 32 6" fill="none" stroke="#3A2218" strokeWidth="0.4" opacity="0.4" />
          <path d="M -26 -22 Q 0 -16 26 -22" fill="none" stroke="#F5EDD8" strokeWidth="0.4" opacity="0.35" />
          {/* Highlight */}
          <path
            d="M -20 -32 Q -28 -8 -24 18"
            fill="none"
            stroke="#F5EDD8"
            strokeWidth="0.8"
            opacity="0.18"
          />
        </g>
      </g>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes floatPot { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -8px); } }
      `}</style>
    </svg>
  )
}

function CounterStat({ end, suffix, label, delay }) {
  const [start, setStart] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStart(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  const v = useCounter(end, { duration: 1800, startWhen: start })
  return (
    <div>
      <div className="h-display text-4xl md:text-5xl" style={{ color: 'var(--c-gold)' }}>
        {v.toLocaleString()}
        <span style={{ color: 'var(--c-terracotta-lt)' }}>{suffix}</span>
      </div>
      <div className="mono text-[10.5px] mt-2 tracking-[0.22em] uppercase opacity-70">{label}</div>
    </div>
  )
}

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28 pb-16"
      style={{
        background:
          'radial-gradient(900px 700px at 12% 18%, rgba(196,82,30,0.18), transparent 60%), radial-gradient(700px 500px at 90% 80%, rgba(212,168,67,0.10), transparent 60%), #0D0804',
        color: '#F5EDD8',
      }}
    >
      {/* Decorative concentric rings on the background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute w-[800px] h-[800px] -top-60 -left-60 rounded-full border"
          style={{ borderColor: 'rgba(212,168,67,0.12)' }}
        />
        <div
          className="absolute w-[1100px] h-[1100px] -bottom-80 -right-80 rounded-full border"
          style={{ borderColor: 'rgba(196,82,30,0.12)' }}
        />
      </div>

      <div className="container-wide grid lg:grid-cols-[1.22fr_1fr] gap-10 lg:gap-16 items-center relative z-10">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="eyebrow mb-6"
          >
            <Sparkles size={12} style={{ color: 'var(--c-gold)' }} />
            Timeless India · The 64 Kalas · Mrtkriya
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="deva text-3xl md:text-5xl mb-3"
            style={{ color: '#E8DAB8', letterSpacing: '0.06em' }}
          >
            मृत्क्रिया
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="h-display text-balance"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.4rem)', color: '#F5EDD8' }}
          >
            The art of <em>clay</em>,<br />
            the science of <em>fire</em>.
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 text-lg md:text-xl max-w-xl text-pretty"
            style={{ color: 'rgba(245,237,216,0.78)', lineHeight: 1.55 }}
          >
            Nine thousand years of pottery on the Indian subcontinent — from the bonfire kilns of
            Mehrgarh and the standardised industry of the Indus, through Mughal cobalt glazes and
            Bishnupur terracotta, to <em>aerospace-grade ceramics</em> in the present. A study in
            material, ritual, and engineering.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#about" className="btn-solid" data-cursor>
              Begin the Journey
            </a>
            <a href="#engineering" className="btn-ghost" data-cursor>
              The Engineering
            </a>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-14 pt-8 grid grid-cols-3 gap-6 border-t"
            style={{ borderColor: 'rgba(245,237,216,0.12)' }}
          >
            <CounterStat end={9000} suffix="+" label="Years of History" delay={700} />
            <CounterStat end={23} suffix="L+" label="Craft Artisans" delay={900} />
            <CounterStat end={17} suffix="+" label="GI-Tagged Styles" delay={1100} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[500px] aspect-square mx-auto"
        >
          <PottersWheelSVG />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 mono text-[10px] tracking-[0.3em] uppercase opacity-50 flex items-center gap-2"
      >
        Scroll <ArrowDown size={12} />
      </motion.div>
    </section>
  )
}
