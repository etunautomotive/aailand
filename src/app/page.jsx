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

function SectionDivider() {
  return (
    <div className="flex justify-center">
      <div className="h-px w-48 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <PainPoints />
      <SectionDivider />
      <Benefits />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <CaseStudy />
      <SectionDivider />
      <VsTraditional />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  )
}
