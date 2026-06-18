import { scrollToId } from '../lib/useLenis'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-10 lg:px-16">
        <div className="font-display text-lg tracking-tight text-bone">
          Artem<span className="text-brass">.</span>Potlog
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-bone-faint">
          Energy &amp; O&amp;G executive: capital allocation, M&amp;A and
          petroleum economics, augmented with AI/ML.
        </p>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-[0.1em] text-bone-faint">
            © {year}
          </span>
          <button
            onClick={() => scrollToId('hero')}
            className="link-underline font-mono text-[11px] uppercase tracking-[0.16em] text-bone-dim transition-colors hover:text-brass"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
