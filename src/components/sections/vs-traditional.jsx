'use client'

import { Check, X } from 'lucide-react'

const rows = [
  { label: 'First response time', them: '42 min avg', us: 'under 30 sec' },
  { label: 'Messages per lead', them: '1–2, then dies', us: 'sustained convo, weeks' },
  { label: 'Dead lead reactivation', them: 'manual quarterly push', us: 'continuous' },
  { label: 'Objection handling', them: 'rep-dependent', us: 'built into every convo' },
  { label: 'DMS sync', them: 'one-way import', us: 'bi-directional live' },
  { label: 'Headcount needed', them: '4+ BDC reps', us: 'same team, 10× volume' },
]

export function VsTraditional() {
  return (
    <section className="relative bg-surface-alt py-20 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">
            the difference
          </p>
          <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display text-secondary">
            Other tools send two messages
            <br />
            <span className="text-secondary/45">and declare victory.</span>
          </h2>
          <p className="mt-6 max-w-[58ch] text-secondary/70 text-[16px] leading-relaxed">
            Most tools in the category send a first message, maybe a second, punt to appointment, call it done. That's a notification with extra steps. Automotive AI sustains real back-and-forth across thousands of leads at once — handles objections, builds trust, collects credit apps over text.
          </p>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-secondary/10 bg-white">
          <div className="grid grid-cols-[1.3fr_1fr_1fr] tabular">
            <div className="bg-secondary/[0.02] px-6 py-5 text-[11px] font-mono uppercase tracking-widest text-secondary/45">
              metric
            </div>
            <div className="px-6 py-5 text-[11px] font-mono uppercase tracking-widest text-secondary/45 border-l border-secondary/10">
              traditional CRM
            </div>
            <div className="px-6 py-5 text-[11px] font-mono uppercase tracking-widest text-primary border-l border-secondary/10 bg-primary/[0.04]">
              automotive AI
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className="contents">
                <div className={`px-6 py-5 border-t border-secondary/10 text-[15px] font-medium text-secondary ${i === rows.length - 1 ? '' : ''}`}>
                  {r.label}
                </div>
                <div className="px-6 py-5 border-t border-l border-secondary/10 text-[14px] text-secondary/65 flex items-center gap-2">
                  <X className="h-3.5 w-3.5 text-secondary/40" />
                  {r.them}
                </div>
                <div className="px-6 py-5 border-t border-l border-secondary/10 bg-primary/[0.04] text-[14px] text-secondary flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                  {r.us}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
