'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "I tested it at 11 PM on a Tuesday. Sent a message to an old lead. Got a full credit application back by morning. I've never seen anything like that from a system.",
      author: "Marcus T.",
      dealership: "Prestige Auto Group",
      location: "Los Angeles, CA",
      metric1Label: "Credit apps / month",
      metric1Value: "80+",
      metric2Label: "Extra deals closed",
      metric2Value: "12"
    },
    {
      id: 2,
      text: "My 60-year-old closer who's hated every CRM he's ever touched told me he actually doesn't hate this one. That's when I knew it was different.",
      author: "Jennifer L.",
      dealership: "Central Motors",
      location: "Austin, TX",
      metric1Label: "Hours saved / week",
      metric1Value: "10+",
      metric2Label: "Team adoption",
      metric2Value: "100%"
    },
    {
      id: 3,
      text: "We had 12,000 contacts sitting in our old system. Nobody had touched them in over a year. This thing pulled 47 hot leads out of that list in the first week. We closed 8 of them.",
      author: "David K.",
      dealership: "Regional Sales Group",
      location: "Miami, FL",
      metric1Label: "Dead leads recovered",
      metric1Value: "47",
      metric2Label: "Deals from old data",
      metric2Value: "8"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const current = testimonials[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-32 px-8 bg-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-6">What Dealers Actually Say</p>
          <h2 className="text-5xl md:text-6xl font-bold font-space-grotesk tracking-tight text-secondary max-w-4xl leading-[1.1]">
            "I actually don't hate this."
          </h2>
        </div>

        {/* Testimonial Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-secondary/10 rounded-3xl overflow-hidden bg-white">
          {/* Left Sidebar - Testimonial Navigation */}
          <div className="md:col-span-3 border-r border-secondary/10 py-12 px-8 flex flex-col justify-between bg-white">
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left group transition-all duration-300 w-full ${
                    index === activeIndex ? '' : ''
                  }`}
                >
                  <div className={`text-2xl font-bold font-space-grotesk transition-all duration-300 mb-2 ${
                    index === activeIndex
                      ? 'text-secondary text-3xl'
                      : 'text-secondary/40 group-hover:text-secondary/60'
                  }`}>
                    {testimonial.author.split(' ')[0]}
                  </div>

                  {/* Animated underline */}
                  <div className={`h-0.5 transition-all duration-300 mb-3 ${
                    index === activeIndex ? 'w-10 bg-primary' : 'w-0 bg-primary'
                  }`} />

                  <div className={`text-xs uppercase tracking-widest leading-relaxed transition-all duration-300 ${
                    index === activeIndex
                      ? 'text-secondary/70'
                      : 'text-secondary/40'
                  }`}>
                    {testimonial.dealership}<br />
                    <span className="text-secondary/50">{testimonial.location}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 pt-12 border-t border-secondary/10 mt-12">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-secondary/5 hover:bg-secondary/10 flex items-center justify-center transition-all text-secondary hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-secondary/5 hover:bg-secondary/10 flex items-center justify-center transition-all text-secondary hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot indicators */}
              <div className="flex-1 flex items-center justify-end gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-2 h-2 bg-primary'
                        : 'w-1.5 h-1.5 bg-secondary/20 hover:bg-secondary/40'
                    }`}
                    aria-label={`Testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Quote & Metrics */}
          <div className="md:col-span-9 flex flex-col">
            {/* Quote Section */}
            <div className="flex-1 p-10 md:p-16 bg-tertiary/20 flex flex-col justify-between">
              <p className="text-2xl md:text-3xl font-bold font-space-grotesk leading-relaxed text-secondary">
                "{current.text}"
              </p>

              <div className="mt-10">
                <button className="px-6 py-3 border-2 border-primary text-primary font-bold text-xs uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all hover:shadow-lg hover:shadow-primary/20">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-2 border-t border-secondary/10">
              <div className="p-8 md:p-12 border-r border-secondary/10 bg-white">
                <div className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4">
                  {current.metric1Label}
                </div>
                <div className="text-5xl md:text-6xl font-bold font-space-grotesk text-primary">
                  {current.metric1Value}
                </div>
              </div>
              <div className="p-8 md:p-12 bg-white">
                <div className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4">
                  {current.metric2Label}
                </div>
                <div className="text-5xl md:text-6xl font-bold font-space-grotesk text-primary">
                  {current.metric2Value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
