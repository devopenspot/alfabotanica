---
description: Astro 6 Refactoring Implementation Plan
---

# Astro 6 Refactoring Implementation Plan for Alfabotánica

## Current State Analysis

### Technology Stack (Current)
- **Astro Version**: 5.16.8 (needs upgrade to 6.x)
- **Node.js**: v20.10.0 (needs upgrade to 22+ for Astro 6)
- **Package Manager**: pnpm (✅ already using)
- **Styling**: Tailwind CSS 3.4.19 (✅ good)
- **Content Collections**: Using glob loader (✅ modern approach)

### Current Components Inventory
1. **Layout Components**
   - `Product.astro` - Product detail layout
   
2. **Page Components**
   - `BaseHead.astro` - Meta tags and SEO
   - `Header.astro` - Navigation with mobile menu
   - `Footer.astro` - Site footer
   - `Hero.astro` - Homepage hero section
   - `Shop.astro` - Product listing section
   - `CallToAction.astro` - CTA section
   
3. **UI Components**
   - `ProductCard.astro` - Product card display
   - `BackButton.astro` - Navigation back button
   - `ShareButton.astro` - Social sharing
   - `WhatsAppButton.astro` - WhatsApp contact
   - `LanguageSwitcher.astro` - Language selection
   - `SoonerNotification.astro` - Notification component

### Current Routing Structure
- `/` - Homepage (index.astro)
- `/about.astro` - About page
- `/delivery-policies.astro` - Delivery policies
- `/products/[...product].astro` - Dynamic product pages
- `/rss.xml.js` - RSS feed

### Issues Identified

#### Critical Issues
1. **No View Transitions**: Missing `<ClientRouter />` component
2. **No CSP**: Security policy not enabled in config
3. **Node.js Version**: v20.10.0 (Astro 6 requires 22+)
4. **Astro Version**: 5.16.8 (needs upgrade to 6.x)
5. **Deprecated transition:persist**: Using old syntax on index.astro line 19

#### UX Principle Gaps
1. **Feedback (Principle 4)**: No loading indicators during navigation
2. **Efficiency (Principle 6)**: No partial hydration strategies (`client:visible`, etc.)
3. **Recovery (Principle 7)**: No custom 404 page visible
4. **Accessibility (Principle 5)**: Missing ARIA labels in several components
5. **Visual Grammar (Principle 9)**: Inconsistent spacing patterns
6. **Empathy (Principle 10)**: No auto-focus on interactive elements

#### Code Quality Issues
1. **Inline Scripts**: Header.astro has inline script (lines 86-131) - should be extracted
2. **Hard-coded Text**: Multiple hard-coded Spanish strings (should use translations)
3. **Mixed Styling**: Some components use hard-coded colors instead of Tailwind tokens
4. **No Error Boundaries**: Missing error handling for failed content loads

## Implementation Plan

### Phase 1: Environment & Dependencies Upgrade
**Goal**: Upgrade to Astro 6 and Node.js 22+

#### Step 1.1: Upgrade Node.js
```bash
# Install Node.js 22+ using nvm or download from nodejs.org
nvm install 22
nvm use 22
node --version  # Should show v22.x.x
```

#### Step 1.2: Upgrade Astro and Dependencies
```bash
# Update package.json dependencies
pnpm add astro@latest @astrojs/tailwind@latest @astrojs/mdx@latest @astrojs/sitemap@latest @astrojs/rss@latest
pnpm install
```

#### Step 1.3: Update Astro Config with CSP
**File**: `astro.config.mjs`
- Add `csp: true` for security
- Configure proper site URL
- Add experimental features if needed

### Phase 2: View Transitions Implementation
**Goal**: Implement modern Astro 6 view transitions with `<ClientRouter />`

#### Step 2.1: Update BaseHead Component
**File**: `src/components/BaseHead.astro`
- Import `ClientRouter` from `astro:transitions`
- Add `<ClientRouter />` in head
- Remove any deprecated ViewTransitions usage

#### Step 2.2: Update Page Transitions
**File**: `src/pages/index.astro`
- Update `transition:persist` syntax to new format
- Add transition animations for main sections

#### Step 2.3: Add Persistent UI Elements
**Files**: `Header.astro`, `Footer.astro`
- Add `transition:persist` to header and footer
- Ensure mobile menu state persists across navigation

### Phase 3: Component Refactoring (UX Principles)
**Goal**: Refactor all components to follow the 12 UX principles

#### Step 3.1: Header Component Refactoring
**File**: `src/components/Header.astro`
- Extract inline script to separate file: `src/scripts/mobile-menu.ts`
- Add proper ARIA labels and roles
- Implement keyboard navigation support
- Add focus management
- Use Tailwind design tokens consistently

#### Step 3.2: Product Components Enhancement
**Files**: `ProductCard.astro`, `Product.astro` layout
- Add loading states with `astro:page-load` events
- Implement `client:visible` for images (lazy loading)
- Add proper heading hierarchy (single h1)
- Improve accessibility with ARIA labels
- Add skeleton loaders for better perceived performance

#### Step 3.3: Interactive Components
**Files**: `BackButton.astro`, `ShareButton.astro`, `WhatsAppButton.astro`
- Add visual feedback on interaction
- Implement proper focus states
- Add loading indicators
- Ensure keyboard accessibility

#### Step 3.4: Shop Component
**File**: `src/components/Shop.astro`
- Add loading state for products
- Implement error boundary for failed loads
- Add empty state handling
- Optimize with `client:visible` for product cards

### Phase 4: Create Missing Components
**Goal**: Add components for complete UX coverage

#### Step 4.1: Create Loading Indicator Component
**File**: `src/components/LoadingIndicator.astro`
- Animated spinner/skeleton
- Triggered by `astro:page-load` events
- Follows brand design system

#### Step 4.2: Create 404 Error Page
**File**: `src/pages/404.astro`
- Clear error message
- Navigation back to home
- Search functionality
- Helpful links

#### Step 4.3: Create Error Boundary Component
**File**: `src/components/ErrorBoundary.astro`
- Catch content loading errors
- Display user-friendly error message
- Provide recovery options

### Phase 5: Accessibility & Performance
**Goal**: Ensure WCAG compliance and optimal performance

#### Step 5.1: Accessibility Audit
- Add missing ARIA labels throughout
- Ensure proper heading hierarchy
- Test keyboard navigation
- Verify color contrast ratios
- Add skip-to-content link

#### Step 5.2: Performance Optimization
- Implement `client:visible` for below-fold content
- Optimize images with proper formats and sizes
- Add proper loading priorities
- Minimize JavaScript bundle size

#### Step 5.3: SEO Enhancement
- Ensure unique meta descriptions per page
- Add structured data (JSON-LD) for products
- Implement proper canonical URLs
- Add breadcrumb navigation

### Phase 6: Design System & Consistency
**Goal**: Create unified design system with Tailwind

#### Step 6.1: Tailwind Config Enhancement
**File**: `tailwind.config.js`
- Define all brand colors as tokens
- Add spacing scale
- Define typography scale
- Add animation utilities
- Create component classes

#### Step 6.2: Global Styles
**File**: `src/styles/global.css`
- Define CSS custom properties
- Add smooth scroll behavior
- Define focus-visible styles
- Add transition utilities

#### Step 6.3: Component Standardization
- Replace all hard-coded colors with Tailwind tokens
- Standardize spacing using Tailwind scale
- Ensure consistent button styles
- Unify card components

### Phase 7: Script Extraction & Organization
**Goal**: Move inline scripts to separate files

#### Step 7.1: Extract Mobile Menu Script
**File**: `src/scripts/mobile-menu.ts`
- Extract from Header.astro
- Add TypeScript types
- Implement proper event handling
- Add error handling

#### Step 7.2: Extract Language Switcher Logic
**File**: `src/scripts/language-switcher.ts`
- Centralize language switching
- Add persistence (localStorage)
- Implement smooth transitions

#### Step 7.3: Page Load Events
**File**: `src/scripts/page-transitions.ts`
- Handle `astro:page-load` events
- Trigger loading indicators
- Manage focus on navigation
- Re-initialize components

### Phase 8: Testing & Validation
**Goal**: Ensure everything works correctly

#### Step 8.1: Development Testing
```bash
pnpm run dev
# Test all pages and interactions
# Verify view transitions work
# Check mobile responsiveness
```

#### Step 8.2: Production Build Testing
```bash
pnpm run build
pnpm run preview
# Test production build with workerd runtime
# Verify CSP doesn't block functionality
# Check performance metrics
```

#### Step 8.3: Accessibility Testing
- Run Lighthouse audit
- Test with screen reader
- Verify keyboard navigation
- Check color contrast

### Phase 9: Documentation
**Goal**: Document the new architecture

#### Step 9.1: Update README
- Document Astro 6 features used
- Add setup instructions
- List UX principles implemented
- Add troubleshooting guide

#### Step 9.2: Component Documentation
- Document each component's props
- Add usage examples
- Document accessibility features
- Add performance notes

## UX Principles Mapping

### How Each Principle is Addressed

1. **Clarity**: Clear heading hierarchy, simple language in translations
2. **Consistency**: Tailwind design tokens, standardized components
3. **Hierarchy**: Proper font weights and sizes in Tailwind config
4. **Feedback**: Loading indicators, transition animations, hover states
5. **Accessibility**: ARIA labels, keyboard nav, WCAG compliance
6. **Efficiency**: Partial hydration with `client:visible`, optimized assets
7. **Recovery**: Custom 404 page, error boundaries, helpful error messages
8. **User Control**: Back buttons, clear navigation, undo capabilities
9. **Visual Grammar**: Consistent spacing, alignment, visual relationships
10. **Empathy**: Auto-focus, loading states, helpful empty states
11. **Simplicity**: Minimal clicks, clear CTAs, streamlined flows
12. **Iteration**: A/B testing hooks, analytics integration points

## Success Criteria

### Technical
- ✅ Astro 6.x running on Node.js 22+
- ✅ CSP enabled and functional
- ✅ View Transitions with ClientRouter working
- ✅ All components use Tailwind tokens
- ✅ No inline scripts
- ✅ Production build successful

### UX
- ✅ All 12 UX principles implemented
- ✅ WCAG AA compliance
- ✅ Lighthouse score 90+ on all metrics
- ✅ Smooth page transitions
- ✅ Clear error states
- ✅ Responsive on all devices

### Performance
- ✅ First Contentful Paint < 1.5s
- ✅ Time to Interactive < 3s
- ✅ Cumulative Layout Shift < 0.1
- ✅ Optimized images and assets

## Timeline Estimate

- **Phase 1**: 1-2 hours (Environment setup)
- **Phase 2**: 2-3 hours (View Transitions)
- **Phase 3**: 4-6 hours (Component refactoring)
- **Phase 4**: 2-3 hours (New components)
- **Phase 5**: 3-4 hours (Accessibility & Performance)
- **Phase 6**: 2-3 hours (Design system)
- **Phase 7**: 2-3 hours (Script extraction)
- **Phase 8**: 2-3 hours (Testing)
- **Phase 9**: 1-2 hours (Documentation)

**Total**: 19-29 hours

## Risk Mitigation

### Potential Risks
1. **Node.js upgrade breaks existing tooling**: Test thoroughly in dev first
2. **CSP blocks existing functionality**: Audit all scripts and external resources
3. **View Transitions cause layout shifts**: Test all page combinations
4. **Breaking changes in Astro 6**: Review migration guide carefully

### Mitigation Strategies
1. Create feature branch for refactoring
2. Test incrementally after each phase
3. Keep backup of working version
4. Document all changes
5. Use git commits for easy rollback

## Next Steps

1. Review and approve this plan
2. Create feature branch: `git checkout -b feature/astro6-refactor`
3. Begin Phase 1: Environment upgrade
4. Proceed through phases sequentially
5. Test thoroughly at each phase
6. Merge to main when complete

---

**Created**: 2026-02-01
**Last Updated**: 2026-02-01
**Status**: Ready for Implementation
