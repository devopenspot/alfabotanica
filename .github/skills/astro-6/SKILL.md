---
name: astro-6-ecommerce-whatsapp
description: Expert skill for refactoring sites into Astro 6 e-commerce platforms with WhatsApp integration.
---

# Astro 6 E-Commerce & WhatsApp Skill

## Refactoring Directives
* **Legacy to Astro:** Convert static HTML/CSS layouts into reusable `.astro` components.
* **Dynamic Routing:** Use `src/pages/products/[slug].astro` for product detail pages.
* **Data Driven:** Transition hard-coded products into a `src/content/products.json` or Astro Content Layer.

## E-Commerce Features (Astro 6)
* **Product Detail Views:** Implement `getStaticPaths()` for ultra-fast SSG product pages.
* **Image Optimization:** Use `astro:assets` for all product thumbnails to ensure 100/100 Lighthouse scores.
* **WhatsApp Integration Logic:**
    * Create a `WhatsAppButton.astro` component.
    * Use a utility function to encode product details into a URL: `https://wa.me/{number}?text={message}`.
    * Auto-populate the message with: "Hi, I'm interested in [Product Name] (Ref: [SKU])."

## UX & Interactivity
* **Server Islands:** Use `<ServerIsland />` for "Related Products" or "Stock Status" to keep the main page fast.
* **View Transitions:** Use `transition:persist` and `transition:animate` for smooth "App-like" navigation between the gallery and details.

## Grok Code Optimization
* Generate clean, SEO-friendly schema markup (`Product` LD+JSON) for every detail page.