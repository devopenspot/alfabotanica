/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
      },
      colors: {
        'med-cream': '#f5f5dc',
        'med-sage': '#b2ac88',
        'med-terracotta': '#cd853f',
        'med-clay': '#a0522d',
        'brand-green': '#4B5E45',
      },
    },
  },
  plugins: [],
}