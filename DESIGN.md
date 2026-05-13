---
name: Malgudi Mylari
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#564240'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8a716f'
  outline-variant: '#ddc0bd'
  surface-tint: '#a33b38'
  primary: '#5c050b'
  on-primary: '#ffffff'
  primary-container: '#7b1e1e'
  on-primary-container: '#ff8c85'
  inverse-primary: '#ffb3ad'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2d2a25'
  on-tertiary: '#ffffff'
  tertiary-container: '#43403b'
  on-tertiary-container: '#b1aca5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#832423'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e8e1da'
  tertiary-fixed-dim: '#ccc6be'
  on-tertiary-fixed: '#1e1b17'
  on-tertiary-fixed-variant: '#4a4641'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 80px
---

## Brand & Style

The design system embodies "Heritage Modernism"—a marriage of Mysore’s royal legacy with the streamlined expectations of a contemporary premium dining audience. The brand personality is grounded, hospitable, and sophisticated. 

The aesthetic is a refined mix of **Minimalism** and **Tactile** design. It prioritizes expansive whitespace (breathability) to allow high-fidelity photography to act as the primary visual hook. The interface should feel like a physical menu in a high-end establishment: tactile textures, gold accents, and a rhythmic use of traditional motifs like Kolam patterns used as subtle background watermarks or section dividers. The emotional goal is to evoke a sense of "Modern Nostalgia"—familiar South Indian roots presented through a lens of global luxury.

## Colors

The palette is anchored by **Deep Maroon (#7B1E1E)**, used strategically for primary actions and brand identifiers to convey passion and richness. **Warm Gold (#D4AF37)** is employed as an accent for highlights, iconography, and decorative borders, symbolizing the "Mylari" royal heritage.

The interface primarily utilizes **Cream/Off-white (#FFF8F0)** as the canvas color to provide a warmer, more appetizing feel than pure white. **Dark Charcoal (#1F1F1F)** is reserved for high-contrast typography and deep structural elements. Use maroon for interactive states and gold for celebratory or "premium" indicators (like chef's specials or member statuses).

## Typography

This design system uses a high-contrast typographic pairing. **Libre Caslon Text** provides an editorial, literary quality to headings, echoing the storytelling nature of the Malgudi inspiration. It should be used for all narrative headings and dish names.

**Be Vietnam Pro** is used for all functional text. It was selected for its contemporary warmth and exceptional legibility at small sizes, crucial for menu descriptions and nutritional information. For labels and buttons, use the semi-bold weight with increased letter-spacing to maintain a premium, organized feel.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to preserve the editorial "lookbook" feel, transitioning to a fluid single-column flow on mobile. We employ a generous 8px base spacing unit to ensure a "breathable" layout that prevents the UI from feeling cluttered.

- **Desktop (1280px+):** 12-column grid with 24px gutters. Use wide margins (64px) to frame the content like a premium magazine.
- **Tablet (768px - 1024px):** 8-column grid with 20px margins.
- **Mobile (<768px):** 4-column fluid grid.

Section vertical spacing is intentionally large (80px+) to separate different culinary categories and storytelling blocks, allowing the photography to "own" the viewport.

## Elevation & Depth

Depth is achieved through **Ambient Shadows** and **Tonal Layering**. Surfaces do not use harsh black shadows; instead, shadows are tinted with the Primary Maroon or Dark Charcoal at very low opacities (4-8%) to create a soft, "lifted" effect.

Tiered depth levels:
1.  **Base:** Cream (#FFF8F0) background.
2.  **Surface:** Pure white (#FFFFFF) cards for food items, featuring a 2xl corner radius and a soft, wide-spread shadow.
3.  **Overlay:** Modal components and floating action buttons use a subtle backdrop blur (10px) over a semi-transparent cream tint to maintain context while focusing user attention.

## Shapes

The shape language is defined by a **2xl roundedness** (1.5rem / 24px) for major components. This softness counteracts the traditional "stiffness" of heritage brands, making the brand feel modern and approachable. 

- **Cards & Primary Containers:** 24px (rounded-xl/2xl equivalent).
- **Buttons & Input Fields:** 12px for a slightly more structured but still soft appearance.
- **Images:** Food photography should always use the 24px radius or be contained within circular "porthole" frames for a signature Mysore-architectural look.

## Components

### Buttons
- **Primary:** Solid Deep Maroon (#7B1E1E) with White text. High-padding (16px 32px), 12px border radius.
- **Secondary:** Outlined in Gold (#D4AF37) with Gold text. Used for secondary actions like "View Gallery."

### Cards (Menu Items)
Cards are the heart of the system. They feature a soft elevation, 24px corner radius, and a subtle 1px border in a pale gold tint. The dish image should be top-aligned and bleed to the edges or be inset with a generous margin.

### Inputs & Selection
Input fields use a light cream background with a 1px Maroon bottom-border (minimalist style) or a full 12px rounded stroke. Radio buttons for dietary preferences (Veg/Non-Veg) should use traditional Indian iconography (Green circle/Red triangle) refined with modern styling.

### Signature Components
- **The Story Scroller:** A horizontal scroll component for high-res images of the Mysore heritage and kitchen process.
- **Kolam Dividers:** SVG-based section breaks that use the Gold (#D4AF37) color in a fine-line weight to separate major content blocks.
- **Floating Cart/Reservation:** A soft-shadowed, pill-shaped component that persists at the bottom of mobile screens for high conversion.