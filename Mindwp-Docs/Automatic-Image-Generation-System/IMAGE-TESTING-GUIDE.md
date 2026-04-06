# MindWP Image System — Testing Guide

STATUS: ACTIVE
Last Updated: 2026-04-06

---

## Quick Test Commands

All commands use **hardcoded default slugs** so you can run them immediately. To test a different slug, add `--slug your-slug` to any command.

### Generate Featured Images (per domain)

```bash
# Blog (default: lead-response-time-for-service-businesses)
npx tsx scripts/generators/image-generate.ts --mode test --domain blog

# Case Study (default: appointment-business-booking-automation)
npx tsx scripts/generators/image-generate.ts --mode test --domain case-studies

# Resource (default: authority-signals-for-local-search)
npx tsx scripts/generators/image-generate.ts --mode test --domain resources
```

### Force Regeneration

```bash
# Force: bypasses cache, re-downloads and re-generates
npx tsx scripts/generators/image-generate.ts --mode test --domain blog --force

# Regenerate: clears index, re-runs pipeline (may pick same image from search)
npx tsx scripts/generators/image-generate.ts --mode test --regenerate

# Fresh: clears index AND blocks the previously used image (forces a different image)
npx tsx scripts/generators/image-generate.ts --mode test --fresh

# Works with any domain:
npx tsx scripts/generators/image-generate.ts --mode test --domain case-studies --regenerate
npx tsx scripts/generators/image-generate.ts --mode test --domain resources --fresh
```

### Bulk Generation

```bash
# Generate all missing images for a domain
npx tsx scripts/generators/image-generate.ts --mode bulk --domain blog
npx tsx scripts/generators/image-generate.ts --mode bulk --domain case-studies
npx tsx scripts/generators/image-generate.ts --mode bulk --domain resources
```

### Inspect Generated Images

Runs a visual QA check on all generated images — reports brightness, overlay strength, WCAG AA contrast ratio.

```bash
npx tsx scripts/analyzers/image-inspect.ts
```

---

## What to Check Visually

After generating an image, open both files from `public/images/<domain>/<slug>/` and verify:

### 1. Overlay

- **Bright images** → strong dark overlay — image should be clearly muted behind text
- **Dark images** → lighter overlay — just enough to ensure text stands out
- **Mid-range images** → scaled proportionally between min and max
- Overlay has visible gradient zones: dark (text area) → mid (transition) → light (image area)

### 2. Title Text

- White text, left-aligned within center-balanced text block
- Maximum 2 lines, font size auto-sized (24-52px base, then scaled by variant: 1.38×–1.68×)
- Weight 900, tight letter-spacing (-0.6 to -0.8)
- Text shadow for depth (SVG filter `tshadow`)
- Must NOT overflow left edge (80px safety clamp enforced)

### 3. Text Block Position

- Text block should appear center-left, NOT hard left
- `textX = TEXT_BLOCK_X - (textBlockWidth / 2)` centers the block, not the text
- Badge/label/title all aligned to the same X position
- Accent bar positioned 28px left of text block

### 4. Layout Variants

- L1 (Editorial): 38% × 52% position, 720px wide, moderate font — clean and balanced
- L2 (Focused): 42% × 55% position, 820px wide, large font — high CTR
- L3 (Impact): 35% × 58% position, 860px wide, largest font — bold and aggressive

### 5. Contrast

- Run `npx tsx scripts/analyzers/image-inspect.ts` to check WCAG AA compliance
- **Pass** = contrast ratio ≥ 4.5:1 (white text on overlay background)
- Pipeline logs contrast ratio for every generated image
- If any image fails, regenerate it with `--force`

### 6. Composition

- Subject should be on right side of frame (attention-aware cropping)
- Text area (left) should be relatively clean/blurred
- Background has visible depth blur (sigma 5-8) with reduced brightness (0.78) and saturation (0.9)
- Edge vignette darkens corners and edges (attention containment)
- Film grain visible at close inspection (3% opacity)

### 7. Design Elements

- Accent bar: vertical gradient (accentLight → accentDark) with glow
- Badge (if present): pill shape with category text centered
- Label: keyword-derived uppercase text above title
- Icon (if present): 16×16 before label text
- Variant shape: subtle content-type visual on right side

---

## Output Locations

| Domain | Clean Path | Overlay Path |
|--------|-----------|-------------|
| Blog | `public/images/blog/<slug>/featured-clean.webp` | `public/images/blog/<slug>/featured-overlay.webp` |
| Case Studies | `public/images/case-studies/<slug>/featured-clean.webp` | `public/images/case-studies/<slug>/featured-overlay.webp` |
| Resources | `public/images/resources/<slug>/featured-clean.webp` | `public/images/resources/<slug>/featured-overlay.webp` |
| Industries | `public/images/industries/<slug>/featured-clean.webp` | `public/images/industries/<slug>/featured-overlay.webp` |

---

## Default Test Slugs

These are hardcoded in `scripts/generators/image-generate.ts` under `DEFAULT_TEST_SLUGS`:

| Domain | Slug |
|--------|------|
| blog | `lead-response-time-for-service-businesses` |
| case-studies | `appointment-business-booking-automation` |
| resources | `authority-signals-for-local-search` |
| industries | `plumbing` |

---

## Typical Test Workflow

```bash
# 1. Generate all 3 featured images
npx tsx scripts/generators/image-generate.ts --mode test --domain blog --force
npx tsx scripts/generators/image-generate.ts --mode test --domain case-studies --force
npx tsx scripts/generators/image-generate.ts --mode test --domain resources --force

# 2. Inspect all images for contrast/quality
npx tsx scripts/analyzers/image-inspect.ts

# 3. Open images in Finder to visually review
open public/images/blog/lead-response-time-for-service-businesses/featured-overlay.webp
open public/images/case-studies/appointment-business-booking-automation/featured-overlay.webp
open public/images/resources/authority-signals-for-local-search/featured-overlay.webp

# 4. If overlay/title needs fix, regenerate:
npx tsx scripts/generators/image-generate.ts --mode test --domain blog --force

# 5. If you want a completely different image:
npx tsx scripts/generators/image-generate.ts --mode test --domain blog --fresh
```

---

## Pipeline Logging

Every image generation produces detailed console output:

```
[pipeline] Processing featured-clean image for blog/lead-response-time-for-service-businesses
[pipeline] Generated 5 search queries
[pipeline] Searching: "small business owner answering phone"
[pipeline] Found 12 candidates
[pipeline] Evaluating candidate 1/12 (unsplash/abc123)
[pipeline]   ↳ downloading...
[download] Image URL: https://images.unsplash.com/photo-...
[pipeline]   ↳ downloaded (157KB)
[pipeline]   ↳ analyzing...
[pipeline]   ↳ scored: 62.00
[pipeline] Selected: unsplash/abc123 (score: 62)
[design] Variant: system | Layout: L2 | Icon: yes | Badge: none | Accent: #ffffff
[overlay] Brightness: 123.4, Gradient: 75%→14%, Layout: L2
[pipeline] Contrast check: 7.65:1 ✅
[pipeline] Saved: public/images/blog/.../featured-clean.webp
[pipeline] Saved: public/images/blog/.../featured-overlay.webp
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "already has featured-clean image, skipping" | Use `--force`, `--regenerate`, or `--fresh` flag |
| Title overflowing or too small | Title layout engine auto-sizes 24-52px, then scales by variant (1.38-1.68×) |
| Text block positioned too far left | Safety clamp at 80px. If text block exceeds image bounds, widen `maxTextWidth` in config |
| Overlay too weak / too strong | Adjust `OVERLAY_CONFIG` in `src/lib/image-system/config.ts` |
| No suitable image found | Try `--fresh` (blocks previous image) or check API keys in `.env.local` |
| WCAG contrast fail | Use `--force` to regenerate with current settings |
| Rate limited | System auto-pauses at 50 downloads/hour. Wait or try later |
| Same image every time | Page rotation and tier shuffling provide variety. Use `--fresh` to force different image |
| Intelligence rejecting all candidates | Check rejection reasons in logs: "subject centered", "text detected", "not landscape", "low contrast" |
