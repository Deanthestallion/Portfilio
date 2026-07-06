import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  const year = 2026 // update yearly; kept static to avoid runtime Date calls
  return (
    <footer className="relative border-t border-white/10 bg-base-950/60">
      <div className="container-px py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Logo className="justify-center md:justify-start" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {profile.headline}. Solutions-driven, community-minded, and always building.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-brand-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-brand-400"
            >
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {year} {profile.name} <span className="text-slate-600">·</span> Dean. All rights
            reserved.
          </p>
          <p>
            Built with React, Tailwind &amp; Framer Motion <span className="text-brand-400">✦</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
