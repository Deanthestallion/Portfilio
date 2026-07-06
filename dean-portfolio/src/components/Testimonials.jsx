import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Kind Words"
          title="What people say"
          subtitle="A note on the placeholders — swap these for real quotes from your community, students and clients anytime."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="card h-full p-6">
                <Quote className="h-7 w-7 text-brand-400/70" />
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500/30 to-accent-500/30 font-display text-sm font-700 text-white">
                    {t.author.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-600 text-white">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
