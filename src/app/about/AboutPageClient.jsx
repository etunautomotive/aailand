'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { FAQ } from '@/components/sections/faq'
import { Target, TrendingUp, Zap, Users, ArrowRight } from 'lucide-react'

const stats = [
  ['112', 'rooftops live'],
  ['86%', 'outreach convo rate'],
  ['82', 'credit apps / mo / store'],
  ['< 7', 'days to live'],
]

const team = [
  ['Morgan', 'sales mastery · conversation design', "Leads the conversation engine. Every prompt, objection handler, response pattern built on sales processes that actually produced on the floor."],
  ['Wes', 'system design · product marketing', "Mapped how dealerships actually work and built the product around that reality. Scalable processes, industry fluency."],
  ['Josh', 'product development · partnerships', "Turns team vision into the interface dealers actually use every day. UI, partnerships, day-to-day product."],
  ['Aneesh', 'technical architecture · infrastructure', 'Engineering backbone. Architecture, scaling, and the backend that keeps everything stable at volume.'],
]

const values = [
  [Target, 'Authentic', 'We speak the industry because we lived the grind. What we promise is what we ship. No outlandish claims.'],
  [TrendingUp, 'Results-driven', 'Product designed to produce measurable outcomes: reactivated leads, booked appointments, closed deals.'],
  [Zap, 'Simple', 'Built it simple because we needed it simple. Even the team member who hates technology is productive on day one.'],
  [Users, 'Real partnership', "Don't disappear after the sale. Celebrate wins, coach process, answer the phone. Not vendors — partners."],
]

const AboutPageClient = () => {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 grain overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">about</p>
          <h1 className="mt-5 font-headline text-[56px] md:text-[100px] font-bold leading-[0.95] tracking-display max-w-[16ch]">
            We didn't study the industry.
            <br />
            <span className="text-primary">We lived it.</span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg md:text-xl text-secondary/70 leading-relaxed">
            Automotive AI was built by closers who sold $312K / month in cars, lived in a one-bedroom apartment, and worked 14-hour days mastering lead cultivation before writing a single line of code.
          </p>
        </div>
      </section>

      {/* stats strip */}
      <section className="border-y border-secondary/10 bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 tabular divide-x divide-secondary/10">
          {stats.map(([v, l]) => (
            <div key={l} className="p-8">
              <div className="font-headline text-4xl md:text-5xl font-bold text-secondary">{v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-secondary/50">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Origin */}
      <section className="py-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">origin</p>
              <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
                Small-town Alberta.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[16px] text-secondary/75 leading-[1.75]">
              <p>
                Wes, Josh, and Morgan came up in small-town Alberta. Wes and Josh played football for the same high-school team, competed for the same positions, went on to play university ball. Morgan was working CN Rail, making good money and missing freedom.
              </p>
              <p>
                Wes got into automotive through cold-calling. Nine months of relentless discipline later he was a top performer. Josh made the leap from vehicle delivery to sales. Morgan quit the railroad after three months of memorizing the playbook. The three lived together in a one-bedroom, worked 14-hour days, peaked at $312K / month with young inexperienced salespeople. Not by finding talent — by building systems.
              </p>
              <p>
                They experienced every problem dealerships face: inconsistent followup, databases full of untouched contacts, duct-taped tools, high turnover, 14-hour days just to stay average. They also lost $150K when poor money management ended their first venture.
              </p>
              <p>
                After stints in corporate dealership roles they reunited with Aneesh — technical backbone — to build what they always wished existed: a system that works leads the way they did, never forgets, never burns out, never quits. That's Automotive AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-alt py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">the team</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Four people.
              <br />
              <span className="text-secondary/45">No growth hires.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {team.map(([name, role, bio]) => (
              <article key={name} className="rounded-[22px] bg-white border border-secondary/10 p-8 hover:-translate-y-0.5 hover:shadow-ink transition-all">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-headline text-3xl font-bold">{name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary whitespace-nowrap">
                    {role}
                  </span>
                </div>
                <p className="mt-4 text-[14.5px] text-secondary/70 leading-relaxed">{bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">what we stand for</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Four rules we actually hold to.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map(([Icon, t, d]) => (
              <div key={t} className="rounded-[22px] border border-secondary/10 bg-white p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tertiary text-secondary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-headline text-xl font-semibold">{t}</h3>
                <p className="mt-3 text-[14.5px] text-secondary/65 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Mission */}
      <section className="relative py-20 md:py-36 overflow-hidden bg-secondary text-white">
        <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(45% 60% at 20% 30%, rgba(232,102,26,0.3) 0%, rgba(232,102,26,0) 60%)' }} />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">why we built this</p>
          <h2 className="mt-5 font-headline text-5xl md:text-7xl font-bold leading-[0.98] tracking-display max-w-[18ch]">
            We built the tool we wished we had on the floor.
          </h2>
          <p className="mt-8 max-w-[60ch] text-white/70 text-lg">
            Not because it was a good business idea. Because we needed it. Every dealership deserves a system that works as hard as they do. That's the whole premise.
          </p>
          <Link href="/#book" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-white shadow-ember hover:-translate-y-0.5 transition-all">
            Book a walkthrough
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPageClient
