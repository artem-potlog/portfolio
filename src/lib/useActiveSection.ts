import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently most prominent in the viewport,
 * using IntersectionObserver. Returns the active id.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio)
        })
        let best = active
        let bestRatio = -1
        ids.forEach((id) => {
          const r = visibility.get(id) ?? 0
          if (r > bestRatio) {
            bestRatio = r
            best = id
          }
        })
        if (bestRatio > 0) setActive(best)
      },
      { threshold: [0.15, 0.35, 0.55, 0.75], rootMargin: '-10% 0px -40% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return active
}
