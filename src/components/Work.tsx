'use client'

import { caseStudies } from '@/data/content'

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-14 md:py-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="section-label">Work</div>

      <p className="text-sm mb-8 max-w-lg" style={{ color: 'var(--muted)' }}>
        Case studies coming soon — check back shortly. In the meantime,{' '}
        <a href="#contact" style={{ color: 'var(--gold)' }}>get in touch</a> to discuss your project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(201,168,76,0.1)' }}>
        {caseStudies.map((study) => (
          <div key={study.title} className="p-6 md:p-7 relative" style={{ background: 'var(--nautilus)' }}>
            {study.placeholder && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(22,40,57,0.5)', backdropFilter: 'blur(2px)', zIndex: 1 }}>
                <span className="text-xs tracking-widest uppercase font-medium px-3 py-1.5" style={{ color: 'var(--gold)', border: '0.5px solid var(--gold-dim)' }}>
                  Coming soon
                </span>
              </div>
            )}
            <div className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: 'var(--gold)' }}>
              {study.tag}
            </div>
            <div className="text-xs mb-2" style={{ color: 'var(--muted)' }}>{study.client}</div>
            <h3 className="font-display text-xl font-normal leading-tight text-white mb-3">{study.title}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{study.outcome}</p>
            <div className="flex flex-wrap gap-1.5">
              {study.stack.map((tech) => (
                <span key={tech} className="text-xs px-2 py-0.5 tracking-wide font-medium" style={{ background: 'var(--gold-subtle)', color: 'var(--gold)', border: '0.5px solid var(--gold-dim)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
