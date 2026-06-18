import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { EXPERIENCE } from '../data/content'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section id="experience">
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs text-brass">04</span>
          <span className="h-px w-10 bg-line-strong" />
          <span className="eyebrow">The path</span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mb-16 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.4rem)] font-light leading-[1.08] tracking-tight text-bone">
          Twelve years, four regions, one through-line.
        </h2>
      </Reveal>

      <div ref={ref} className="relative">
        {/* timeline spine */}
        <div className="absolute left-0 top-2 h-full w-px bg-line sm:left-[180px]">
          <motion.div
            className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-brass via-brass to-teal"
            style={{ scaleY: reduced ? 1 : lineScale, height: '100%' }}
          />
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={`${e.org}-${e.period}`} delay={i * 0.04}>
              <div className="relative grid gap-3 pl-8 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-0">
                {/* node */}
                <span className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full border border-brass bg-ink sm:left-[174px]" />

                <div className="font-mono text-xs uppercase tracking-[0.12em] text-bone-faint sm:text-right">
                  {e.period}
                </div>

                <div className="sm:pl-8">
                  <h3 className="font-display text-xl text-bone">{e.org}</h3>
                  <p className="mt-1 text-sm text-brass">{e.role}</p>
                  {e.location && (
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bone-faint">
                      {e.location}
                    </p>
                  )}
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-bone-dim">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-bone-faint" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
