'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { FAQ } from '@/components/sections/faq'
import {
  MessageSquare, BarChart3, Database, Zap, Calendar, FileText,
  CreditCard, Bell, Users, Bot, Radio, ArrowRight,
} from 'lucide-react'

const categories = [
  {
    name: 'communication',
    feats: [
      { icon: MessageSquare, title: 'One inbox, every channel', desc: 'SMS, email, Messenger, voice, webchat. Conversations live in one place instead of five tabs.' },
      { icon: Bot, title: 'Real conversations at scale', desc: 'Not templates. Not drip sequences. Sustained back-and-forth that handles objections and sounds like your best closer.' },
      { icon: Radio, title: 'Outbound voice', desc: 'Automated calls with recording and transcription. Reaches leads your team never has time to dial.' },
    ],
  },
  {
    name: 'intelligence',
    feats: [
      { icon: BarChart3, title: 'Lead scoring that means something', desc: "Every lead ranked by buy readiness. Reps stop guessing and call people who actually want to talk." },
      { icon: Database, title: 'Conversation sentiment', desc: 'Hot leads surface automatically. No manual triage. Cold leads stay asleep until something changes.' },
      { icon: FileText, title: 'Credit report reading', desc: 'Upload a credit report. Instant summary. Minutes instead of an hour.' },
    ],
  },
  {
    name: 'operations',
    feats: [
      { icon: Calendar, title: 'Google Calendar two-way', desc: 'Appointments booked by the system appear on your calendar live. No double-booking, no manual entry.' },
      { icon: Zap, title: 'Automation by default', desc: 'New lead arrives, followup fires, rep gets notified, contact gets tagged. Event-driven, not toggles.' },
      { icon: CreditCard, title: 'Credit applications over text', desc: 'The system builds enough trust to gather SIN, paystubs, and licenses through conversation.' },
    ],
  },
  {
    name: 'management',
    feats: [
      { icon: BarChart3, title: 'Role-based dashboards', desc: "Admins see everything. Leads see their team. Reps see their pipeline. No noise, no surprises." },
      { icon: Users, title: 'Team visibility', desc: 'See who followed up, who didn\'t, where deals stall. Coach what you can actually observe.' },
      { icon: Bell, title: 'Notifications everywhere', desc: 'In-app, browser push, mobile push. No lead sits untouched because nobody opened the dashboard.' },
    ],
  },
]

const integrations = [
  ['Tekion DMS', 'bi-directional, DMS source of truth'],
  ['Twilio', 'SMS infrastructure'],
  ['Vapi', 'voice calling + transcription'],
  ['Stripe', 'billing + payments'],
  ['SendGrid', 'email delivery'],
  ['Google Calendar', 'two-way appointment sync'],
  ['Gmail', 'automatic lead capture'],
  ['Google Sheets', 'contact data import'],
  ['Document AI', 'invoice + document parsing'],
  ['Facebook / Meta', 'Messenger conversations'],
  ['Firebase', 'mobile push'],
]

const principles = [
  ['Complete data isolation', 'Every dealership is a walled garden. Your data, config, pipelines. Nothing bleeds between accounts.'],
  ['AI through everything', 'Not bolted on. Intelligence runs through comms, analysis, automation from day one.'],
  ['Real-time across the team', 'When something happens, everyone who needs to know finds out immediately. App, browser, mobile.'],
  ['Access control that makes sense', 'Superadmin, Admin, Team Lead, Rep. Each role sees exactly what it needs.'],
  ['Runs on any device', 'PWA. Installs like a native app. Push notifications. Offline-capable. No app store required.'],
  ['Automation is default', "Workflows aren't a premium unlock. They're how the system works from day one."],
]

const useCases = [
  { tag: '01 / reactivation', title: 'Database reactivation', body: 'Thousands of aged contacts with nothing but a name and number. The system reaches them, converses, turns forgotten names into booked appointments and credit apps.', metric: '82 credit apps / month' },
  { tag: '02 / inbound', title: 'Inbound response', body: 'A lead comes in from Facebook, your site, a listing. System replies in under 30 seconds with a real conversation — qualifies, objects, books.', metric: 'first appointment in hours' },
  { tag: '03 / outbound', title: 'Outbound campaigns', body: '200–500 messages a day re-engaging customers, promoting inventory, seasonal pushes. System handles every reply; team handles the warm ones.', metric: '6–12 extra deals / month' },
]

export default function Platform() {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 grain overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-40 h-[520px] -z-10 opacity-70"
          style={{
            background: 'radial-gradient(55% 55% at 50% 20%, rgba(232,102,26,0.16) 0%, rgba(232,102,26,0) 70%)',
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">the platform</p>
          <h1 className="mt-5 font-headline text-[56px] md:text-[104px] font-bold leading-[0.95] tracking-display max-w-[18ch]">
            One system.
            <br />
            <span className="italic font-normal text-secondary/85">Every tool your dealership</span>
            <br />
            <span className="text-primary">actually uses.</span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg md:text-xl text-secondary/70 leading-relaxed">
            Lead management, multi-channel conversations, automated followup, campaign execution, reporting, credit processing. One roof. No more duct-taping five tools together.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/#book" className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-white font-medium shadow-ink transition-all hover:-translate-y-0.5 hover:shadow-ink-lg">
              Book a walkthrough
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-secondary/20 px-7 py-4 font-medium hover:bg-secondary/5">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-secondary/10 bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 tabular divide-x divide-secondary/10">
          {[
            { v: '30s', l: 'first response time' },
            { v: '86%', l: 'outreach conversation rate' },
            { v: '82', l: 'credit apps / month' },
            { v: '11.4h', l: 'weekly hours given back' },
          ].map((s) => (
            <div key={s.l} className="p-8">
              <div className="font-headline text-4xl md:text-5xl font-bold text-secondary">{s.v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-secondary/50">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">what's inside</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Every tool your dealership
              <br />
              <span className="text-secondary/45">actually uses.</span>
            </h2>
          </div>

          <div className="space-y-20">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-baseline justify-between mb-8">
                  <h3 className="font-mono text-[12px] uppercase tracking-[0.3em] text-primary">— {cat.name}</h3>
                  <span className="hairline flex-1 ml-6" />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {cat.feats.map(({ icon: Icon, title, desc }) => (
                    <article key={title} className="group relative flex flex-col rounded-[22px] border border-secondary/10 bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-ink">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tertiary text-secondary">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <h4 className="mt-8 font-headline text-lg font-semibold">{title}</h4>
                      <p className="mt-2 text-[14.5px] text-secondary/65 leading-relaxed">{desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-surface-alt py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">how it's built</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Architecture decisions that
              <br />
              <span className="text-secondary/45">affect your business.</span>
            </h2>
          </div>
          <dl className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-secondary/15 border-y border-secondary/15 md:grid-flow-row">
            {principles.map(([t, d], i) => (
              <div key={t} className={`p-8 md:p-10 ${i >= 2 ? 'md:border-t md:border-secondary/15' : ''}`}>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-secondary/40">0{i + 1}</dt>
                <div className="mt-4">
                  <p className="font-headline text-2xl font-semibold">{t}</p>
                  <p className="mt-3 text-[15px] text-secondary/70 leading-relaxed max-w-[52ch]">{d}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">integrations</p>
              <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
                Plugs into what
                <br />
                <span className="text-secondary/45">you already run.</span>
              </h2>
            </div>
            <p className="max-w-[40ch] text-secondary/65">
              11 native integrations. Your DMS stays source of truth. Data flows bi-directionally. Zero CSV gymnastics.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-secondary/10 rounded-[22px] overflow-hidden bg-white">
            {integrations.map(([name, desc], i) => (
              <li
                key={name}
                className={`p-6 flex items-baseline justify-between gap-6 border-secondary/10
                  ${i % 3 !== 0 ? 'md:border-l' : ''}
                  ${i >= 3 ? 'border-t' : 'border-t md:border-t-0'}
                  ${i === 0 || i === 1 || i === 2 ? 'md:border-t-0' : ''}`}
              >
                <div>
                  <div className="font-headline font-semibold text-secondary">{name}</div>
                  <div className="mt-1 text-[13px] text-secondary/55">{desc}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-secondary/25 shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-surface-alt py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">use cases</p>
            <h2 className="mt-4 font-headline text-4xl md:text-6xl font-bold leading-[1.02] tracking-display">
              Three ways dealers make money
              <br />
              <span className="text-primary">on day one.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <article key={uc.tag} className="flex flex-col rounded-[22px] bg-white border border-secondary/10 p-7 hover:-translate-y-0.5 hover:shadow-ink transition-all">
                <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/45">{uc.tag}</p>
                <h3 className="mt-4 font-headline text-2xl font-semibold">{uc.title}</h3>
                <p className="mt-3 text-[14.5px] text-secondary/65 leading-relaxed">{uc.body}</p>
                <p className="tabular mt-auto pt-6 font-mono text-[12px] uppercase tracking-widest text-primary border-t border-secondary/10">
                  {uc.metric}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <figure className="relative rounded-[22px] border border-secondary/10 bg-white p-8 md:p-12 shadow-ink-sm">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tertiary font-headline font-bold text-secondary">
                M
              </div>
              <div className="flex-1">
                <blockquote className="font-headline text-2xl md:text-[2rem] font-semibold leading-[1.18] text-secondary">
                  "Eleven integrations, one dashboard. Our BDC stopped asking where a lead came from. It's all there — the message thread, the call recording, the credit app, the calendar invite. In one pane."
                </blockquote>
                <figcaption className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div className="text-sm font-medium text-secondary">Mike Rodriguez</div>
                  <div className="text-[12px] text-secondary/55">Sales Manager · Riverside Auto Group, 2 rooftops</div>
                  <div className="tabular ml-auto font-mono text-[11px] uppercase tracking-widest text-primary">
                    11.4 hrs / week returned
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="relative py-20 md:py-36 overflow-hidden bg-secondary text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background: 'radial-gradient(45% 60% at 80% 20%, rgba(232,102,26,0.35) 0%, rgba(232,102,26,0) 60%)',
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-[0.98] tracking-display max-w-4xl">
            See what's sitting in your database.
          </h2>
          <p className="mt-6 max-w-[56ch] text-white/70 text-lg">
            Book 30 minutes. We'll connect to your data and show you exactly where the opportunities are. Most dealers see first results before the demo ends.
          </p>
          <Link href="/#book" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-white shadow-ember transition-all hover:-translate-y-0.5">
            Book your walkthrough
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
