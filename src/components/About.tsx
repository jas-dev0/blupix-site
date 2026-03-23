'use client'

import { brand } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-14 md:py-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="section-label">About</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Left */}
        <div>
          <h2 className="font-display font-light text-white leading-tight mb-5" style={{ fontSize: 'clamp(28px, 6vw, 40px)' }}>
            Built by one engineer.<br />
            <em className="not-italic" style={{ color: 'var(--gold)' }}>Backed by enterprise experience.</em>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
            {brand.founderBio}
          </p>
          <a
            href={brand.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--gold)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gold)')}
          >
            View Jasmine&apos;s portfolio →
          </a>
        </div>

        {/* Right — founder card */}
        <div className="p-6 md:p-8" style={{ background: 'var(--nautilus)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center gap-4 mb-6 pb-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-display text-lg font-semibold flex-shrink-0" style={{ background: 'var(--gold-subtle)', color: 'var(--gold)', border: '0.5px solid var(--gold-dim)' }}>
              JA
            </div>
            <div>
              <div className="text-sm font-medium text-white">{brand.founderName}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--gold)' }}>{brand.founderTitle}</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              'C# / .NET & Python development',
              'REST API design & integration',
              'AI chatbot & automation workflows',
              'Brand identity & visual design',
              'Enterprise systems experience',
              'Azure & AWS cloud platforms',
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--muted)' }}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
