import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  /** vertical padding preset */
  flush?: boolean
}

/** Consistent section wrapper with anchor id and responsive gutters. */
export default function Section({ id, children, className = '', flush }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 ${
        flush ? '' : 'py-24 sm:py-32 lg:py-40'
      } ${className}`}
    >
      {children}
    </section>
  )
}

interface HeadingProps {
  index: string
  eyebrow: string
  title: ReactNode
  className?: string
}

/** Chapter heading with index marker + monospace eyebrow. */
export function SectionHeading({ index, eyebrow, title, className = '' }: HeadingProps) {
  return (
    <div className={className}>
      <div className="mb-5 flex items-center gap-4">
        <span className="font-mono text-xs text-brass">{index}</span>
        <span className="h-px w-10 bg-line-strong" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-light leading-[1.08] tracking-tight text-bone sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}
