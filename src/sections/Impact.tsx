import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { METRICS } from '../data/content'

export default function Impact() {
  return (
    <Section id="impact" className="border-y border-line">
      <Reveal>
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs text-brass">02</span>
          <span className="h-px w-10 bg-line-strong" />
          <span className="eyebrow">Impact in numbers</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.06}>
            <div className="group">
              <div className="font-display text-[clamp(2.4rem,5vw,4rem)] font-light leading-none text-gradient-brass">
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="mt-4 h-px w-full bg-line transition-colors duration-500 group-hover:bg-brass/40" />
              <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-bone-dim">
                {m.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
