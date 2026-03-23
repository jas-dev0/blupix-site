'use client'

import { testimonials } from '@/data/content'

export default function Testimonials() {
  const hasReal = testimonials.some((t) => !t.placeholder)

  if (!hasReal) return null  // Hide entirely until real testimonials sent back

  return (
    <section className="px-6 md:px-10 py-14 md:py-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="section-label">What clients say</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(201,168,76,0.1)' }}>
        {testimonials.filter((t) => !t.placeholder).map((t, i) => (
          <div key={i} className="p-6 md:p-8" style={{ background: 'var(--nautilus)' }}>
            <div className="font-display text-3xl mb-4" style={{ color: 'var(--gold)', lineHeight: 1 }}>&ldquo;</div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--cream)' }}>{t.quote}</p>
            <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'var(--gold-subtle)', color: 'var(--gold)', border: '0.5px solid var(--gold-dim)' }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
