'use client'

import { brand, stats } from '@/data/content'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-24 pb-14 md:pb-20 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'linear-gradient(160deg, var(--nautilus-deep) 0%, var(--nautilus) 100%)' }}
    >
      <span className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-semibold leading-none pointer-events-none select-none hidden md:block" style={{ fontSize: '160px', color: 'rgba(201,168,76,0.05)' }} aria-hidden="true">
        BLUPIX
      </span>

      <div className="animate-fade-up inline-flex items-center gap-2.5 text-xs tracking-widest uppercase font-medium mb-6" style={{ color: 'var(--gold)', animationDelay: '0.1s' }}>
        <span className="inline-block w-8" style={{ height: '0.5px', background: 'var(--gold)' }} />
        Southfield, MI — Remote available
      </div>

      <h1 className="animate-fade-up font-display font-light leading-tight text-white mb-4" style={{ fontSize: 'clamp(36px, 8vw, 64px)', letterSpacing: '-0.01em', animationDelay: '0.2s' }}>
        Technology built<br />
        <em className="not-italic" style={{ color: 'var(--gold)' }}>for your business.</em>
      </h1>

      <p className="animate-fade-up text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--muted)', animationDelay: '0.3s' }}>
        {brand.subTagline}
      </p>

      <div className="animate-fade-up flex flex-col sm:flex-row gap-3" style={{ animationDelay: '0.4s' }}>
        <a href="#contact">
          <button className="w-full sm:w-auto px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200" style={{ background: 'var(--gold)', color: 'var(--nautilus-deep)', border: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Start a project
          </button>
        </a>
        <a href="#services">
          <button className="w-full sm:w-auto px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200" style={{ background: 'transparent', color: 'var(--gold)', border: '0.5px solid var(--gold-dim)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gold-dim)')}
          >
            See services
          </button>
        </a>
      </div>

      <div className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t" style={{ borderColor: 'var(--gold-dim)', animationDelay: '0.5s' }}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display font-light leading-none" style={{ fontSize: 'clamp(26px, 6vw, 34px)', color: 'var(--gold)' }}>{stat.number}</div>
            <div className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
