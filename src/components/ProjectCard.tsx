import { useRef } from 'react'
import type { ProjectItem } from '../data/types'
import { ArrowUpRight, ArrowRight, Github } from './icons'
import PreviewVideo from './PreviewVideo'

interface Props {
  item: ProjectItem
  onOpen: (item: ProjectItem) => void
}

function StatusBadge({ status }: { status: ProjectItem['status'] }) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-teal">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
        </span>
        Live
      </span>
    )
  }
  if (status === 'github') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-faint">
        <Github className="h-3 w-3" /> Repo
      </span>
    )
  }
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-faint">
      Case study
    </span>
  )
}

export default function ProjectCard({ item, onOpen }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const hasDetail = !!item.detail
  const primaryAction = () => {
    if (hasDetail) onOpen(item)
    else if (item.url) window.open(item.url, '_blank', 'noopener')
  }

  const actionLabel = hasDetail
    ? 'Read case'
    : item.status === 'github'
      ? 'View repo'
      : 'Open live'

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onClick={primaryAction}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-ink-soft transition-all duration-500 hover:border-brass/30 hover:bg-panel"
    >
      {/* preview clip of the live site, or a static diagram visual */}
      {(item.preview || item.image) && (
        <div className="relative border-b border-line">
          {item.preview ? (
            <PreviewVideo src={item.preview} label={item.title} />
          ) : (
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
              <img
                src={item.image}
                alt={`${item.title} diagram`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            </div>
          )}
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${item.title}`}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-ink/70 text-bone backdrop-blur-sm transition-colors hover:border-brass hover:text-brass"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        {/* spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(220px circle at var(--mx) var(--my), rgba(200,148,59,0.10), transparent 70%)',
          }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <StatusBadge status={item.status} />
          {item.url && !item.preview && !item.image && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${item.title}`}
              className="text-bone-faint transition-colors hover:text-brass"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <h3 className="relative mt-5 font-display text-xl leading-tight text-bone sm:text-2xl">
          {item.title}
        </h3>

        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-bone-dim">
          {item.blurb}
        </p>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-bone-faint"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
          {actionLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
