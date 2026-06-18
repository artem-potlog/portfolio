import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { ProjectItem } from '../data/types'
import { ArrowUpRight, Close, Expand } from './icons'
import PreviewVideo from './PreviewVideo'

interface Props {
  item: ProjectItem | null
  onClose: () => void
}

export default function CaseStudyPanel({ item, onClose }: Props) {
  const reduced = useReducedMotion()
  const [zoom, setZoom] = useState<string | null>(null)
  const zoomRef = useRef<string | null>(null)
  zoomRef.current = zoom

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      // close the lightbox first if it is open, otherwise the panel
      if (zoomRef.current) setZoom(null)
      else onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  // reset zoom whenever the panel target changes / closes
  useEffect(() => {
    if (!item) setZoom(null)
  }, [item])

  return (
    <AnimatePresence>
      {item && item.detail && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />

          {/* panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line-strong bg-panel p-7 sm:rounded-3xl sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel/80 text-bone-dim backdrop-blur-sm transition-colors hover:border-brass hover:text-brass"
            >
              <Close className="h-4 w-4" />
            </button>

            {item.preview && (
              <div className="group mb-7 overflow-hidden rounded-xl border border-line">
                <PreviewVideo src={item.preview} label={item.title} />
              </div>
            )}

            <p className="eyebrow">Case study</p>
            <h3 className="mt-3 font-display text-3xl font-light leading-tight text-bone">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-bone-dim">
              {item.detail.context}
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
              {item.detail.facts.map((f) => (
                <div key={f.label} className="bg-ink-soft p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-faint">
                    {f.label}
                  </div>
                  <div className="mt-1.5 text-sm text-bone">{f.value}</div>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              {item.detail.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-bone-dim">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {item.detail.diagrams && (
              <div className="mt-9">
                <p className="eyebrow mb-4">Diagrams — click to enlarge</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {item.detail.diagrams.map((d) => (
                    <button
                      key={d.src}
                      onClick={() => setZoom(d.src)}
                      className="group/dia text-left"
                      aria-label={`Enlarge: ${d.caption}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-ink">
                        <img
                          src={d.src}
                          alt={d.caption}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/dia:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover/dia:opacity-100">
                          <Expand className="h-6 w-6 text-bone" />
                        </div>
                      </div>
                      <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-bone-faint transition-colors group-hover/dia:text-brass">
                        {d.caption}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-transform hover:scale-[1.03]"
              >
                {item.status === 'github' ? 'View repository' : 'Open live'}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </motion.div>

          {/* lightbox */}
          <AnimatePresence>
            {zoom && (
              <motion.div
                className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md sm:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setZoom(null)}
              >
                <button
                  onClick={() => setZoom(null)}
                  aria-label="Close image"
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-bone transition-colors hover:border-brass hover:text-brass"
                >
                  <Close className="h-5 w-5" />
                </button>
                <motion.img
                  src={zoom}
                  alt="Diagram"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[90svh] max-w-[94vw] rounded-xl border border-line-strong object-contain shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
