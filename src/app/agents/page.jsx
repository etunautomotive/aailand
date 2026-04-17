'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Button } from '@/components/ui/Button'
import { MessageSquare, Phone, Brain, TrendingUp, Lock, Zap, FileText, Target } from 'lucide-react'

export default function Agents() {
  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Sustains Full Conversations',
      desc: 'Not just first-touch. The AI handles back-and-forth dialogue, matches tone, handles objections, and builds trust across massive lead volumes.'
    },
    {
      icon: Brain,
      title: 'Trained on Real Sales Processes',
      desc: 'Built by closers who lived the grind. The AI communicates like someone who has actually worked the floor — with natural language, appropriate punctuation, and chameleon tactics.'
    },
    {
      icon: Target,
      title: 'Collects What Matters',
      desc: 'Can build enough trust to collect SIN numbers, driver licenses, home addresses, and paystubs via text without the customer knowing they are talking to AI.'
    },
    {
      icon: TrendingUp,
      title: 'Turns Cold into Qualified',
      desc: '"Not interested" becomes a qualified appointment. Persistent, intelligent follow-up that understands timing, tone, and the psychology of objection handling.'
    },
  ]

  const features = [
    {
      icon: Phone,
      title: 'Multi-Channel Communication',
      items: ['SMS messaging', 'Voice calling with recording', 'Facebook Messenger responses', 'Webchat engagement', 'Email communication'],
    },
    {
      icon: Brain,
      title: 'AI Intelligence',
      items: ['Lead scoring & qualification', 'Sentiment analysis (warm vs. cold)', 'Credit report analysis', 'Automatic field extraction', 'Objection handling'],
    },
    {
      icon: Zap,
      title: 'Automation & Workflows',
      items: ['Event-driven triggers', 'Follow-up sequences', 'Scheduled automations', 'Webhook integrations', 'Marketplace templates'],
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      items: ['PII sanitization', 'Multi-tenant isolation', 'Role-based access control', 'Compliance built-in', 'Data ownership guaranteed'],
    },
  ]

  const results = [
    { metric: '85-95%', label: 'Response Rate' },
    { metric: '100+', label: 'Credit Apps/Month' },
    { metric: '5-10', label: 'Old Lead Appointments/Month' },
    { metric: '10+', label: 'Hours/Week Given Back to Staff' },
    { metric: '6-12', label: 'Extra Deals in First Month' },
    { metric: '1 Rep = 10', label: 'Team Volume Multiplier' },
  ]

  const useCases = [
    {
      title: 'Reactivation Engine',
      desc: 'Contacts sitting in your database with minimal information become fully qualified opportunities through sustained AI dialogue.',
      outcome: '5-10 appointments per month from never-touched contacts'
    },
    {
      title: 'Inbound Qualification',
      desc: 'Every lead that comes in — website, Facebook, phone, email — gets qualified in under 60 seconds. AI handles the objections. Reps close.',
      outcome: '30-60 full credit applications per month'
    },
    {
      title: 'Bulk Outreach Campaigns',
      desc: 'Send 200-500 messages per day on the base plan. Higher tiers unlock 500+ daily. The AI manages all conversation threads simultaneously.',
      outcome: '6-12 extra deals per month from bulk campaigns'
    },
    {
      title: 'BDC at Scale',
      desc: 'One skilled person can manage the work volume of a 10-person BDC team when paired with AI handling the prospecting grunt work.',
      outcome: 'Scale revenue without proportional hiring'
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">The Conversation Engine</p>
          <h1 className="text-7xl md:text-8xl font-bold font-space-grotesk tracking-tight max-w-6xl leading-[0.95] text-secondary">
            Talks like someone who's <span className="text-primary">worked the floor.</span>
          </h1>
          <p className="text-xl text-secondary/70 max-w-3xl font-medium leading-relaxed">
            Most tools in this space send a first message and punt to appointment. Ours sustains full, nuanced conversations across thousands of leads simultaneously. It handles objections. It builds trust. It collects credit applications over text. That's the part nobody else has figured out.
          </p>
        </div>
      </section>

      {/* The Differentiator */}
      <section className="px-8 py-24 bg-tertiary/30 border-t border-secondary/10 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-12 border border-secondary/10">
            <h2 className="text-4xl font-bold font-space-grotesk text-secondary mb-8 text-center">
              Everyone else vs. us.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Other AI Tools</h3>
                <ul className="space-y-3 text-secondary/70">
                  <li>✗ Send a first message</li>
                  <li>✗ Follow up once or twice</li>
                  <li>✗ Pass to appointment setter</li>
                  <li>✗ Robotic or off-topic responses</li>
                  <li>✗ Creates busywork, not opportunity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Automotive AI</h3>
                <ul className="space-y-3 text-secondary/70">
                  <li>✓ Sustains full conversations</li>
                  <li>✓ Handles objections intelligently</li>
                  <li>✓ Builds enough trust to collect sensitive info</li>
                  <li>✓ Matches tone and communication style</li>
                  <li>✓ Creates qualified opportunities at scale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-20 text-center">
            The hard part that nobody else can do.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <div key={idx} className="bg-white border border-secondary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold font-space-grotesk text-secondary mb-3">{cap.title}</h3>
                  <p className="text-secondary/70">{cap.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="px-8 py-24 bg-secondary/5 border-t border-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-20 text-center">
            Numbers from real dealerships.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-12 text-center border border-secondary/10">
                <div className="text-5xl font-bold font-space-grotesk text-primary mb-3">{result.metric}</div>
                <p className="text-secondary/70 font-medium">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="px-8 py-24 bg-white border-t border-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-20 text-center">
            What's under the hood.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-white border border-secondary/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-bold font-space-grotesk text-secondary">{feature.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-secondary/70 flex gap-2">
                        <span className="text-primary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-8 py-24 bg-tertiary/30 border-t border-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-20 text-center">
            Four ways dealers make money with it.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-10 border border-secondary/10">
                <h3 className="text-2xl font-bold font-space-grotesk text-primary mb-4">{useCase.title}</h3>
                <p className="text-secondary/70 mb-6">{useCase.desc}</p>
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm font-bold text-primary">{useCase.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-24 bg-white border-t border-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-6">
            See it handle a real conversation.
          </h2>
          <p className="text-lg text-secondary/70 mb-10">
            Book 30 minutes. We'll show you the system qualifying a lead, handling objections, and moving a buyer forward in a single conversation. Most dealers who see it once don't leave without signing up.
          </p>
          <Button variant="primary">
            See It In Action
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
