import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { ABOUT } from '../data/content'

export default function About() {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* portrait */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line">
              <img
                src="/artem.png"
                alt="Artem Potlog"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale-[0.15] transition-all duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/80">
                UAE · EU citizen
              </div>
            </div>
          </Reveal>
        </div>

        {/* bio */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs text-brass">05</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">{ABOUT.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,3rem)] font-light leading-[1.1] tracking-tight text-bone">
              {ABOUT.headline}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="text-base leading-relaxed text-bone-dim">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.15}>
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
                  Education
                </h4>
                <ul className="mt-4 space-y-4">
                  {ABOUT.education.map((ed) => {
                    const href = 'href' in ed ? (ed.href as string) : undefined
                    return (
                      <li key={ed.school}>
                        <div className="text-sm text-bone">
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline transition-colors hover:text-brass"
                            >
                              {ed.school}
                            </a>
                          ) : (
                            ed.school
                          )}
                        </div>
                        <div className="mt-0.5 text-sm text-bone-dim">{ed.detail}</div>
                        <div className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-bone-faint">
                          {ed.year}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
                  Languages
                </h4>
                <ul className="mt-4 space-y-2">
                  {ABOUT.languages.map((l) => (
                    <li key={l} className="text-sm text-bone-dim">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
