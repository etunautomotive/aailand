'use client'

export function FeatureWidgets() {
  const features = [
    {
      title: 'Your Closing Rate, Automated',
      description: 'Your top rep handles 25 leads. Closes 8. Automotive AI handles 2,000. Closes at the same rate. No scripting, no training. Just conversations that sound like your best closer wrote them.',
      mockup: (
        <div className="space-y-2">
          <div className="flex justify-start">
            <div className="bg-zinc-200 rounded-lg px-3 py-2 text-[10px] max-w-[70%] text-zinc-600">Checking inventory for RX 350...</div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary rounded-lg px-3 py-2 text-[10px] max-w-[70%] text-white">We have 3 available. Book test drive?</div>
          </div>
          <div className="flex justify-start">
            <div className="bg-zinc-200 rounded-lg px-3 py-2 text-[10px] max-w-[70%] text-zinc-600">Yes, Saturday at 10 AM.</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Stop Wasting Time on Dead Leads',
      description: 'Real-time scoring based on activity, intent, inventory match, and credit profile. Your BDC stops chasing ghosts. Reps only talk to leads ready to buy.',
      mockup: (
        <div className="flex items-end justify-between space-x-2 h-32">
          <div className="w-full bg-zinc-200 h-1/2 rounded-t-sm"></div>
          <div className="w-full bg-zinc-200 h-2/3 rounded-t-sm"></div>
          <div className="w-full bg-primary h-5/6 rounded-t-sm animate-pulse"></div>
          <div className="w-full bg-zinc-200 h-1/3 rounded-t-sm"></div>
          <div className="w-full bg-zinc-200 h-3/4 rounded-t-sm"></div>
          <div className="w-full bg-zinc-200 h-1/2 rounded-t-sm"></div>
        </div>
      ),
    },
    {
      title: 'Know Every Buyer Before They Speak',
      description: 'Credit score, vehicle history, lease timeline, trade timeline, current payment. When a prospect replies, you know everything before they finish the first sentence.',
      mockup: (
        <div className="flex flex-col justify-center items-center text-center h-full">
          <div className="w-12 h-12 rounded-full bg-zinc-200 mb-3"></div>
          <div className="text-[10px] font-bold">John D. • Ready to Buy</div>
          <div className="mt-2 flex gap-1 justify-center">
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] font-bold rounded">CREDIT 720+</span>
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] font-bold rounded">LEASE ENDS 60D</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-20 space-y-4">
        <h2 className="text-5xl font-bold font-headline text-secondary tracking-tight">What Your Team Can't Do Alone</h2>
        <p className="text-secondary/70 max-w-2xl">Three tools that replace hours of manual work. Every day.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group bg-white border border-zinc-100 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow flex flex-col space-y-6">
            <div className="bg-zinc-50 rounded-xl p-4 h-48 flex flex-col justify-end border border-zinc-100">
              {feature.mockup}
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline text-secondary mb-2">{feature.title}</h3>
              <p className="text-sm text-secondary/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
