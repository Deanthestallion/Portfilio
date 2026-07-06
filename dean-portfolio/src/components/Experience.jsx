import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

const typeStyles = {
  Leadership: 'text-brand-400 bg-brand-500/10 border-brand-500/25',
  Community: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/25',
  Education: 'text-accent-400 bg-accent-500/10 border-accent-500/25',
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Journey"
          title="Roles that shaped me"
          subtitle="From leading communities to running classrooms and service teams — a track record of stepping up and delivering."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-white/10 to-transparent sm:left-1/2" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.role + job.org} delay={0.05}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-4 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-brand-500/40 bg-base-900 text-brand-400 shadow-glow">
                      <Briefcase size={14} />
                    </span>
                  </div>

                  {/* card */}
                  <div className="ml-12 w-full sm:ml-0 sm:w-[calc(50%-2rem)]">
                    <motion.div whileHover={{ y: -4 }} className="card card-hover p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                            typeStyles[job.type] || typeStyles.Leadership
                          }`}
                        >
                          {job.type}
                        </span>
                        <span className="text-xs font-medium text-slate-500">{job.period}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-600 text-white">{job.role}</h3>
                      <p className="text-sm font-medium text-brand-400">{job.org}</p>
                      <ul className="mt-3 space-y-1.5">
                        {job.points.map((p, j) => (
                          <li key={j} className="flex gap-2 text-sm text-slate-400">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* spacer for the other side on desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
