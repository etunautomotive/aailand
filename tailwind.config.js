const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/modal.js"
  ],
  theme: {
  	extend: {
  		colors: {
  			dark: {
  				colors: {
  					background: '#F2F2F2'
  				}
  			},
  			light: {
  				colors: {
  					background: '#F2F2F2'
  				}
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
		},
  				animation: {
			'pricing-pulse': 'pricing-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			"scrolling-banner": "scrolling-banner var(--duration) linear infinite",
			"scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
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
