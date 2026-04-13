'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { UpgradeBanner } from '@/components/ui/upgrade-banner'

const Section = ({ children, className }) => (
  <section className={`py-16 md:py-24 lg:py-32 ${className || ''}`}>
    {children}
  </section>
)

export function HeroNew() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Premium Banner */}
          <div className="flex justify-center pt-2">
            <UpgradeBanner
              buttonText="See it live"
              description="in 30 seconds"
            />
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
              <span className="block text-foreground">
                The fastest{' '}
                <Image
                  src="/ferrari.png"
                  alt="Automotive AI performance"
                  width={1600}
                  height={515}
                  className="inline-block align-middle h-12 md:h-14 w-auto mx-0.5"
                />{' '}
                ROI
              </span>
              <span className="block text-foreground">your dealership</span>
              <span className="block text-primary">will ever see.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto max-w-xl">
              Automotive AI responds to every lead in 30 seconds, follows up 14 times, and turns your dead database into closed deals.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" href="/demo" className="px-8">
              Book a Demo <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="secondary" size="lg" href="/platform" className="px-8">
              Explore Platform
            </Button>
          </div>

          {/* Divider */}
          <div className="py-8">
            <div className="h-px bg-border/50 w-12 mx-auto"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
            {[
              { value: '30', suffix: 's', label: 'Speed to lead' },
              { value: '14', suffix: 'x', label: 'Follow-up attempts' },
              { value: '85', suffix: '%+', label: 'Contact rate' },
              { value: '100', suffix: '+', label: 'Dealerships' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="font-display text-3xl md:text-4xl font-bold tabular-nums leading-tight tracking-tight">
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
