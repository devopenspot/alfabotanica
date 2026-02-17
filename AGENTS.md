# AGENTS.md - Developer Guidelines for Alfa Botánica Website

## Project Overview

This is an Astro + Tailwind CSS website for a botanical products business. The project uses TypeScript with strict mode, Astro components (`.astro` files), and follows a component-based architecture.

---

## Build & Development Commands

### Core Commands
```bash
pnpm dev          # Start development server (astro dev)
pnpm build        # Build for production (astro build)
pnpm preview      # Preview production build (astro preview)
pnpm astro        # Run Astro CLI commands
```

### Project Structure
```
src/
├── components/     # Astro components (.astro files)
├── layouts/        # Page layouts
├── pages/          # Route pages (file-based routing)
├── content.config.ts  # Astro content collections
├── consts.ts       # Site constants
├── translations.ts # i18n translations
└── styles/         # Global CSS
```

---

## Code Style Guidelines

### TypeScript Configuration
- Extends `astro/tsconfigs/strict`
- `strictNullChecks: true` is enabled
- Use `@ts-check` in `.mjs` config files
- Use JSDoc `@type` annotations in `.js` config files

### Astro Components

#### Frontmatter (YAML fence)
- Always include frontmatter with `---` delimiters
- Put imports at the top
- Define `Props` interface for component props
- Destructure props with defaults

```astro
---
import SomeComponent from '../components/SomeComponent.astro';
import type { ImageMetadata } from 'astro';

interface Props {
  title?: string;
  image?: ImageMetadata;
  type?: 'website' | 'article';
}

const { title = 'Default', image, type = 'website' } = Astro.props;
---

<!-- Template code -->
```

### Props & Types
- Always define `Props` interface with optional/required fields
- Use TypeScript types: `string`, `number`, `boolean`, `ImageMetadata`
- Use literal types for enums: `'website' | 'article' | 'product'`
- Use `'in_stock' | 'out_of_stock' | 'preorder'` for availability

### Imports Organization
1. External packages first
2. Astro built-ins (`astro:transitions`, etc.)
3. Local components
4. Local utilities/constants
5. CSS/styles

```astro
---
// External
import type { ImageMetadata } from 'astro';

// Astro built-ins
import { ClientRouter } from "astro:transentions";

// Local
import SomeComponent from '../components/SomeComponent.astro';
import { SITE_TITLE } from '../consts';

// Styles
import '../styles/global.css';
---
```

### Naming Conventions
- **Components**: PascalCase (`Header.astro`, `ProductCard.astro`)
- **Files**: kebab-case (`content.config.ts`, `delivery-policies.astro`)
- **Constants**: SCREAMING_SNAKE_CASE in `consts.ts`
- **Functions**: camelCase
- **Types/Interfaces**: PascalCase

### CSS & Tailwind

#### Tailwind Configuration
- Custom colors defined in `tailwind.config.js`
- Semantic colors use CSS variables with `rgb(var(--color-*) / <alpha-value>)`
- Custom fonts: Lora (serif), Playfair Display
- Extended transitions: `duration-250`, `duration-400`, `timing-smooth`

#### Tailwind Classes
- Use semantic color classes: `text-primary`, `bg-surface`, `border-border`
- Use responsive prefixes: `md:`, `lg:`, `xl:`
- Group related classes together

### SEO & Meta Tags
- Always include: title, description, canonical URL, Open Graph, Twitter Card
- Use structured data (`application/ld+json`) for products/organizations
- Include `ClientRouter` for view transitions

### Error Handling
- Use optional chaining (`?.`) for potentially undefined values
- Provide fallback values in prop destructuring
- Handle missing images with fallbacks

---

## Best Practices

### Component Patterns
1. Keep components focused and single-purpose
2. Use slots for flexible content areas
3. Extract reusable logic to TypeScript modules
4. Use content collections for structured data

### Performance
1. Use `ImageMetadata` type for optimized images
2. Preload critical fonts
3. Use lazy loading for below-fold images
4. Keep components server-rendered by default

### Accessibility
1. Include alt text for all images
2. Use semantic HTML elements
3. Ensure proper heading hierarchy
4. Include lang attribute on html element

---

## Common Patterns

### Conditional Rendering
```astro
{condition && <Component />}
{type === 'product' && <ProductMeta />}
```

### Dynamic Attributes
```astro
<img src={image?.src} alt={title} />
className={isActive ? 'active' : ''}
```

### Loops
```astro
{items.map((item) => (
  <Component item={item} />
))}
```

---

## Testing

This project does not currently have a test framework configured. For future testing:
- Consider adding Vitest for unit tests
- Use Playwright for E2E tests
- Test Astro components with @astrojs/test

---

## Additional Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Astro TypeScript](https://docs.astro.build/en/guides/typescript/)
