import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { projects, profile } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built & shipped"
          subtitle="Real products, live in the wild — from study tools to full school result systems powered by automation."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group card card-hover flex h-full flex-col overflow-hidden"
              >
                {/* Screenshot */}
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-base-850"
                >
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-base-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Live
                  </span>
                </a>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-700 text-white">{p.name}</h3>
                      <p className="text-sm text-brand-400">{p.subtitle}</p>
                    </div>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.name}`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-300 transition-all group-hover:border-brand-400/50 group-hover:text-brand-400"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-400"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal delay={0.15} className="mt-10 text-center">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={17} /> See more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
