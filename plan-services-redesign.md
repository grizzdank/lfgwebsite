# Services Page Redesign Plan
*Inspired by Pretorin's clean, minimal design approach*

## Design Decisions (Confirmed)

| Decision | Choice |
|----------|--------|
| Image layout | **Consistent** - always text-left, image-right |
| Pricing display | **Flip card** - click image to reveal pricing on back |
| Service badges | **Remove** - cleaner without "Service 01" pills |
| Background colors | **Keep** - alternating white/gray for section separation |

---

## Key Changes

### 1. Hero Section (Keep, Refine)
- ✅ Keep the existing hero - it's already clean and effective
- Minor tweak: Reduce height from `min-h-[70vh]` to `min-h-[60vh]` for faster content access

### 2. Services Sections (Major Redesign)

**Pretorin-Inspired Changes:**

| Element | Current | Proposed |
|---------|---------|----------|
| Layout | Alternating 2-col grid | Consistent text-left, image-right |
| Pricing | Inline cards below image | **Flip card** - pricing on back of image |
| Badges | "Service 01" numbered pills | Remove entirely |
| Icon boxes | 14x14 colored icon squares | Simpler inline icon with title |
| Backgrounds | Alternating white/gray | **Keep** |
| Spacing | `py-24` between sections | `py-32` for more breathing room |

**New Service Card Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [Icon] SERVICE TITLE                    ┌──────────────┐  │
│   "Tagline here"                          │              │  │
│                                           │   Image      │  │
│   Description paragraph...                │  (front)     │  │
│                                           │              │  │
│   • Capability 1                          │ Click to     │  │
│   • Capability 2                          │ flip →       │  │
│   • Capability 3                          └──────────────┘  │
│   • Capability 4                                   ↓        │
│                                           ┌──────────────┐  │
│   [Discuss This Service →]                │  Pricing     │  │
│                                           │  Tiers       │  │
│                                           │  (back)      │  │
│                                           └──────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 3. Process Section (Simplify)
- Keep the 4-step process but simplify visual treatment
- Remove the connecting line animation (feels busy)
- Use simpler numbered circles instead of large "01" text

### 4. CTA Section (Keep)
- Current CTA section is already clean - keep as is

---

## File Changes Required

### Primary File:
`src/components/page/ServicesPageClientContent.tsx`

### Data File:
`src/data/services.ts` - Keep as-is (pricing data used for flip card back)

---

## Implementation Steps

### Step 1: Create Flip Card Component
Create a `FlipCard` component with CSS 3D transforms:
```tsx
// Flip card structure
<div className="flip-card" onClick={() => setFlipped(!flipped)}>
  <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
    <div className="flip-card-front">
      <Image ... />
      <span className="hint">Click to see pricing</span>
    </div>
    <div className="flip-card-back">
      {/* Pricing tiers */}
    </div>
  </div>
</div>
```

CSS needed (can use Tailwind + custom styles):
```css
.flip-card { perspective: 1000px; }
.flip-card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.flip-card-inner.flipped { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { backface-visibility: hidden; }
.flip-card-back { transform: rotateY(180deg); }
```

### Step 2: Simplify Service Layout
- Remove `isEven` alternating logic
- Set consistent order: text (order-1), image (order-2) for all
- Remove the numbered badge pill (`Service 01` etc.)
- Simplify icon - inline with title instead of boxed

### Step 3: Restructure Image Section
- Replace static image with FlipCard component
- Front: Service image with subtle "Click for pricing" hint
- Back: Pricing tiers (reuse existing tier data/styling)

### Step 4: Adjust Spacing & Polish
- Increase section padding from `py-24` to `py-32`
- Simplify process section (smaller step numbers)
- Test flip animation on mobile (may need touch handling)

---

## Technical Notes

**Flip Card State:** Use React `useState` per service to track flipped state

**Mobile Considerations:**
- Touch events work naturally with onClick
- Consider adding a "tap to flip" hint on mobile
- Back side needs to fit pricing tiers - may need scrollable area

**Animation:** Framer Motion not required - CSS transforms are performant and sufficient

---

## Visual Comparison

### Before (Current)
```
┌────────────────────────────────┐
│ Hero                           │
├────────────────────────────────┤
│ [Icon][Badge] │ Image          │ ← White bg
│ Title         │ Pricing Tier 1 │
│ Tagline       │ Pricing Tier 2 │
│ Description   │                │
│ Highlights    │                │
│ [Link]        │                │
├────────────────────────────────┤
│ Image         │ [Icon][Badge]  │ ← Gray bg
│               │ Title          │
│               │ ...            │
└────────────────────────────────┘
```

### After (Proposed)
```
┌────────────────────────────────┐
│ Hero                           │
├────────────────────────────────┤
│                                │ ← White bg
│ [Icon] Title      │ Image      │
│ Tagline           │            │
│                   │            │
│ Description       │            │
│                   │            │
│ • Capability 1    │            │
│ • Capability 2    │            │
│ • Capability 3    │            │
│ • Capability 4    │            │
│                   │            │
│ [Discuss Service →]            │
│                                │
├────────────────────────────────┤
│                                │ ← Gray bg (kept!)
│ [Icon] Title      │ Image      │
│ ...               │            │
└────────────────────────────────┘
```

---

## Verification

After implementation:
1. `npm run dev` - visually inspect the page
2. Test flip card interaction (click image → see pricing → click again)
3. Check mobile responsiveness at 375px, 768px, 1024px
4. Verify all links still work
5. Confirm scroll animations still trigger smoothly
6. Compare side-by-side with Pretorin for design alignment
