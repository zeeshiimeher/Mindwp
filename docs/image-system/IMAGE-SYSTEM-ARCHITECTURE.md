# MindWP Image System Architecture

STATUS: ACTIVE
Last Updated: 2026-04-06

This document defines the automated image pipeline used across the MindWP content system. The system is fully operational and maintained as a single production pipeline.

Domains supported:

- Blogs
- Resources
- Industries
- Case Studies

---

# 1. System Overview

The image system is a composition-aware visual engine that automatically discovers, downloads, analyzes, scores, crops, and generates cinematic featured images with SVG overlays for all content domains.

Pipeline flow:

```
content metadata
↓
semantic query generation (industry + topic mapping)
↓
multi-provider search (Unsplash → Pexels → Pixabay)
↓
download with rate limiting (50/hr)
↓
intelligence analysis (brightness, contrast, orientation, subject position, text detection)
↓
perceptual hash dedup (dHash, Hamming distance ≤ 5)
↓
multi-factor relevance scoring (5 weighted factors)
↓
attention-aware crop (sharp.strategy.attention)
↓
micro-contrast sharpening (sigma 0.5)
↓
background depth layer (adaptive blur + dim + desaturate)
↓
cinematic SVG overlay generation (gradients, typography, focal zones)
↓
Sharp composite → WebP export (quality 90)
↓
WCAG AA contrast verification (≥ 4.5:1)
↓
save + register in dedup index + update learning systems
```

---

# 2. Image Providers

The system uses multiple royalty-free image providers with learned priority ordering.

Providers:

1. Unsplash
2. Pexels
3. Pixabay

Provider selection is adaptive — an EMA-based learning system tracks quality per domain and adjusts query order automatically.

Each provider applies page rotation for result variety.

API keys are stored in environment variables only:

```
UNSPLASH_ACCESS_KEY
PEXELS_API_KEY
PIXABAY_API_KEY
```

---

# 3. Global Rate Limits

Maximum downloads: 50 images per hour.

Download timeout: 15 seconds per image.

Fetch directive: `cache: 'no-store'` (prevents stale results).

---

# 4. Image Rules Per Content Domain

## Blog

- Featured Image: Required (clean + overlay variants)
- Content Images: Optional (max 1)
- Placement: After section 2 or after first long section (>350 words)

## Resources

- Featured Image: Required (clean + overlay variants)
- Content Images: Optional (max 2)
- Placement: After architecture or workflow sections

## Industries

- Featured Image: Required (clean + overlay variants)
- Content Images: Not allowed

## Case Studies

- Featured Image: Required (clean + overlay variants)
- Content Images: Optional (max 1)
- Used for: workflow diagrams, automation flows

---

# 5. Semantic Query Generation

The system generates contextual search queries from content metadata rather than relying on shallow tag matching.

Sources analyzed:

- title
- seo.title
- seo.description
- topics[]
- systems[]
- tags[]
- sectionHeadings[]

Pipeline:

```
content metadata
↓
industry detection
↓
topic-to-scene mapping
↓
domain style scenes
↓
query ranking (keyword overlap scoring)
query ranking (metadata overlap scoring)
↓
same-score tier shuffling (time-based seed for variety)
```

---

# 6. Image Intelligence Layer

Every downloaded image passes through 5 parallel analysis checks before scoring.

### 6.1 Brightness Detection

- Resizes to 100×100, computes ITU-R BT.601 luminance per pixel
- Returns: average luminance, isDark (<70), isBright (>160)
- Drives overlay gradient strength (bright → strong overlay, dark → light overlay)

### 6.2 Contrast Validation

- Standard deviation of luminance values
- Rejects images with low contrast (flat, washed out)

### 6.3 Orientation Check

- Rejects non-landscape images (portrait, square)

### 6.4 Subject Position Detection

- Sobel edge detection split into thirds (left, center, right)
- Returns: region, edgeDensityCenter, edgeDensityLeft, edgeDensityRight
- Rejects images where subject is centered (>50% center energy)
- Prefers right-side subjects (left zone stays clean for text overlay)

### 6.5 Text Detection

- High-frequency edge density analysis at 200×200
- Rejects images containing text (stock overlays, watermarks)

---

# 7. Relevance Scoring Engine

Each candidate image is scored across 5 weighted factors:

| Factor                | Weight | What it measures                                                       |
| --------------------- | ------ | ---------------------------------------------------------------------- |
| Subject Relevance     | 0.40   | Metadata matching: image tags/description vs page metadata             |
| Visual Clarity        | 0.20   | Resolution, contrast, brightness range                                 |
| Composition Quality   | 0.15   | Subject not centered, right-side subject preferred, landscape, no text |
| Overlay Compatibility | 0.15   | Clean left zone, low center edge density, good contrast                |
| Resolution Quality    | 0.10   | Pixel dimensions (best: ≥2400×1350)                                    |

Images are ranked descending by total weighted score. Top candidate is selected.

---

# 8. Image Deduplication

Perceptual hashing (8×8 dHash) generates a visual fingerprint for every image.

- Hamming distance ≤ 5 = too similar, rejected
- Index stored in `src/lib/image-system/data/imageIndex.json`
- Checked before scoring, prevents visual repetition across all posts

---

# 9. Featured Image Generation

Each featured image produces TWO output files:

1. `featured-clean.webp` — resized photo with micro-contrast sharpening
2. `featured-overlay.webp` — cinematic SVG overlay composited onto blurred+dimmed base

### 9.1 Cropping Strategy

- `sharp.strategy.attention` — saliency + skin-tone aware cropping
- Keeps subjects in frame automatically

### 9.2 Background Depth Layer

- Adaptive Gaussian blur: sigma 5–8 (brightness-responsive)
- Brightness reduction: 0.78
- Saturation reduction: 0.9
- Creates clear text/background separation

### 9.3 SVG Overlay System (multi-layer composite)

Layer order (bottom to top):

1. Hard gradient — left-to-right darkness (brightness-adaptive stops at 0/25/50/100%)
2. Right-side gradient — balances empty space on right
3. Vignette — edge darkening for attention containment (transparent center → dark edges)
4. Light beam — diagonal signature highlight
5. Focal light zone — radial glow behind text block
6. Focal dark zone — +12% darkness behind text for eye anchor
7. Film grain — feTurbulence at 3% opacity (premium texture)
8. Variant shape — content-type visual (grid lines, bars, circles)
9. Accent bar — vertical gradient bar with glow
10. Badge — category pill (e.g., "CASE STUDY")
11. Icon — domain icon before label
12. Label — metadata-derived uppercase text
13. Title — dominant headline (1-2 lines, weight 900)

### 9.4 Layout Variants

3 composition profiles, selected deterministically via `hash(slug) % 3`:

| Variant | Name      | Purpose                         | Text Width | Font Scale | Position  |
| ------- | --------- | ------------------------------- | ---------- | ---------- | --------- |
| L1      | Editorial | Clean, balanced (resources)     | 720px      | 1.38×      | 38% × 52% |
| L2      | Focused   | Primary CTR (blog)              | 820px      | 1.56×      | 42% × 55% |
| L3      | Impact    | Bold, aggressive (case studies) | 860px      | 1.68×      | 35% × 58% |

### 9.5 Text Block Positioning

The text block is center-balanced using actual rendered width:

```
TEXT_BLOCK_X = width × textBlockXPercent
textX = TEXT_BLOCK_X - (textBlockWidth / 2)
if (textX < 80) textX = 80   // safety clamp
```

All elements anchor to textX: accent bar, badge, label, icon, title lines.

### 9.6 Brightness-Adaptive Overlay

| Image Type    | Overlay Start        | Overlay End | Gradient         |
| ------------- | -------------------- | ----------- | ---------------- |
| Bright (>160) | 88%                  | 20%         | Strong darkening |
| Mid-range     | Linear interpolation |             | Proportional     |
| Dark (<70)    | 55%                  | 5%          | Light touch      |

### 9.7 CTR Psychology Layer

- Focal dark zone: +12% opacity eye anchor behind text block
- Edge vignette: reversed (transparent center → dark edges) for attention containment
- Micro-hierarchy: title (full opacity) > label (0.50-0.65) > icon (label × 0.8) > badge (0.80)
- Text dominance: font scale 1.38–1.68×, tight line-height (1.0–1.05), max 2 lines
- Gradient contrast zones: sharp 3-zone separation (dark → mid → light)

---

# 10. Title Layout Engine

Dynamically fits article titles into 1-2 lines.

Algorithm:

```
calculate maxTextWidth (per-variant override or config default)
↓
try single line at max font size (52px)
↓
reduce font size by 2px until fits
↓
if min font reached → try two-line break
↓
find natural break point (balanced line lengths)
```

Rules:

- Max lines: 2
- Max font size: 52px
- Min font size: 24px
- Default max text width: 860px (overridden per layout variant)
- Font family: Inter, Arial, sans-serif
- Weight: 900
- Letter-spacing: -0.6 to -0.8 (per variant)

---

# 11. Design System Integration

### Overlay Design Resolution

Content metadata drives visual decisions:

- Variant: editorial / system / analytical / results / local (mapped from content topics)
- Layout: L1 / L2 / L3 (deterministic per slug)
- Icon: domain-specific SVG path (16×16)
- Badge: category label (e.g., "CASE STUDY") or null
- Palette: brightness-adaptive with accent, accentLight, accentDark, text, overlayStart, overlayEnd

Color depth:

- accentLight = lighten(accent, +35%)
- accentDark = darken(accent, ×0.6)
- Used for accent bar gradient (top: accentLight → bottom: accentDark)

---

# 12. Image Storage

Output structure:

```
public/images/blog/<slug>/featured-clean.webp
public/images/blog/<slug>/featured-overlay.webp
public/images/resources/<slug>/featured-clean.webp
public/images/resources/<slug>/featured-overlay.webp
public/images/case-studies/<slug>/featured-clean.webp
public/images/case-studies/<slug>/featured-overlay.webp
public/images/industries/<slug>/featured-clean.webp
public/images/industries/<slug>/featured-overlay.webp
```

Image sizes:

- Featured: 1600×900
- Content: 1200×700

Format: WebP (quality 90)

---

# 13. Learning Systems

### Provider Learning

EMA-based quality tracking per domain. Providers that consistently return higher-scoring images are queried first.

Stored in: `src/lib/image-system/data/providerScores.json`

### Context Memory

Remembers successful query/provider/score per topic for future selection.

Stored in: `src/lib/image-system/data/contextMemory.json`

---

# 14. CLI Commands

```bash
# Test single domain (uses hardcoded default slugs)
npx tsx scripts/image-system/image-generate.ts --mode test --domain blog
npx tsx scripts/image-system/image-generate.ts --mode test --domain case-studies
npx tsx scripts/image-system/image-generate.ts --mode test --domain resources

# Force regeneration (bypasses cache)
npx tsx scripts/image-system/image-generate.ts --mode test --domain blog --force

# Regenerate (clears index, re-runs pipeline)
npx tsx scripts/image-system/image-generate.ts --mode test --regenerate

# Fresh (clears index AND blocks previous image)
npx tsx scripts/image-system/image-generate.ts --mode test --fresh

# Bulk generation
npx tsx scripts/image-system/image-generate.ts --mode bulk --domain blog

# Inspect generated images
npx tsx scripts/image-system/image-inspect.ts
```

---

# 15. Validation

### WCAG AA Contrast Check

After overlay generation, the pipeline samples the center region and verifies white text contrast:

- Minimum ratio: 4.5:1
- Sample region: 10-90% width × 30-70% height
- Logged for every generated image

### Safety Checks

- License validation (editorial flags)
- Brand/logo term detection
- Unsafe content filtering

---

# 16. Key File Paths

| Area                     | Location                                             |
| ------------------------ | ---------------------------------------------------- |
| Pipeline orchestrator    | `src/lib/image-system/pipeline/processor.ts`         |
| Featured image generator | `src/lib/image-system/pipeline/featuredImage.ts`     |
| SVG overlay design       | `src/lib/image-system/pipeline/overlayDesign.ts`     |
| Title layout engine      | `src/lib/image-system/pipeline/titleLayout.ts`       |
| Image analysis           | `src/lib/image-system/intelligence/imageAnalysis.ts` |
| Relevance scoring        | `src/lib/image-system/intelligence/scoring.ts`       |
| Perceptual hashing       | `src/lib/image-system/intelligence/similarity.ts`    |
| Safety checks            | `src/lib/image-system/intelligence/safety.ts`        |
| Semantic query engine    | `src/lib/image-system/semantic/queryGenerator.ts`    |
| Content analyzer         | `src/lib/image-system/semantic/contentAnalyzer.ts`   |
| Provider manager         | `src/lib/image-system/providers/index.ts`            |
| Config + thresholds      | `src/lib/image-system/config.ts`                     |
| Type definitions         | `src/lib/image-system/types.ts`                      |
| CLI entry point          | `scripts/image-system/image-generate.ts`             |
| Dedup index data         | `src/lib/image-system/data/imageIndex.json`          |
| Provider scores data     | `src/lib/image-system/data/providerScores.json`      |
| Context memory data      | `src/lib/image-system/data/contextMemory.json`       |
