'use client'

export function Stats() {
  const stats = [
    {
      value: '30s',
      label: 'Lead Response',
      context: 'vs. 2-3 hours for your team',
    },
    {
      value: '14x',
      label: 'Database ROI',
      context: '8,000 dormant contacts = $1.6-2.4M untapped',
    },
    {
      value: '85%',
      label: 'Capture Rate',
      context: 'Every text back, every inquiry, qualified automatically',
    },
    {
      value: '100+',
      label: 'DMS Integrations',
      context: 'Dealertrack, CDK, Reynolds, Cox, Vauto, and more',
    },
  ]

  return (
    <section className="border-y border-zinc-100 py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className={`text-5xl font-bold font-headline text-secondary mb-2 ${index === 1 ? 'text-primary' : ''}`}>
              {stat.value}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-secondary/70 font-medium">
              {stat.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
