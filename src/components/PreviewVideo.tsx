import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Props {
  src: string
  /** accessible description, e.g. the project title */
  label: string
  className?: string
}

/**
 * Looping, muted preview clip of a live site. Plays only while in view
 * (IntersectionObserver) to keep bandwidth polite across many cards, and
 * shows a static first frame when the user prefers reduced motion.
 */
export default function PreviewVideo({ src, label, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()

  // `#t=0.1` nudges browsers to paint a first frame as a poster.
  const source = `${src}#t=0.1`

  useEffect(() => {
    const video = ref.current
    if (!video || reduced) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.25 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [reduced])

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-ink ${className}`}
    >
      <video
        ref={ref}
        src={source}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        aria-label={`Preview of ${label}`}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      {/* legibility + tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(120%_80%_at_50%_0%,rgba(200,148,59,0.10),transparent_60%)]" />
    </div>
  )
}
