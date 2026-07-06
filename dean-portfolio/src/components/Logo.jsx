// Dean — brand logo. A gradient "D" monogram mark + wordmark.
// Reusable at any size; pass `mark` to render just the badge.

export function LogoMark({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="deanGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34d399" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="16" fill="#0a0a12" />
      <rect
        x="4.75"
        y="4.75"
        width="54.5"
        height="54.5"
        rx="15.25"
        stroke="url(#deanGrad)"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <path
        d="M22 18h9c9.4 0 15 5.4 15 14s-5.6 14-15 14h-9V18Z"
        stroke="url(#deanGrad)"
        strokeWidth="5"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="45" cy="19" r="3.2" fill="url(#deanGrad)" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label="Dean — home">
      <LogoMark size={38} className="transition-transform duration-300 group-hover:rotate-6" />
      <span className="font-display text-xl font-700 tracking-tight text-white">
        Dean
        <span className="text-brand-400">.</span>
      </span>
    </a>
  )
}
