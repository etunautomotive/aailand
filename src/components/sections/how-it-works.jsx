'use client'

export function HowItWorks() {
  const features = [
    {
      title: '30-Second Response',
      description: 'A lead lands from any source. The system responds in under 30 seconds with a real conversation. Not a template. Not a drip sequence. A back-and-forth that qualifies budget, handles objections, and books the appointment.',
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
      title: 'Scored and Sorted Pipeline',
      description: 'Every lead gets ranked by intent and timeline. Hot leads surface to the top. Your reps see a pipeline full of people who are ready to talk, not a list of names to cold-call.',
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
      title: 'Complete Buyer Profile',
      description: 'By the time your rep picks up the phone, they already know the budget, timeline, vehicle preference, trade details, and objections. The hard part is already done.',
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
            Lead comes in. Deal comes out.
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            No manual follow-up. No leads sitting untouched. The system handles the conversation from first contact to booked appointment. Your reps step in when it's time to close.
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
