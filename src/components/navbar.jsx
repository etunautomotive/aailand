'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/platform', label: 'Platform' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/comparison', label: 'Why Us' },
  ]

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <nav className="glass-pill rounded-full px-6 py-3 flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/20">
        <Link href="/" className="text-xl font-bold tracking-tight text-secondary font-space-grotesk hover:opacity-80 transition-opacity">
          Automotive<span className="text-primary">AI</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? 'text-primary font-bold'
                  : 'text-secondary/70 hover:text-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors">
            Log In
          </Link>
          <Link href="https://calendly.com/automotiveai" target="_blank" rel="noopener noreferrer" className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all block">
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <div className={`w-6 h-0.5 bg-secondary transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-secondary transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-secondary transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-medium py-2 transition-colors ${
                isActive(link.href)
                  ? 'text-primary font-bold'
                  : 'text-secondary/70 hover:text-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/20 pt-4 mt-4 space-y-3">
            <Link href="/login" className="block w-full text-center text-sm font-medium text-secondary/70 hover:text-secondary py-2 transition-colors">
              Log In
            </Link>
            <Link href="https://calendly.com/automotiveai" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-white text-sm font-bold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all text-center">
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
