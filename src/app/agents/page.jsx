'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { FAQ } from '@/components/sections/faq'
import {
  MessageSquare, Phone, Brain, TrendingUp, Lock, Zap, Target, ArrowRight,
} from 'lucide-react'

const capabilities = [
  { icon: MessageSquare, title: 'Sustains full conversations', desc: 'Not just first-touch. Back-and-forth dialogue, tone matching, objection handling, trust-building across massive lead volume.' },
  { icon: Brain, title: 'Trained on real sales cadence', desc: 'Built by closers who lived the grind. Talks like someone who worked the floor — natural language, appropriate punctuation, chameleon tactics.' },
  { icon: Target, title: 'Collects what matters', desc: 'Builds enough trust to gather SIN, license, home address, paystubs over text — without the customer realizing the AI is in the loop.' },
  { icon: TrendingUp, title: 'Cold → qualified', desc: '"Not interested" becomes a booked appointment through persistent, intelligent followup that knows timing, tone, objection psychology.' },
]

const features = [
  { icon: Phone, title: 'Multi-channel', items: ['SMS messaging', 'Voice + recording', 'Facebook Messenger', 'Webchat', 'Email'] },
  { icon: Brain, title: 'Intelligence', items: ['Scoring + qualification', 'Sentiment analysis', 'Credit report parsing', 'Field extraction', 'Objection handling'] },
  { icon: Zap, title: 'Automation', items: ['Event-driven triggers', 'Followup sequences', 'Scheduled automations', 'Webhook integrations', 'Marketplace templates'] },
  { icon: Lock, title: 'Security', items: ['PII sanitization', 'Multi-tenant isolation', 'Role-based access', 'Compliance (CASL + TCPA)', 'Data ownership'] },
]

const results = [
  ['86%', 'response rate'],
  ['82', 'credit apps / mo'],
  ['5–10', 'aged-lead appts / mo'],
  ['11.4h', 'weekly hours returned'],
  ['6–12', 'extra deals / mo'],
  ['10×', 'BDC volume multiplier'],
]

const useCases = [
  ['Reactivation engine', 'Aged contacts with minimal data become qualified opportunities through sustained dialogue.', '5–10 appts / mo from never-touched contacts'],
  ['Inbound qualification', 'Every lead — site, Facebook, phone, email — qualified in under 60 seconds. AI handles objections, reps close.', '30–60 full credit apps / mo'],
  ['Bulk outreach', '200–500 messages / day on base plan, 500+ on higher tiers. All threads run in parallel.', '6–12 extra deals / mo'],
  ['BDC at scale', 'One skilled operator manages the throughput of a 10-person BDC when paired with AI prospecting.', 'Scale revenue without proportional hiring'],
]

export default function Agents() {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      <section className="relative pt-36 pb-20 grain overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-40 h-[520px] -z-10 opacity-70"
          style={{ background: 'radial-gradient(55% 55% at 50% 20%, rgba(232,102,26,0.16) 0%, rgba(232,102,26,0) 70%)' }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">the conversation engine</p>
          <h1 className="mt-5 font-headline text-[56px] md:text-[104px] font-bold leading-[0.94] tracking-display max-w-[18ch]">
            Talks like someone
            <br />
            <span className="italic font-normal text-secondary/85">who's worked the floor.</span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg md:text-xl text-secondary/70 leading-relaxed">
            Most tools in the category send a first message and punt. Ours sustains nuanced back-and-forth across thousands of leads at once — handles objections, builds trust, collects credit apps over text. That's the hard part nobody else cracked.
          </p>
        </div>
      </section>

      {/* them vs us */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-[22px] bg-white border border-secondary/10 p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">other AI tools</p>
              <ul className="mt-6 space-y-3 text-[14.5px] text-secondary/65">
                {['Send one opener', 'Follow up once or twice', 'Punt to appointment setter', 'Robotic, off-topic replies', 'Generates busywork, not opportunity'].map((x) => (
                  <li key={x} className="flex gap-3"><span className="text-secondary/35">—</span>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[22px] bg-secondary text-white p-8 shadow-ink-lg">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">automotive AI</p>
              <ul className="mt-6 space-y-3 text-[14.5px] text-white/85">
                {['Sustained conversations', 'Intelligent objection handling', 'Builds trust to collect sensitive info', 'Matches tone + style per lead', 'Qualified pipeline at scale'].map((x) => (
                  <li key={x} className="flex gap-3"><span className="text-primary">+</span>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">capabilities</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              The hard part
              <br />
              <span className="text-secondary/45">nobody else can do.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group rounded-[22px] border border-secondary/10 bg-white p-7 hover:-translate-y-0.5 hover:shadow-ink transition-all">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tertiary text-secondary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-headline text-xl md:text-2xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-[54ch] text-[14.5px] text-secondary/65 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Under the hood */}
      <section className="bg-surface-alt py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">under the hood</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              What's actually inside.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-[22px] border border-secondary/10 bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary text-secondary">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-headline text-xl font-semibold">{title}</h3>
                </div>
                <ul className="mt-6 space-y-2 text-[14px] text-secondary/70">
                  {items.map((i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-primary mt-1">·</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">four ways dealers make money</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Where the money lands.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map(([t, d, m]) => (
              <article key={t} className="flex flex-col rounded-[22px] bg-white border border-secondary/10 p-8 hover:-translate-y-0.5 hover:shadow-ink transition-all">
                <h3 className="font-headline text-2xl font-semibold text-secondary">{t}</h3>
                <p className="mt-3 text-[15px] text-secondary/65 leading-relaxed">{d}</p>
                <div className="tabular mt-auto pt-6 border-t border-secondary/10 font-mono text-[12px] uppercase tracking-widest text-primary">
                  → {m}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">numbers from real rooftops</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Not projections.
            </h2>
          </div>
          <dl className="tabular grid grid-cols-2 md:grid-cols-3 rounded-[22px] overflow-hidden border border-secondary/10 bg-white">
            {results.map(([v, l], i) => (
              <div key={l} className={`p-8 border-secondary/10 ${i % 3 !== 0 ? 'md:border-l' : ''} ${i >= 3 ? 'md:border-t' : ''} ${i >= 2 && i % 2 === 0 ? 'border-l md:border-l' : ''} ${i >= 2 ? 'border-t md:border-t' : ''}`}>
                <dd className="font-headline text-4xl md:text-5xl font-bold text-primary">{v}</dd>
                <dt className="mt-2 font-mono text-[10px] uppercase tracking-widest text-secondary/50">{l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="relative py-20 md:py-36 overflow-hidden bg-secondary text-white">
        <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(45% 60% at 80% 20%, rgba(232,102,26,0.35) 0%, rgba(232,102,26,0) 60%)' }} />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-[0.98] tracking-display max-w-4xl">
            Watch it handle a real conversation.
          </h2>
          <p className="mt-6 max-w-[54ch] text-white/70 text-lg">
            Book 30 minutes. We'll show it qualifying a lead, handling objections, moving a buyer forward in one thread. Most dealers who watch it once sign the same week.
          </p>
          <Link href="/#book" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-white shadow-ember hover:-translate-y-0.5 transition-all">
            See it in action
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
