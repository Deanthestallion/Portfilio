import { motion } from 'framer-motion'
import { Rocket, Workflow, Megaphone, BookOpen } from 'lucide-react'
import { services } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

const icons = { Rocket, Workflow, Megaphone, BookOpen }

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="What I Do"
          title="How I can help you"
          subtitle="Whether you need a product built, a workflow automated, a community grown or a team trained — I've got you."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon] || Rocket
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group card card-hover h-full p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-400 ring-1 ring-white/10 transition-all group-hover:shadow-glow">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-base font-600 text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
