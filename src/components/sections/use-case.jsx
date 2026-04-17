'use client'

export function UseCase() {
  const features = [
    {
      title: 'AI Conversations',
      description: 'Respond to leads in seconds with human-like conversations that qualify, book demos, and schedule test drives automatically.',
      visual: (
        <div className="space-y-3">
          <div className="flex justify-end mb-2">
            <div className="bg-primary text-white rounded-lg px-3 py-2 text-sm max-w-xs">What's your budget?</div>
          </div>
          <div className="flex justify-start">
            <div className="bg-zinc-100 text-zinc-900 rounded-lg px-3 py-2 text-sm max-w-xs">$25-35K. Looking for SUVs mainly.</div>
          </div>
          <div className="flex justify-end mb-2">
            <div className="bg-primary text-white rounded-lg px-3 py-2 text-sm max-w-xs">Perfect. Slots available Sat 2-4pm?</div>
          </div>
          <div className="flex justify-start">
            <div className="bg-zinc-100 text-zinc-900 rounded-lg px-3 py-2 text-sm max-w-xs">Yes, Saturday works!</div>
          </div>
        </div>
      )
    },
    {
      title: 'Intelligent Pipeline',
      description: 'Every lead mapped by intent and timeline. Your reps see qualified, ready-to-buy prospects. No cold calls.',
      visual: (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="text-xs font-bold text-zinc-500 w-16">Hot</div>
            <div className="h-3 bg-primary w-20 rounded"></div>
            <span className="text-xs font-bold">24 leads</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xs font-bold text-zinc-500 w-16">Warm</div>
            <div className="h-3 bg-primary/60 w-32 rounded"></div>
            <span className="text-xs font-bold">47 leads</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xs font-bold text-zinc-500 w-16">Cold</div>
            <div className="h-3 bg-primary/30 w-16 rounded"></div>
            <span className="text-xs font-bold">12 leads</span>
          </div>
        </div>
      )
    },
    {
      title: '360° Profiles',
      description: 'Deep lead intelligence: budget, timeline, vehicle history, objections, and buying signals. Everything your reps need.',
      visual: (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
            <span className="font-bold text-zinc-900">Budget</span>
            <span className="text-zinc-600">$28-35K</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
            <span className="font-bold text-zinc-900">Timeline</span>
            <span className="text-zinc-600">7 days</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
            <span className="font-bold text-zinc-900">Interest</span>
            <span className="text-zinc-600">SUV, AWD</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-zinc-900">Score</span>
            <span className="text-primary font-bold">94/100</span>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-6">How It Works</p>
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-secondary mb-6 max-w-3xl mx-auto">
            Three steps from lead to close.
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Your leads arrive, AI qualifies them in seconds, your reps close warm prospects. No busywork. No cold outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-secondary/20 rounded-[2rem] p-8 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-8 h-40 bg-tertiary rounded-xl border border-secondary/20 p-4 flex items-center justify-center">
                {feature.visual}
              </div>
              <h3 className="text-xl font-bold font-headline text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
