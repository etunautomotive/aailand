'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Pricing() {
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
        'Complete Buyer Dossiers'
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

  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
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

        {/* CTA to full pricing page */}
        <div className="mt-16 text-center">
          <p className="text-secondary/70 mb-6">Need more details? Explore all features and see side-by-side comparisons.</p>
          <Link href="/pricing">
            <Button variant="secondary">
              View Full Pricing Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
