# KRISHNA Design System - Implementation Guide

## Context and Goals
Create a comprehensive implementation-ready design system for KRISHNA that delivers the documentation site experience through structured, accessible, and token-driven UI guidance optimized for developer teams.

## Design Tokens and Foundations

### Typography Scale
- `font.family.primary=Space Grotesk`
- `font.family.stack=Space Grotesk, sans-serif`
- `font.size.base=16px`
- `font.weight.base=400`
- `font.lineHeight.base=24px`

### Semantic Typography Scale
- `font.size.xs=12px` (helper text)
- `font.size.sm=12.8px` (body text smaller)
- `font.size.md=13.6px` (body text)
- `font.size.lg=14px` (labels)
- `font.size.xl=14.4px` (small headings)
- `font.size.2xl=15.2px` (subsection headers)
- `font.size.3xl=16px` (main headings)
- `font.size.4xl=17.6px` (section titles)

### Color Semantics
- `color.border.default=#09090b`
- `color.text.secondary=#d2e823` (accent)
- `color.surface.raised=#ffffff`
- `color.text.inverse=#475569`
- `color.surface.base=#000000`
- `color.surface.muted=#f8f4e8`

### Spacing Scale
- `space.1=6.4px`
- `space.2=8px`
- `space.3=12px`
- `space.4=12.8px`
- `space.5=16px`
- `space.6=20px`
- `space.7=24px`
- `space.8=32px`

### Radius and Shadow
- `radius.xs=12px`
- `shadow.1=rgb(9, 9, 11) 8px 8px 0px 0px`
- `shadow.2=rgb(9, 9, 11) 4px 4px 0px 0px`
- `shadow.3=rgb(9, 9, 11) 2px 2px 0px 0px`

### Motion
- `motion.duration.instant=100ms`
- `motion.duration.fast=200ms`

## Component-Level Rules

### Navigation Component
**Anatomy:**
```html
<nav class="nav-links">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Projects</a>
</nav>
```

**States:**
- **Default:** color: var(--color-text-primary); font-size: var(--font-size-xs); font-weight: 500;
- **Hover/Focus-visible:** color: var(--color-text-secondary);
- **Active:** underline: 2px solid var(--color-text-secondary);
- **Disabled:** color: var(--color-text-tertiary); cursor: not-allowed;
- **Loading:** opacity: 0.7; cursor: wait;

**Interactions:**
- Keyboard: TAB navigation support with visible focus indicators
- Pointer: hover states with smooth color transition
- Touch: minimum tap target of 44px

**Responsive Behavior:**
- Desktop (>768px): Horizontal navigation with gap var(--space-4)
- Mobile (≤768px): Overlay navigation with slide animation, hidden by default

### Button Component
**Anatomy:**
```html
<button class="btn btn-primary">Action</button>
<button class="btn btn-secondary">Cancel</button>
```

**States:**
- **Default:** background: var(--color-text-secondary); color: var(--color-surface-base); border: 2px solid var(--color-text-secondary); box-shadow: var(--shadow-2);
- **Hover/Focus-visible:** background: var(--color-surface-base); color: var(--color-text-secondary); box-shadow: none; transform: translate(2px, 2px);
- **Active:** transform: translate(3px, 3px);
- **Disabled:** opacity: 0.5; cursor: not-allowed; box-shadow: none;
- **Loading:** cursor: wait; position: relative;

**Typography:** font-size: var(--font-size-sm); font-weight: 600;
**Spacing:** padding: var(--space-1) var(--space-3);
**Radius:** border-radius: var(--radius-xs);

### Card Component
**Anatomy:**
```html
<div class="project-card">
  <h3 class="project-title">Title</h3>
  <p class="project-description">Description</p>
</div>
```

**States:**
- **Default:** background: var(--color-surface-strong); border: 2px solid var(--color-border-default); box-shadow: var(--shadow-2);
- **Hover/Focus-within:** transform: translate(2px, 2px); box-shadow: none;
- **Disabled:** opacity: 0.5; cursor: not-allowed;
- **Loading:** cursor: wait; opacity: 0.8;
- **Error:** border-color: #ef4444; background: rgba(239, 68, 68, 0.1);

**Typography:**
- Title: font-size: var(--font-size-lg); font-weight: 700;
- Description: font-size: var(--font-size-xs); color: var(--color-text-primary);

**Spacing:** padding: var(--space-3); gap: var(--space-3);
**Radius:** border-radius: var(--radius-xs);

### Hero Section
**Anatomy:**
```html
<section class="hero">
  <h1 class="hero-title">Title</h1>
  <p class="hero-tagline">Tagline</p>
  <p class="hero-description">Description</p>
  <div class="hero-actions">
    <a href="#" class="btn btn-primary">Action</a>
    <a href="#" class="btn btn-secondary">Secondary</a>
  </div>
</section>
```

**Typography:**
- Title: font-size: var(--font-size-4xl); font-weight: 700;
- Tagline: font-size: var(--font-size-lg); font-weight: 600;
- Description: font-size: var(--font-size-md); color: var(--color-text-secondary);

**Spacing:**
- Top padding: var(--space-7); bottom padding: var(--space-7);
- Internal gaps: var(--space-3) to var(--space-4);

**Links:**
- Font-size: var(--font-size-xs);
- Gap: var(--space-3);
- Hover: color: var(--color-text-secondary); transform: translateY(-2px);

## Accessibility Requirements and Testable Acceptance Criteria

### Contrast Constraints (WCAG 2.2 AA)
- **Must:** All interactive text must meet 4.5:1 contrast ratio
- **Must:** All non-text UI elements must meet 3:1 contrast ratio
- **Pass:** Use automated testing to verify contrast ratios
- **Fail:** Any UI element with insufficient contrast must be fixed

### Focus Management
- **Must:** Visible focus indicators on all interactive elements
- **Must:** Focus indicators: 2px solid var(--color-text-secondary); outline-offset: 2px
- **Pass:** TAB key navigation allows reaching all interactive elements
- **Fail:** Keyboard users cannot navigate without visible focus

### Color Interaction
- **Must:** No color-only interactions
- **Pass:** Interactive elements include hover, focus, and active states
- **Fail:** No success states depending solely on color changes

### Responsive Focus
- **Must:** Focus remains visible on mobile devices
- **Pass:** Touch targets minimum 44px
- **Fail:** Focus indicators clipped or hidden on smaller screens

## Content and Tone Standards

### Writing Tone
Concise, confident, implementation-focused.

### Content Guidelines
- **Must:** Use clear, descriptive headings
- **Should:** Include context-dependent examples
- **Must:** Maintain consistent terminology across components
- **Should:** Provide migration notes for deprecated patterns

### Examples
```javascript
// Do
getUserProfile(userId, callback) { ... }

// Don't
gsUsrProf(usrID, cb) { ... }
```

## Anti-patterns and Prohibitions

### Prohibited Implementations
- **Do not:** Use raw hex values in component guidance
- **Do not:** Introduce one-off spacing or typography exceptions
- **Do not:** Use ambiguous labels or non-descriptive actions
- **Do not:** Ship component guidance without explicit state rules
- **Do not:** Allow low-contrast text or hidden focus indicators
- **Do not:** Create components without keyboard navigation

### Anti-patterns
```css
/* Anti-pattern: Custom radius */
border-radius: 8px !important;

/* Anti-pattern: Inconsistent spacing */
.margin-top: 10px;
.margin-bottom: 8px;
```

## QA Checklist

### Design Tokens
- [ ] All semantic tokens properly documented
- [ ] Typography scale tested across responsive breakpoints
- [ ] Color contrast ratios verified (WCAG 2.2 AA)
- [ ] Spacing scale consistently applied

### Component States
- [ ] Default, hover, focus-visible, active, disabled, loading, error states defined
- [ ] All interactive components documented
- [ ] Component anatomy clearly structured

### Accessibility
- [ ] Focus indicators present on all interactive elements
- [ ] Keyboard navigation validated
- [ ] Screen reader compatibility assessed
- [ ] Reduced motion preferences supported

### Responsiveness
- [ ] Mobile (<768px): Navigation overlay, appropriate typographic scale
- [ ] Tablet (768-1024px): Two-column layouts when applicable
- [ ] Desktop (>1024px): Three-column layouts for maximum content
- [ ] Touch targets minimum 44px

### Implementation
- [ ] Semantic CSS custom properties used
- [ ] No hardcoded pixel values
- [ ] CSS validation passing (no duplicate rules)
- [ ] JavaScript event listeners properly attached
- [ ] ARIA labels descriptive and non-ambiguous
- [ ] Animation respects reduced motion
- [ ] Component spacing follows token scale
- [ ] Typography hierarchy maintained throughout
- [ ] Component states tested thoroughly
- [ ] Performance optimized with minimal layout shifts