# MindWP Image System — Testing Guide

## Quick Test Commands

All commands use **hardcoded default slugs** so you can run them immediately. To test a different slug, add `--slug your-slug` to any command.

### Generate Featured Images (per domain)

```bash
# Blog (default: lead-response-time-for-service-businesses)
npx tsx scripts/image-generate.ts --mode test

# Case Study (default: appointment-business-booking-automation)
npx tsx scripts/image-generate.ts --mode test --domain case-studies

# Resource (default: authority-signals-for-local-search)
npx tsx scripts/image-generate.ts --mode test --domain resources
```

### Generate Resource Diagram

```bash
# Diagram (default: authority-signals-for-local-search)
npx tsx scripts/image-generate.ts --diagram

# Diagram for a specific resource
npx tsx scripts/image-generate.ts --diagram --slug your-resource-slug
```

### Regenerate vs Fresh

```bash
# Regenerate: clears index, re-runs pipeline (may pick same image from search)
npx tsx scripts/image-generate.ts --mode test --regenerate

# Fresh: clears index AND blocks the previously used image (forces a different image)
npx tsx scripts/image-generate.ts --mode test --fresh

# Works with any domain:
npx tsx scripts/image-generate.ts --mode test --domain case-studies --regenerate
npx tsx scripts/image-generate.ts --mode test --domain resources --fresh
```

### Inspect Generated Images

Runs a visual QA check on all generated images — reports brightness, overlay strength, WCAG AA contrast ratio.

```bash
npx tsx scripts/image-inspect.ts
```

---

## What to Check Visually

After generating an image, open it from `public/images/<domain>/<slug>/featured.webp` and verify:

### 1. Overlay
- **Bright images** → strong dark overlay (55-70% opacity) — image should look muted behind text
- **Dark images** → lighter overlay (45% opacity) — just enough to ensure text stands out
- **Mid-range images** → scaled proportionally between min and max

### 2. Title Text
- White text, centered, with text-shadow for extra readability
- Maximum 2 lines, font size 24-52px (auto-sized to fit)
- Must NOT overflow left/right edges (80px horizontal padding enforced)
- Long titles auto-shrink; very long titles split into 2 lines

### 3. Contrast
- Run `npx tsx scripts/image-inspect.ts` to check WCAG AA compliance
- **Pass** = contrast ratio ≥ 4.5:1 (white text on overlay background)
- If any image fails, regenerate it with `--regenerate`

### 4. Image Quality
- 1600×900 WebP, typically 80-200KB
- No watermarks, no text in source image, landscape orientation
- Relevant to the topic (scored by the intelligence layer)

---

## Output Locations

| Domain | Path |
|--------|------|
| Blog | `public/images/blog/<slug>/featured.webp` |
| Case Studies | `public/images/case-studies/<slug>/featured.webp` |
| Resources | `public/images/resources/<slug>/featured.webp` |
| Resource Diagrams | `public/images/resources/<slug>/diagram.webp` |
| Industries | `public/images/industries/<slug>/featured.webp` |

---

## Default Test Slugs

These are hardcoded in `scripts/image-generate.ts` under `DEFAULT_TEST_SLUGS`:

| Domain | Slug |
|--------|------|
| blog | `lead-response-time-for-service-businesses` |
| case-studies | `appointment-business-booking-automation` |
| resources | `authority-signals-for-local-search` |
| industries | `plumbing` |

To change defaults, edit the `DEFAULT_TEST_SLUGS` object in `scripts/image-generate.ts`.

---

## Typical Test Workflow

```bash
# 1. Generate all 3 featured images
npx tsx scripts/image-generate.ts --mode test
npx tsx scripts/image-generate.ts --mode test --domain case-studies
npx tsx scripts/image-generate.ts --mode test --domain resources

# 2. Generate a resource diagram
npx tsx scripts/image-generate.ts --diagram

# 3. Inspect all images for contrast/quality
npx tsx scripts/image-inspect.ts

# 4. Open images in Finder to visually review
open public/images/blog/lead-response-time-for-service-businesses/featured.webp
open public/images/case-studies/appointment-business-booking-automation/featured.webp
open public/images/resources/authority-signals-for-local-search/featured.webp

# 5. If overlay/title needs fix, regenerate:
npx tsx scripts/image-generate.ts --mode test --regenerate

# 6. If you want a completely different image:
npx tsx scripts/image-generate.ts --mode test --fresh
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "already has featured image, skipping" | Use `--regenerate` or `--fresh` flag |
| Title overflowing edges | Check title length — system enforces 80px padding and max 52px font |
| Overlay too weak / too strong | Adjust `OVERLAY_CONFIG` in `src/lib/image-system/config.ts` |
| No suitable image found | Try `--fresh` (different search results each time) or check API keys in `.env.local` |
| WCAG contrast fail | Use `--regenerate` to re-apply overlay with current settings |
| Rate limited | System auto-pauses at 50 downloads/hour. Wait or try later |
