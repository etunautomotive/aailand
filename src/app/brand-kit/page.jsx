'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { BrandingCard } from '@/components/ui/branding-card'

export default function BrandKitPage() {
  const primaryGradient = [
    '#1A1A1A',
    '#2D2015',
    '#533D2B',
    '#7A5A3E',
    '#A67C52',
    '#CC9966',
    '#E6B399',
    '#F2CCBB',
    '#F9E5D3',
    '#FFFFFF'
  ]

  const secondaryGradient = [
    '#0D0D0D',
    '#1A1714',
    '#2A2420',
    '#3D3630',
    '#5A4F4A',
    '#7A7066',
    '#99857A',
    '#B3998F',
    '#CDBFB5',
    '#E6D9CF'
  ]

  const tertiaryGradient = [
    '#1A1410',
    '#332E26',
    '#4D4233',
    '#664D33',
    '#7F6B4D',
    '#998A66',
    '#B3A380',
    '#CCC0A6',
    '#E6D9C6',
    '#FFFFFF'
  ]

  const neutralGradient = [
    '#0A0A0A',
    '#1A1A1A',
    '#333333',
    '#4D4D4D',
    '#666666',
    '#808080',
    '#999999',
    '#B3B3B3',
    '#CCCCCC',
    '#FFFFFF'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back link */}
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-secondary/6 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold font-space-grotesk text-secondary hover:opacity-70 transition-opacity">
            Automotive<span className="text-primary">AI</span>
          </Link>
          <h1 className="text-xl font-bold font-space-grotesk text-secondary">Brand Kit</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-secondary mb-3">Design System</h2>
            <p className="text-base md:text-lg text-secondary/65 max-w-2xl leading-relaxed">
              Everything you need to maintain consistency across all touchpoints. Use these guidelines when creating marketing materials, internal documents, or partner resources.
            </p>
          </div>

          {/* Bento Grid Layout - Premium asymmetrical design */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 auto-rows-max">
            {/* PRIMARY COLOR - HERO (3x2 span) */}
            <div className="md:col-span-3 lg:col-span-3 lg:row-span-2">
              <BrandingCard
                category="Color"
                title="Primary"
                subtitle="#FF7A1F"
                displayElement="🎨"
                colors={['#FF7A1F', '#FFB380', '#FFCC99', '#FFE0CC', '#FFF4E6', '#FFFFFF', '#F5F1ED', '#E6D9C6']}
              />
            </div>

            {/* SECONDARY COLOR (3x1) */}
            <div className="md:col-span-3 lg:col-span-3 lg:row-span-1">
              <BrandingCard
                category="Color"
                title="Secondary"
                subtitle="#2A2420"
                displayElement="🎨"
                colors={['#0D0D0D', '#1A1714', '#2A2420', '#3D3630', '#5A4F4A', '#7A7066', '#99857A', '#B3998F']}
              />
            </div>

            {/* HEADLINE TYPOGRAPHY (2x1) */}
            <div className="md:col-span-3 lg:col-span-4">
              <BrandingCard
                category="Typography"
                title="Headline"
                subtitle="Space Grotesk"
                displayElement={<span className="font-space-grotesk text-5xl">Aa</span>}
                colors={['#2A2420', '#808080', '#B3B3B3', '#FFFFFF']}
              />
            </div>

            {/* TERTIARY COLOR (2x1) */}
            <div className="md:col-span-3 lg:col-span-2 lg:row-span-1">
              <BrandingCard
                category="Color"
                title="Tertiary"
                subtitle="#FFF4E6"
                displayElement="🎨"
                colors={['#FFF4E6', '#FFE0CC', '#FFCC99', '#FFB380', '#FF7A1F', '#F5F1ED', '#E6D9C6', '#FFFFFF']}
              />
            </div>

            {/* BODY TYPOGRAPHY (2x1) */}
            <div className="md:col-span-2 lg:col-span-3">
              <BrandingCard
                category="Typography"
                title="Body"
                subtitle="Inter"
                displayElement={<span className="font-inter text-4xl">Aa</span>}
                colors={['#2A2420', '#666666', '#999999', '#CCCCCC']}
              />
            </div>

            {/* BUTTONS (1x1) */}
            <div className="md:col-span-1 lg:col-span-1">
              <BrandingCard
                category="Components"
                title="Buttons"
                subtitle="Variants"
                displayElement="◻"
                colors={['#FF7A1F', '#2A2420', '#F5F1ED', '#E6D9C6']}
              />
            </div>

            {/* LABEL TYPOGRAPHY (1x1) */}
            <div className="md:col-span-1 lg:col-span-2">
              <BrandingCard
                category="Typography"
                title="Label"
                subtitle="Inter"
                displayElement={<span className="font-inter text-sm font-bold">Aa</span>}
                colors={['#2A2420', '#666666', '#999999', '#CCCCCC']}
              />
            </div>

            {/* ICONS (2x1) */}
            <div className="md:col-span-3 lg:col-span-4">
              <BrandingCard
                category="Components"
                title="Icon System"
                subtitle="Lucide Icons"
                displayElement="⚙"
                colors={['#FF7A1F', '#2A2420', '#F5F1ED', '#FFFFFF']}
              />
            </div>

            {/* NEUTRAL COLOR (1x1) */}
            <div className="md:col-span-1 lg:col-span-2">
              <BrandingCard
                category="Color"
                title="Neutral"
                subtitle="#F5F1ED"
                displayElement="🎨"
                colors={['#0A0A0A', '#333333', '#666666', '#999999', '#CCCCCC', '#E6D9C6', '#F5F1ED', '#FFFFFF']}
              />
            </div>

            {/* SPACING (1x1) */}
            <div className="md:col-span-1 lg:col-span-1">
              <BrandingCard
                category="Design"
                title="Spacing"
                subtitle="8px base"
                displayElement="█"
                colors={['#F5F1ED', '#E6D9C6', '#CCCCCC', '#999999']}
              />
            </div>

            {/* BORDER RADIUS (1x1) */}
            <div className="md:col-span-1 lg:col-span-1">
              <BrandingCard
                category="Design"
                title="Radius"
                subtitle="rounded-2xl"
                displayElement="◯"
                colors={['#FF7A1F', '#2A2420', '#F5F1ED', '#FFFFFF']}
              />
            </div>

            {/* SHADOWS (1x1) */}
            <div className="md:col-span-1 lg:col-span-1">
              <BrandingCard
                category="Design"
                title="Shadows"
                subtitle="Soft UI"
                displayElement="◆"
                colors={['#F5F1ED', '#E6D9C6', '#CCCCCC', '#999999']}
              />
            </div>
          </div>

          {/* Guidelines Section */}
          <div className="mt-24 pt-16 border-t border-secondary/8">
            <h2 className="text-3xl font-bold font-space-grotesk text-secondary mb-10">Usage Guidelines</h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold font-space-grotesk text-primary mb-4">Typography</h3>
                <ul className="space-y-3 text-secondary/70">
                  <li><strong>Space Grotesk:</strong> Headlines, navigation, and brand elements</li>
                  <li><strong>Inter:</strong> Body copy, labels, and UI text</li>
                  <li><strong>Scale:</strong> Follow the established type hierarchy</li>
                  <li><strong>Weight:</strong> Use bold (700) for emphasis, regular (400) for body</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold font-space-grotesk text-primary mb-4">Colors</h3>
                <ul className="space-y-3 text-secondary/70">
                  <li><strong>Primary (#FF7A1F):</strong> Calls-to-action and key highlights</li>
                  <li><strong>Secondary (#2A2420):</strong> Headlines and main text</li>
                  <li><strong>Tertiary (#FFF4E6):</strong> Background accents and highlights</li>
                  <li><strong>Neutral (#F5F1ED):</strong> Subtle backgrounds and dividers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold font-space-grotesk text-primary mb-4">Components</h3>
                <ul className="space-y-3 text-secondary/70">
                  <li><strong>Buttons:</strong> rounded-full with hover shadows</li>
                  <li><strong>Cards:</strong> rounded-2xl with soft shadows</li>
                  <li><strong>Spacing:</strong> 8px base unit (multiples of 8)</li>
                  <li><strong>Icons:</strong> Use Lucide React icons</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold font-space-grotesk text-primary mb-4">Tone & Voice</h3>
                <ul className="space-y-3 text-secondary/70">
                  <li><strong>Authentic:</strong> Grounded in real dealership experience</li>
                  <li><strong>Empathetic:</strong> Show we understand your challenges</li>
                  <li><strong>Results-Driven:</strong> Focus on outcomes, not features</li>
                  <li><strong>Simple:</strong> Clear, jargon-free communication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-24 pt-16 border-t border-secondary/8 text-center">
            <p className="text-secondary/60 mb-6 text-sm md:text-base">
              Questions about the brand kit? Reach out to our design team.
            </p>
            <Button variant="primary">
              Contact Design Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
