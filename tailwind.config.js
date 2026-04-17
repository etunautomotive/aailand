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
  			'inter': ['var(--font-inter)', 'sans-serif'],
  			'headline': ['var(--font-space-grotesk)', 'sans-serif'],
  			'body': ['var(--font-inter)', 'sans-serif'],
  			'label': ['var(--font-inter)', 'sans-serif'],
  		},
  		colors: {
  			primary: '#FF7A1F',
  			secondary: '#2A2420',
  			tertiary: '#FFF4E6',
  			neutral: '#FFFFFF',
  			'on-surface': '#2A2420',
  			'on-surface-variant': '#666666',
  			background: '#FFFFFF',
  			foreground: '#2A2420',
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#2A2420'
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#2A2420'
  			},
  			muted: {
  				DEFAULT: '#E8E3DE',
  				foreground: '#2A2420'
  			},
  			accent: {
  				DEFAULT: '#FF7A1F',
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: '#D32F2F',
  				foreground: '#FFFFFF'
  			},
  			border: '#E8E3DE',
  			input: '#FFFFFF',
  			ring: '#FF7A1F',
  			chart: {
  				'1': '#FF7A1F',
  				'2': '#2A2420',
  				'3': '#FFF4E6',
  				'4': '#F5F1ED',
  				'5': '#E8E3DE'
  			}
  		},
  				keyframes: {
			'pricing-pulse': {
				'0%, 100%': {
					opacity: '0.15',
					transform: 'translateY(10%) scale(0.95)'
				},
				'50%': {
					opacity: '0.35',
					transform: 'translateY(0) scale(1)'
				}
			},
			pulse: {
				'0%, 100%': {
					opacity: '1'
				},
				'50%': {
					opacity: '0.5'
				}
			},
			"scrolling-banner": {
				from: {transform: "translateX(0)"},
				to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
			},
			"scrolling-banner-vertical": {
				from: {transform: "translateY(0)"},
				to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
			},
			shine: {
				'0%': { 'background-position': '100%' },
				'100%': { 'background-position': '-100%' },
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
		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [heroui(), require("tailwindcss-animate")],
};
