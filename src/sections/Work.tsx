import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import CaseStudyPanel from '../components/CaseStudyPanel'
import { PROJECT_GROUPS } from '../data/content'
import type { ProjectItem } from '../data/types'

const TABS = [{ id: 'all', label: 'All' }, ...PROJECT_GROUPS.map((g) => ({ id: g.id, label: g.label }))]

export default function Work() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState<ProjectItem | null>(null)

  const items = useMemo(() => {
    if (active === 'all') return PROJECT_GROUPS.flatMap((g) => g.items)
    return PROJECT_GROUPS.find((g) => g.id === active)?.items ?? []
  }, [active])

  return (
    <Section id="work">
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs text-brass">03</span>
          <span className="h-px w-10 bg-line-strong" />
          <span className="eyebrow">Selected work</span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.4rem)] font-light leading-[1.08] tracking-tight text-bone">
          From investment committees to working software.
        </h2>
      </Reveal>

      {/* filter tabs */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const on = active === t.id
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  on ? 'text-ink' : 'text-bone-dim hover:text-bone'
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-brass"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* grid */}
      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard item={item} onOpen={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <CaseStudyPanel item={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
