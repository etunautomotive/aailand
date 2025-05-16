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
            background: "#F2F2F2",
          },
        },
        light: {
          colors: {
            background: "#F2F2F2",
          },
        },
      },
      keyframes: {
        "pricing-pulse": {
          "0%, 100%": {
            opacity: "0.15",
            transform: "translateY(10%) scale(0.95)",
          },
          "50%": {
            opacity: "0.35",
            transform: "translateY(0) scale(1)",
          },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "pricing-pulse":
          "pricing-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [heroui()],
};
