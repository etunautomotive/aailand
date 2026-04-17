'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Button } from '@/components/ui/Button'
import { MessageSquare, BarChart3, Database, Zap, Calendar, FileText, CreditCard, Bell, Users, Settings, Bot, Radio } from 'lucide-react'

export default function Platform() {
  const featureCategories = [
    {
      category: 'Communication',
      features: [
        { icon: MessageSquare, title: 'One Inbox. Every Channel.', desc: 'SMS, email, Facebook Messenger, voice, and webchat. Your team stops switching between five apps. Every conversation lives in one place.' },
        { icon: Bot, title: 'Real Conversations at Scale', desc: 'Not templates. Not drip sequences. Full back-and-forth conversations that handle objections, build trust, and sound like your best closer wrote them.' },
        { icon: Radio, title: 'Outbound Voice', desc: 'Automated calls with recording and transcription. The system reaches leads your team doesn\'t have time to dial.' },
      ]
    },
    {
      category: 'Intelligence',
      features: [
        { icon: BarChart3, title: 'Lead Scoring That Means Something', desc: 'Every lead ranked by how ready they are to buy. Your reps stop guessing and start calling the people who actually want to talk.' },
        { icon: Database, title: 'Conversation Sentiment', desc: 'The system knows which conversations are warm and which are cold. Hot leads surface automatically. No manual triage.' },
        { icon: FileText, title: 'Credit Report Reading', desc: 'Upload a credit report. Get an instant summary. Your team spends minutes on what used to take an hour.' },
      ]
    },
    {
      category: 'Operations',
      features: [
        { icon: Calendar, title: 'Google Calendar Sync', desc: 'Two-way sync. Appointments booked through the system show up on your calendar. No double-booking. No manual entry.' },
        { icon: Zap, title: 'Automation That Runs Itself', desc: 'New lead arrives, follow-up fires, rep gets notified, contact gets tagged. Event-driven workflows handle the busywork so your team doesn\'t.' },
        { icon: CreditCard, title: 'Credit Applications', desc: 'Collect credit apps through conversation. The system builds enough trust to gather SIN numbers, paystubs, and licenses over text.' },
      ]
    },
    {
      category: 'Management',
      features: [
        { icon: BarChart3, title: 'Role-Based Dashboards', desc: 'Admins see everything. Team leads see their team. Reps see their own pipeline. Everyone gets the view they need without the noise they don\'t.' },
        { icon: Users, title: 'Team Visibility', desc: 'See who\'s following up, who\'s not, and where deals are stalling. Coach what you can actually see.' },
        { icon: Bell, title: 'Notifications Everywhere', desc: 'In-app, browser push, and mobile push. No lead sits untouched because someone didn\'t check the dashboard.' },
      ]
    }
  ]

  const integrations = [
    { name: 'Tekion DMS', desc: 'Bi-directional sync. DMS stays source of truth.' },
    { name: 'Twilio', desc: 'SMS messaging infrastructure' },
    { name: 'Vapi', desc: 'Voice calling and transcription' },
    { name: 'Stripe', desc: 'Billing and payments' },
    { name: 'SendGrid', desc: 'Email delivery' },
    { name: 'Google Calendar', desc: 'Two-way appointment sync' },
    { name: 'Gmail', desc: 'Automatic lead capture' },
    { name: 'Google Sheets', desc: 'Contact data import' },
    { name: 'Document AI', desc: 'Invoice and document processing' },
    { name: 'Facebook / Meta', desc: 'Messenger conversations' },
    { name: 'Firebase', desc: 'Mobile push notifications' },
  ]

  const principles = [
    { title: 'Complete Data Isolation', desc: 'Every dealership is a walled garden. Your data, your config, your pipelines. Nothing bleeds between accounts. Ever.' },
    { title: 'AI Runs Through Everything', desc: 'Not bolted on. Not an add-on you pay extra for. The intelligence layer is built into communication, analysis, and automation from the ground up.' },
    { title: 'Real-Time Across the Team', desc: 'When something happens, everyone who needs to know finds out immediately. In-app, browser, and mobile push.' },
    { title: 'Access Control That Makes Sense', desc: 'Superadmin, Admin, Team Lead, Rep. Each role sees exactly what they need. Reps don\'t see other reps. Leads don\'t see other teams.' },
    { title: 'Works on Any Device', desc: 'Progressive web app. Install it like a native app on any phone. Push notifications. Offline support. No app store required.' },
    { title: 'Automation Is the Default', desc: 'Workflows and sequences aren\'t a premium feature you unlock later. They\'re how the system works from day one.' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">The Platform</p>
          <h1 className="text-7xl md:text-8xl font-bold font-space-grotesk tracking-tight max-w-5xl leading-[0.95] text-secondary">
            One system. <span className="text-primary">Everything</span> your dealership needs.
          </h1>
          <p className="text-xl text-secondary/70 max-w-2xl font-medium leading-relaxed">
            Lead management, multi-channel conversations, automated follow-up, campaign execution, reporting, and credit processing. All in one place. No more duct-taping five tools together.
          </p>
          <Button variant="primary">
            Book a Demo
          </Button>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-8 py-20 bg-tertiary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold font-space-grotesk text-primary mb-3">30s</div>
              <p className="text-secondary/70 font-medium">First response to any lead</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-space-grotesk text-primary mb-3">85%+</div>
              <p className="text-secondary/70 font-medium">Conversation rate on outreach</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-space-grotesk text-primary mb-3">80-100</div>
              <p className="text-secondary/70 font-medium">Credit apps per month from dead contacts</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-space-grotesk text-primary mb-3">10+</div>
              <p className="text-secondary/70 font-medium">Hours per week given back to your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features by Category */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">What's Inside</p>
            <h2 className="text-5xl font-bold font-space-grotesk text-secondary">
              Every tool your dealership actually uses. Nothing it doesn't.
            </h2>
          </div>

          {featureCategories.map((cat, catIdx) => (
            <div key={catIdx} className="mb-20">
              <h3 className="text-2xl font-bold font-space-grotesk text-primary mb-8">{cat.category}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {cat.features.map((feature, idx) => {
                  const Icon = feature.icon
                  return (
                    <div key={idx} className="bg-white border border-secondary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <h4 className="text-lg font-bold font-space-grotesk text-secondary mb-2">{feature.title}</h4>
                      <p className="text-secondary/70 text-sm">{feature.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="px-8 py-24 bg-tertiary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">How It's Built</p>
            <h2 className="text-5xl font-bold font-space-grotesk text-secondary">
              Architecture decisions that matter to your business.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-secondary/10">
                <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">{principle.title}</h3>
                <p className="text-secondary/70">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">Integrations</p>
            <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-8">
              Connects to what you already run.
            </h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              11 native integrations. Your DMS stays the source of truth. Data flows bi-directionally. No CSV exports. No manual syncing. No spreadsheet gymnastics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {integrations.map((integration, idx) => (
              <div key={idx} className="bg-white border border-secondary/10 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold font-space-grotesk text-secondary mb-1">{integration.name}</h4>
                <p className="text-sm text-secondary/70">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-8 py-24 bg-tertiary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">Use Cases</p>
            <h2 className="text-5xl font-bold font-space-grotesk text-secondary">
              Three ways dealers make money on day one.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-2xl font-bold font-space-grotesk text-primary mb-4">Database Reactivation</h3>
              <p className="text-secondary/70 mb-4">You have thousands of contacts with nothing but a name and number. The system reaches them, starts conversations, and turns forgotten names into booked appointments and full credit applications.</p>
              <p className="font-bold text-secondary">80-100+ credit apps per month from contacts nobody was touching.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-2xl font-bold font-space-grotesk text-primary mb-4">Inbound Lead Response</h3>
              <p className="text-secondary/70 mb-4">A lead comes in from Facebook, your website, or a listing site. The system responds in under 30 seconds. Not with a template. With a real conversation that qualifies, handles objections, and books.</p>
              <p className="font-bold text-secondary">First appointment booked within hours of going live.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-secondary/10">
              <h3 className="text-2xl font-bold font-space-grotesk text-primary mb-4">Outbound Campaigns</h3>
              <p className="text-secondary/70 mb-4">Send 200-500 messages a day to re-engage old customers, promote inventory, or run seasonal pushes. The system handles every reply. Your team handles the warm ones.</p>
              <p className="font-bold text-secondary">6-12 extra deals in the first month from leads that were sitting idle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-6">
            See what's sitting in your database.
          </h2>
          <p className="text-lg text-secondary/70 mb-10">
            Book 30 minutes. We'll connect to your data and show you exactly where the opportunities are. Most dealers see their first results before the demo is over.
          </p>
          <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all">
            Book Your Demo
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
