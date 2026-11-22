/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-midnight': '#0B1220',
        'navy-deep': '#111C2E',
        'emerald': '#123B35',
        'mint': '#20C997',
        'mint-light': '#D3F9DF',
        'cloud': '#F7F9FC',
        'slate': '#64748B',
        'main': '#172033',
        'border': '#E2E8F0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
