'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section
      id="book"
      className="relative py-32 md:py-48 overflow-hidden bg-secondary text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(50% 70% at 50% 55%, rgba(232,102,26,0.35) 0%, rgba(232,102,26,0) 65%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          see it for yourself
        </p>
        <h2 className="mt-6 font-headline text-[48px] md:text-[88px] font-bold leading-[0.98] tracking-display text-white">
          Your next 10 deals are
          <br />
          <span className="italic font-normal text-white/75">
            already in your DMS.
          </span>
        </h2>
        <Link
          href="/#demo"
          className="group mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-ember transition-all hover:-translate-y-0.5"
        >
          Book a walkthrough
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
