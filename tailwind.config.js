const { addDynamicIconSelectors } = require('@iconify/tailwind')
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'serif': ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        'med-cream': '#f5f5dc',
        'med-sage': '#b2ac88',
        'med-terracotta': '#cd853f',
        'med-clay': '#a0522d',
        'brand-green': '#4B5E45',
        'brand-green-dark': '#3d4d38',
        'brand-green-light': '#5c7056',
        // Semantic colors using CSS variables
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        'accent': 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-dark': 'rgb(var(--color-accent-dark) / <alpha-value>)',
        'surface': 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-alt': 'rgb(var(--color-surface-alt) / <alpha-value>)',
        'text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-light': 'rgb(var(--color-text-light) / <alpha-value>)',
        'border': 'rgb(var(--color-border) / <alpha-value>)',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [addDynamicIconSelectors()]
}