'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { ArrowRight } from 'lucide-react'

const palette = [
  { name: 'primary', hex: '#E8661A', use: 'CTAs, key highlights, single accent color' },
  { name: 'secondary', hex: '#2A2420', use: 'headlines, primary UI, dark surfaces' },
  { name: 'surface', hex: '#FDFBF7', use: 'default page background, warm off-white' },
  { name: 'surface-alt', hex: '#F6EFE4', use: 'alternate section background' },
  { name: 'surface-ink', hex: '#1A1512', use: 'CTA + footer dark surfaces' },
  { name: 'border', hex: '#E8DFD2', use: 'card + divider borders' },
]

const tokens = {
  type: [
    ['Display', 'Geist · font-headline', '-0.035em tracking, 0.95 leading'],
    ['Body', 'Geist · font-geist', "default 16px, text-wrap: pretty"],
    ['Eyebrow / label', 'JetBrains Mono · tracking-[0.28em]', "uppercase, 10–11px"],
    ['Metrics', 'Geist tabular-nums · .tabular', 'tabular figures for columns'],
  ],
  spacing: [['4px', '--spacing-xs'], ['8px', '--spacing-sm'], ['16px', '--spacing-md'], ['32px', '--spacing-xl'], ['64px', '--spacing-3xl']],
  radius: [['14px', 'inputs'], ['22px', 'cards'], ['28px', 'featured surfaces'], ['9999px', 'pills + buttons']],
  shadows: [
    ['ink-sm', '0 2px 8px -2px rgba(42,36,32,0.08)'],
    ['ink', '0 12px 32px -12px rgba(42,36,32,0.18)'],
    ['ink-lg', '0 24px 60px -20px rgba(42,36,32,0.22)'],
    ['ember', '0 18px 40px -14px rgba(232,102,26,0.35)'],
  ],
}

export default function BrandKitPage() {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-14 grain overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">brand kit</p>
          <h1 className="mt-5 font-headline text-[56px] md:text-[96px] font-bold leading-[0.95] tracking-display max-w-[16ch]">
            The system
            <br />
            <span className="text-secondary/45">that keeps us consistent.</span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg text-secondary/70 leading-relaxed">
            Colors, type, spacing, shadows, tone. Use these when building marketing, partner decks, or integration materials.
          </p>
        </div>
      </section>

      {/* Palette */}
      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-display">Color</h2>
            <span className="font-mono text-[11px] uppercase tracking-widest text-secondary/45">6 tokens</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {palette.map((c) => (
              <div key={c.name} className="rounded-[22px] border border-secondary/10 bg-white overflow-hidden group">
                <div
                  className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.02] origin-center"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <div className="font-headline text-lg font-semibold capitalize">{c.name}</div>
                    <div className="tabular font-mono text-[12px] text-secondary/55">{c.hex}</div>
                  </div>
                  <p className="mt-1 text-[13px] text-secondary/60">{c.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-display mb-10">Typography</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-[22px] bg-white border border-secondary/10 p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">display · Geist</p>
              <div className="mt-4 font-headline text-[88px] leading-[0.9] font-bold tracking-display">Aa</div>
              <p className="mt-4 text-[13px] text-secondary/60">-0.035em tracking, balance-wrap, 0.95 leading on hero.</p>
            </div>
            <div className="rounded-[22px] bg-white border border-secondary/10 p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">body · Geist</p>
              <div className="mt-4 font-geist text-[72px] leading-[0.95]">Aa</div>
              <p className="mt-4 text-[13px] text-secondary/60">16px default, text-wrap: pretty, 500 weight available.</p>
            </div>
            <div className="rounded-[22px] bg-white border border-secondary/10 p-8 md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">rules</p>
              <dl className="mt-5 divide-y divide-secondary/10">
                {tokens.type.map(([k, f, d]) => (
                  <div key={k} className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr_3fr] gap-4 py-4">
                    <dt className="font-headline font-semibold text-secondary">{k}</dt>
                    <dd className="font-mono text-[12px] text-secondary/70">{f}</dd>
                    <dd className="hidden md:block text-[13px] text-secondary/60">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing + Radius + Shadows */}
      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-3 gap-5">
          <div className="rounded-[22px] bg-white border border-secondary/10 p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">spacing · 4px base</p>
            <ul className="mt-6 space-y-3">
              {tokens.spacing.map(([px, token]) => (
                <li key={token} className="flex items-center gap-4">
                  <div className="h-2 bg-primary/80 rounded-full" style={{ width: px }} />
                  <span className="tabular font-mono text-[12px] text-secondary/70">{px}</span>
                  <span className="font-mono text-[11px] text-secondary/45">{token}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[22px] bg-white border border-secondary/10 p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">radius</p>
            <div className="mt-6 space-y-3">
              {tokens.radius.map(([r, use]) => (
                <div key={r} className="flex items-center gap-4">
                  <div
                    className="h-10 w-10 bg-tertiary border border-secondary/15"
                    style={{ borderRadius: r === '9999px' ? '9999px' : r }}
                  />
                  <span className="tabular font-mono text-[12px] text-secondary/70 w-16">{r}</span>
                  <span className="text-[13px] text-secondary/60">{use}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[22px] bg-white border border-secondary/10 p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">shadows</p>
            <div className="mt-6 space-y-5">
              {tokens.shadows.map(([name, val]) => (
                <div key={name} className="flex items-center gap-4">
                  <div
                    className="h-10 w-10 rounded-xl bg-white"
                    style={{ boxShadow: val }}
                  />
                  <span className="font-mono text-[12px] text-secondary/70 w-14">{name}</span>
                  <span className="hidden md:inline font-mono text-[11px] text-secondary/40 truncate">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-[1.02] tracking-display">
              Need the source files?
            </h2>
            <p className="mt-4 text-secondary/65 max-w-[52ch]">
              Logos, Figma tokens, and partner assets live in a shared drive. Email the design team for access.
            </p>
          </div>
          <Link
            href="mailto:design@automotiveai.ca"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-white font-medium shadow-ink-sm hover:-translate-y-0.5 transition-all"
          >
            Email design
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
