'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const rows = [
  { k: 'aged leads re-engaged', v: '47 / 8,147', note: 'by day 47' },
  { k: 'incremental revenue', v: '$184,320', note: 'from zero-touch data' },
  { k: 'additional headcount', v: '0', note: 'same 12-rep team' },
  { k: 'first credit app', v: '6 hrs', note: 'after DMS plug-in' },
]

export function CaseStudy() {
  return (
    <section id="case" className="relative bg-surface py-20 md:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-multiply" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        {/* eyebrow */}
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-secondary/50 mb-8">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          proof · field report no. 04-26
        </div>

        {/* headline */}
        <h2 className="font-headline font-bold leading-[0.95] tracking-display text-secondary text-balance text-[clamp(32px,4.6vw,56px)] max-w-[22ch]">
          Same team. Same database. 8.2× the deals.
        </h2>

        {/* data card */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid lg:grid-cols-12 rounded-[24px] border border-secondary/10 bg-white shadow-ink overflow-hidden"
        >
          {/* identity panel */}
          <div className="lg:col-span-4 bg-secondary text-white p-8 md:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background: 'radial-gradient(55% 70% at 0% 100%, rgba(232,102,26,0.30) 0%, transparent 70%)',
              }}
            />
            <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" />

            <div className="relative flex flex-col h-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                client
              </p>
              <p className="mt-3 font-headline text-[28px] md:text-[32px] font-bold leading-[0.95] tracking-tight">
                Riverside<br />Auto Group
              </p>

              <dl className="mt-8 space-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/65 tabular">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/45">rooftops</dt>
                  <dd>2</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/45">region</dt>
                  <dd>ab · canada</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/45">reps</dt>
                  <dd>12</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/45">monthly vol.</dt>
                  <dd>$2.1m</dd>
                </div>
              </dl>

              <div className="mt-auto pt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                  measurement window
                </p>
                <p className="mt-1.5 font-mono text-[13px] text-white/85 tabular">
                  day 0 → day 47
                </p>
              </div>
            </div>
          </div>

          {/* receipt */}
          <div className="lg:col-span-8 p-8 md:p-10 flex flex-col">
            {/* dominant metric */}
            <div className="flex items-end justify-between gap-6 pb-8 border-b border-secondary/10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-secondary/50">
                  pipeline recovered
                </p>
                <p className="mt-3 font-headline text-primary font-bold leading-none tracking-display tabular text-[clamp(56px,9vw,104px)]">
                  8.2×
                </p>
                <p className="mt-2 text-[14px] text-secondary/65 max-w-[28ch]">
                  deals closed from contacts no human had touched in twelve months.
                </p>
              </div>
              <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.28em] text-secondary/40 tabular">
                vs. prior<br />quarter baseline
              </p>
            </div>

            {/* data rows */}
            <dl className="divide-y divide-secondary/10">
              {rows.map((r) => (
                <div key={r.k} className="flex items-center justify-between gap-6 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary/60">
                    {r.k}
                  </dt>
                  <dd className="flex items-baseline gap-3 tabular">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-secondary/40 hidden sm:inline">
                      {r.note}
                    </span>
                    <span className="font-headline font-semibold text-secondary text-[17px] md:text-[19px]">
                      {r.v}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.article>

        {/* attribution + read more */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary/55">
            <span className="text-secondary/85">Mike Rodriguez</span>
            <span className="mx-2 text-secondary/25">·</span>
            sales manager, riverside auto group
          </p>
          <Link
            href="/comparison"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-secondary/70 hover:text-secondary transition-colors"
          >
            read the full field report
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </section>
  )
}
