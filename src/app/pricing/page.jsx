'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { Check, ArrowRight } from 'lucide-react'

const featureMatrix = [
  {
    category: 'Communication',
    rows: [
      ['Multi-channel inbox', true, true, true, true],
      ['AI conversation responses', true, true, true, true],
      ['SMS templates', true, true, true, true],
      ['Voice calls + recording', false, false, true, true],
      ['Facebook Messenger', true, true, true, true],
      ['Webchat widget', true, true, true, true],
    ],
  },
  {
    category: 'Intelligence',
    rows: [
      ['Lead scoring', false, true, true, true],
      ['Sentiment analysis', false, true, true, true],
      ['Credit report parsing', false, true, true, true],
      ['Field extraction', true, true, true, true],
      ['Objection handling AI', true, true, true, true],
    ],
  },
  {
    category: 'Automation',
    rows: [
      ['Event-driven workflows', false, true, true, true],
      ['Followup sequences', false, true, true, true],
      ['Scheduled automations', false, true, true, true],
      ['Webhook integrations', false, false, true, true],
      ['Marketplace templates', false, false, true, true],
    ],
  },
  {
    category: 'Support',
    rows: [
      ['Email support', true, true, true, true],
      ['Priority BDC alerts', false, true, true, true],
      ['Dedicated performance lead', false, false, false, true],
      ['Custom analytics dashboard', false, false, false, true],
    ],
  },
]

const planNames = ['Startup', 'Growth', 'Accelerator', 'Enterprise']

function Cell({ on, rec }) {
  if (!on) return <span className="text-secondary/25">—</span>
  return <Check className={`h-4 w-4 ${rec ? 'text-primary' : 'text-secondary/70'}`} strokeWidth={2.5} />
}

export default function PricingPage() {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 grain overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">pricing</p>
          <h1 className="mt-5 font-headline text-[56px] md:text-[104px] font-bold leading-[0.95] tracking-display max-w-[16ch]">
            Pick a tier.
            <br />
            <span className="text-primary">Results in days.</span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg md:text-xl text-secondary/70 leading-relaxed">
            No long-term contracts. No cancellation runaround. Dealers routinely close 6–12 extra deals in month one — most recover annual cost before the second invoice.
          </p>
        </div>
      </section>

      <Pricing />

      {/* Feature comparison */}
      <section className="bg-surface-alt py-20 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">feature comparison</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              What's in each plan.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-[22px] border border-secondary/10 bg-white">
            <table className="w-full min-w-[720px] tabular">
              <thead>
                <tr>
                  <th className="bg-secondary/[0.02] p-5 text-left font-mono text-[10px] uppercase tracking-widest text-secondary/45">feature</th>
                  {planNames.map((n, i) => (
                    <th
                      key={n}
                      className={`p-5 text-left font-mono text-[10px] uppercase tracking-widest border-l border-secondary/10 ${
                        i === 1 ? 'bg-primary/[0.06] text-primary' : 'text-secondary/45'
                      }`}
                    >
                      {n}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((section) => (
                  <Fragment key={section.category}>
                    <tr>
                      <td
                        colSpan={5}
                        className="border-t border-secondary/10 bg-surface/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/70"
                      >
                        — {section.category.toLowerCase()}
                      </td>
                    </tr>
                    {section.rows.map((r) => (
                      <tr key={r[0]}>
                        <td className="border-t border-secondary/10 p-5 text-[14.5px] text-secondary">{r[0]}</td>
                        {r.slice(1).map((v, i) => (
                          <td
                            key={i}
                            className={`border-t border-l border-secondary/10 p-5 ${
                              i === 1 ? 'bg-primary/[0.04]' : ''
                            }`}
                          >
                            <Cell on={v} rec={i === 1} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI math */}
      <section className="py-28">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">the math</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              It isn't complicated.
            </h2>
          </div>
          <div className="tabular grid md:grid-cols-3 rounded-[22px] border border-secondary/10 bg-white overflow-hidden">
            {[
              { v: '6–12', l: 'extra deals / mo' },
              { v: '$4,870', l: 'avg front + back GP per deal' },
              { v: '$34–58K', l: 'month-one incremental GP' },
            ].map((s, i) => (
              <div key={s.l} className={`p-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-secondary/10' : ''}`}>
                <div className="font-headline text-4xl md:text-5xl font-bold text-primary">{s.v}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-secondary/50">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[60ch] text-secondary/70">
            Your annual subscription pays for itself in month one. Everything past that is delta. We've seen it enough times to stop being surprised.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <figure className="relative rounded-[22px] bg-white border border-secondary/10 p-8 md:p-12 shadow-ink-sm">
            <blockquote className="font-headline text-2xl md:text-[2rem] font-semibold leading-[1.18] text-secondary">
              "First month closed eleven extra deals. That's $52K. The invoice was $2,450. I stopped reading the pricing page at that point."
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="text-sm font-medium text-secondary">David Khoury</div>
              <div className="text-[12px] text-secondary/55">Sales Director · Regional Sales Group, Mississauga ON</div>
              <div className="tabular ml-auto font-mono text-[11px] uppercase tracking-widest text-primary">
                21× payback in month one
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <FAQ />

      {/* Final CTA */}
      <section className="relative py-20 md:py-36 overflow-hidden bg-secondary text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{ background: 'radial-gradient(45% 60% at 80% 20%, rgba(232,102,26,0.35) 0%, rgba(232,102,26,0) 60%)' }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-[0.98] tracking-display max-w-4xl">
            Your database isn't getting any younger.
          </h2>
          <p className="mt-6 max-w-[56ch] text-white/70 text-lg">
            Every day you wait is another day those contacts sit untouched. Book 30 minutes — we'll show you what's buried in there.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/#book" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-white shadow-ember hover:-translate-y-0.5 transition-all">
              Book a walkthrough
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="mailto:sales@automotiveai.ca" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-medium text-white/90 hover:bg-white/5">
              Email sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
