'use client'

import Link from 'next/link'

const cols = [
  {
    h: 'product',
    links: [
      ['Platform', '/platform'],
      ['Agents', '/agents'],
      ['Pricing', '/pricing'],
      ['Comparison', '/comparison'],
    ],
  },
  {
    h: 'company',
    links: [
      ['About', '/about'],
      ['Blog', '/blog'],
      ['Book a walkthrough', '/#book'],
      ['sales@automotiveai.ca', 'mailto:sales@automotiveai.ca'],
    ],
  },
  {
    h: 'legal',
    links: [
      ['Privacy', '/privacy-policy'],
      ['Terms', '#'],
      ['CASL + TCPA', '#'],
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-surface-ink text-white pt-24 pb-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-[400px] opacity-50"
        style={{
          background: 'radial-gradient(50% 60% at 50% 0%, rgba(232,102,26,0.18) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white font-headline font-bold text-xs">
                A
              </span>
              <span className="font-headline font-bold tracking-tight text-lg">
                Automotive<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="mt-6 max-w-[42ch] text-white/65 text-[15px] leading-relaxed">
              Pipeline software for dealers who are done paying for CRMs nobody logs into. Built in Canada, deployed across North America.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              all systems nominal
            </div>
          </div>

          <nav className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {cols.map((c) => (
              <div key={c.h}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                  {c.h}
                </h4>
                <ul className="mt-5 space-y-3 text-[14px] text-white/75">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-white/45">© 2026 Automotive AI Inc. Calgary, AB.</p>
          <p className="text-xs text-white/45">Built for sales floors, not software demos.</p>
        </div>
      </div>
    </footer>
  )
}
