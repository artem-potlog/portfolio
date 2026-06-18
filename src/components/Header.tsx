import { scrollToId } from '../lib/useLenis'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Path' },
  { id: 'about', label: 'About' },
]

/** Minimal fixed header: wordmark + quick links + contact CTA. */
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <button
          onClick={() => scrollToId('hero')}
          className="font-display text-lg tracking-tight text-bone transition-colors hover:text-brass"
          aria-label="Back to top"
        >
          Artem<span className="text-brass">.</span>Potlog
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-bone-dim transition-colors hover:text-bone"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollToId('contact')}
            className="rounded-full border border-brass/40 bg-brass/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-brass transition-all hover:border-brass hover:bg-brass/15"
          >
            Get in touch
          </button>
        </nav>

        <button
          onClick={() => scrollToId('contact')}
          className="rounded-full border border-brass/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-brass md:hidden"
        >
          Contact
        </button>
      </div>
    </header>
  )
}
