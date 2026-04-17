'use client'

export function SocialProof() {
  const stats = [
    { value: '30s', label: 'Response Time' },
    { value: '14x', label: 'Database ROI', highlight: true },
    { value: '85%', label: 'Capture Rate' },
    { value: '100+', label: 'DMS Partners' },
  ]

  return (
    <section className="border-y-2 border-secondary/20 py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className={`text-5xl font-bold font-headline ${stat.highlight ? 'text-primary' : 'text-secondary'} mb-2`}>
              {stat.value}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
