import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Buttery smooth scrolling via Lenis. Disabled automatically when the user
 * prefers reduced motion, so accessibility / OS settings are respected.
 *
 * Exposes the instance on window for anchor navigation (see scrollToId).
 */
export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    // expose for anchor scrolling
    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as unknown as { __lenis?: Lenis }).__lenis
    }
  }, [])
}

/** Returns the active Lenis instance, if any. */
export function getLenis(): Lenis | undefined {
  return (window as unknown as { __lenis?: Lenis }).__lenis
}

/** Smoothly scroll to a section id, using Lenis when available. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(el, { offset: 0, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
