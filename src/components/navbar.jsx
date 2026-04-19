'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const routeLinks = [
  { href: '/', label: 'Home', section: 'top' },
  { href: '/platform', label: 'Platform' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/comparison', label: 'Why us' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const mountedRef = useRef(false)

  // scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // section awareness (landing only)
  useEffect(() => {
    if (pathname !== '/') return
    mountedRef.current = true
    const ids = ['top', 'pricing', 'case', 'book']
    const targets = ids
      .map((id) => (id === 'top' ? document.body : document.getElementById(id)))
      .filter(Boolean)
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target === document.body ? 'top' : e.target.id
            setActiveSection(id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [pathname])

  const isActive = (link) => {
    if (link.href === '/') return pathname === '/'
    return pathname.startsWith(link.href)
  }

  return (
    <>
      {/* skip link */}
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-secondary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        id="top"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-3 md:px-6">
          <nav
            aria-label="Primary"
            className={`relative flex items-center justify-between rounded-full px-4 md:px-5 py-2.5 transition-all duration-300 border ${
              scrolled
                ? 'bg-surface/92 backdrop-blur-xl border-secondary/10 shadow-ink-sm'
                : 'bg-surface/60 backdrop-blur-md border-white/40'
            }`}
          >
            {/* brand */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 shrink-0 pl-1"
              aria-label="Automotive AI — home"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-secondary text-white font-headline font-bold text-[13px] group-hover:bg-primary transition-colors">
                A
              </span>
              <span className="font-headline text-[15px] font-semibold tracking-[-0.01em] text-secondary">
                Automotive<span className="text-primary">AI</span>
              </span>
            </Link>

            {/* desktop links */}
            <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 tabular">
              {routeLinks.map((link) => {
                const active = isActive(link)
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center px-3.5 py-2 min-h-[36px] rounded-full text-[13px] font-medium transition-colors ${
                        active
                          ? 'text-secondary'
                          : 'text-secondary/60 hover:text-secondary'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-secondary/5 border border-secondary/10"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* right cluster */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <Link
                href="/login"
                className="px-3 py-1.5 text-[13px] font-medium text-secondary/65 hover:text-secondary transition-colors"
              >
                Log in
              </Link>
              <Link
                href="https://calendly.com/automotiveai"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 min-h-[36px] text-[13px] font-semibold text-white shadow-ink-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-ink hover:shadow-ink active:translate-y-0 motion-reduce:hover:translate-y-0"
              >
                Book demo
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
              </Link>
            </div>

            {/* mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-secondary/15 text-secondary hover:bg-secondary hover:text-white transition-colors"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </nav>

          {/* mobile panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden mt-3 rounded-[22px] border border-secondary/10 bg-surface/95 backdrop-blur-xl shadow-ink p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-secondary/45 mb-3 px-2">
                  navigate
                </p>
                <ul className="space-y-1">
                  {routeLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-3 py-3 min-h-[44px] text-[15px] font-medium transition-colors ${
                          isActive(link)
                            ? 'bg-secondary/5 text-secondary'
                            : 'text-secondary/70 hover:bg-secondary/5 hover:text-secondary'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-secondary/10 flex flex-col gap-2">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-secondary/65 hover:bg-secondary/5"
                  >
                    Log in
                  </Link>
                  <Link
                    href="https://calendly.com/automotiveai"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary px-4 py-2.5 text-[13px] font-semibold text-white shadow-ink-sm"
                  >
                    Book demo
                    <ArrowRight className="h-3 w-3" strokeWidth={2.25} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}
