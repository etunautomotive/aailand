'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Startup',
      price: '$1,500',
      period: '/mo',
      description: 'For single-rooftop dealers who want every lead touched in 30 seconds.',
      features: [
        'Up to 150 Monthly Leads',
        'SMS Conversations',
        'DMS Integration'
      ]
    },
    {
      name: 'Growth',
      price: '$2,450',
      period: '/mo',
      description: 'For growing stores running 300-500 leads a month. Full scoring, full reactivation, full pipeline.',
      features: [
        'Up to 500 Monthly Leads',
        'Intent-Based Lead Scoring',
        'Database Reactivation',
        'Priority BDC Alerts'
      ],
      recommended: true
    },
    {
      name: 'Accelerator',
      price: '$3,000',
      period: '/mo',
      description: 'Multiple rooftops, 1,000+ leads a month, and zero patience for missed follow-ups.',
      features: [
        'Up to 1,200 Monthly Leads',
        'Voice + SMS Conversations',
        'Full Bi-directional DMS Sync',
        'Complete Buyer Profiles'
      ]
    },
    {
      name: 'Enterprise',
      price: '$5,000',
      period: '+ /mo',
      description: 'Auto groups and national franchises. No lead cap. No compromises. We build it around you.',
      features: [
        'Unlimited Monthly Leads',
        'Custom Conversation Training',
        'Dedicated Performance Lead',
        'Custom Analytics Dashboard'
      ],
      isEnterprise: true
    }
  ]

  const allFeatures = [
    {
      category: 'Communication',
      available: 'All Plans',
      features: [
        'Multi-channel inbox',
        'AI conversation responses',
        'SMS & email templates',
        'Voice calling with recording',
        'Facebook Messenger integration',
        'Webchat widget'
      ]
    },
    {
      category: 'Intelligence',
      available: 'All Plans',
      features: [
        'Lead scoring',
        'Sentiment analysis',
        'Credit report analysis',
        'Automatic field extraction',
        'Objection handling AI'
      ]
    },
    {
      category: 'Automation',
      available: 'Growth+',
      features: [
        'Event-driven workflows',
        'Follow-up sequences',
        'Scheduled automations',
        'Webhook integrations',
        'Marketplace templates'
      ]
    },
    {
      category: 'Operations',
      available: 'All Plans',
      features: [
        'Google Calendar sync',
        'Contact management',
        'Sales pipeline views',
        'Document management',
        'Credit application processing'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">Pricing</p>
          <h1 className="text-7xl md:text-8xl font-bold font-space-grotesk tracking-tight max-w-6xl leading-[0.95] text-secondary">
            Pick a tier. <span className="text-primary">See results in days.</span>
          </h1>
          <p className="text-xl text-secondary/70 max-w-3xl font-medium leading-relaxed">
            No long-term contracts. No cancellation runaround. Dealers routinely close 6-12 extra deals in the first month. Most recover their annual cost before the second invoice.
          </p>
        </div>
      </section>

      {/* Pricing Cards - 4 Column Grid */}
      <section className="py-32 px-8 bg-white overflow-hidden border-t border-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold font-space-grotesk tracking-tight text-secondary">
              Transparent growth.
            </h2>
            <p className="text-secondary/70 max-w-2xl mx-auto text-lg">
              Pick the tier that matches your volume. Upgrade when you outgrow it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card rounded-[2.25rem] p-1 w-full ${
                  plan.recommended ? 'bg-primary shadow-xl shadow-primary/10' : 'bg-zinc-50 border border-zinc-100'
                }`}
              >
                <div className="bg-white rounded-[2.25rem] p-8 h-full flex flex-col relative">
                  {plan.recommended && (
                    <div className="absolute top-6 right-6">
                      <span className="bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">
                      {plan.name}
                    </span>
                    <div className="mt-4 flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold font-space-grotesk text-secondary">{plan.price}</span>
                      <span className="text-secondary/70 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-10">
                    {plan.isEnterprise ? (
                      <button className="w-full py-4 rounded-full border-2 border-secondary/20 text-secondary font-bold text-sm hover:bg-secondary/5 transition-all">
                        Contact Sales
                      </button>
                    ) : plan.recommended ? (
                      <Button
                        variant="primary"
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    )}
                  </div>

                  <ul className="space-y-4 mt-auto">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.recommended ? 'text-primary' : 'text-secondary/40'
                        }`} />
                        <span className="text-xs font-medium text-secondary/70 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison CTA */}
          <div className="mt-24 pt-24 border-t border-secondary/10 text-center">
            <p className="text-secondary/70 mb-6">Need more details on features and differences?</p>
            <Link href="/comparison">
              <Button variant="secondary">
                View Full Comparison
              </Button>
            </Link>
          </div>

          {/* Feature Comparison */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold font-space-grotesk text-secondary mb-12 text-center">
              What's Included in Each Plan
            </h2>
            <div className="space-y-8">
              {allFeatures.map((section, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-secondary/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold font-space-grotesk text-secondary">{section.category}</h3>
                    <span className="text-sm font-bold text-primary">{section.available}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-secondary/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="px-8 py-24 bg-white border-t border-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-12 text-center">
            The math is simple.
          </h2>
          <div className="bg-tertiary/30 rounded-2xl p-12 border border-secondary/10">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold font-space-grotesk text-primary mb-3">6-12</div>
                <p className="text-secondary/70 font-medium">Extra deals in first month</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-space-grotesk text-primary mb-3">$5K</div>
                <p className="text-secondary/70 font-medium">Average gross per deal</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-space-grotesk text-primary mb-3">$30-60K</div>
                <p className="text-secondary/70 font-medium">Extra gross in first month</p>
              </div>
            </div>
            <p className="text-center text-lg text-secondary/70 font-medium">
              Your annual subscription pays for itself in month one. Every month after that is pure upside. We've seen it happen enough times to stop being surprised.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ-style section */}
      <section className="px-8 py-24 bg-secondary/5 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-space-grotesk text-secondary mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">Can I upgrade or downgrade anytime?</h3>
              <p className="text-secondary/70">Yes. No long-term contracts. Changes take effect on your next billing cycle. Pay only for what you use.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">What if I go over my SMS limit?</h3>
              <p className="text-secondary/70">You can buy additional SMS blocks on-demand. Or upgrade your plan. We won't cut off your messages mid-campaign.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">Do you offer discounts for annual billing?</h3>
              <p className="text-secondary/70">Yes. Pay annually and save 15%. Enterprise customers can negotiate custom terms based on volume and commitment.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">What if I want to cancel?</h3>
              <p className="text-secondary/70">You can cancel anytime. No penalties, no gotchas. Your data is yours and can be exported at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-24 bg-white border-t border-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-6">
            Your database isn't getting any younger.
          </h2>
          <p className="text-lg text-secondary/70 mb-10">
            Every day you wait is another day those contacts sit untouched. Book 30 minutes. We'll show you what's in there.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button variant="primary">
              Start Free Trial
            </Button>
            <Button variant="secondary">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}