'use client'

const steps = [
  {
    k: '01',
    title: '30-second response',
    body: "A lead lands from any source. The system replies in under 30 seconds with a real back-and-forth — qualifies budget, handles objections, books the slot.",
    Visual: () => (
      <div className="space-y-2 tabular">
        <Bubble right text="What's your budget range?" />
        <Bubble text="$25–35K. SUV mainly, AWD if possible." />
        <Bubble right text="Got it. Saturday 2:40pm or 4:10pm?" />
        <Bubble text="Saturday 2:40 works." />
      </div>
    ),
  },
  {
    k: '02',
    title: 'Scored + sorted pipeline',
    body: 'Every lead ranked by intent and timeline. Hot leads surface on top. Reps see a pipeline full of people ready to talk, not a cold-call list.',
    Visual: () => (
      <div className="space-y-3 tabular">
        {[
          { lbl: 'Hot', w: 'w-2/3', n: '24' },
          { lbl: 'Warm', w: 'w-1/2', n: '47' },
          { lbl: 'Cold', w: 'w-1/4', n: '12' },
        ].map((r) => (
          <div key={r.lbl} className="flex items-center gap-3">
            <span className="w-12 font-mono text-[10px] uppercase tracking-widest text-secondary/50">{r.lbl}</span>
            <div className="flex-1 h-1.5 rounded-full bg-secondary/10 overflow-hidden">
              <div className={`h-full ${r.w} bg-primary`} />
            </div>
            <span className="w-8 text-right text-sm font-medium text-secondary">{r.n}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    k: '03',
    title: 'Complete buyer dossier',
    body: "By the time your rep picks up, they know budget, timeline, vehicle, trade details, objections. The hard part's done.",
    Visual: () => (
      <dl className="tabular grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        {[
          ['Budget', '$28–35K'],
          ['Timeline', '7 days'],
          ['Vehicle', 'SUV, AWD'],
          ['Trade', "'19 Rogue"],
          ['Credit', 'Prime'],
          ['Score', '94 / 100'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between border-b border-secondary/10 pb-1.5">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-secondary/50">{k}</dt>
            <dd className="text-secondary font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    ),
  },
]

function Bubble({ text, right }) {
  return (
    <div className={`flex ${right ? 'justify-end' : ''}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-snug ${
          right ? 'bg-primary text-white rounded-br-md' : 'bg-secondary/5 text-secondary rounded-bl-md'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section className="relative bg-surface-alt py-20 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">how it works</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display text-secondary">
              Lead comes in.
              <br />
              <span className="text-primary">Deal comes out.</span>
            </h2>
          </div>
          <p className="max-w-[44ch] text-secondary/65 text-base">
            No manual followup. No leads sitting untouched. The system handles first contact through booked appointment — reps step in to close.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map(({ k, title, body, Visual }, i) => (
            <li
              key={k}
              className="group relative flex flex-col rounded-[22px] border border-secondary/10 bg-white p-6 shadow-ink-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-ink"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-secondary/45">step {k}</span>
                <span className="h-px w-16 bg-secondary/15" />
              </div>
              <div className="mt-6 mb-8 h-[220px] rounded-2xl bg-gradient-to-br from-tertiary/70 to-surface p-5 border border-secondary/5 flex flex-col justify-center overflow-hidden">
                <Visual />
              </div>
              <h3 className="font-headline text-xl font-semibold text-secondary">{title}</h3>
              <p className="mt-2 text-[14.5px] text-secondary/65 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
