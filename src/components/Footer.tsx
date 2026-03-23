'use client'

import { brand } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-2 px-6 md:px-10 py-6 border-t" style={{ borderColor: 'var(--gold-dim)', background: 'var(--nautilus-deep)' }}>
      <span className="text-xs" style={{ color: 'var(--muted)' }}>
        © {year} {brand.name} · Led by{' '}
        <a href={brand.portfolioUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
          {brand.founderName}
        </a>
      </span>
      <span className="font-display text-lg font-semibold tracking-wide" style={{ color: 'var(--gold)' }}>
        {brand.name}
      </span>
    </footer>
  )
}
