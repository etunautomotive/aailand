'use client'

export function PainPoints() {
  return (
    <section className="relative bg-surface-alt py-20 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">
              the problem
            </p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display text-secondary">
              You've been sold this
              <br />
              <span className="text-secondary/45">software before.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 max-w-[52ch] text-secondary/65 text-base leading-relaxed">
            Every CRM promised followup. Reps stopped logging in after a week. Every vendor promised ROI. You still guess which ad dollar closed the deal. Not a people problem — a systems one, built by people who never worked a floor.
          </p>
        </div>

        {/* Bento — 3×2 asymmetric */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[220px] gap-4 md:gap-5 grid-flow-dense">
          {/* A — Featured: followup failure with bar */}
          <article className="md:col-span-2 relative grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-10 rounded-[22px] bg-white border border-secondary/10 p-7 md:p-8 overflow-hidden">
            <div className="flex flex-col justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary/45">
                followup
              </p>
              <h3 className="mt-3 font-headline text-3xl md:text-[2.25rem] font-bold leading-[1.05] tracking-display text-secondary max-w-[16ch]">
                Your team doesn't follow up.
              </h3>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex items-baseline gap-1 tabular">
                <span className="font-headline text-6xl md:text-7xl font-bold text-secondary leading-none">
                  84
                </span>
                <span className="font-headline text-3xl font-bold text-secondary/55">%</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-secondary/10 overflow-hidden">
                <div className="h-full w-[84%] bg-primary" />
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-secondary/50 leading-snug">
                of leads untouched after 30 days
              </div>
            </div>
          </article>

          {/* B — Database archive, tall tile, dark */}
          <article className="md:row-span-2 relative flex flex-col justify-between rounded-[22px] bg-secondary text-white p-7 md:p-8 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(60% 60% at 80% 90%, rgba(232,102,26,0.28) 0%, transparent 65%)',
              }}
            />
            <div className="relative">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
                database
              </p>
              <h3 className="mt-3 font-headline text-2xl md:text-3xl font-bold leading-[1.08] tracking-display max-w-[16ch]">
                Your DMS is an archive.
              </h3>
            </div>
            <div className="relative tabular">
              <div className="font-headline text-[88px] md:text-[128px] font-bold leading-[0.85] tracking-display text-primary">
                8,147
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/60">
                contacts · 0 touches · 12 months
              </div>
            </div>
          </article>

          {/* C — Attribution fraction */}
          <article className="relative flex flex-col justify-between rounded-[22px] bg-white border border-secondary/10 p-7 overflow-hidden">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary/45">
                attribution
              </p>
              <h3 className="mt-3 font-headline text-xl md:text-2xl font-semibold leading-[1.15] text-secondary max-w-[20ch]">
                Ad spend vanishes.
              </h3>
            </div>
            <div className="tabular flex items-end gap-3">
              <div className="font-headline text-5xl md:text-6xl font-bold text-secondary leading-none">0</div>
              <div className="pb-1 font-mono text-[11px] uppercase tracking-widest text-secondary/45 leading-snug">
                campaigns
                <br />
                attributed
              </div>
            </div>
          </article>

          {/* D — One-rep revenue tile */}
          <article className="relative flex flex-col justify-between rounded-[22px] bg-white border border-secondary/10 p-7 overflow-hidden">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary/45">
                fragility
              </p>
              <h3 className="mt-3 font-headline text-xl md:text-2xl font-semibold leading-[1.15] text-secondary max-w-[20ch]">
                Revenue depends on who shows up.
              </h3>
            </div>
            <div className="tabular flex items-end gap-3">
              <div className="font-headline text-5xl md:text-6xl font-bold text-primary leading-none">$78K</div>
              <div className="pb-1 font-mono text-[11px] uppercase tracking-widest text-secondary/45 leading-snug">
                GP tied to
                <br />
                one rep / mo
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
