import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quizQuestions } from '../data/quiz-questions.js'
import { useCounter } from '../hooks/useCounter.js'
import { Check, X, RotateCcw, ArrowRight } from 'lucide-react'

function Result({ score, total, onRestart }) {
  const v = useCounter(score, { duration: 1500, startWhen: true })
  const pct = score / total
  const R = 80
  const C = 2 * Math.PI * R
  const dash = C * pct
  const tone = pct >= 0.8 ? '#5E8A6A' : pct >= 0.5 ? '#D4A843' : '#C4521E'
  const message =
    pct >= 0.9
      ? 'Master potter — the chak knows your name.'
      : pct >= 0.7
      ? 'Skilled — leather-hard, ready for trimming.'
      : pct >= 0.5
      ? 'Wedged but unfired — keep at it.'
      : 'Back to the puggling pit — read the report.'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative inline-block">
        <svg width="220" height="220" viewBox="-110 -110 220 220" className="rotate-[-90deg]">
          <circle r={R} fill="none" stroke="var(--line)" strokeWidth="8" />
          <motion.circle
            r={R}
            fill="none"
            stroke={tone}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            animate={{ strokeDashoffset: C - dash }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="h-display text-6xl md:text-7xl" style={{ color: tone }}>
            {v}
          </div>
          <div className="mono text-[10.5px] tracking-[0.22em] uppercase opacity-60 mt-1">
            out of {total}
          </div>
        </div>
      </div>
      <div className="h-display text-2xl md:text-3xl mt-6 mb-2">{message}</div>
      <p className="opacity-70 mb-8" style={{ color: 'var(--muted)' }}>
        {Math.round(pct * 100)}% accuracy across all ten questions.
      </p>
      <button onClick={onRestart} className="btn-solid" data-cursor>
        <RotateCcw size={14} /> Begin Again
      </button>
    </motion.div>
  )
}

export default function Quiz() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const total = quizQuestions.length
  const q = quizQuestions[i]

  const pick = (idx) => {
    if (picked !== null) return
    setPicked(idx)
    if (idx === q.correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (i + 1 === total) {
      setDone(true)
    } else {
      setI(i + 1)
      setPicked(null)
    }
  }

  const restart = () => {
    setI(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  const progress = (i + (picked !== null ? 1 : 0)) / total

  return (
    <section
      id="quiz"
      className="section"
      style={{
        background: 'var(--bg)',
      }}
    >
      <div className="container-narrow">
        <div className="text-center mb-10">
          <div className="eyebrow mb-4 justify-center" style={{ display: 'inline-flex' }}>
            Test Your Knowledge
          </div>
          <h2
            className="h-display title-mark text-balance"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
          >
            The <em>Mrtkriya</em> quiz
          </h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--muted)' }}>
            Ten questions drawn from the report — etymology, archaeology, materials, policy.
          </p>
        </div>

        <div
          className="surface p-7 md:p-10"
          style={{ background: 'var(--surface)', minHeight: '440px' }}
        >
          {!done ? (
            <>
              {/* Progress bar */}
              <div className="flex items-center justify-between mb-2">
                <div className="mono text-[10.5px] tracking-[0.22em] uppercase opacity-60">
                  Question {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>
                <div className="mono text-[10.5px] tracking-[0.22em] uppercase opacity-60">
                  Score · {score}
                </div>
              </div>
              <div className="relative h-[3px] mb-7 rounded-full overflow-hidden" style={{ background: 'var(--line)' }}>
                <motion.div
                  initial={false}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0"
                  style={{
                    background: 'linear-gradient(90deg, var(--c-terracotta), var(--accent))',
                  }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3
                    className="h-display text-2xl md:text-3xl text-balance mb-7 leading-tight"
                  >
                    {q.q}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {q.options.map((opt, idx) => {
                      const isCorrect = idx === q.correct
                      const isPicked = picked === idx
                      const showResult = picked !== null
                      let state = 'default'
                      if (showResult) {
                        if (isCorrect) state = 'correct'
                        else if (isPicked) state = 'wrong'
                        else state = 'dim'
                      }
                      const styleByState = {
                        default: { borderColor: 'var(--line)', background: 'var(--surface-2)' },
                        correct: { borderColor: 'var(--c-jade)', background: 'rgba(94,138,106,0.12)' },
                        wrong: { borderColor: 'var(--c-rust)', background: 'rgba(156,59,30,0.12)' },
                        dim: { borderColor: 'var(--line)', background: 'var(--surface-2)', opacity: 0.4 },
                      }
                      return (
                        <motion.button
                          key={idx}
                          onClick={() => pick(idx)}
                          disabled={picked !== null}
                          data-cursor
                          whileHover={picked === null ? { y: -2 } : {}}
                          animate={
                            state === 'wrong'
                              ? { x: [0, -6, 6, -4, 4, 0] }
                              : state === 'correct'
                              ? { scale: [1, 1.04, 1] }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                          className="text-left p-4 border rounded-sm flex items-start gap-3"
                          style={{ ...styleByState[state], cursor: picked !== null ? 'default' : 'none' }}
                        >
                          <span
                            className="mono text-[11px] tracking-[0.18em] uppercase mt-1"
                            style={{ color: 'var(--accent)' }}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1 text-[16.5px] leading-snug">{opt}</span>
                          {state === 'correct' && <Check size={18} style={{ color: 'var(--c-jade)' }} />}
                          {state === 'wrong' && <X size={18} style={{ color: 'var(--c-rust)' }} />}
                        </motion.button>
                      )
                    })}
                  </div>

                  <AnimatePresence>
                    {picked !== null && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="mt-6 p-5 border-l-[3px]"
                          style={{
                            borderColor: picked === q.correct ? 'var(--c-jade)' : 'var(--c-rust)',
                            background: 'var(--surface-2)',
                          }}
                        >
                          <div
                            className="mono text-[10.5px] tracking-[0.22em] uppercase mb-2"
                            style={{ color: 'var(--accent)' }}
                          >
                            {picked === q.correct ? '✓ Correct' : '✗ Not quite'}
                          </div>
                          <p className="text-pretty" style={{ color: 'var(--fg)' }}>
                            {q.explanation}
                          </p>
                        </div>
                        <div className="flex justify-end mt-6">
                          <button onClick={next} className="btn-solid" data-cursor>
                            {i + 1 === total ? 'See Result' : 'Next Question'} <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <Result score={score} total={total} onRestart={restart} />
          )}
        </div>
      </div>
    </section>
  )
}
