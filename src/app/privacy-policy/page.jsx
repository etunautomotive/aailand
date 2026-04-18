import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'

const sections = [
  {
    id: 'information',
    title: 'Information we collect',
    body: (
      <>
        <h3 className="font-headline text-lg font-semibold mt-6">Non-personal</h3>
        <p className="mt-2">
          When you visit, we log browser type, operating system, pages visited, navigation patterns, timestamps, and device metadata.
        </p>
        <h3 className="font-headline text-lg font-semibold mt-6">Personal</h3>
        <p className="mt-2">We collect personal information when you:</p>
        <ul className="mt-2 space-y-1.5 list-disc pl-5 text-secondary/75">
          <li>Schedule a walkthrough through our booking system</li>
          <li>Sign in to the platform</li>
          <li>Contact us through the site</li>
          <li>Request information about our services</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Use of cookies',
    body: (
      <p>
        The site uses essential cookies to ensure basic functionality and improve UX — theme preferences, session management. You can refuse cookies via browser settings, at the cost of some features.
      </p>
    ),
  },
  {
    id: 'use',
    title: 'How we use your information',
    body: (
      <ul className="space-y-1.5 list-disc pl-5 text-secondary/75">
        <li>Provide and maintain services</li>
        <li>Process walkthrough requests and bookings</li>
        <li>Improve site and user experience</li>
        <li>Communicate about services</li>
        <li>Ensure platform security and prevent fraud</li>
      </ul>
    ),
  },
  {
    id: 'security',
    title: 'Data security',
    body: (
      <ul className="space-y-1.5 list-disc pl-5 text-secondary/75">
        <li>HTTPS encryption end-to-end</li>
        <li>Regular security audits</li>
        <li>Encrypted data storage</li>
        <li>Least-privilege access to personal information</li>
      </ul>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-party services',
    body: (
      <>
        <ul className="space-y-1.5 list-disc pl-5 text-secondary/75">
          <li>Motion — walkthrough scheduling</li>
          <li>Authentication providers for sign-in</li>
          <li>Analytics tools</li>
        </ul>
        <p className="mt-3 text-secondary/65">Each third party has its own privacy policy and data-handling practices.</p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention',
    body: (
      <p>
        We retain personal information only as long as necessary to deliver services and satisfy the purposes of this policy. Request deletion at any time.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: (
      <ul className="space-y-1.5 list-disc pl-5 text-secondary/75">
        <li>Access your personal data</li>
        <li>Request corrections</li>
        <li>Request deletion</li>
        <li>Opt-out of communications</li>
      </ul>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as services evolve. Significant changes are communicated on the site and by email where appropriate.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions or exercising privacy rights?{' '}
        <a href="mailto:wes@automotiveai.ca" className="text-secondary underline underline-offset-4 decoration-primary/60 hover:text-primary">
          wes@automotiveai.ca
        </a>
      </p>
    ),
  },
]

export const metadata = {
  title: 'Privacy Policy — Automotive AI',
  description: 'How Automotive AI collects, uses, and protects your information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-surface text-secondary">
      <Navbar />

      <section className="relative pt-36 pb-12 grain overflow-hidden">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary/50">legal</p>
          <h1 className="mt-5 font-headline text-[48px] md:text-[80px] font-bold leading-[0.98] tracking-display">
            Privacy policy.
          </h1>
          <p className="mt-4 font-mono text-[12px] text-secondary/45 uppercase tracking-widest">
            effective — apr 2026 · operated by AAI Technologies Inc.
          </p>
          <p className="mt-8 max-w-[62ch] text-[17px] text-secondary/70 leading-relaxed">
            Automotive AI (operated by AAI Technologies Inc.) is committed to protecting the privacy of personally identifiable information collected through our website and services. This policy explains what we collect, how we use it, and how we protect it.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-28 self-start">
            <p className="font-mono text-[11px] uppercase tracking-widest text-secondary/50 mb-4">on this page</p>
            <nav className="space-y-2.5 text-[14px]">
              {sections.map((s, i) => (
                <Link key={s.id} href={`#${s.id}`} className="flex gap-3 text-secondary/60 hover:text-secondary">
                  <span className="font-mono text-[11px] text-secondary/35">{String(i + 1).padStart(2, '0')}</span>
                  <span>{s.title}</span>
                </Link>
              ))}
            </nav>
          </aside>

          <article className="divide-y divide-secondary/10 border-y border-secondary/10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="py-10 scroll-mt-32">
                <p className="font-mono text-[11px] uppercase tracking-widest text-secondary/40">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 font-headline text-3xl md:text-4xl font-bold tracking-display">{s.title}</h2>
                <div className="mt-5 max-w-[62ch] text-[16px] text-secondary/75 leading-[1.75]">{s.body}</div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
