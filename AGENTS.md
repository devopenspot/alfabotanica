# AGENTS.md - AlfaBotánica Website

## Overview

This is an Astro 5 + TypeScript + Tailwind CSS website for AlfaBotánica, a natural botanical products company. The project uses pnpm as the package manager.

## Build Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro <command>

# Type checking
pnpm astro check
```

### Running a Single Test

This project does not currently have a test framework configured. To add tests, consider installing:
- Vitest for unit testing
- Playwright for e2e testing

## Code Style Guidelines

### General Principles

1. **Always use pnpm** - Never npm or yarn
2. **TypeScript Strict Mode** - The project uses `astro/tsconfigs/strict` with `strictNullChecks: true`
3. **Tailwind CSS** - All styling must use Tailwind utility classes (no custom CSS unless absolutely necessary)
4. **ClientRouter** - Use `<ClientRouter />` from `astro:transitions` (NOT the deprecated `<ViewTransitions />`)

### Component Structure

Astro components should follow this structure:

```astro
---
// Frontmatter: imports, interfaces, props
import { ClientRouter } from 'astro:transitions';
import type { CollectionEntry } from 'astro:content';

interface Props {
  title?: string;
}

const { title = 'Default' } = Astro.props;
---

<!-- Template: HTML with Tailwind classes -->
<main>
  <h1>{title}</h1>
</main>
```

### Props Interface

Always define a `Props` interface for component props:

```typescript
interface Props {
  title?: string;
  description?: string;
  heroImage?: ImageMetadata;
}
```

### Imports

- Use absolute imports from `astro:` for built-in modules
- Use relative imports (`../`, `./`) for local files
- Group imports: first external libraries, then local files

### Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.astro`, `BaseHead.astro`)
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE in `consts.ts`, otherwise camelCase
- **Files**: kebab-case for regular files

### Content Collections

This project uses Astro Content Collections with the glob loader:

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ base: 'src/content/products', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    id: z.number(),
    name: z.string(),
    // ...
  }),
});
```

### View Transitions

- Use `transition:name` for element persistence between pages
- Use `transition:animate` for animation effects
- Wrap pages with `<ClientRouter />` in the head

### Accessibility

- Always include `alt` text for images
- Use semantic HTML elements
- Ensure keyboard navigation works
- Maintain proper color contrast (WCAG guidelines)

### Error Handling

- Use try/catch for any async operations
- Provide fallback images using optional chaining
- Define default values for optional props

### SEO Best Practices

- Use the `BaseHead` component on all pages
- Include canonical URLs
- Use proper Open Graph and Twitter Card meta tags
- Add structured data (JSON-LD) for products

## Project Structure

```
src/
├── components/     # Reusable Astro components
├── content/
│   └── products/   # Product markdown files (content collection)
├── layouts/        # Page layouts
├── pages/          # File-based routing
├── styles/         # Global CSS
├── assets/         # Images and static assets
└── consts.ts       # Site constants
```

## Environment Variables

Create `.env` file for local development (never commit secrets):

```
SITE_URL=https://yoursite.com
```

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
