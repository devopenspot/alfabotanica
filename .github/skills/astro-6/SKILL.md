---
name: astro-6-ecommerce-whatsapp
description: Expert skill for develop and refactoring sites with Astro 6.
---

## 1. Project Context
**Goal:** Refactor an existing static website into a modern, component-based Astro architecture.
**Core Objective:** Sell products via WhatsApp integration.
**Constraint:** Strict adherence to existing visual design (colors, layout, typography, images). No re-designing; only re-engineering for performance, maintainability, and UX best practices.

## 2. Tech Stack & Tooling
* **Framework:** Astro (Latest)
* **Language:** TypeScript (Strict mode)
* **Styling:** Scoped CSS (native Astro `<style>`) or Tailwind CSS (only if currently used, otherwise stick to standard CSS to match existing design fidelity).
* **Package Manager:** **pnpm** (Strict enforcement).
* **Editor:** VS Code.

## 3. Development Rules & Best Practices

### A. Componentization Strategy
* **Atomic Approach:** Break the existing monolithic HTML into reusable `.astro` components.
    * *Atoms:* Buttons (specifically the WhatsApp CTA), input fields, standard badges.
    * *Molecules:* Product Cards (Image + Title + Price + WhatsApp Button).
    * *Organisms:* Header, Footer, Product Grid, Hero Section.
* **Props Interface:** Define explicit `interface Props` for every component using TypeScript to ensure data consistency (e.g., `title`, `price`, `image`, `description`).
* **Slots:** Use Astro `<slot />` for flexible content areas in layout components (e.g., `MainLayout.astro`).

### B. Design Fidelity & UX Improvements
* **Visuals:** Do not alter the color palette or layout structure. Use the existing hex/rgb codes exactly.
* **Images:** Optimize assets using Astro's `<Image />` component for automatic format conversion (WebP) and lazy loading to improve Core Web Vitals.
* **Accessibility (A11y):** Ensure all images have descriptive `alt` text. Ensure contrast ratios on the WhatsApp button meet WCAG standards. Add `aria-label` to icon-only buttons.
* **Performance:** Keep JavaScript zero-bundle by default. Only use `client:*` directives (e.g., `client:visible`) if complex interactivity (like a dynamic cart or carousel) is absolutely required.

### C. WhatsApp Integration Logic
* **Message Formatting:** Create a utility function `getWhatsAppLink(phone, message)` to URL-encode messages properly.
* **Product Context:** The message sent to WhatsApp must automatically include the specific Product Name and ID/SKU to streamline the sales process for the merchant.
    * *Example:* "Hello, I am interested in buying [Product Name]..."

### D. Coding Standards
* **DRY (Don't Repeat Yourself):** Extract common logic (like formatting currency) into `utils/`.
* **Type Safety:** Avoid `any`. Use distinct types for `Product`, `CartItem`, etc.
* **pnpm Only:**
    * Install: `pnpm add <package>`
    * Run: `pnpm dev`
    * Build: `pnpm run build`

## 4. VS Code Setup & Recommended Extensions

### Recommended Extensions (`.vscode/extensions.json`)
1.  **Astro** (`astro-build.astro-vscode`) - Syntax highlighting and tooling.
2.  **Tailwind CSS IntelliSense** (if using Tailwind).