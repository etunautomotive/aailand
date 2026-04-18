const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/modal.js",
    "./node_modules/@heroui/theme/dist/components/slider.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'geist': ['var(--font-geist)', 'sans-serif'],
        'inter': ['var(--font-geist)', 'sans-serif'],
        'headline': ['var(--font-space-grotesk)', 'sans-serif'],
        'body': ['var(--font-geist)', 'sans-serif'],
        'label': ['var(--font-geist)', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        primary: '#E8661A',
        secondary: '#2A2420',
        tertiary: '#F6EFE4',
        neutral: '#FDFBF7',
        surface: '#FDFBF7',
        'surface-alt': '#F6EFE4',
        'surface-ink': '#1A1512',
        'on-surface': '#2A2420',
        'on-surface-variant': '#665E55',
        background: '#FDFBF7',
        foreground: '#2A2420',
        card: { DEFAULT: '#FFFFFF', foreground: '#2A2420' },
        popover: { DEFAULT: '#FFFFFF', foreground: '#2A2420' },
        muted: { DEFAULT: '#EFE8DD', foreground: '#2A2420' },
        accent: { DEFAULT: '#E8661A', foreground: '#FFFFFF' },
        destructive: { DEFAULT: '#C53030', foreground: '#FFFFFF' },
        border: '#E8DFD2',
        input: '#FFFFFF',
        ring: '#E8661A',
        chart: { '1': '#E8661A', '2': '#2A2420', '3': '#F6EFE4', '4': '#EFE8DD', '5': '#D9CFBF' }
      },
      boxShadow: {
        'ink-sm': '0 2px 8px -2px rgba(42,36,32,0.08)',
        'ink': '0 12px 32px -12px rgba(42,36,32,0.18)',
        'ink-lg': '0 24px 60px -20px rgba(42,36,32,0.22)',
        'ember': '0 18px 40px -14px rgba(232,102,26,0.35)',
      },
      keyframes: {
        'pricing-pulse': {
          '0%, 100%': { opacity: '0.15', transform: 'translateY(10%) scale(0.95)' },
          '50%': { opacity: '0.35', transform: 'translateY(0) scale(1)' }
        },
        pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
        "scrolling-banner": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        "scrolling-banner-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-50% - var(--gap)/2))" },
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        'marquee-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'rise': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pricing-pulse': 'pricing-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
        "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
        'first': 'moveVertical 30s ease infinite',
        'second': 'moveInCircle 20s reverse infinite',
        'third': 'moveInCircle 40s linear infinite',
        'fourth': 'moveHorizontal 40s ease infinite',
        'fifth': 'moveInCircle 20s ease infinite',
        'shine': 'shine 5s linear infinite',
        'marquee-x': 'marquee-x 40s linear infinite',
        'rise': 'rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grain': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.16 0 0 0 0 0.14 0 0 0 0 0.12 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      letterSpacing: { 'display': '-0.035em' },
    }
  },
  plugins: [heroui(), require("tailwindcss-animate")],
};
