'use client'

export function Benefits() {
  const benefits = [
    { title: "First Appointment Within Hours", desc: "Not a typo. Dealers routinely book their first appointment from old leads within the first hour of going live. Day one produces real pipeline." },
    { title: "One Rep Does the Work of Ten", desc: "Your team handles 25 leads each. The system handles 2,000. Outreach, objections, follow-up, booking. All running while your reps focus on closing." },
    { title: "Dead Leads Become Real Revenue", desc: "Thousands of contacts sitting in your DMS with nothing but a name and number. The system turns them into full credit applications and booked appointments." },
    { title: "Turnover Stops Hurting", desc: "When a rep leaves, their pipeline stays. The system doesn't quit, doesn't take days off, doesn't need retraining. Consistency that doesn't depend on who's in the building." }
  ]

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">What Actually Changes</p>
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-secondary mb-6">
            Week one. Not month six.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-secondary/20 rounded-[2rem] p-8 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-secondary mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm text-secondary/80 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
