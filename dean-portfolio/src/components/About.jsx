import { motion } from 'framer-motion'
import { Check, Quote } from 'lucide-react'
import { about, stats } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Turning problems into working solutions"
          subtitle="Developer, automator, community leader and educator — driven by one belief: every problem is a solution waiting to be seen."
        />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Left: story */}
          <Reveal>
            <div className="space-y-5 text-[15px] leading-relaxed text-slate-300">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Signature quote */}
            <div className="mt-8 flex gap-4 rounded-2xl border border-brand-500/20 bg-brand-500/[0.06] p-5">
              <Quote className="h-6 w-6 shrink-0 text-brand-400" />
              <p className="font-display text-lg font-500 text-white">
                “I don't see problems — I see solutions. People rely on me to reveal what they're
                not yet seeing.”
              </p>
            </div>
          </Reveal>

          {/* Right: highlights */}
          <Reveal delay={0.1}>
            <div className="card p-6">
              <h3 className="mb-4 font-display text-lg font-600 text-white">What I bring</h3>
              <ul className="space-y-3">
                {about.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-400">
                      <Check size={13} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card card-hover p-6 text-center"
              >
                <p className="gradient-text font-display text-3xl font-700 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
