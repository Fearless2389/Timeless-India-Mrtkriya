import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const communityNames = [
  { name: 'Kumhar', lang: 'Hindi · Marathi' },
  { name: 'Kumbhar', lang: 'Marathi · Kannada' },
  { name: 'Kolar / Kollan', lang: 'Tamil' },
  { name: 'Shalavanthi', lang: 'Telugu' },
  { name: 'Kummara', lang: 'Telugu' },
  { name: 'Kumbhakāra', lang: 'Sanskrit' },
]

const challenges = [
  {
    title: 'Market Displacement',
    body: 'Plastic and stainless-steel substitution has reduced utilitarian earthenware volumes by an estimated 40–60% over 1980–2020. The Kumhar economy is squeezed by mass-produced alternatives at the lowest price tier.',
  },
  {
    title: 'Succession Crisis',
    body: 'Young people from Kumhar families are moving to urban wage employment. The National Crafts Museum estimates ~30% of documented craft traditions risk disappearing within one generation as tacit knowledge transmission breaks down.',
  },
  {
    title: 'Occupational Health',
    body: 'Traditional lead-glaze mixing without protective equipment causes lead poisoning; silica dust from clay preparation causes silicosis; wood and dung-smoke from open kilns causes respiratory disease. Inadequately addressed by current policy.',
  },
  {
    title: 'Credit Access',
    body: 'Artisan households typically lack collateral for formal bank loans. A Khurja glazed mug fetches ₹8–12 at the factory gate but retails at ₹80–150 in Delhi — the margin entirely captured by traders, while artisans depend on middleman advances at exploitative rates.',
  },
]

const policies = [
  {
    year: '2023',
    title: 'PM Vishwakarma Yojana',
    body: 'Artisan identity cards, skill training, and collateral-free loans up to ₹3 lakh at concessional interest for traditional craftspersons including potters. Direct response to the credit-access crisis.',
  },
  {
    year: 'Ongoing',
    title: 'SFURTI · Fund for Traditional Industries',
    body: 'Clusters organised into cooperatives or producer companies with common facility centres (CFCs) and modern equipment, linked to market development assistance and design support.',
  },
  {
    year: 'Ongoing',
    title: 'DTU · Design & Technology Upgradation',
    body: 'Funds improved electric wheels, LPG kilns, and clean glaze formulations in traditional centres, with demonstrated reduction in occupational health hazards.',
  },
  {
    year: '17+ tags',
    title: 'Geographical Indication Protection',
    body: 'Khurja Pottery (GI Tag No. 1), Jaipur Blue Pottery, Nizamabad Black Pottery, Molela Terracotta, Longpi Pottery, Krishnanagar Dolls and more — legal protection enabling premium market positioning.',
  },
  {
    year: 'Digital',
    title: 'E-commerce Platforms',
    body: 'Amazon Karigar, Craftsvilla, GoCoop and state emporium chains have expanded market access. The Indian studio pottery movement reaches global collectors through online portfolios and design fairs.',
  },
]

const industry = [
  { v: '₹55,000 Cr', l: 'Total Industry Turnover (2023)' },
  { v: '2.5 M', l: 'Persons Employed' },
  { v: '$1.1 B', l: 'Ceramic Product Exports' },
  { v: '700+', l: 'Morbi Kiln Units' },
]

export default function Community() {
  const [hRef, hVis] = useScrollReveal()
  const [lRef, lVis] = useScrollReveal()
  const [rRef, rVis] = useScrollReveal()

  return (
    <section id="community" className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="container-wide">
        <motion.div
          ref={hRef}
          initial={{ opacity: 0, y: 24 }}
          animate={hVis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1fr_1.3fr] gap-10 mb-14 items-end"
        >
          <div>
            <div className="eyebrow mb-4">Kumbhāra · Socioeconomics</div>
            <h2
              className="h-display title-mark text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              The <em>community</em><br /> behind the wheel
            </h2>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            The Kumhar community is the hereditary custodian of Indian pottery — traditionally
            located in the <span className="italic">kumbharwāḍā</span> ward near a water source and
            clay deposit, supplying vessels to the village in exchange for customary harvest shares
            under the <span className="italic">jajmani</span> system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {/* LEFT — community names + challenges */}
          <motion.div
            ref={lRef}
            initial={{ opacity: 0, y: 28 }}
            animate={lVis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="surface p-6 mb-6">
              <div className="mono text-[10.5px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
                Names across languages
              </div>
              <div className="flex flex-wrap gap-2">
                {communityNames.map((n) => (
                  <span
                    key={n.name}
                    className="tag-pill"
                    style={{ fontSize: '0.7rem' }}
                    title={n.lang}
                  >
                    {n.name} <span className="opacity-60 ml-1">· {n.lang}</span>
                  </span>
                ))}
              </div>
              <div className="rule my-5" />
              <p style={{ color: 'var(--muted)' }} className="text-pretty">
                The <span className="italic">National Sample Survey 73rd Round (2015–16)</span> estimated approximately{' '}
                <span style={{ color: 'var(--accent)' }} className="mono">23 lakh (2.3 million)</span> craft workers engaged in
                pottery-related activities, of whom roughly 68% are in rural areas. Female participation is high in
                certain regional traditions — in tribal communities of Odisha and the Northeast, pottery is
                exclusively a women's occupation.
              </p>
            </div>

            <div className="mono text-[10.5px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--c-rust)' }}>
              ⌁ Challenges
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={lVis ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                  className="surface p-5"
                  style={{
                    background: 'var(--surface)',
                    borderLeft: '3px solid var(--c-rust)',
                  }}
                >
                  <h4 className="h-display text-lg md:text-xl mb-2">{c.title}</h4>
                  <p style={{ color: 'var(--muted)' }} className="text-[15px] leading-relaxed text-pretty">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — policies */}
          <motion.div
            ref={rRef}
            initial={{ opacity: 0, y: 28 }}
            animate={rVis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="mono text-[10.5px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--c-jade)' }}>
              ⌁ Policy & Pathways
            </div>
            <div className="space-y-4">
              {policies.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={rVis ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="surface p-5"
                  style={{
                    background: 'var(--surface)',
                    borderLeft: '3px solid var(--c-jade)',
                  }}
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h4 className="h-display text-lg md:text-xl">{p.title}</h4>
                    <span
                      className="mono text-[10px] tracking-[0.16em] uppercase whitespace-nowrap"
                      style={{ color: 'var(--accent)' }}
                    >
                      {p.year}
                    </span>
                  </div>
                  <p style={{ color: 'var(--muted)' }} className="text-[14.5px] leading-relaxed text-pretty">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Industry snapshot bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-12 p-7 md:p-9 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0D0804 0%, #1A100A 100%)',
            border: '1px solid #D4A843',
          }}
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(196,82,30,0.5), transparent 70%)' }}
            />
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="md:col-span-4 mono text-[10.5px] tracking-[0.25em] uppercase mb-2" style={{ color: '#D4A843' }}>
              Industry Snapshot · 2023 — 2024
            </div>
            {industry.map((s, i) => (
              <div key={i}>
                <div className="h-display text-3xl md:text-4xl" style={{ color: '#F5EDD8' }}>
                  {s.v}
                </div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase mt-2 opacity-60" style={{ color: '#F5EDD8' }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-6 pt-5 border-t mono text-[10.5px] tracking-[0.18em] uppercase opacity-50" style={{ color: '#F5EDD8', borderColor: 'rgba(212,168,67,0.25)' }}>
            Sources: ASSOCHAM Ceramics Report 2023 · Ministry of Textiles Handicraft Export Data 2023–24 · NSS 73rd Round
          </div>
        </motion.div>
      </div>
    </section>
  )
}
