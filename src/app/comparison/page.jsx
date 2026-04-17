'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Button } from '@/components/ui/Button'
import { Check, X } from 'lucide-react'

export default function ComparisonPage() {
  const comparisonData = [
    {
      feature: 'Multi-Channel Communication',
      automotive: true,
      traditional: false,
      custom: false
    },
    {
      feature: 'AI Conversations (Not Just Templates)',
      automotive: true,
      traditional: false,
      custom: true
    },
    {
      feature: 'Lead Scoring & Qualification',
      automotive: true,
      traditional: 'Limited',
      custom: true
    },
    {
      feature: 'Sentiment Analysis',
      automotive: true,
      traditional: false,
      custom: false
    },
    {
      feature: 'Voice Calling with Recording',
      automotive: true,
      traditional: 'Limited',
      custom: true
    },
    {
      feature: 'Credit Report Analysis',
      automotive: true,
      traditional: false,
      custom: true
    },
    {
      feature: 'Calendar Sync & Automation',
      automotive: true,
      traditional: false,
      custom: true
    },
    {
      feature: 'Built for Dealerships',
      automotive: true,
      traditional: false,
      custom: false
    },
    {
      feature: 'Quick Implementation (Days, not months)',
      automotive: true,
      traditional: false,
      custom: false
    },
    {
      feature: 'Enterprise Security & Compliance',
      automotive: true,
      traditional: true,
      custom: true
    }
  ]

  const renderFeatureCell = (value) => {
    if (value === true) return <Check className="w-5 h-5 text-primary" />
    if (value === false) return <X className="w-5 h-5 text-secondary/30" />
    return <span className="text-xs text-secondary/60">{value}</span>
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">Why Us</p>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-secondary mb-4">
              You've tried the other tools. <span className="text-primary">This is different.</span>
            </h1>
            <p className="text-base md:text-lg text-secondary/65">
              Most tools in this space send a first message and punt to appointment. Most CRMs are generic platforms that your team stops using after a week. We built the thing that was missing.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary/10">
                  <th className="text-left py-4 px-4 font-space-grotesk font-bold text-secondary">Feature</th>
                  <th className="text-center py-4 px-4 font-space-grotesk font-bold text-primary">AutomotiveAI</th>
                  <th className="text-center py-4 px-4 font-space-grotesk font-bold text-secondary/60">Traditional CRM</th>
                  <th className="text-center py-4 px-4 font-space-grotesk font-bold text-secondary/60">Custom Dev</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-secondary/5 hover:bg-tertiary/30 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-secondary">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{renderFeatureCell(row.automotive)}</td>
                    <td className="py-4 px-4 text-center">{renderFeatureCell(row.traditional)}</td>
                    <td className="py-4 px-4 text-center">{renderFeatureCell(row.custom)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Differentiators */}
          <div className="mt-20 pt-16 border-t border-secondary/10">
            <h2 className="text-3xl font-bold font-space-grotesk text-secondary mb-10">What we do that they can't.</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-secondary/10 p-6 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">Real Conversations, Not Drip Sequences</h3>
                <p className="text-secondary/70 text-sm">
                  Other tools send a couple of scripted messages and call it a day. Our system sustains full back-and-forth conversations that handle objections, build trust, and collect credit applications over text. That's the part nobody else has figured out.
                </p>
              </div>

              <div className="rounded-2xl border border-secondary/10 p-6 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">Built by Closers, Not Consultants</h3>
                <p className="text-secondary/70 text-sm">
                  The founding team did $300K/month selling cars. They built the system they wished they had when they were on the floor. Every conversation the system generates is trained on real sales processes that actually produced results.
                </p>
              </div>

              <div className="rounded-2xl border border-secondary/10 p-6 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">No Contracts. No Gotchas.</h3>
                <p className="text-secondary/70 text-sm">
                  No 12-month lock-ins. No auto-renewals you can't escape. No cancellation that takes three calls. You stay because it works, not because you're trapped.
                </p>
              </div>
            </div>
          </div>

          {/* ROI Comparison */}
          <div className="mt-20 pt-16 border-t border-secondary/10">
            <h2 className="text-3xl font-bold font-space-grotesk text-secondary mb-10">Expected Results (First 90 Days)</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8">
                <p className="text-sm text-primary font-bold uppercase mb-4">AutomotiveAI Average</p>
                <ul className="space-y-3 text-secondary/70 text-sm">
                  <li className="flex gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>2-4 additional cars closed per sales rep per month</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>85-95% lead response rate within 60 seconds</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>100+ credit applications submitted per month per location</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>40% reduction in admin work (data entry, scheduling)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-secondary/5 border border-secondary/10 p-8">
                <p className="text-sm text-secondary font-bold uppercase mb-4">Traditional Approach ROI</p>
                <ul className="space-y-3 text-secondary/70 text-sm">
                  <li className="flex gap-3">
                    <span>6-12+ months to full implementation</span>
                  </li>
                  <li className="flex gap-3">
                    <span>Fragmented systems (CRM + dialer + email + scheduler)</span>
                  </li>
                  <li className="flex gap-3">
                    <span>$3-5K/month in tool subscriptions</span>
                  </li>
                  <li className="flex gap-3">
                    <span>No AI automation — staff still doing manual follow-up</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-secondary/10 text-center">
            <p className="text-secondary/70 mb-6">
              Tired of tools that promise and don't deliver? Book 30 minutes.
            </p>
            <Button variant="primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}


