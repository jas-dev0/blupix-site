'use client'

import { services } from '@/data/content'

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-14 md:py-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="section-label">Services</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(201,168,76,0.1)' }}>
        {services.map((service) => (
          <div key={service.title} className="p-6 md:p-7 transition-colors duration-200" style={{ background: 'var(--nautilus)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--nautilus-mid)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--nautilus)')}
          >
            <div className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: 'var(--gold)' }}>
              {service.tag}
            </div>
            <h3 className="font-display text-xl font-normal leading-tight text-white mb-3">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              {service.description}
            </p>
            <ul className="flex flex-col gap-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                  <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full inline-block" style={{ background: 'var(--gold)' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
