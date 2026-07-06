import { motion } from 'framer-motion'

// `?static=1` renders everything in its resting, visible state (no scroll gating).
// Handy for screenshots, previews and print. Harmless in normal use.
const STATIC =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).has('static')

// Fade + rise on scroll into view. Wrap anything.
export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  const animProps = STATIC
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      }
  return (
    <MotionTag
      {...animProps}
      transition={{ duration: 0.6, delay: STATIC ? 0 : delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

// Section heading block used across sections.
export function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-slate-400 ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
