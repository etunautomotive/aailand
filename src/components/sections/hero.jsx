'use client'

import { useState } from 'react'
import { Button } from '../ui/Button'
import { UpgradeBanner } from '../ui/upgrade-banner'

export function Hero() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <section className="pt-32 pb-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Banner replacing badge */}
        {showBanner && (
          <UpgradeBanner
            buttonText="Limited-time offer"
            description="Get 30% off annual plans"
            onClose={() => setShowBanner(false)}
            onClick={() => {}}
          />
        )}

        {/* Eyebrow */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 animate-fade-in-up" style={{animationDelay: '0.15s'}}>
          Built By Closers
        </p>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tight max-w-6xl leading-[1.05] text-secondary animate-fade-in-up -mt-4" style={{animationDelay: '0.2s'}}>
          The fastest <span className="text-primary">ROI</span> your{' '}
          <img
            src="/porsche.png"
            alt=""
            className="inline-block h-[0.8em] w-auto align-baseline relative -top-[0.05em] mx-1 md:mx-2 mix-blend-darken"
            style={{ transform: 'rotate(-3deg)' }}
          />{' '}
          dealership will ever see.
        </h1>

        {/* Subheading */}
        <p className="text-xl text-secondary/70 max-w-2xl font-medium leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Automotive AI reaches every contact in your system, starts real conversations, handles objections, and books appointments. First results in hours. Built by people who sold $300K/month in cars.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 pt-4 flex-col sm:flex-row animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button variant="primary">
            Book a Demo
          </Button>
          <Button variant="secondary">
            See It Work
          </Button>
        </div>
      </div>
    </section>
  )
}
