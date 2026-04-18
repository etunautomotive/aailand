'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { SocialProof } from '@/components/sections/social-proof'
import { PainPoints } from '@/components/sections/pain-points'
import { Benefits } from '@/components/sections/benefits'
import { HowItWorks } from '@/components/sections/how-it-works'
import { VsTraditional } from '@/components/sections/vs-traditional'
import { CaseStudy } from '@/components/sections/case-study'
import { Pricing } from '@/components/sections/pricing'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />
      <Hero />
      <SocialProof />
      <PainPoints />
      <Benefits />
      <HowItWorks />
      <CaseStudy />
      <VsTraditional />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
