import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Magnetic from '../components/Magnetic'
import { PROFILE } from '../data/content'
import { scrollToId } from '../lib/useLenis'

// Three.js is heavy — load it as a separate chunk after first paint.
const HeroBackground = lazy(() => import('../components/HeroBackground'))

export default function Hero() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
        },
      }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      {/* WebGL field */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 50% at 70% 30%, rgba(200,148,59,0.16), transparent 60%), radial-gradient(50% 50% at 25% 70%, rgba(63,182,168,0.10), transparent 60%)',
              }}
            />
          }
        >
          <HeroBackground />
        </Suspense>
      </div>

      {/* depth gradients */}
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p
            variants={item}
            className="eyebrow mb-6"
          >
            {PROFILE.kicker}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.6rem,7vw,5.6rem)] font-light leading-[0.98] tracking-tight text-bone"
          >
            Artem Potlog
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl font-display text-[clamp(1.25rem,2.6vw,2rem)] font-light leading-[1.25] text-gradient-bone"
          >
            {PROFILE.roleLine}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-bone-dim sm:text-lg"
          >
            {PROFILE.heroSub}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
            <Magnetic>
              <button
                onClick={() => scrollToId('work')}
                className="group relative overflow-hidden rounded-full bg-brass px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.03]"
              >
                <span className="relative z-10">Explore the work</span>
                <span className="absolute inset-0 -translate-x-full bg-brass-bright transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </Magnetic>
            <button
              onClick={() => scrollToId('contact')}
              className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-bone transition-colors hover:text-brass"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint">
            Scroll
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-line-strong">
            {!reduced && (
              <motion.span
                className="absolute left-0 top-0 h-4 w-px bg-brass"
                animate={{ y: [-16, 40] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </span>
        </div>
      </motion.div>
    </section>
  )
}
