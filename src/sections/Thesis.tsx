import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { THESIS } from '../data/content'

export default function Thesis() {
  return (
    <Section id="thesis">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs text-brass">01</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">{THESIS.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.4rem)] font-light leading-[1.08] tracking-tight text-bone">
              {THESIS.headline}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-2">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-bone-dim">{THESIS.body}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {THESIS.pillars.map((p, i) => (
          <Reveal key={p.title} delay={0.1 + i * 0.08}>
            <div className="h-full bg-ink-soft p-7 transition-colors duration-500 hover:bg-panel">
              <span className="font-mono text-xs text-brass">{`0${i + 1}`}</span>
              <h3 className="mt-4 font-display text-xl text-bone">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-dim">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
