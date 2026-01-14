/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'med-cream': '#f5f5dc',
        'med-sage': '#b2ac88',
        'med-terracotta': '#cd853f',
        'med-clay': '#a0522d',
      },
    },
  },
  plugins: [],
}