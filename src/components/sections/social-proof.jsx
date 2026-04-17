'use client'

import ScrollingBrands from '@/common/component/scrolling-brands/ScrollingBrands'

export function SocialProof() {
  return (
    <section className="py-16 bg-tertiary relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">Trusted By 100+ Dealerships Across North America</p>
        </div>
        <ScrollingBrands />
      </div>
    </section>
  )
}
