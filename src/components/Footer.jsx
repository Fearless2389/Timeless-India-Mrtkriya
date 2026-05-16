export default function Footer() {
  return (
    <footer
      style={{
        background: '#0D0804',
        color: '#F5EDD8',
        borderTop: '1px solid var(--c-gold)',
      }}
      className="relative"
    >
      <div className="container-wide py-14 md:py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
                <ellipse cx="16" cy="9" rx="9" ry="2.4" fill="#D4A843" />
                <path d="M7 9 Q5 19 9 26 Q16 29 23 26 Q27 19 25 9 Z" fill="#C4521E" stroke="#D4A843" strokeWidth="0.6"/>
              </svg>
              <div>
                <div className="h-cinzel text-[16px] tracking-[0.25em]">MRTKRIYA</div>
                <div className="deva text-[12px] opacity-70 mt-0.5">मृत्क्रिया · The Art of Clay</div>
              </div>
            </div>
            <p className="opacity-70 max-w-md text-pretty" style={{ lineHeight: 1.55 }}>
              An exhibition of pottery and ceramic engineering on the Indian subcontinent — drawn
              from a comprehensive academic report spanning 7000 BCE to the present industrial age.
              Built as part of <span className="italic">Timeless India · The 64 Kalas</span>.
            </p>
          </div>

          <div>
            <div className="mono text-[10.5px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--c-gold)' }}>
              Sections
            </div>
            <ul className="space-y-2.5 mono text-[12.5px] tracking-[0.06em]">
              {[
                ['hero', 'Hero'],
                ['about', 'Origin'],
                ['timeline', 'Timeline'],
                ['process', 'Process'],
                ['styles', 'Regional Styles'],
                ['culture', 'Culture'],
                ['engineering', 'Engineering'],
                ['community', 'Kumbhāra'],
                ['quiz', 'Quiz'],
                ['references', 'References'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    data-cursor
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    → {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono text-[10.5px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--c-gold)' }}>
              Project Context
            </div>
            <ul className="space-y-3.5 text-[15px]" style={{ lineHeight: 1.55 }}>
              <li>
                <div className="opacity-50 mono text-[10.5px] uppercase tracking-[0.18em] mb-1">Series</div>
                Timeless India — The 64 Kalas
              </li>
              <li>
                <div className="opacity-50 mono text-[10.5px] uppercase tracking-[0.18em] mb-1">Kala</div>
                Mrtkriya · The Art of Clay
              </li>
              <li>
                <div className="opacity-50 mono text-[10.5px] uppercase tracking-[0.18em] mb-1">Level</div>
                Class 9 · Academic Year 2025 – 2026
              </li>
              <li>
                <div className="opacity-50 mono text-[10.5px] uppercase tracking-[0.18em] mb-1">Source</div>
                A Comprehensive Academic Report on Pottery and Ceramic Engineering
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row gap-4 justify-between"
          style={{ borderColor: 'rgba(212,168,67,0.18)' }}
        >
          <div className="mono text-[10.5px] tracking-[0.22em] uppercase opacity-50">
            © 2025 — 2026 · A school project · No commercial use
          </div>
          <div className="deva text-[14px] opacity-70" style={{ color: 'var(--c-gold)' }}>
            ॥ कुम्भकारः प्रथमः शिल्पिनाम् ॥
          </div>
        </div>
      </div>
    </footer>
  )
}
