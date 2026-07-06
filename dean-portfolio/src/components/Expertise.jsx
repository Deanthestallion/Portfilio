import { motion } from 'framer-motion'
import {
  Code2,
  Bot,
  Users,
  Lightbulb,
  GraduationCap,
  Handshake,
} from 'lucide-react'
import { expertise } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

const icons = { Code2, Bot, Users, Lightbulb, GraduationCap, Handshake }

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32">
      {/* soft accent */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Expertise"
          title="A rare full-stack of skills"
          subtitle="Technical depth meets human leadership — I build the product and I move the people."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon] || Code2
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className={`group card card-hover relative h-full overflow-hidden p-6 ${
                    item.featured ? 'sm:row-span-1' : ''
                  }`}
                >
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />

                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-400 ring-1 ring-white/10">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-lg font-600 text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
