import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { profile } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    // Opens the visitor's mail client, pre-filled to Dean.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  const contactCards = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneIntl}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-brand-500/5 to-transparent" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great"
          subtitle="Have a project, a problem to crack, or a community to grow? I'm one message away."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: info */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-400 ring-1 ring-white/10">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                      <p className="truncate text-sm font-600 text-white">{value}</p>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} className="card card-hover p-5">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="card p-5">
                    {inner}
                  </div>
                )
              })}

              {/* Socials */}
              <div className="card mt-auto p-5">
                <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">Find me online</p>
                <div className="flex gap-3">
                  {[
                    { href: profile.socials.github, icon: Github, label: 'GitHub' },
                    { href: profile.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
                    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-brand-400"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="input"
                  />
                </Field>
                <Field label="Your Email">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Your Message" className="mt-4">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea…"
                  className="input resize-none"
                />
              </Field>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-5 w-full"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={17} /> Message ready — check your mail app
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>
              <p className="mt-3 text-center text-xs text-slate-500">
                This opens your email app pre-filled. Prefer direct?{' '}
                <a href={`mailto:${profile.email}`} className="text-brand-400 hover:underline">
                  {profile.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </span>
      {children}
    </label>
  )
}
