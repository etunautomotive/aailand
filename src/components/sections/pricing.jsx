'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Startup',
    price: '1,500',
    period: '/ mo',
    desc: 'Single-rooftop dealers. Every lead touched in 30 seconds.',
    features: ['Up to 150 monthly leads', 'SMS conversations', 'DMS integration'],
  },
  {
    name: 'Growth',
    price: '2,450',
    period: '/ mo',
    desc: 'Stores running 300–500 leads a month. Full scoring, full reactivation.',
    features: ['Up to 500 monthly leads', 'Intent-based scoring', 'Database reactivation', 'Priority BDC alerts'],
    recommended: true,
  },
  {
    name: 'Accelerator',
    price: '3,000',
    period: '/ mo',
    desc: 'Multiple rooftops, 1,000+ leads, zero patience for missed followups.',
    features: ['Up to 1,200 monthly leads', 'Voice + SMS', 'Bi-directional DMS sync', 'Buyer dossiers'],
  },
  {
    name: 'Enterprise',
    price: '5,000',
    period: '+ / mo',
    desc: 'Auto groups and national franchises. No lead cap. Built around you.',
    features: ['Unlimited leads', 'Custom training', 'Dedicated performance lead', 'Custom analytics'],
    isEnterprise: true,
  },
]

export function Pricing() {
  return (
    <section className="relative bg-surface py-20 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">pricing</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display text-secondary">
              Transparent. <span className="text-secondary/40">Per rooftop.</span>
            </h2>
          </div>
          <p className="max-w-[40ch] text-secondary/65">
            Pick the tier that matches your volume. Upgrade when you outgrow it. No setup games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-5">
          {plans.map((plan) => {
            const isRec = plan.recommended
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[24px] p-7 transition-all duration-300 ${
                  isRec
                    ? 'bg-secondary text-white shadow-ink-lg md:scale-[1.03] md:-translate-y-2'
                    : 'bg-white border border-secondary/10 hover:-translate-y-0.5 hover:shadow-ink'
                }`}
              >
                {isRec && (
                  <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                    most rooftops pick this
                  </div>
                )}
                <div>
                  <p className={`font-mono text-[10px] uppercase tracking-widest ${isRec ? 'text-white/60' : 'text-secondary/45'}`}>
                    {plan.name}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1 tabular">
                    <span className={`text-[11px] font-medium ${isRec ? 'text-white/70' : 'text-secondary/50'}`}>$</span>
                    <span className={`font-headline text-5xl font-bold ${isRec ? 'text-white' : 'text-secondary'}`}>
                      {plan.price}
                    </span>
                    <span className={`ml-1 text-xs ${isRec ? 'text-white/60' : 'text-secondary/50'}`}>{plan.period}</span>
                  </div>
                  <p className={`mt-4 min-h-[3.25rem] text-sm leading-relaxed ${isRec ? 'text-white/75' : 'text-secondary/65'}`}>
                    {plan.desc}
                  </p>
                </div>

                <ul className="mt-7 mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${isRec ? 'text-white/85' : 'text-secondary/75'}`}>
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${isRec ? 'text-primary' : 'text-primary'}`} strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-auto group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                    isRec
                      ? 'bg-primary text-white hover:-translate-y-0.5 shadow-ember'
                      : plan.isEnterprise
                      ? 'border border-secondary/20 text-secondary hover:bg-secondary hover:text-white'
                      : 'bg-secondary text-white hover:-translate-y-0.5 shadow-ink-sm hover:shadow-ink'
                  }`}
                >
                  {plan.isEnterprise ? 'Talk to sales' : 'Start a rooftop'}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            )
          })}
        </div>

        <div className="mt-14 flex items-center justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary/70 underline-offset-4 hover:text-secondary hover:underline"
          >
            compare features side-by-side
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
