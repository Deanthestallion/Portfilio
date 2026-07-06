import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  MapPin,
  Phone,
} from 'lucide-react'
import { profile } from '../data/content'
import { LogoMark } from './Logo'

function RotatingRole() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        key={i}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="gradient-text inline-block font-display font-700"
      >
        {profile.roles[i]}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-blob [animation-delay:8s]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Available for work & collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-700 leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Hi, I'm{' '}
            <span className="relative whitespace-nowrap">
              <span className="gradient-text">{profile.brand}</span>
            </span>
            <br />
            <span className="text-slate-100">
              <RotatingRole />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-brand-400" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={15} className="text-brand-400" /> {profile.phone}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              Let's Work Together <ArrowUpRight size={16} />
            </a>
            <a href={profile.cvUrl} download className="btn-ghost">
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
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
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/30 via-cyan-400/20 to-accent-500/30 blur-2xl" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-brand-400 via-cyan-400 to-accent-400 p-[2px]">
              <div className="h-full w-full rounded-[calc(2rem-2px)] bg-base-900" />
            </div>

            {/* Photo (with graceful placeholder) */}
            <div className="absolute inset-[2px] overflow-hidden rounded-[calc(2rem-2px)] bg-base-850">
              <img
                src={profile.photo}
                alt={`${profile.name} — ${profile.headline}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Placeholder shown if photo missing */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center gap-4 bg-gradient-to-br from-base-800 to-base-900 text-center">
                <LogoMark size={72} />
                <div>
                  <p className="font-display text-2xl font-700 text-white">{profile.name}</p>
                  <p className="mt-1 text-sm text-slate-400">Add your photo →</p>
                  <p className="mt-0.5 text-xs text-slate-600">public/assets/profile.jpg</p>
                </div>
              </div>
            </div>

            {/* Floating badge: solutions */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-8 hidden glass rounded-2xl px-4 py-3 shadow-glow sm:block"
            >
              <p className="text-xs text-slate-400">Mindset</p>
              <p className="text-sm font-600 text-white">Solutions, not problems</p>
            </motion.div>

            {/* Floating badge: role */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-4 bottom-10 hidden glass rounded-2xl px-4 py-3 shadow-glow-violet sm:block"
            >
              <p className="text-xs text-slate-400">City Lead</p>
              <p className="text-sm font-600 text-white">Founders Friday, Kaduna</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
