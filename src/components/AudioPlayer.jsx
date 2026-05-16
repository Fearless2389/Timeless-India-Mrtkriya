import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Volume2 } from 'lucide-react'

const TARGET_VOL = 0.22
const FADE_MS = 1600
const STORAGE_KEY = 'mrtkriya:audio'
const SRC = '/audio/ambient.mp3'

function fadeTo(audio, target, duration) {
  return new Promise((resolve) => {
    if (!audio) return resolve()
    const start = audio.volume
    const t0 = performance.now()
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      audio.volume = start + (target - start) * p
      if (p < 1) requestAnimationFrame(step)
      else resolve()
    }
    requestAnimationFrame(step)
  })
}

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)
  const userOffRef = useRef(false)

  // Probe the file
  useEffect(() => {
    let cancelled = false
    fetch(SRC, { method: 'HEAD' })
      .then((r) => {
        if (!cancelled) setAvailable(r.ok)
      })
      .catch(() => {
        if (!cancelled) setAvailable(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Auto-start: try immediately, and if the browser blocks it,
  // start on the very first user interaction (the standard workaround
  // for browser autoplay policies).
  useEffect(() => {
    const a = audioRef.current
    if (!a) return

    // Respect an explicit user "off" from a previous session
    if (localStorage.getItem(STORAGE_KEY) === 'off') {
      userOffRef.current = true
      return
    }

    let startedRef = { current: false }

    const start = async () => {
      if (startedRef.current || userOffRef.current) return
      startedRef.current = true
      a.volume = 0
      try {
        await a.play()
        setPlaying(true)
        localStorage.setItem(STORAGE_KEY, 'on')
        fadeTo(a, TARGET_VOL, FADE_MS)
      } catch {
        // Browser still blocked it (Safari is strict) — re-arm for next gesture
        startedRef.current = false
      }
    }

    // First attempt immediately
    start()

    // Fallback: trigger on first interaction
    const events = ['pointerdown', 'click', 'keydown', 'touchstart', 'mousemove', 'scroll', 'wheel']
    const onAny = () => {
      start().finally(() => {
        if (startedRef.current) {
          events.forEach((e) => window.removeEventListener(e, onAny, { capture: true }))
        }
      })
    }
    events.forEach((e) => window.addEventListener(e, onAny, { capture: true, passive: true }))

    return () => {
      events.forEach((e) => window.removeEventListener(e, onAny, { capture: true }))
    }
  }, [])

  const toggle = async () => {
    const a = audioRef.current
    if (!a || !available) return
    if (!playing) {
      userOffRef.current = false
      a.volume = 0
      try {
        await a.play()
      } catch {
        return
      }
      setPlaying(true)
      localStorage.setItem(STORAGE_KEY, 'on')
      fadeTo(a, TARGET_VOL, FADE_MS)
    } else {
      userOffRef.current = true
      await fadeTo(a, 0, FADE_MS / 2)
      a.pause()
      setPlaying(false)
      localStorage.setItem(STORAGE_KEY, 'off')
    }
  }

  const disabled = !available

  return (
    <>
      <audio ref={audioRef} src={SRC} loop preload="auto" />

      <motion.button
        onClick={toggle}
        disabled={disabled}
        data-cursor
        aria-label={
          disabled
            ? 'Ambient music unavailable'
            : playing
            ? 'Pause ambient music'
            : 'Play ambient music'
        }
        title={
          disabled
            ? 'Drop an MP3 at /audio/ambient.mp3'
            : playing
            ? 'Pause ambient'
            : 'Play ambient'
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: disabled ? 0.35 : 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 rounded-full flex items-center justify-center"
        style={{
          width: '52px',
          height: '52px',
          background: 'color-mix(in srgb, var(--bg) 80%, transparent)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--accent)',
          color: 'var(--accent)',
          cursor: disabled ? 'not-allowed' : 'none',
          boxShadow: playing
            ? '0 0 0 4px color-mix(in srgb, var(--accent) 14%, transparent)'
            : 'none',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.span
              key="on"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <Volume2 size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="off"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <Music size={18} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* pulsing ring when playing */}
        {playing && (
          <>
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                animation: 'mrt-pulse 2.2s ease-out infinite',
                border: '1px solid var(--accent)',
              }}
            />
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                animation: 'mrt-pulse 2.2s ease-out infinite 1.1s',
                border: '1px solid var(--accent)',
              }}
            />
          </>
        )}
      </motion.button>

      <style>{`
        @keyframes mrt-pulse {
          0%   { transform: scale(1);    opacity: 0.65; }
          80%  { transform: scale(1.55); opacity: 0;   }
          100% { transform: scale(1.55); opacity: 0;   }
        }
      `}</style>
    </>
  )
}
