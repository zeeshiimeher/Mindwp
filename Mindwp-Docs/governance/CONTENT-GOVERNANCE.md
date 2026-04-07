# SYSTEM GOVERNANCE NOTICE (LOCKED)

This document is part of the MindWP Core Architecture System.

Authoritative Sources:

- FOUNDATION-AND-POSITIONING.md
- CONTENT-SYSTEM-ARCHITECTURE.md
- CONTENT-GRAPH-SYSTEM.md
- CONTENT-BLUEPRINT-SYSTEM.md
- CONTENT-GOVERNANCE.md

Rules:

- No other documents may define architecture rules
- Archived documents must not be used as reference
- Planning files must not override system rules
- If conflict exists → core documents always win

---

# CONTENT GOVERNANCE

Status: Active Control Layer
Version: 1.0
Last Updated: 2026-03-27

---

## 1. Purpose

This document is a control layer. It does not replace or duplicate existing architecture documents.

It exists to answer one question:

**When editing content, what rules apply and in what order?**

Architecture documents define what the system is. This document defines how content is written, edited, and validated within that system.

It governs:
- How AI and human editors approach content changes
- What is allowed in each domain and section
- What intensity level is appropriate for each edit type
- What content must never be touched without explicit approval

---

## 2. Source of Truth Mapping

Each governing concern has exactly one authoritative source. This document references them — it does not redefine them.

| Concern | Source Document |
|---|---|
| Service hierarchy, tier structure, positioning | FOUNDATION-AND-POSITIONING.md |
| Voice, tone, banned vocabulary, CTA standards | FOUNDATION-AND-POSITIONING.md §Content Writing Playbook |
| Content archetypes, section structures, template mappings | CONTENT-BLUEPRINT-SYSTEM.md |
| Content graph ontology, metadata, relationship rules | CONTENT-GRAPH-SYSTEM.md |
| Service architecture, production rules, exposure rules | CONTENT-SYSTEM-ARCHITECTURE.md |
| Content planning (blogs, resources, case studies) | CONTENT-INVENTORY.md |

**Conflict resolution:** If this document conflicts with any source listed above, the source document wins.

---

## Rule Priority Order

When editing content, rules must be applied in this order:

1. Architecture constraints (structure, metadata, system rules)
2. Domain behavior rules
3. Section behavior rules
4. Vocabulary rules
5. Edit intensity rules

If a conflict occurs, the higher priority rule wins.

---

## 3. Domain Behavior Rules

Each content domain has a different purpose and a different writing expectation. Editors must identify the domain before making any change.

### Services

Purpose: Explain what MindWP builds, how it works, and why it matters to a business owner.

Writing expectation:
- Clear positioning — not sales copy
- Outcome-focused — describe what changes for the business
- Calm confidence — no hype, no urgency
- Smart Website gravity must be maintained across all service pages

### Blog

Purpose: Capture search demand around problems, trends, and mistakes. Feed authority into resources and service pages.

Writing expectation:
- Educational and practical
- Problem-first — open with the operational problem
- System context early — connect the problem to the relevant system layer
- Plain English — explain things a business owner would recognise

### Resources

Purpose: Explain systems, frameworks, and operational structures. Evergreen operational knowledge.

Writing expectation:
- Framework-focused — explain how something works
- No trend commentary or opinion
- Structured and thorough
- Should feel like reference material, not marketing

### Case Studies

Purpose: Prove that a system was implemented in a real industry environment.

Writing expectation:
- Operational documentation, not marketing stories
- Describe what existed before, what was implemented, and what changed
- Concrete and specific — avoid vague claims
- No hype language — results should speak for themselves

### Features

Purpose: Explain specific capabilities within the system architecture.

Writing expectation:
- Clear and functional
- Describe what it does and why it matters
- Stay within the system framing — features support systems, they are not standalone products

---

## 4. Section Behavior Rules

Within each domain, different sections have different jobs. The section determines the writing approach.

### Hero

Job: Establish what the page is about and why it matters.
Rule: Must answer "what is in it for me" in the first sentence. No abstract framing. No banned vocabulary.

**Featured image:** Every content page hero has an automatically generated featured image (`featured-overlay.webp`) with cinematic SVG overlay. These are pipeline outputs, not manually created assets. To regenerate, use `npx tsx scripts/generators/image-generate.ts --mode test --domain <domain> --force`. Image system architecture: `Automatic-Image-Generation-System/IMAGE-SYSTEM-ARCHITECTURE.md`.

### Problem

Job: Describe the operational issue the reader recognises.
Rule: Open with a specific daily situation. Use concrete examples. No solutions in this section.

### Solution / System Implementation

Job: Explain what system addresses the problem and how it works.
Rule: Outcome-focused. Describe what changes. Avoid feature lists — describe operational shifts.

### CTA

Job: Invite the next step without pressure.
Rule: CTA behavior → **SYSTEM-CONTRACT.md**. Editors must not modify CTA labels, hrefs, or structure.

Primary CTA: "Start a Conversation" → /contact (LOCKED). Any deviation is a validation failure.

> **CTA DESTINATION LOCK (27 March 2026):** CTA destination is locked to `/contact`. The `/conversation` page has been REMOVED (Phase 10 Decision 6). Any change to CTA destination requires a full system update including validators, docs, and routing.

### FAQ

Job: Answer real questions a business owner would ask.
Rule: Answers must be short and practical. No paragraph-length marketing. Questions must sound natural.

### Takeaways

Job: Summarise the key points.
Rule: Each point must be a clear, standalone statement. No filler.

### Checklist / Steps

Job: Provide actionable structure.
Rule: Each item must be specific and useful. No padding or abstract items.

### Quote / Testimonial

Job: Provide social proof or human perspective.
Rule: Must never be edited without explicit approval. Quotes are protected content.

---

## 5. Vocabulary Rules

Vocabulary governance is defined in FOUNDATION-AND-POSITIONING.md §2 Banned Vocabulary and §3 Approved Vocabulary Patterns.

This section defines how those rules are applied during editing.

### Application rules

1. If a banned phrase appears in user-visible content, the sentence must be rewritten — not just the phrase.
2. Mechanical find-and-replace is not allowed. Each replacement must consider the domain, section, and surrounding context.
3. Banned phrases in headings must be rewritten to plain English alternatives.
4. Banned phrases in keyword metadata fields are subject to the same rules.
5. Banned phrases in code comments, JSDoc, or non-rendered infrastructure are excluded from vocabulary governance.

### Validation

The vocabulary validator (`scripts/validators/validate-vocabulary.mjs`) scans domain data and content files for banned phrases. It must pass with zero violations before any content batch is considered complete.

---

## 6. AI Editing Rules

AI systems editing MindWP content must follow this execution model. No exceptions.

### Before editing

AI must:
1. Read the full file
2. Identify the domain (blog, service, resource, case study, feature)
3. Identify the section being edited (hero, problem, solution, CTA, FAQ, etc.)
4. Understand the intent of the section within the page
5. Check for banned vocabulary
6. Then — and only then — make the edit

### During editing

AI must:
- Preserve the existing TypeScript object structure — keys, imports, icons, and data contracts must not change
- Edit only text values unless explicitly instructed otherwise
- Keep edits proportional to the problem — do not rewrite a paragraph to fix one word
- Maintain the tone appropriate to the domain and section
- Use approved vocabulary patterns

### AI must NOT

- Replace blindly — no global find-and-replace across files
- Rewrite aggressively — fixing a banned phrase does not justify restructuring a paragraph
- Change structure — sections must not be added, removed, or reordered unless explicitly instructed
- Reopen architecture — AI operates in execution mode, not strategy mode
- Introduce new terminology — if a phrase does not exist in the approved vocabulary, do not invent it

### After editing

AI must:
1. Run `npx tsc --noEmit` to verify TypeScript validity
2. Run `npm run validate-all` to verify all validators pass
3. Confirm CTA consistency (label + href) has not been broken

### Partial Editing Principle

Edits must be minimal and proportional.

- Fix the smallest possible unit (word → sentence → paragraph)
- Do not expand scope unnecessarily
- Do not improve unrelated content

Goal: improve accuracy, not rewrite content.

### Context Boundary Rule

Edits must stay within the current section.

- Do not introduce ideas from other sections
- Do not shift content between sections
- Do not merge or split sections

Each section has a defined role and must remain intact.

---

## 7. Edit Intensity Levels

Not every edit needs the same depth. Use the appropriate level.

### Level 1 — Vocabulary Fix

Scope: Replace a banned phrase with an approved alternative.
Approach: Read context. Rewrite the sentence naturally. Do not touch surrounding content.
Example: "operational flow around booking" → "how enquiries flow through booking"

### Level 2 — Tone Correction

Scope: Fix a sentence or paragraph that sounds like hype, AI marketing copy, or consultant jargon.
Approach: Rewrite to sound like a calm human explaining something useful. Keep the same information.
Example: "Our revolutionary system unlocks explosive growth" → "The system connects your website to your CRM so enquiries are handled automatically"

### Level 3 — Section Rewrite

Scope: Rewrite a full section to improve clarity, structure, or positioning.
Approach: Understand the section's job (see §4). Rewrite to fulfil that job better. Keep the same section type and position in the page.
Requires: Explicit instruction. AI must not escalate to Level 3 unprompted.

### Level 4 — Page Rewrite

Scope: Rewrite all content on a page.
Approach: Follow domain rules, section rules, vocabulary rules, and CTA standards. Maintain existing section structure unless restructuring is explicitly approved.
Requires: Explicit instruction and governance review.

---

## 8. Protected Content Rules

Some content must never be changed without explicit approval.

### Always protected

- Client quotes and testimonials — exact wording must be preserved
- Metric claims and statistics — numbers must not be invented, rounded differently, or rephrased
- Structural architecture decisions — tier structure, service hierarchy, Smart Website gravity
- CTA contracts — approved labels and hrefs must not be changed
- Metadata contracts — slug, systems[], industries[], topics[] values defined by the content graph
- Generated image assets — featured-clean.webp, featured-overlay.webp, and all files in `public/images/` are pipeline outputs. Do not manually edit, crop, or replace. Regenerate via the image pipeline CLI.

### Conditionally protected

- Section headings — may be rewritten for vocabulary compliance, but intent must be preserved
- Keywords metadata — may be updated for vocabulary compliance, but targeting intent must be preserved
- FAQ questions — may be rewritten for tone, but the underlying question must remain the same

### Never protected

- Filler copy, padding, or throat-clearing sentences
- Banned vocabulary in any context
- Hype language in any context

---

## 9. Validation Alignment

Content governance is enforced through the validation pipeline. Validators and governance rules must stay aligned.

### Current validators

| Validator | What it checks | Governance section |
|---|---|---|
| validate-vocabulary | Banned phrases in domain data/content files | §5 Vocabulary Rules |
| validate-cta | CTA label and href consistency | §4 Section Behavior Rules (CTA) |
| validate-structure | Page structure compliance | §4 Section Behavior Rules |
| validate-blog | Blog metadata and section rules | §3 Domain Behavior Rules (Blog) |
| validate-resources | Resource metadata and structure | §3 Domain Behavior Rules (Resources) |
| validate-service-structure | Service page compliance | §3 Domain Behavior Rules (Services) |
| validate-feature-structure | Feature page compliance | §3 Domain Behavior Rules (Features) |
| validate-industry-structure | Industry page compliance | Content architecture |
| validate-case-study-structure | Case study compliance | §3 Domain Behavior Rules (Case Studies) |

### Governance → Validator gap

The following governance rules are not yet enforced by automated validators:

- Edit intensity tracking

Previously identified gaps now resolved:

- ✅ Section-level tone validation → `validate-structure.mjs` TONE_RESTRICTED_DIRS (case studies)
- ✅ Banned vocabulary in headings → `validate-structure.mjs` HEADING_BANNED_WORDS
- ✅ CTA placement rules → `validate-structure.mjs` CTA_PLACEMENT_RULES

These gaps were tracked under Phase 8 tasks (TASK-071, TASK-072) — now resolved.

### Future Validation Tasks

The following governance rules should be implemented as validators:

- Edit intensity tracking (optional advanced)

Previously listed as future — now implemented:

- ✅ CTA placement (CTA must be the final section) → TASK-071
- ✅ Heading-level vocabulary validation → TASK-072
- ✅ Section-level tone validation (no hype in restricted domains) → TASK-072

These have been implemented. See validation layer for enforcement.

---

## 10. Controlled Rewrite System

Content rewriting is governed by this section. No automatic rewriting is permitted. All rewrites require manual approval.

### Rewrite Eligibility

A page is eligible for rewriting only when ALL conditions are met:

1. The validation system is fully stable (all 19 validators pass)
2. The page has at least one identified issue (vocabulary violation, tone problem, or structural gap)
3. The rewrite has been explicitly requested — AI must never initiate rewrites unprompted

### Approval Flow

Rewrites follow a strict manual approval process:

1. **Identify** — Flag specific pages and specific issues (vocabulary, tone, clarity)
2. **Scope** — Define the edit intensity level (§7) for each flagged issue
3. **Approve** — Human must explicitly approve the scope before any edit begins
4. **Execute** — Apply edits within the approved scope only
5. **Validate** — Run `npx tsc --noEmit` and `npm run validate-all` after every edit batch
6. **Review** — Human reviews the output before the batch is considered complete

No step may be skipped. AI must not combine steps 2 and 4.

### What CAN Be Changed

- Banned vocabulary → approved alternatives (Level 1)
- Hype language → calm, factual copy (Level 2)
- Unclear sentences → clearer versions preserving the same information (Level 2)
- Section content that fails to fulfil its defined job per §4 (Level 3, requires approval)

### What CANNOT Be Changed

- Page structure — sections must not be added, removed, or reordered
- TypeScript object structure — keys, imports, types, data contracts
- Metadata — slug, systems[], industries[], topics[], keywords[]
- CTA contracts — label and href values
- Protected content — quotes, metrics, architecture decisions (see §8)
- System architecture — graph, authority engine, internal linking, validation pipeline
- Component hierarchy — UI components, renderers, templates
- Generated image assets — all files in `public/images/` (regenerate via pipeline CLI, do not edit manually)

### Scope Limits

- Maximum 5 pages per rewrite batch
- Each batch must be validated before starting the next
- Cross-domain rewrites (e.g. blog + services in one batch) are not allowed
- Full-site rewrites are prohibited — always work in small, validated batches

### Validation Requirements

Before a rewrite batch is considered complete:

1. `npx tsc --noEmit` = 0 errors
2. `npm run validate-all` = all validators pass
3. CTA label and href unchanged across all modified files
4. No new banned vocabulary introduced
5. No structural changes detected (section count and order unchanged)

### Rewrite Priority Order

When multiple pages need rewriting, prioritise in this order:

1. Service pages — highest business impact
2. Industry pages — local authority and targeting
3. Resource pages — evergreen authority content
4. Case study pages — proof content
5. Blog posts — search capture content
6. Feature pages — supporting content

Within each domain, prioritise pages with the most vocabulary violations first.

---

## Decision Framework (Mandatory)

### Purpose

Define how content guides user decisions instead of only presenting information.

### Core Rule

Every page must follow a Decision Progression Model.

### Decision Stages

1. Awareness — "Do I have this problem?"
2. Understanding — "What is this about?"
3. Trust — "Can I trust this?"
4. Evaluation — "Is this right for me?"
5. Decision — "Should I take action?"

### Section-Level Requirement

For every section:

- Define its Decision Stage
- Define User State
- Define Intended Outcome

### Enforcement Rules

- No section exists without a decision role
- Sections must follow logical progression
- Skipping stages must be intentional and documented

## Homepage Decision Flow Model (Critical)

### Objective

Ensure homepage guides users from clarity to decision without confusion.

### Required Flow Order

1. Clear Positioning (Hero)
2. Problem Recognition
3. Simple Definition (Core Concept)
4. Authority / Differentiation
5. System Understanding (How it works)
6. Trust / Proof
7. Decision Readiness
8. Primary CTA

### Critical Rules

- Core concept MUST be introduced early (within first 3 sections)
- Do NOT delay definition for curiosity
- Do NOT place primary CTA before understanding

## CTA Placement Logic

### Core Principle

CTA placement is based on user readiness, not layout or design.

### CTA Types

1. Early CTA (Low Pressure)
   - Optional
   - Exploration-focused
   - No decision expectation

2. Mid CTA (Contextual)
   - Reinforces understanding
   - Light intent

3. Primary CTA (Decision)
   - Only after trust + clarity
   - Direct action (Start Conversation)

### Forbidden Patterns

- CTA based on section count
- CTA placed before concept clarity
- CTA used only for visual balance

---

## 11. Code Comment System (LOCKED)

**Purpose:** Ensure all code comments describe system behavior, not development history.

### Rules

1. Comments MUST describe:
   - Purpose — why this code exists
   - Rules — what it enforces
   - Constraints — what must not change

2. Comments MUST NOT include:
   - TASK references (e.g. `TASK-051`, `TASK-112`)
   - Fix history (e.g. "fixed in v2", "was broken before")
   - Debug notes (e.g. `TODO`, `FIXME`, `HACK`)
   - Temporary notes (e.g. `TEMP:`, "remove after launch")

3. Use standard format:
   ```
   // PURPOSE: ...
   // RULE: ...
   // NOTE: ...
   ```

4. Code must remain understandable without git history.

5. Any PR adding historical comments should be rejected.

**Status: LOCKED — do not weaken or remove these rules.**

---

END OF DOCUMENT.
