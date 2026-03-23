'use client'

import { brand } from '@/data/content'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-14 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

        {/* Left */}
        <div>
          <h2 className="font-display font-light text-white leading-tight mb-4" style={{ fontSize: 'clamp(32px, 8vw, 44px)' }}>
            Ready to build<br />
            <em className="not-italic" style={{ color: 'var(--gold)' }}>something great?</em>
          </h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
            Tell me about your project — what you need, what's not working, or just where you want to go. I'll get back to you within 48 hours.
          </p>
          <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--muted)' }}>
            Based in Southfield, MI. Available for remote projects everywhere.
          </p>
          <a href={`mailto:${brand.email}`}>
            <button className="w-full sm:w-auto px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200" style={{ background: 'var(--gold)', color: 'var(--nautilus-deep)', border: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Start a conversation
            </button>
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-px" style={{ background: 'var(--gold-dim)' }}>
          {[
            { label: 'Email',     value: brand.email,      href: `mailto:${brand.email}`          },
            { label: 'LinkedIn',  value: brand.linkedin,   href: `https://${brand.linkedin}`       },
            { label: 'Portfolio', value: 'jasmineallen.dev', href: brand.portfolioUrl              },
          ].map((link) => (
            <a key={link.label} href={link.href} target={link.label !== 'Email' ? '_blank' : undefined} rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between px-4 py-4 text-sm transition-colors duration-200"
              style={{ background: 'var(--nautilus)', color: 'var(--cream)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--nautilus-mid)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--nautilus)')}
            >
              <div>
                <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: 'var(--muted)' }}>{link.label}</div>
                <div className="text-sm break-all">{link.value}</div>
              </div>
              <span className="ml-4 flex-shrink-0" style={{ color: 'var(--gold)' }}>→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
