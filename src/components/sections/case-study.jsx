'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Stat({ v, l, big = false, accent = false }) {
  return (
    <div
      className={`rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 ${
        accent
          ? 'bg-primary text-white shadow-ember'
          : 'bg-white border border-secondary/10 shadow-ink-sm'
      }`}
    >
      <div className={`font-mono text-[10px] uppercase tracking-widest ${accent ? 'text-white/70' : 'text-secondary/45'}`}>
        {l}
      </div>
      <div className={`tabular mt-3 font-headline font-bold ${big ? 'text-6xl' : 'text-4xl'} ${accent ? 'text-white' : 'text-secondary'}`}>
        {v}
      </div>
    </div>
  )
}

export function CaseStudy() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="case" className="relative bg-surface py-20 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">
              case study — 47 days
            </p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display text-secondary">
              Riverside Auto Group
            </h2>
            <p className="mt-3 text-secondary/60 font-mono text-[12px] tracking-wider">
              2 rooftops · 12 reps · $2.1M / mo
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">challenge</p>
                <h3 className="mt-2 font-headline text-2xl font-semibold text-secondary">
                  8,147 contacts. Nobody touching them.
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] text-secondary/70 leading-relaxed">
                  Three reps handled all followup across both rooftops. When one took time off, pipeline dried. The DMS was full of aged leads nobody had capacity to reach.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">what we did</p>
                <h3 className="mt-2 font-headline text-2xl font-semibold text-secondary">
                  Live in 14 days. First credit app in 6 hours.
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] text-secondary/70 leading-relaxed">
                  Plugged into their DMS. Trained on their top rep's actual text cadence. System started reaching aged contacts immediately.
                </p>
              </div>
              <blockquote className="rounded-[20px] border-l-2 border-primary bg-white/70 p-6">
                <p className="font-headline text-xl font-semibold text-secondary italic">
                  "The system found money we forgot we had. First month paid for the year."
                </p>
                <footer className="mt-4 text-[13px] text-secondary/60">
                  Mike Rodriguez · Sales Manager, Riverside Auto Group
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-5 content-start">
            <div className="col-span-2">
              <Stat v="47" l="aged leads re-engaged (30 days)" big accent />
            </div>
            <Stat v="12" l="deals closed" />
            <Stat v="$184K" l="incremental revenue" />
            <div className="col-span-2 rounded-[20px] bg-gradient-to-br from-secondary to-surface-ink text-white p-7">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">the delta</p>
              <p className="mt-3 text-white/80 text-sm">Same dealership. Same team. Same reps.</p>
              <p className="mt-2 font-headline text-4xl md:text-6xl font-bold text-primary tabular">
                8.2× deals
              </p>
              <p className="mt-2 text-white/65 text-sm">from the same database, zero new hires.</p>
            </div>
            <Stat v="0" l="new headcount added" />
            <Stat v="6 hrs" l="time to first booked appt" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
