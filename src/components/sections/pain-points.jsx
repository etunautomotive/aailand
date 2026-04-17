'use client'

export function PainPoints() {
  const painPoints = [
    { title: "Your Team Doesn't Follow Up", desc: "Your top 3 reps handle all the follow-up. Everyone else does it when they remember. Leads go cold while your team is busy closing other deals or doing data entry." },
    { title: "Revenue Depends on Who Shows Up", desc: "One rep takes a week off and revenue dips. One quits and you lose months rebuilding. Your income is tied to individual effort, not a system." },
    { title: "Ad Spend Disappears Into a Black Hole", desc: "You're running Facebook, Google, and third-party listings. You have no idea which campaign actually closed a deal. Budget decisions happen on gut feel." },
    { title: "8,000 Contacts Sitting Untouched", desc: "Your database has thousands of names and numbers. Nobody has time to call them. You know there's money in there. It just sits." }
  ]

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">The Problem</p>
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-secondary mb-6 max-w-3xl mx-auto">
            You've been sold this software before.
          </h2>

          <p className="text-lg text-secondary/70 max-w-3xl mx-auto leading-relaxed">
            Every CRM you've used promised consistent follow-up. Your reps stopped logging in after a week. Every vendor promised ROI. You're still guessing which ad dollar actually closed a deal. That's not a people problem. That's a systems problem. And the system you're paying for was built by someone who's never worked a sales floor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((pain, index) => (
            <div key={index} className="border border-secondary/20 rounded-[2rem] p-8 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg text-secondary mb-3">
                {pain.title}
              </h4>
              <p className="text-base text-secondary/80 leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
