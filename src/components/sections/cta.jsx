'use client'

import { Button } from '../ui/Button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="mb-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">See It For Yourself</p>
        </div>

        {/* Main Content - Centered */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold font-space-grotesk text-secondary leading-tight">
              Your next 10 deals are already in your database.
            </h2>

            <p className="text-lg text-secondary/70 leading-relaxed">
              You're reading a website for a CRM right now. You've read a hundred of these. Here's the difference: this one was built by people who sold cars, not people who sell software. Book 30 minutes and we'll show you what's sitting in your data.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                <p className="text-secondary/80">Live in days, not months. Results on day one.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                <p className="text-secondary/80">No long-term contracts. No cancellation runaround.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                <p className="text-secondary/80">Real support from real people. We pick up on the first ring.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button variant="primary" className="flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Visual Element - Below on mobile, hidden on desktop for center focus */}
          <div className="relative hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-tertiary/20 to-transparent rounded-[2rem] blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-tertiary/60 to-tertiary/30 border border-secondary/10 rounded-[2rem] p-12 space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-secondary/70 font-medium">Expected Results (First 30 Days)</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-secondary/70">Extra Deals</span>
                    <div className="text-3xl font-bold font-space-grotesk text-primary">6-12</div>
                  </div>
                  <div className="w-full h-1 bg-secondary/10 rounded-full overflow-hidden">
                    <div className="h-full w-11/12 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="border-t border-secondary/10 pt-6">
                <div className="text-sm text-secondary/70 font-medium mb-4">Revenue Impact</div>
                <div className="text-4xl font-bold font-space-grotesk text-secondary">$30-60K</div>
                <p className="text-xs text-secondary/60 mt-2">First month gross profit increase</p>
              </div>

              <div className="bg-white/50 border border-secondary/10 rounded-xl p-4">
                <p className="text-xs text-secondary/70 leading-relaxed">
                  <span className="font-semibold text-secondary">Your annual cost pays for itself in the first month.</span> Everything after that is pure profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
