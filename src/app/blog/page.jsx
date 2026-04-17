'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Dealership Lead Reactivation: How to Work Old Leads Without Burning Out Your Team',
      category: 'Lead Conversion',
      categoryColor: 'primary',
      date: 'Mar 18, 2026',
      description: 'The article addresses a significant industry challenge: "84% of CRM leads go untouched after 30 days." It focuses on strategies for reactivating aged leads while protecting team wellbeing.',
      url: '/blog/dealership-lead-reactivation',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'AI for Car Dealerships Won\'t Work Without This',
      category: 'AI Strategy',
      categoryColor: 'primary',
      date: 'Mar 17, 2026',
      description: 'This piece reveals that "76% of dealerships are increasing AI budgets this year," but emphasizes that success requires prioritizing proper sales processes before implementing technology solutions.',
      url: '/blog/ai-for-car-dealerships-process-before-technology',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Why One AI Agent Isn\'t Enough for Your Dealership',
      category: 'AI Strategy',
      categoryColor: 'primary',
      date: 'Feb 26, 2026',
      description: 'The article explains why relying on a single AI agent across all lead sources undermines performance, recommending dealerships deploy specialized agents tailored to different lead sources instead.',
      url: '/blog/why-one-ai-agent-isnt-enough-for-your-dealership',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Lean BDC Model: How AI + 2 Skilled BDC Beat a 10-Person Department',
      category: 'BDC Strategy',
      categoryColor: 'primary',
      date: 'Feb 8, 2026',
      description: 'Proposes an efficient staffing approach where minimal personnel paired with AI capabilities can outperform larger traditional departments substantially.',
      url: '/blog/lean-bdc-model-ai-dealerships',
      readTime: '9 min read'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">Blog</p>
          <h1 className="text-7xl md:text-8xl font-bold font-space-grotesk tracking-tight max-w-6xl leading-[0.95] text-secondary">
            Stuff we've <span className="text-primary">learned</span> the hard way.
          </h1>
          <p className="text-xl text-secondary/70 max-w-3xl font-medium leading-relaxed">
            Strategies, breakdowns, and real-world lessons from a team that sold cars before they built software. No fluff. No thought-leadership posturing. Just what actually works.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-8 py-24 bg-white border-t border-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                className="group block bg-white border border-secondary/10 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="flex-1">
                    {/* Category Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-secondary/50 text-sm font-medium">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold font-space-grotesk text-secondary mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-secondary/70 mb-6 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Read Time & CTA */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-secondary/50">{post.readTime}</span>
                      <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Visual indicator */}
                  <div className="hidden md:flex items-center justify-center w-24 h-24 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors flex-shrink-0">
                    <span className="text-2xl">📖</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-8 py-24 bg-tertiary/30 border-t border-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-space-grotesk text-secondary mb-6">
            New stuff every Tuesday.
          </h2>
          <p className="text-xl text-secondary/70 mb-10">
            Strategies, case studies, and breakdowns from dealers who are actually doing it. No spam. Just signal.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-secondary/10 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-secondary/20 rounded-lg mb-4 focus:outline-none focus:border-primary"
            />
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* More Content CTA */}
      <section className="px-8 py-24 bg-white border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-space-grotesk text-secondary mb-6">
            Reading about it is one thing. Seeing it work is another.
          </h2>
          <p className="text-lg text-secondary/70 mb-10">
            Book 30 minutes. We'll connect to your data and show you exactly where the opportunities are sitting.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button variant="primary">
              Schedule a Demo
            </Button>
            <Button variant="secondary">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}