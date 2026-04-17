'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-zinc-50/50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Links Grid - Balanced 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Branding + Status + Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                A
              </div>
              <span className="font-space-grotesk font-bold text-lg tracking-tight text-zinc-900">Automotive<span className="text-primary">AI</span></span>
            </div>

            <div className="inline-flex items-center px-3 py-1.5 bg-zinc-100 border border-zinc-200 rounded-lg text-[11px] font-medium text-zinc-600 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
              All systems operational
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 text-zinc-600">
              {/* Twitter */}
              <a href="#" className="hover:text-zinc-900 transition-colors" title="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-zinc-900 transition-colors" title="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-zinc-900 transition-colors" title="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-zinc-900 transition-colors" title="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-[13px] mb-6 text-zinc-900">Product</h4>
            <ul className="space-y-4 text-[13px] text-zinc-600">
              <li><Link href="/platform" className="hover:text-zinc-900 transition-colors">Platform</Link></li>
              <li><Link href="/agents" className="hover:text-zinc-900 transition-colors">AI Agents</Link></li>
              <li><Link href="/pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link></li>
              <li><Link href="/comparison" className="hover:text-zinc-900 transition-colors">Why Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[13px] mb-6 text-zinc-900">Company</h4>
            <ul className="space-y-4 text-[13px] text-zinc-600">
              <li><Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link></li>
              <li><Link href="https://calendly.com/automotiveai" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Book a Demo</Link></li>
              <li><a href="mailto:hello@automotiveai.com" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[13px] mb-6 text-zinc-900">Resources</h4>
            <ul className="space-y-4 text-[13px] text-zinc-600">
              <li><Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog & Resources</Link></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Status Page</a></li>
              <li><Link href="/brand-kit" className="hover:text-zinc-900 transition-colors">Brand Kit</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[13px] mb-6 text-zinc-900">Legal</h4>
            <ul className="space-y-4 text-[13px] text-zinc-600">
              <li><Link href="/privacy-policy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Single Footer Divider + Copyright */}
        <div className="pt-8 relative">
          <div className="flex justify-center mb-6">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"></div>
          </div>
          <p className="text-[13px] text-zinc-500 text-center">
            © 2026 Automotive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
