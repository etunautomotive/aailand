'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { FAQ } from '@/components/sections/faq'
import { Check, X, ArrowRight } from 'lucide-react'

const rows = [
  ['Multi-channel communication', true, false, false],
  ['Sustained AI conversations (not drip)', true, false, 'limited'],
  ['Lead scoring + qualification', true, 'limited', true],
  ['Sentiment analysis', true, false, false],
  ['Voice calling + recording', true, 'limited', true],
  ['Credit report parsing', true, false, true],
  ['Calendar sync + automation', true, false, true],
  ['Dealer-first taxonomy', true, false, false],
  ['Live in days, not months', true, false, false],
  ['Enterprise security + compliance', true, true, true],
]

function Cell({ v, rec }) {
  if (v === true) return <Check className={`mx-auto h-4 w-4 ${rec ? 'text-primary' : 'text-secondary/70'}`} strokeWidth={2.5} />
  if (v === false) return <X className="mx-auto h-4 w-4 text-secondary/25" />
  return <span className="text-xs text-secondary/55">{v}</span>
}

export default function ComparisonPage() {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      <section className="relative pt-36 pb-16 grain overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">comparison</p>
          <h1 className="mt-5 font-headline text-[56px] md:text-[96px] font-bold leading-[0.95] tracking-display max-w-[18ch]">
            You've tried the other tools.
            <br />
            <span className="text-primary">This one is different.</span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg md:text-xl text-secondary/70 leading-relaxed">
            Most tools send a first message and punt to appointment. Most CRMs are generic platforms your team stops opening after a week. We built the thing that was missing.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="overflow-x-auto rounded-[22px] border border-secondary/10 bg-white">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr>
                  <th className="bg-secondary/[0.02] p-5 text-left font-mono text-[10px] uppercase tracking-widest text-secondary/45">feature</th>
                  <th className="p-5 font-mono text-[11px] uppercase tracking-widest border-l border-secondary/10 bg-primary/[0.06] text-primary">automotive AI</th>
                  <th className="p-5 font-mono text-[10px] uppercase tracking-widest border-l border-secondary/10 text-secondary/45">traditional CRM</th>
                  <th className="p-5 font-mono text-[10px] uppercase tracking-widest border-l border-secondary/10 text-secondary/45">custom build</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, a, b, c]) => (
                  <tr key={label}>
                    <td className="border-t border-secondary/10 p-5 text-[14.5px] text-secondary font-medium">{label}</td>
                    <td className="border-t border-l border-secondary/10 p-5 text-center bg-primary/[0.04]"><Cell v={a} rec /></td>
                    <td className="border-t border-l border-secondary/10 p-5 text-center"><Cell v={b} /></td>
                    <td className="border-t border-l border-secondary/10 p-5 text-center"><Cell v={c} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Switching testimonial strip */}
      <section className="bg-surface-alt py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">dealers who switched</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display text-secondary">
              Why they moved off the old stack.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {/* Featured quote */}
            <figure className="md:col-span-3 relative flex flex-col justify-between rounded-[22px] bg-secondary text-white p-8 md:p-10 overflow-hidden shadow-ink-lg">
              <div aria-hidden className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(50% 70% at 90% 10%, rgba(232,102,26,0.25) 0%, transparent 60%)' }} />
              <div className="relative">
                <div className="tabular flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                  <span className="text-primary">switched from</span>
                  <span>VinSolutions</span>
                </div>
                <blockquote className="mt-5 font-headline text-3xl md:text-[2.2rem] font-semibold leading-[1.18]">
                  "We ran both side-by-side for 30 days. AAI booked 31 appointments, VinSolutions booked 4. We cancelled the contract the next morning."
                </blockquote>
              </div>
              <figcaption className="relative mt-8 flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-white">Marcus Tedrow</div>
                  <div className="text-[12px] text-white/55">GM · Prestige Auto Group, Edmonton AB</div>
                </div>
                <div className="tabular text-right">
                  <div className="font-headline font-bold text-3xl text-primary">7.75×</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">lift over incumbent</div>
                </div>
              </figcaption>
            </figure>

            {/* Supporting quotes */}
            <div className="md:col-span-2 grid gap-5">
              <figure className="rounded-[22px] bg-white border border-secondary/10 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-secondary/50">
                  <span className="text-primary">switched from</span> Elead1One
                </div>
                <blockquote className="mt-4 font-headline text-lg font-semibold leading-[1.25] text-secondary">
                  "They sold us AI three years ago. It was a dressed-up drip sequence. This one actually holds conversations."
                </blockquote>
                <figcaption className="mt-4 text-[12px] text-secondary/55">
                  Jennifer Lao · Owner, Central Motors, Calgary AB
                </figcaption>
              </figure>

              <figure className="rounded-[22px] bg-white border border-secondary/10 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-secondary/50">
                  <span className="text-primary">switched from</span> DealerSocket
                </div>
                <blockquote className="mt-4 font-headline text-lg font-semibold leading-[1.25] text-secondary">
                  "Two-week migration. First credit app in six hours. I gave up waiting for miracles years ago."
                </blockquote>
                <figcaption className="mt-4 text-[12px] text-secondary/55">
                  Sam Orellana · Fixed Ops, Coastline Ford, Halifax NS
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ROI comparison */}
      <section className="py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">first 90 days</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Expected results, side by side.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-[22px] bg-secondary text-white p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">automotive AI</p>
              <ul className="mt-6 space-y-3.5 text-[14.5px] text-white/85">
                {[
                  '2–4 extra cars closed per rep / month',
                  '86% lead response within 60 seconds',
                  '80–100 credit apps / month / rooftop',
                  '42% reduction in admin work',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" strokeWidth={2.5} />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[22px] bg-white border border-secondary/10 p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">traditional approach</p>
              <ul className="mt-6 space-y-3.5 text-[14.5px] text-secondary/70">
                {[
                  '6–12 months to full implementation',
                  'Fragmented stack: CRM + dialer + email + scheduler',
                  '$3–5K / month in tool subscriptions',
                  'No AI — staff still doing manual followup',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <X className="h-4 w-4 flex-shrink-0 mt-0.5 text-secondary/40" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="relative py-20 md:py-36 overflow-hidden bg-secondary text-white">
        <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(45% 60% at 80% 20%, rgba(232,102,26,0.35) 0%, rgba(232,102,26,0) 60%)' }} />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-[0.98] tracking-display max-w-4xl">
            Tired of tools that promise and don't deliver?
          </h2>
          <p className="mt-6 text-white/70 text-lg">Book 30 minutes. Bring a skeptical attitude.</p>
          <Link href="/#book" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-white shadow-ember hover:-translate-y-0.5 transition-all">
            Book a walkthrough
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
