'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { FAQ } from '@/components/sections/faq'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Dealership lead reactivation: working aged leads without burning out the team',
    category: 'lead conversion',
    date: 'Mar 18, 2026',
    read: '8 min',
    blurb: '84% of CRM leads go untouched after 30 days. Tactics for reactivating aged pipeline while protecting rep sanity.',
    href: '/blog/dealership-lead-reactivation',
    featured: true,
  },
  {
    title: "AI for car dealerships won't work without this",
    category: 'ai strategy',
    date: 'Mar 17, 2026',
    read: '7 min',
    blurb: "76% of dealerships are raising AI budgets this year. Most will waste the money because they're skipping the process work first.",
    href: '/blog/ai-for-car-dealerships-process-before-technology',
  },
  {
    title: "Why one AI agent isn't enough for your dealership",
    category: 'ai strategy',
    date: 'Feb 26, 2026',
    read: '6 min',
    blurb: "Running one generic agent across every lead source kneecaps performance. Here's how to segment and deploy specialists.",
    href: '/blog/why-one-ai-agent-isnt-enough-for-your-dealership',
  },
  {
    title: 'The lean BDC: how AI + 2 skilled reps beat a 10-person department',
    category: 'bdc strategy',
    date: 'Feb 8, 2026',
    read: '9 min',
    blurb: 'Minimal headcount paired with AI prospecting outperforms large traditional BDCs on both throughput and cost.',
    href: '/blog/lean-bdc-model-ai-dealerships',
  },
]

export default function BlogPage() {
  const [featured, ...rest] = posts
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 grain overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">field notes</p>
          <h1 className="mt-5 font-headline text-[56px] md:text-[100px] font-bold leading-[0.95] tracking-display max-w-[16ch]">
            Stuff we learned
            <br />
            <span className="text-primary">the hard way.</span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg md:text-xl text-secondary/70 leading-relaxed">
            Strategies, breakdowns, and lessons from a team that sold cars before it built software. No thought-leadership posturing. Just what works.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Link
            href={featured.href}
            className="group relative block overflow-hidden rounded-[28px] bg-surface-ink text-white p-10 md:p-14 hover:-translate-y-0.5 transition-all shadow-ink-lg"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{ background: 'radial-gradient(50% 80% at 80% 30%, rgba(232,102,26,0.35) 0%, transparent 60%)' }}
            />
            <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div className="max-w-[60ch]">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-white/55">
                  <span className="text-primary">— featured</span>
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="mt-5 font-headline text-3xl md:text-[44px] font-bold leading-[1.05] tracking-display">
                  {featured.title}
                </h2>
                <p className="mt-5 text-white/70 text-[16px] leading-relaxed">{featured.blurb}</p>
              </div>
              <div className="flex items-center gap-3 text-white shrink-0">
                <span className="text-sm">{featured.read} read</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* List */}
      <section className="pb-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <ul className="divide-y divide-secondary/15 border-y border-secondary/15">
            {rest.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 py-8 items-start transition-colors hover:bg-surface-alt/40 -mx-4 px-4 rounded-xl">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-secondary/45 md:pt-2 md:min-w-[180px]">
                    {p.category}
                    <div className="mt-1 text-secondary/35">{p.date} · {p.read}</div>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl md:text-3xl font-semibold text-secondary leading-tight transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[15px] text-secondary/65 leading-relaxed">{p.blurb}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-secondary/35 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-2 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">tuesdays · 6am MT</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-[1.02] tracking-display">
              New field notes, every Tuesday.
            </h2>
            <p className="mt-4 max-w-[52ch] text-secondary/65">
              Strategies, case studies, breakdowns from dealers who are actually doing it. No spam, no growth-hack newsletters. Just signal.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-5 flex flex-col sm:flex-row items-stretch gap-2 rounded-full bg-white border border-secondary/10 p-1.5 shadow-ink-sm"
          >
            <input
              type="email"
              required
              placeholder="you@rooftop.com"
              className="flex-1 min-w-0 px-4 py-3 bg-transparent text-sm placeholder:text-secondary/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-secondary px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5 transition-all shadow-ink-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="relative py-20 md:py-36 overflow-hidden bg-secondary text-white">
        <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(45% 60% at 80% 20%, rgba(232,102,26,0.35) 0%, rgba(232,102,26,0) 60%)' }} />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-[0.98] tracking-display max-w-4xl">
            Reading is one thing. Booking is another.
          </h2>
          <p className="mt-6 max-w-[54ch] text-white/70 text-lg">
            Put 30 minutes on the calendar. We'll show you the same tactics running live on your data.
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
