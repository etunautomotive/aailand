'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Button } from '@/components/ui/Button'
import { TrendingUp, Users, Target, Zap } from 'lucide-react'

const AboutPageClient = () => {
  const stats = [
    { label: 'Dealerships Live', value: '100+' },
    { label: 'Conversation Rate on Outreach', value: '85%+' },
    { label: 'Credit Apps / Month (per store)', value: '80-100' },
    { label: 'Days to Go Live', value: '< 7' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Authentic',
      description: 'We speak the language of the industry because we lived the grind. What we promise is exactly what we deliver. No outlandish claims.'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Our product is designed to produce results that matter: reactivated leads, booked appointments, closed deals. No fluff. Just performance.'
    },
    {
      icon: Zap,
      title: 'Simple',
      description: 'We built it simple because we needed it simple. Even the person on your team who hates technology can use this on day one.'
    },
    {
      icon: Users,
      title: 'Real Partnership',
      description: 'We don\'t disappear after the sale. We celebrate wins with dealers, guide them on sales process, and answer the phone when it rings. Not vendors. Partners.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-secondary mb-4">
              We didn't study the industry. <span className="text-primary">We lived it.</span>
            </h1>
            <p className="text-base md:text-lg text-secondary/65 leading-relaxed">
              Automotive AI was built by a team of closers who sold $300K/month in cars, lived in a one-bedroom apartment, and worked 14-hour days mastering lead cultivation before they ever wrote a line of code.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-secondary/10 p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary/70">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="mb-24 pt-16 border-t border-secondary/10">
            <h2 className="text-3xl font-bold font-space-grotesk text-secondary mb-6">The origin story.</h2>
            <p className="text-secondary/70 leading-relaxed mb-4">
              Wes, Josh, and Morgan all came up in small-town Alberta. Wes and Josh played football for the same high school team, competed for the same positions, and both went on to play at the university level. Morgan was working for CN Rail, making good money but missing freedom.
            </p>
            <p className="text-secondary/70 leading-relaxed mb-4">
              Wes got into automotive through a cold-calling job. Nine months of relentless discipline later, he was one of the top performers. Josh made the leap from delivering vehicles to selling them. Morgan quit his railroad career after three months memorizing the sales playbook. The three lived together in a one-bedroom apartment, working 12-14 hour days, and at their peak were doing $300K/month with young, inexperienced salespeople. Not by finding talent. By building systems.
            </p>
            <p className="text-secondary/70 leading-relaxed mb-4">
              They experienced every problem dealerships face firsthand: inconsistent follow-up, databases full of untouched contacts, duct-taped tools, high turnover, and 14-hour days just to stay average. They also lost $150K when poor money management ended their first venture.
            </p>
            <p className="text-secondary/70 leading-relaxed">
              After time in corporate dealership roles, they reunited with Aneesh, the technical backbone, to build what they'd always dreamed of: a system that works leads the way they did, never forgets, never burns out, and never quits. That's Automotive AI.
            </p>
          </div>

          {/* The Team */}
          <div className="mb-24 pt-16 border-t border-secondary/10">
            <h2 className="text-3xl font-bold font-space-grotesk text-secondary mb-10">The team.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-secondary/10 p-8">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-2">Morgan</h3>
                <p className="text-sm text-primary font-bold mb-3">Sales Mastery + AI Conversation Design</p>
                <p className="text-secondary/70 text-sm">Leads the conversation engine. Every prompt, every objection handler, every response pattern is built on the sales processes that produced real results on the floor.</p>
              </div>
              <div className="rounded-2xl border border-secondary/10 p-8">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-2">Wes</h3>
                <p className="text-sm text-primary font-bold mb-3">System Design + Product Marketing</p>
                <p className="text-secondary/70 text-sm">Led system design, scalable processes, and industry knowledge. The one who mapped how dealerships actually work and built the product around that reality.</p>
              </div>
              <div className="rounded-2xl border border-secondary/10 p-8">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-2">Josh</h3>
                <p className="text-sm text-primary font-bold mb-3">Product Development + Partnerships</p>
                <p className="text-secondary/70 text-sm">Leads product development, UI design, and strategic partnerships. Turns the team's vision into the interface that dealers actually use every day.</p>
              </div>
              <div className="rounded-2xl border border-secondary/10 p-8">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-2">Aneesh</h3>
                <p className="text-sm text-primary font-bold mb-3">Technical Architecture + Infrastructure</p>
                <p className="text-secondary/70 text-sm">The engineering backbone. Handles architecture, scaling, and the backend infrastructure that makes everything work reliably at scale.</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24 pt-16 border-t border-secondary/10">
            <h2 className="text-3xl font-bold font-space-grotesk text-secondary mb-10">What we stand for.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="rounded-2xl border border-secondary/10 p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">{value.title}</h3>
                    <p className="text-secondary/70 text-sm">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mission */}
          <div className="mb-24 pt-16 border-t border-secondary/10 bg-tertiary/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold font-space-grotesk text-secondary mb-4 text-center">Why we built this.</h2>
            <p className="text-center text-secondary/70 max-w-2xl mx-auto">
              We built the tool we wished we had when we were in the field. Not because it was a good business idea. Because we needed it. Every dealership deserves a system that works as hard as they do. That's what this is.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-16">
            <p className="text-secondary/70 mb-6">
              Built by people who've been where you are. See what that looks like in a product.
            </p>
            <Button variant="primary">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPageClient
