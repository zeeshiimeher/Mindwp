# MindWP Image System Architecture

STATUS: DRAFT

This document defines the automated image pipeline used across the MindWP content system.

The goal is to automatically discover, download, optimize, and place images for content domains while preventing duplicates and maintaining visual consistency.

Domains supported:

- Blogs
- Resources
- Industries
- Case Studies

---

# 1. Image Providers

The system uses multiple royalty‑free image providers to ensure good coverage and reliability.

Priority order:

1. Unsplash
2. Pexels
3. Pixabay

The pipeline attempts sources in this order and falls back if no relevant images are found.

IMPORTANT:

API keys must NOT be stored in documentation or committed to the repository.

They should be stored in environment variables:

UNSPLASH_ACCESS_KEY
PEXELS_API_KEY
PIXABAY_API_KEY



---

# 2. Global Rate Limits

To prevent API throttling the system must enforce a global download limit.

Current rule:

Maximum downloads: 50 images per hour

Execution pattern:

batch generation
↓
wait for next hour window
↓
continue generation

Later in production this limit will naturally be sufficient because only a small number of new posts will require images.

---

# 3. Image Rules Per Content Domain

## Blog

Featured Image
- Required

Content Images
- Optional
- Maximum: 1

Placement logic:

- After section 2
- Or after first long section (>350 words)

If the article is short, skip the content image.

---

## Resources

Featured Image
- Required

Content Images
- Optional
- Preferred: 1
- Maximum: 2

Placement logic:

- After architecture section
- After workflow section

If both appear, prefer a single image to maintain clean layout.

---

## Industries

Featured Image
- Required

Content Images
- Not allowed

Industry pages are visual landing pages and should avoid inline imagery.

---

## Case Studies

Featured Image
- Required

Content Images
- Optional
- Maximum: 1

Used primarily for:

- workflow diagrams
- automation flows

---

# 4. Image Query Generation

The system should generate search queries based on content metadata.

Sources used to build queries:

- title
- primary keyword
- topics[]
- systems[]

Example:

Title:

"Why Slow Lead Response Loses Customers"

Possible queries:

- customer service call center
- business phone answering
- customer support team

---

# 5. Image Deduplication

To prevent duplicate usage across posts the system maintains an index.

Index file:

src/lib/image-system/imageIndex.json

Example structure:

{
  "lead-response-mistakes": {
    "featured": "unsplash_abc123.jpg",
    "content": "pexels_def456.jpg"
  }
}

Before downloading an image the system must:

1. Check the index
2. Skip if already used
3. Only download if unique

---

# 6. Featured Image Generation

Featured images follow a standardized design.

Pipeline:

1. Download image
2. Detect brightness
3. Apply smart overlay
4. Render title text
5. Export optimized image

Brightness rules:

Dark image → light gradient overlay
Bright image → dark gradient overlay

Example overlays:

rgba(0,0,0,0.45)
rgba(255,255,255,0.35)

---

# 7. Title Layout Rules

The featured image title must always fit within two lines.

Algorithm:

measure text width
↓
reduce font size
↓
break into maximum two lines

Rules:

max lines: 2
max font size: 64px
min font size: 28px
text width: 70% of image width
alignment: center

---

# 8. Image Storage

Images should be organized by domain and post slug.

public/images/blog/
public/images/resources/
public/images/industries/
public/images/case-studies/

Example:

blog/lead-response-mistakes/featured.webp
blog/lead-response-mistakes/content.webp

---

# 9. Image Optimization

All images should be processed using the Sharp library.

Output format:

webp

Recommended sizes:

Featured images → 1600×900
Content images → 1200×700

---

# 10. Automation Workflow

Full automation pipeline:

scan content
↓
detect missing images
↓
build search queries
↓
download images
↓
apply overlays
↓
optimize images
↓
store images
↓
update index

---

# 11. CLI Commands

Bulk generation commands:

npm run images:blog
npm run images:resources
npm run images:industries
npm run images:case-studies

Single post generation:

npm run image:generate --slug <post-slug>

This command should regenerate images for a single post.

---

---

# 12. Semantic Image Search System

Basic keyword searches often return generic stock photos. To improve relevance the image system should use a semantic query generation layer.

The system should not rely only on the title or primary keyword. Instead it should analyze the article content and generate contextual search queries.

### Semantic Query Pipeline

content
↓
extract key phrases
↓
map phrases to visual concepts
↓
build search queries
↓
fetch candidate images
↓
rank results

### Content Signals Used

The query generator should analyze:

- title
- primaryKeyword
- section headings
- repeated nouns
- topics[]
- systems[]

### Phrase Extraction Example

Article title:

"Why Slow Lead Response Loses Customers"

Detected concepts:

- customer support
- business phone calls
- call center
- missed calls

Generated search queries:

- business call center support
- customer service phone team
- answering business calls

### Query Ranking Rules

Each candidate query should be scored based on relevance to the article metadata.

Score inputs:

- keyword overlap with title
- keyword overlap with topics[]
- keyword overlap with systems[]

Queries with the highest score should be used first when calling the image APIs.

### Image Result Filtering

After fetching results the system should filter images using basic heuristics:

Reject images that are:

- abstract graphics
- illustrations
- text-based posters
- extremely dark or extremely bright

Prefer images that contain:

- people performing business actions
- real environments
- neutral backgrounds suitable for overlays

### Result Ranking

When multiple images are returned the system should rank them using:

1. resolution
2. orientation (prefer landscape)
3. visual clarity
4. subject relevance

The highest ranked image becomes the featured image candidate.

### Provider Query Strategy

Each provider should be queried with the same semantic query list.

Provider order:

1. Unsplash
2. Pexels
3. Pixabay

If Unsplash fails to return good matches the system should automatically fall back to the next provider.

### Duplicate Prevention

Before downloading any image the system must check the global image index to ensure the same image is not reused for multiple posts.

### Example End‑to‑End Flow

scan article
↓
extract phrases
↓
generate semantic queries
↓
search Unsplash
↓
filter + rank results
↓
check imageIndex
↓
download image
↓
generate featured image

---

# 13. Image Intelligence Layer

The Image Intelligence Layer ensures that downloaded images are visually suitable before being used in the system.

This step runs after an image is downloaded but before it is accepted and processed for featured image generation.

Purpose:

• prevent poor quality images  
• avoid images with text  
• avoid images where title overlays block important subjects  

---

### Image Intelligence Pipeline

candidate image
↓
brightness analysis
↓
contrast analysis
↓
text detection
↓
subject position detection
↓
orientation validation
↓
approve or reject

---

### Brightness Detection

The system must detect whether the image is dark or bright.

This allows the overlay system to automatically choose the correct gradient.

Rules:

dark image → light gradient overlay  
bright image → dark gradient overlay

Brightness can be estimated using average pixel luminance.

---

### Contrast Validation

Images with very low contrast should be rejected.

Low contrast images make title overlays difficult to read.

Example problems:

• foggy images  
• overexposed backgrounds  
• extremely flat lighting

---

### Text Detection

Images that already contain visible text must be rejected.

Reasons:

• title overlay becomes unreadable  
• visual clutter increases  

Detection methods may include:

• OCR scanning  
• high edge-density detection  

---

### Subject Position Detection

The system should avoid images where the main subject is located exactly in the center.

Reason:

The featured image title is placed in the center of the image.

If a face or object sits directly behind the title the layout becomes unusable.

Preferred subject placement:

• left third  
• right third

---

### Orientation Validation

Preferred image orientation:

landscape

Reject images that are:

• vertical  
• square

These formats do not work well with the featured image layout.

---

### Final Acceptance Criteria

An image is accepted only if it passes all checks:

• brightness detected  
• sufficient contrast  
• no text detected  
• subject not centered  
• landscape orientation  

If any rule fails, the system must fetch the next candidate image.

---

# 14. Image Style Consistency Engine

To maintain visual consistency across the website, the image system should apply domain‑specific style rules.

Different content domains require different visual styles.

---

### Blog Image Style

Blog images should represent real business activity.

Preferred scenes:

• customer service teams
• business phone conversations
• small business environments
• office collaboration

Avoid:

• abstract tech graphics
• generic handshake stock photos
• unrealistic corporate imagery

Blog images should feel **operational and real**.

---

### Resource Image Style

Resource content usually explains frameworks, systems, and processes.

Preferred imagery:

• dashboards
• workflow diagrams
• analytics screens
• structured work environments

Avoid:

• lifestyle imagery
• random office photos

Resource visuals should feel **educational and structured**.

---

### Industry Image Style

Industry pages should visually represent real service environments.

Preferred imagery:

• technicians working
• real workspaces
• equipment and tools
• storefront environments

Avoid:

• corporate office scenes
• abstract graphics

Industry images should feel **grounded and authentic**.

---

### Case Study Image Style

Case studies should emphasize real operations and results.

Preferred imagery:

• teams working together
• operations workflows
• real business environments
• before/after operational situations

Case study visuals should communicate **real outcomes and operational change**.

---

Potential upgrades for later phases:

- AI generated diagrams
- automated chart creation for resources
- semantic image search
- image caching layer

These improvements can further enhance automation and visual consistency.

