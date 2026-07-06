import { marquee } from '../data/content'

// Infinite horizontal scroll of skills/tech.
export default function Marquee() {
  const items = [...marquee, ...marquee] // duplicate for seamless loop
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base-950 to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {items.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/5 bg-white/[0.03] px-5 py-2 text-sm font-medium text-slate-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
