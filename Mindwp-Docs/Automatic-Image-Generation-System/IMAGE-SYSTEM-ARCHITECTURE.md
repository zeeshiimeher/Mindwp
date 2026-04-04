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
unsplash 
Application ID
892753
Access Key
XghLU8rdtwpmV1oYABsM2YxyMmqNDYNoixaa03DQGRE
Secret key
R1KJ4adEaGZevucgqrab4HHtyGdEoYWfMSPL_xN0XLI

pixabay
1765653-4a21214d2a3385194a699ade8
pexels
zo9SyvukuA8rTWBETGYaACgXeYRbVHeTsmjyNf2RkDIiBRIwoI0F3b56



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

---
---

# 15. Resource Diagram Generator

Stock images are often not ideal for technical resource content.

Resources frequently explain systems, workflows, or frameworks.  
Instead of relying only on stock photography, the image system should support automatic diagram generation.

This system can generate clean visual diagrams directly from the resource content.

---

### Purpose

Resource diagrams help explain:

• system architecture  
• operational workflows  
• automation pipelines  
• CRM pipelines  
• business processes  

These visuals make resource content easier to understand and more authoritative.

---

### Example Diagram

Example resource topic:

Lead Handling System

Generated diagram:

Lead Capture  
↓  
AI Qualification  
↓  
CRM Pipeline  
↓  
Automated Follow-Up  
↓  
Review Request  

These diagrams help readers quickly understand the system flow.

---

### Diagram Generation Triggers

The system should generate diagrams when a resource contains sections describing:

• frameworks  
• workflows  
• pipelines  
• automation systems  
• architectures  

Trigger keywords:

framework  
workflow  
pipeline  
system architecture  
process flow  

---

### Diagram Extraction Logic

The generator should scan resource content and detect ordered steps.

Example:

1. Capture incoming leads  
2. Qualify the lead automatically  
3. Send lead to CRM pipeline  
4. Trigger follow-up automation  

Converted diagram:

Lead Capture  
↓  
Lead Qualification  
↓  
CRM Pipeline  
↓  
Follow-Up Automation

---

### Diagram Output Format

Preferred format:

SVG

Reasons:

• lightweight  
• scalable  
• easily styled  
• fast loading  

---

### Diagram Placement Rules

Diagrams should be placed after sections that describe workflows or system architecture.

Example placement:

System Architecture section  
↓  
Generated Diagram  
↓  
Next content section

Maximum diagrams per resource:

2

Preferred:

1 diagram per resource.

---

### Diagram Generation Workflow

resource content  
↓  
detect workflow steps  
↓  
generate diagram nodes  
↓  
render SVG diagram  
↓  
save diagram file  
↓  
insert diagram into resource page

---

### Diagram Storage Structure

Generated diagrams should be stored alongside other resource images.

Example:

public/images/resources/lead-automation-framework/diagram-1.svg

---

### Diagram Style Rules

All diagrams should follow a consistent visual style.

Box style:

rounded rectangle

Connector style:

vertical arrows

Layout:

vertical flow

Example structure:

[ Lead Capture ]  
↓  
[ AI Qualification ]  
↓  
[ CRM Pipeline ]  
↓  
[ Automation Follow-Up ]


---

# 16. AI Chart Generator for Resource Metrics

Some resource articles explain performance metrics, comparisons, or operational outcomes. Instead of relying on generic images, the system should support automatic chart generation.

This allows resources to display simple visual data explanations directly from the content.

---

### Purpose

Charts help explain:

• response time impact
• lead conversion differences
• automation efficiency
• missed call recovery performance
• operational bottlenecks

These visuals help readers understand metrics faster than text alone.

---

### Example Chart Use Case

Resource topic:

"Lead Response Time Framework"

Example visualization:

Lead Response Time vs Conversion Rate

5 minutes → 85%
30 minutes → 40%
2 hours → 12%

This can be automatically rendered as a simple bar or line chart.

---

### Chart Generation Triggers

The system should generate charts when resource sections contain:

• percentages
• numeric comparisons
• "before vs after" metrics
• response time comparisons
• performance improvements

Trigger signals:

percentage values
numbers with units (minutes, hours, %)
comparison phrases (increase, decrease, improvement)

---

### Chart Extraction Logic

The generator scans section content for numeric relationships.

Example text:

"Businesses responding within 5 minutes convert about 80% of leads, while responses after 1 hour drop below 20%."

Converted chart dataset:

5 minutes → 80%
60 minutes → 20%

---

### Chart Output Format

Preferred output:

SVG charts

Reasons:

• lightweight
• scalable
• easy to style
• fast loading

---

### Chart Types

Supported chart styles:

• bar charts
• line charts
• comparison charts

Avoid complex visualizations.

Charts should remain simple and explanatory.

---

### Chart Placement Rules

Charts should appear directly after the section describing the metric.

Example placement:

Performance Explanation
↓
Generated Chart
↓
Next section

Maximum charts per resource:

2

Preferred:

1 chart per resource.

---

### Chart Generation Workflow

resource content
↓
detect numeric patterns
↓
extract data points
↓
generate chart structure
↓
render SVG chart
↓
save chart file
↓
insert chart into resource page

---

### Storage Structure

Charts should be stored alongside other generated images.

Example:

public/images/resources/lead-response-time-framework/chart-1.svg

---

### Styling Rules

Charts should follow the site visual style:

• minimal design
• neutral colors
• clear labels
• no heavy decorations

The goal is clarity, not visual complexity.

---
# 17. Featured Image Title Layout Engine

Blog and resource featured images often include the article title as an overlay.  
Because titles vary in length, the system must dynamically adjust typography so the title always fits cleanly inside the image.

This removes the need for manual design adjustments.

---

### Title Layout Objective

The title must:

• always fit within **two lines**  
• remain centered  
• maintain strong readability  
• never overflow the safe text area  

---

### Dynamic Layout Algorithm

The layout engine should follow this pipeline:

original title  
↓  
measure text width  
↓  
adjust font size  
↓  
break title into two lines  
↓  
center align  
↓  
render overlay  

---

### Typography Rules

Maximum lines:

2

Maximum font size:

64px

Minimum font size:

28px

Maximum text width:

70% of image width

Alignment:

center

---

### Title Splitting Logic

The engine should split titles naturally when possible.

Example title:

Why Slow Lead Response Loses Customers

Rendered layout:

Why Slow Lead Response  
Loses Customers

If the title is very long, the engine should gradually reduce font size until the title fits inside two lines.

---

### Safe Text Area

Text should remain inside a defined safe zone to avoid cropping.

Safe area rules:

• horizontally centered  
• vertically centered  
• 15% padding from image edges  

---

### Overlay Integration

The title layout engine works together with the brightness detection system.

Pipeline:

image downloaded  
↓  
brightness detected  
↓  
gradient overlay applied  
↓  
title rendered with layout engine  

This guarantees readability on both dark and bright images.

---

### Example Output

Generated featured image layout:

[ Background Image ]

      Why Slow Lead Response
         Loses Customers

---
---

# 18. Content-Aware Image Placement Engine

The system should intelligently decide where images appear inside blog and resource content instead of inserting them at fixed positions.

This engine analyzes the article structure and places images where they best support understanding.

---

### Purpose

Correct image placement improves:

• readability  
• visual rhythm  
• content comprehension  
• perceived article quality  

Instead of random placement, images should appear when the article introduces a new concept, workflow, or explanation.

---

### Placement Analysis Pipeline

article content  
↓  
parse section structure  
↓  
identify long sections  
↓  
identify conceptual transitions  
↓  
place image anchor  

---

### Blog Placement Rules

Blogs may contain **one optional inline image**.

Placement priority:

1. After section 2  
2. After the first section longer than **350 words**  
3. After the first major concept explanation  

If the article is short, skip inline images entirely.

---

### Resource Placement Rules

Resources may contain **1–2 inline visuals**.

Placement priority:

1. After **Architecture / Framework** sections  
2. After **Workflow / Process** sections  
3. After **metric explanation** sections  

Avoid placing images:

• before the first paragraph  
• inside very short sections  

---

### Section Length Detection

The placement engine should detect long sections using word counts.

Example rule:

If section length **> 300 words → eligible for image placement**

This prevents images from appearing too early in the article.

---

### Concept Transition Detection

Images should appear when the article introduces a new concept.

Trigger indicators:

framework  
workflow  
architecture  
process  
pipeline  

These keywords signal where visual explanation may help.

---

### Image Type Selection

The engine should choose image types based on section context.

Workflow explanation → **diagram**  
Metric explanation → **chart**  
General explanation → **contextual image**

---

### Maximum Limits

Blog

featured image + **1 optional inline image**

Resource

featured image + **1–2 inline visuals**

Industry

featured image only

Case Study

featured image + **1 optional inline visual**

---

### Placement Workflow

scan article  
↓  
identify eligible sections  
↓  
select image type  
↓  
generate or fetch image  
↓  
insert image after section  

---

# 19. Image Relevance Scoring Engine

When multiple candidate images are returned from image providers, the system must automatically select the best image rather than simply using the first result.

The Image Relevance Scoring Engine evaluates candidate images and ranks them using multiple quality signals.

This ensures that featured images remain visually strong and contextually relevant.

⸻

Purpose

Stock image APIs often return large sets of results that vary in quality.

The scoring engine improves the selection process by evaluating:

• relevance to the article
• visual clarity
• composition quality
• layout compatibility

Only the highest-scoring image should be used.

⸻

Candidate Image Pipeline

search query
↓
fetch candidate images
↓
run image intelligence checks
↓
calculate relevance score
↓
rank candidates
↓
select best image

⸻

Scoring Factors

Each candidate image should be evaluated using a weighted scoring model.

Example scoring structure:

Factor	Weight
subject relevance	40%
visual clarity	20%
composition quality	15%
overlay compatibility	15%
resolution quality	10%

Total score range:

0–100

⸻

Subject Relevance Score

Measures how closely the image subject matches the article topic.

Signals used:

• query keyword match
• metadata tags from the image provider
• similarity to article keywords

Example:

Article topic:

Lead Response Automation

Better image:

customer support team answering phone

Poor image:

generic office meeting

⸻

Visual Clarity Score

Images should be sharp and visually clear.

Reject or penalize images that contain:

• heavy blur
• low resolution
• strong motion blur

Preferred properties:

• clear subjects
• balanced lighting
• clean backgrounds

⸻

Composition Quality Score

Images with strong composition should be preferred.

Preferred composition patterns:

• rule-of-thirds subject placement
• balanced negative space
• simple visual hierarchy

Avoid:

• cluttered scenes
• extreme close-ups
• overly complex backgrounds

⸻

Overlay Compatibility Score

Because featured images include title overlays, the image must allow readable text placement.

Scoring signals:

• center area visual simplicity
• subject positioned on left/right thirds
• no strong visual elements behind title area

Images with clean center space receive higher scores.

⸻

Resolution Quality Score

Prefer high-resolution images to ensure visual clarity across devices.

Minimum requirements:

width ≥ 1600px

Images below this threshold should be rejected.

⸻

Final Ranking

Each candidate image receives a final score based on the weighted factors.

Example result:

Image	Score
image_a.jpg	87
image_b.jpg	82
image_c.jpg	69

The system selects the highest-scoring image.

⸻

Provider Strategy

The scoring engine works across all providers.

Process:
	1.	fetch images from Unsplash
	2.	fetch images from Pexels
	3.	fetch images from Pixabay
	4.	combine candidates
	5.	rank all candidates

This ensures the system always selects the best available image.

⸻

Duplicate Protection

Before final selection the system must check the global image index.

If the top candidate has already been used by another post:

• skip the image
• move to the next ranked candidate

⸻

Result

The scoring engine guarantees that the chosen image is:

• relevant to the article
• visually clear
• compositionally strong
• compatible with title overlays
• unique across the site

⸻



# 20. Visual Similarity Detection System

Even when duplicate files are prevented, stock libraries often return visually similar images. The system should include a visual similarity detection layer to prevent using images that look almost identical across different posts.

---

### Purpose

This system ensures visual diversity across the site by detecting images that are visually similar even if they have different file IDs or filenames.

Problems prevented:

• multiple posts using nearly identical images
• repeated scenes with different crops
• visually repetitive blog thumbnails

---

### Similarity Detection Pipeline

candidate image
↓
extract visual fingerprint
↓
compare against image index
↓
calculate similarity score
↓
accept or reject image

---

### Visual Fingerprint Generation

Each downloaded image should generate a lightweight fingerprint.

Recommended techniques:

• perceptual hashing (pHash)
• average hashing (aHash)
• difference hashing (dHash)

These algorithms convert images into small hash values that represent visual structure.

Example hash:

`f3a91cbb8e2210`

---

### Similarity Scoring

When a new image is downloaded, its hash should be compared with hashes stored in the image index.

Example rule:

Hamming distance ≤ 5 → considered visually similar

If similarity exceeds the threshold, the image must be rejected and the system should fetch the next candidate.

---

### Image Index Extension

The image index should store both file references and image hashes.

Example:

```
{
  "lead-response-mistakes": {
    "featured": {
      "file": "unsplash_abc123.webp",
      "hash": "f3a91cbb8e2210"
    }
  }
}
```

This allows the system to detect visually similar images even across different providers.

---

### Acceptance Rules

An image should be rejected if:

• it is already used in another post
• its perceptual hash is too similar to an existing image

Accepted only when:

• file not used
• visual similarity below threshold

---

### Result

This system guarantees:

• strong visual diversity across the site
• no repetitive blog thumbnails
• improved perceived content quality

---


# 21. Image Context Memory System

The image system should remember what types of images performed best for each topic or content pattern. This allows the system to continuously improve image selection over time.

Instead of treating each image search as an isolated task, the system builds a memory of successful visual patterns.

---

### Purpose

Different article topics often work best with specific types of imagery.

Examples:

• lead response articles → call center or phone support images
• automation articles → dashboards or workflow visuals
• CRM topics → analytics screens or team operations

By remembering successful patterns, the system can select better images faster.

---

### Memory Signals

The context memory should store information such as:

• article topic
• systems[]
• topics[]
• selected image query
• provider used
• final relevance score

This allows the system to learn which queries produced the best results.

---

### Context Memory Example

Example stored record:

```
{
  "topic": "lead-response",
  "preferredQueries": [
    "customer service phone team",
    "business call center",
    "support agent answering calls"
  ],
  "bestProvider": "unsplash",
  "avgScore": 86
}
```

---

### Query Optimization

When generating queries for a new article the system should:

1. Check existing context memory
2. Load high‑performing queries for the topic
3. Combine them with the current article keywords

This reduces weak search queries and increases image relevance.

---

### Memory Storage

Context memory should be stored in:

```
src/lib/image-system/contextMemory.json
```

Example structure:

```
{
  "lead-response": {
    "queries": ["business call center", "support phone team"],
    "provider": "unsplash",
    "avgScore": 84
  },
  "crm-pipeline": {
    "queries": ["crm dashboard", "sales pipeline analytics"],
    "provider": "pexels",
    "avgScore": 88
  }
}
```

---

### Learning Updates

After each successful image selection the system should update the context memory:

article processed
↓
image selected
↓
score calculated
↓
update context memory

Over time this builds a strong dataset of high‑quality visual queries.

---

### Result

The Image Context Memory System ensures:

• smarter image search queries
• higher relevance images
• improved provider selection
• faster image discovery

This transforms the image pipeline from a simple downloader into a continuously learning visual system.

---

# 22. Provider Quality Learning Engine

The image system should learn over time which image providers deliver the most relevant and visually strong images for each content domain.

Instead of always using a fixed provider order, the system can track performance and dynamically prioritize the best sources.

⸻

Purpose

Different providers perform better for different types of content.

Examples:

• Unsplash often provides high-quality business photography
• Pexels frequently returns better lifestyle imagery
• Pixabay sometimes performs better for technical or niche topics

The learning engine allows the system to automatically favor the providers that historically deliver the best results.

⸻

Provider Scoring Model

Each provider should receive a quality score based on the performance of previously downloaded images.

Example scoring factors:

Factor	Weight
image relevance	40%
visual clarity	25%
overlay compatibility	20%
duplicate rejection rate	15%

Provider scores should be updated whenever an image is accepted or rejected.

⸻

Example Provider Score Table

Provider	Score
Unsplash	0.82
Pexels	0.76
Pixabay	0.54

The system should prioritize providers with the highest scores when searching for new images.

⸻

Dynamic Provider Priority

Instead of a fixed provider order, the system should dynamically rank providers using their quality scores.

Example runtime priority:
	1.	Unsplash
	2.	Pexels
	3.	Pixabay

If Pixabay improves over time its ranking may change automatically.

⸻

Domain-Specific Learning

Provider performance may vary across domains.

Example:

Blog domain:

Unsplash → best performance
Pexels → good performance
Pixabay → weaker results

Resource domain:

Pexels → stronger dashboards / office visuals
Unsplash → good general imagery

The learning engine should maintain separate provider scores per domain.

⸻

Provider Score Storage

Provider performance scores should be stored in a configuration file.

Example file:

src/lib/image-system/providerScores.json

Example structure:

{
  "blog": {
    "unsplash": 0.82,
    "pexels": 0.76,
    "pixabay": 0.54
  },
  "resources": {
    "pexels": 0.81,
    "unsplash": 0.74,
    "pixabay": 0.48
  }
}


⸻
# 23. Image Safety & License Verification System

The image pipeline must ensure that every downloaded image is safe to use and compliant with licensing rules before it is stored in the system.

Even when using royalty-free providers, images may still contain brand logos, identifiable people, or restricted editorial content. This safety layer prevents accidental misuse.

---

### Purpose

The safety system protects the site from:

• license violations  
• trademark exposure  
• brand conflicts  
• unsafe or misleading imagery  

It also ensures all images meet production-ready standards before entering the image library.

---

### Safety Verification Pipeline

candidate image  
↓  
license validation  
↓  
logo detection  
↓  
brand detection  
↓  
face / model check  
↓  
approve or reject  

---

### License Validation

Each provider response should include license metadata.

The system must verify:

• image license type  
• attribution requirements  
• editorial restrictions  

Reject images that:

• require attribution  
• are marked as editorial use only  
• have unclear licensing metadata  

---

### Logo & Brand Detection

Images containing visible brand logos should be rejected to avoid trademark exposure.

Examples to reject:

• visible Apple or Samsung logos  
• recognizable product branding  
• branded storefront signage  

Detection methods may include:

• lightweight logo detection models  
• edge pattern detection for brand shapes  

---

### Face & Model Safety

Images containing identifiable people should be evaluated carefully.

Preferred images:

• generic workplace scenes  
• teams collaborating  
• non-identifiable individuals  

Avoid images where:

• a single person dominates the frame  
• a recognizable public figure appears  

---

### Content Safety Rules

Reject images that contain:

• political content  
• medical imagery unrelated to context  
• violent or disturbing scenes  
• misleading staged scenarios  

Images must remain neutral and professional.

---

### Acceptance Rules

An image is accepted only if:

• license is valid  
• no visible brand logos  
• subject is appropriate  
• content is safe  

If any rule fails, the system must skip the image and fetch the next candidate.

---

### Result

The Image Safety & License Verification System ensures:

• legal safety  
• brand protection  
• consistent professional imagery  

This final layer makes the automated image pipeline production-ready.

---

# 24. blog and Resource Cover Style System

Even when images come from different providers, blog featured images should maintain a consistent visual identity across the site.

The Blog Cover Style System standardizes overlays, typography, color treatment, and spacing so all blog covers feel part of the same design system.

---

### Purpose

Without a style system, featured images from different providers can look inconsistent.

The style engine ensures:

• consistent typography
• consistent overlay gradients
• predictable title placement
• unified visual identity

---

### Style Pipeline

raw image
↓
brightness detection
↓
overlay selection
↓
title layout engine
↓
brand style rendering
↓
export optimized cover

---

### Overlay Rules

The system should automatically choose an overlay gradient based on brightness detection.

Examples:

Dark images:

rgba(255,255,255,0.30)

Bright images:

rgba(0,0,0,0.45)

Gradient direction:

Top → Bottom

This ensures strong text readability.

---

### Typography Rules

Featured image titles must follow strict typography rules.

Font weight:

700

Maximum font size:

64px

Minimum font size:

28px

Maximum lines:

2

Alignment:

center

Text width:

maximum 70% of image width

---

### Safe Layout Grid

All cover images should use a safe layout grid.

Safe zone:

• center alignment
• 15% padding from edges

This prevents titles from being cropped on different devices.

---

### Visual Consistency

Additional visual consistency rules:

• avoid overly saturated images
• prefer neutral lighting
• avoid extremely busy scenes

Images should remain readable even after overlay and title rendering.

---

### Result

The Blog Cover Style System ensures:

• consistent blog visuals
• stronger brand identity
• better readability
• predictable design output

---

# 25. Image Generation Queue System

Bulk image generation (for dozens of blogs, resources, and case studies) should not run as a single uncontrolled process. Instead, the system should use a queue that schedules and processes image jobs safely.

The queue prevents API rate limit violations, avoids memory spikes, and allows generation to resume safely after interruptions.

---

### Purpose

The queue system ensures:

• safe bulk processing  
• compliance with API rate limits  
• recoverable generation after failures  
• controlled processing order  

This becomes critical when generating images for large content batches.

---

### Queue Pipeline

scan content  
↓  
create image jobs  
↓  
add jobs to queue  
↓  
worker processes job  
↓  
download image  
↓  
process image  
↓  
update index  

---

### Job Structure

Each queued job should contain:

• content domain (blog, resource, industry, case-study)  
• post slug  
• image type (featured or content)  
• generated search queries  

Example job:

{
“domain”: “blog”,
“slug”: “lead-response-mistakes”,
“imageType”: “featured”,
“queries”: [
“business call center”,
“customer service phone team”
]
}

---

### Rate Limit Protection

The queue worker must respect the global API rule:

Maximum downloads: **50 images per hour**

Processing logic:

if hourly limit reached  
↓  
pause queue  
↓  
resume next hour  

---

### Retry Logic

If an image job fails (no results, rejected by filters, network error), the job should retry with the next query or provider.

Example retry order:

1. next semantic query  
2. next provider (Unsplash → Pexels → Pixabay)  
3. fallback query generation  

After several failures the job should be logged and skipped.

---

### Queue Storage

The queue state should be stored so generation can resume after interruptions.

Example file:

src/lib/image-system/imageQueue.json

Example structure:

[
{
“domain”: “blog”,
“slug”: “lead-response-mistakes”,
“status”: “pending”
},
{
“domain”: “resource”,
“slug”: “crm-pipeline-architecture”,
“status”: “completed”
}
]

---

### Queue Worker Commands

Example CLI commands:

npm run images:queue:start
npm run images:queue:status
npm run images:queue:resume

These commands allow controlled batch generation.

---

### Result

The Image Generation Queue System ensures:

• safe bulk image generation  
• predictable processing  
• strong reliability  
• easy recovery from failures  

This makes the image automation pipeline scalable as the content library grows.

---

# 26. Future Improvements

Possible future upgrades:

• provider quality learning improvements  
• improved semantic query models  
• image caching layer  
• advanced visual relevance models  
• deeper AI image understanding


⸻
