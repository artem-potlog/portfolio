import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import { CONTACT, PROFILE } from '../data/content'
import {
  ArrowUpRight,
  Download,
  Github,
  LinkedIn,
  Mail,
  Phone,
  Telegram,
  WhatsApp,
} from '../components/icons'
import type { JSX } from 'react'

interface Channel {
  label: string
  value: string
  href: string
  icon: JSX.Element
  download?: boolean
  external?: boolean
}

const channels: Channel[] = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: <Mail className="h-5 w-5" /> },
  { label: 'Call', value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}`, icon: <Phone className="h-5 w-5" /> },
  { label: 'WhatsApp', value: CONTACT.whatsappDisplay, href: CONTACT.whatsapp, icon: <WhatsApp className="h-5 w-5" />, external: true },
  { label: 'Telegram', value: CONTACT.telegramDisplay, href: CONTACT.telegram, icon: <Telegram className="h-5 w-5" />, external: true },
  { label: 'LinkedIn', value: '/in/artem-potlog', href: CONTACT.linkedin, icon: <LinkedIn className="h-5 w-5" />, external: true },
  { label: 'GitHub', value: '/artem-potlog', href: CONTACT.github, icon: <Github className="h-5 w-5" />, external: true },
]

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs text-brass">06</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">Get in touch</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-tight text-bone">
              Let&rsquo;s talk about leading your AI transformation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone-dim">
              Available for energy / upstream strategy and AI-transformation
              advisory. {PROFILE.location}.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Magnetic className="mt-9">
              <a
                href={CONTACT.cv}
                download
                className="group inline-flex items-center gap-3 rounded-full bg-brass px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-transform hover:scale-[1.03]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full items-center justify-between gap-4 bg-ink-soft p-6 transition-colors duration-500 hover:bg-panel"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-line text-bone-dim transition-colors duration-500 group-hover:border-brass/50 group-hover:text-brass">
                      {c.icon}
                    </span>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-faint">
                        {c.label}
                      </div>
                      <div className="mt-1 text-sm text-bone">{c.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-bone-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
