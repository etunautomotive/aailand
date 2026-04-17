'use client'

import { Check } from 'lucide-react'

export function VsTraditional() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-6">The Difference</p>
        </div>

        {/* Narrative Section - Centered */}
        <div className="space-y-8 text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl text-secondary font-space-grotesk leading-tight">
            Other tools send two messages and declare victory.
          </h2>
          <div className="space-y-4 text-secondary/80 text-base leading-relaxed">
            <p>Most tools in this space send a first message, maybe a second, then punt to appointment and call it done. That's not a conversation. That's a notification with extra steps.</p>
            <p>Automotive AI sustains full, back-and-forth conversations across thousands of leads simultaneously. It handles objections. It builds trust. It collects credit applications over text. It does the part that every other tool tries to build and can't.</p>
            <p className="text-secondary font-medium">The founding team sold $300K/month in cars. The system talks the way they did. Because they built it.</p>
          </div>
          <ul className="space-y-4 pt-4 inline-block text-left">
            <li className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-base text-secondary/80">Responds in 30 seconds. Sustains the conversation for weeks.</span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-base text-secondary/80">Handles 2,000+ leads a month. No added headcount.</span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-base text-secondary/80">Bi-directional DMS sync. Your data stays where it belongs.</span>
            </li>
          </ul>
        </div>

        {/* Comparison Charts - Side by side on larger screens, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="border-b-2 border-secondary/20 pb-8">
            <div className="text-xs uppercase tracking-widest text-secondary/60 font-bold mb-8">Traditional CRM</div>
            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold text-secondary mb-3">Follow-up Rate</div>
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-2 bg-secondary/40 w-1/4 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-secondary mb-3">Lead Retention</div>
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-2 bg-secondary/40 w-1/3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b-2 border-primary pb-8">
            <div className="text-xs uppercase tracking-widest text-primary font-bold mb-8">Automotive AI</div>
            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold text-secondary mb-3">Follow-up Rate</div>
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-2 bg-primary w-full rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-secondary mb-3">Lead Retention</div>
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-2 bg-primary w-5/6 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
