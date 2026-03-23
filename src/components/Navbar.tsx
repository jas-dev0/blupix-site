'use client'

import { useState } from 'react'
import { brand, navLinks } from '@/data/content'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ borderColor: 'var(--gold-dim)', background: 'rgba(22,40,57,0.97)', backdropFilter: 'blur(10px)' }}>
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <span className="font-display text-2xl font-semibold tracking-wide" style={{ color: 'var(--gold)' }}>
          {brand.name}
        </span>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs tracking-widest uppercase font-medium transition-colors duration-200" style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${brand.email}`}>
            <button className="px-5 py-2 text-xs font-medium tracking-wide transition-colors duration-200" style={{ background: 'var(--gold)', color: 'var(--nautilus-deep)', border: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Get in touch
            </button>
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="block w-5 transition-all duration-200" style={{ height: '1px', background: 'var(--gold)', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span className="block w-5 transition-all duration-200" style={{ height: '1px', background: 'var(--gold)', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 transition-all duration-200" style={{ height: '1px', background: 'var(--gold)', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-5 gap-4 border-t" style={{ borderColor: 'var(--gold-dim)' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs tracking-widest uppercase font-medium pt-3" style={{ color: 'var(--muted)' }} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${brand.email}`} className="mt-1">
            <button className="w-full px-5 py-2.5 text-xs font-medium tracking-wide" style={{ background: 'var(--gold)', color: 'var(--nautilus-deep)', border: 'none' }}>
              Get in touch
            </button>
          </a>
        </div>
      )}
    </nav>
  )
}
