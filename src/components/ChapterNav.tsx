import { CHAPTERS } from '../data/content'
import { scrollToId } from '../lib/useLenis'
import { useActiveSection } from '../lib/useActiveSection'

const ids = CHAPTERS.map((c) => c.id)

/** Sticky vertical chapter rail on the right (desktop only). */
export default function ChapterNav() {
  const active = useActiveSection(ids)

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 lg:flex"
    >
      {CHAPTERS.map((c) => {
        const isActive = c.id === active
        return (
          <button
            key={c.id}
            onClick={() => scrollToId(c.id)}
            className="group flex items-center justify-end gap-3 py-1.5"
            aria-current={isActive ? 'true' : undefined}
            aria-label={`Go to ${c.label}`}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? 'text-brass opacity-100'
                  : 'text-bone-faint opacity-0 group-hover:opacity-100'
              }`}
            >
              {c.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-2 w-2 bg-brass'
                  : 'h-1.5 w-1.5 bg-bone-faint group-hover:bg-bone-dim'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
