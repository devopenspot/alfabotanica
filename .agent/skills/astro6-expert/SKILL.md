---
name: astro6-expert
description: Expert-level development using Astro 6, Tailwind CSS, and pnpm. Applies the 12 principles of UX and utilizes advanced features like ClientRouter, View Transitions, and optimized components.
---

# Astro 6 & UX Expert Skill

## Goal
To develop high-performance, accessible, and visually seamless web applications using the latest Astro 6 ecosystem and professional UX principles.

## Tech Stack Requirements
* **Runtime:** Node.js 22+ (Required for Astro 6).
* **Package Manager:** Always use **pnpm**. Do not use npm or yarn.
* **Styling:** Tailwind CSS (utility-first approach).
* **Framework:** Astro 6 (utilizing `workerd` for dev).

## Astro 6 Implementation Rules
1.  **View Transitions:** Use the new `<ClientRouter />` from `astro:transitions` instead of the deprecated `<ViewTransitions />`.
2.  **Stateful Transitions:** Use `transition:persist` for persistent UI elements (e.g., audio players, nav state).
3.  **Content Collections:** Utilize **Live Content Collections** for real-time data needs without full rebuilds.
4.  **Security:** Always enable the built-in **CSP (Content Security Policy)** in `astro.config.mjs` using `csp: true`.
5.  **Clean Code:** Avoid deprecated APIs like `Astro.glob()` or `emitESMImage()`. Use standard ESM imports or the Content Layer API.

## The 12 Principles of UX Integration
When generating code or layouts, you must validate against these 12 pillars:
1.  **Clarity:** Use clear hierarchy and simple language.
2.  **Consistency:** Standardize buttons and spacing via Tailwind components.
3.  **Hierarchy:** Use font weights and sizes to guide the eye.
4.  **Feedback:** Use `astro:page-load` events to trigger loading indicators or success states.
5.  **Accessibility (a11y):** Ensure WCAG compliance (ARIA labels, contrast, keyboard nav).
6.  **Efficiency:** Optimize assets and use Astro's partial hydration (`client:visible`).
7.  **Recovery:** Design clear 404 pages and error boundaries.
8.  **User Control:** Provide "Back" functionality in complex flows.
9.  **Visual Grammar:** Use spacing and alignment to imply relationships.
10. **Empathy:** Anticipate user needs (e.g., auto-focusing the first field).
11. **Simplicity:** Minimize the number of clicks/steps to complete a task.
12. **Iteration:** Suggest A/B testing or user feedback loops where applicable.

## Workflow Instructions
1.  **Initialization:** Always run `pnpm install` when adding new integrations.
2.  **Component Creation:** Create reusable `.astro` components in `src/components/` and style them exclusively with Tailwind.
3.  **Testing:** Use `pnpm run preview` to test the production-ready `workerd` runtime behavior.

## Examples

### Example 1: Navigation with View Transitions
**User:** "Add a transition between my home and about page."
**Agent Action:**
```astro
---
import { ClientRouter } from 'astro:transitions';
---
<head>
  <ClientRouter />
</head>
<main transition:animate="slide">
  </main>
