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

<!-- WHERE THIS FITS -->
<!-- Purpose: Blueprint definitions for page types — #4 in authority stack -->
<!-- Depends on: CONTENT-GRAPH-SYSTEM.md -->
<!-- Used by: page templates, content validation -->

# CONTENT BLUEPRINT SYSTEM (LOCKED)

Status: Governing Document
Version: 1.0
Last Updated: 2026-03-26

Extracted from: CONTENT-INVENTORY.md (planning/)

---

## Purpose

This document defines the content archetypes, section structures, template mappings, and writing rules used to create blog posts, resources, and case studies in the MindWP system.

This document answers: **What structural shape does each content type take?**

Governing architecture rules (hierarchy, exposure rules, production workflow) are defined in **CONTENT-SYSTEM-ARCHITECTURE.md**.

Graph ontology, metadata standards, and relationship resolution are defined in **CONTENT-GRAPH-SYSTEM.md**.

Positioning, copy voice, and CTA standards are defined in **FOUNDATION-AND-POSITIONING.md**.

Content inventories and planning tables remain in:

- planning/CONTENT-INVENTORY.md

---

# ===== PART 1: BLOG ARCHETYPES =====

---

## Blog Architecture Role

The blog layer sits at the top of the editorial discovery system.

Content flow:

Blog → Resource → Industry → Service

Role of each layer:

- Blog: captures search demand around problems, trends, breakdowns, and mistakes.
- Resource: explains the evergreen framework or system behind the problem.
- Industry: contextualizes the framework for a specific market.
- Service: stays conversion-focused and explains implementation.

Architectural rule:

Blogs feed authority into resource hubs. They are not standalone authority targets. Every blog post must support a deeper content node in the architecture.

---

## Allowed Template Sections

All blog archetypes should be built from supported template sections only:

- introduction
- content
- takeaways
- quote
- steps
- checklist
- image
- callout
- faq
- cta

### FAQ Rule

FAQ should be rare. Use it only when search intent clearly suggests clarification is necessary or when a post covers a system that creates repeatable reader questions. If FAQ is used, it must appear before `cta`. `cta` must always be the final section.

---

## System Context Rule

Every article must establish system context using this placement logic:

- introduction
- system context
- main sections
- takeaways
- cta

System context is not a separate template type. It is usually implemented as the first `content` section after the introduction.

The system context block must explain:

- what system layer the problem belongs to
- why the issue is operational rather than purely promotional
- which deeper resource or framework the post should naturally lead into

---

## Section Diversity Rule

- Do not repeat the exact same section sequence across multiple posts.
- Posts inside the same archetype must vary at least one structural component such as `quote`, `checklist`, `steps`, `image`, `callout`, or `faq`.
- Two posts may share the same archetype, but they must not feel templated in identical order and cadence.
- Diversity should come from structure and emphasis, not random section insertion.

---

## Blog Insight Writing Rule

Every article must contain two explicit insight statements:

- **Observation**: what is happening in the business, market, or workflow.
- **Implication**: why that observation changes the decision, risk, or system requirement.

These insight statements should appear inside the main body, usually in `content` or `callout` sections. They should not be treated as decorative copy.

---

## Blog Archetypes

### Problem Analysis

Purpose: Explain why a business problem happens and where the operational breakdown starts.

Recommended section structure:

- introduction
- content (system context)
- content
- content
- checklist
- callout
- takeaways
- cta

### Industry Breakdown

Purpose: Explain how a specific industry experiences a repeated operational issue.

Recommended section structure:

- introduction
- content (system context)
- content
- quote
- content
- steps
- checklist
- takeaways
- cta

### System Explanation

Purpose: Explain how a business system works at a conceptual level without becoming a resource page.

Recommended section structure:

- introduction
- content (system context)
- content
- steps
- checklist
- quote
- takeaways
- cta

### Operational Mistake

Purpose: Highlight a repeatable mistake, its downstream cost, and the correct system response.

Recommended section structure:

- introduction
- content (system context)
- content
- callout
- content
- checklist
- quote
- takeaways
- cta

### Trend Analysis

Purpose: Interpret new market or technology changes and explain practical implications.

Recommended section structure:

- introduction
- content (system context)
- image
- content
- callout
- quote
- takeaways
- cta

---

## Blog Metadata Model

Every blog post must define the following fields:

- slug
- title
- primaryKeyword
- supportingKeywords
- category
- publishDate
- systems[]
- industries[]
- topics[]
- tags[]
- seo
- sections[]

Metadata rules:

- slug: kebab-case URL identifier.
- title: editorial headline containing the primary keyword naturally.
- primaryKeyword: primary search target.
- supportingKeywords: secondary semantic variations and adjacent phrases.
- category: one of the locked organizational categories.
- publishDate: realistic ISO date aligned to the publishing timeline.
- systems[]: canonical system mappings.
- industries[]: canonical industry mappings.
- topics[]: canonical topic mappings.
- tags[]: editorial labels for browsing and filtering.
- seo: title, description, canonical, keywords, and open graph metadata.
- sections[]: only supported template section types.

FAQ schema rule: FAQ schema is generated only from explicit faq sections. Checklist and steps content must never be treated as FAQ content.

---

## Blog Categories

Final locked category list:

- smart-website-systems
- ai-lead-handling
- local-authority-seo
- crm-automation
- reputation-review
- home-services-industry
- beauty-personal-care-industry
- future-local-business-tech

Rule: Categories are organizational only. SEO targeting happens through metadata fields such as primaryKeyword, supportingKeywords, systems[], industries[], topics[], and search intent.

---

# ===== PART 2: RESOURCE ARCHETYPES =====

---

## Resource Architecture Role

Resources explain systems, frameworks, and operational structures used by service businesses.

Resource layers:

- **Global System Resources** — explain a system framework once at the system level.
- **Industry Context Resources** — demonstrate how the system works inside real verticals.

Industry resources must reference system frameworks rather than re-teaching the full system theory.

---

## Resource Archetypes (Locked)

Resources should follow defined structural archetypes. This prevents every resource from looking identical while maintaining architectural consistency.

### Framework Resource

Explains the structure of a system.

Conceptual sections:

hero, takeaways, problem, comparison, solution-cards, implementation-considerations, common-mistakes, cta, related

Example topics: Lead Automation Framework, CRM Pipeline Architecture, Review Generation Systems.

### Workflow Resource

Explains a step-by-step operational workflow.

Conceptual sections:

hero, problem, business-costs, step-framework, checklist, implementation-considerations, cta, related

Sections may be reduced for simpler workflow resources if the topic does not require full operational depth.

Example topics: Follow-Up Automation, Missed Call Recovery, Booking Workflows.

### Diagnostic Resource

Explains the root causes behind operational problems before introducing the system solution. Targets problem-aware search intent.

Conceptual sections:

hero, problem, root-causes, industry-data, system-fix, solution-cards, optional-faq, cta, related

Purpose: Bridge between blog insights and system frameworks.

Rule: Diagnostic resources should be limited to high-value operational problems. Avoid creating diagnostic content for every industry unless the problem represents a major operational pattern.

Example topics: Why Service Businesses Lose Leads, Why HVAC Companies Miss Emergency Calls.

### Industry Example Resource

Shows a system applied to a real industry.

Conceptual sections:

hero, problem, industry-context, workflow, solution-cards, implementation-notes, optional-faq, cta, related

Example topics: Roofing Lead Handling Example, Salon Review Generation.

### Implementation Guide Resource

Explains practical system implementation details.

Conceptual sections:

hero, problem, technical-context, step-framework, implementation-notes, common-mistakes, cta, related

Example topics: CRM Pipeline Setup, Website + CRM Integration.

---

## Archetype → Template Section Mapping (Locked)

The archetypes above define conceptual structure. However, the runtime resource template system only supports a fixed set of section types.

### Allowed Template Section Types

Only the following section types are allowed in resource files:

hero, takeaways, problem, business-costs, diy, solution-cards, case, comparison, templates, checklist, faq, cta, related-resources, sidebar-cta

### Framework Resource Mapping

| Conceptual Section | Template Section Type |
|--------------------|-----------------------|
| hero | hero |
| system context | takeaways |
| problem | problem |
| comparison | comparison |
| solution cards | solution-cards |
| implementation considerations | diy |
| common mistakes | case |
| faq | faq |
| call to action | cta |
| related resources | related-resources |

Example section order:

hero, takeaways, problem, comparison, solution-cards, diy, case, faq, cta, related-resources

### Workflow Resource Mapping

| Conceptual Section | Template Section Type |
|--------------------|-----------------------|
| hero | hero |
| system context | takeaways |
| problem | problem |
| business costs | business-costs |
| step framework | diy |
| checklist | checklist |
| faq | faq |
| call to action | cta |
| related resources | related-resources |

Example section order:

hero, takeaways, problem, business-costs, diy, checklist, faq, cta, related-resources

### Diagnostic Resource Mapping

| Conceptual Section | Template Section Type |
|--------------------|-----------------------|
| hero | hero |
| system context | takeaways |
| problem | problem |
| root causes | comparison |
| industry data | case |
| system fix | solution-cards |
| faq | faq |
| call to action | cta |
| related resources | related-resources |

Example section order:

hero, takeaways, problem, comparison, case, solution-cards, faq, cta, related-resources

### Industry Example Resource Mapping

| Conceptual Section | Template Section Type |
|--------------------|-----------------------|
| hero | hero |
| system context | takeaways |
| problem | problem |
| industry context | case |
| workflow | diy |
| solution cards | solution-cards |
| faq | faq |
| call to action | cta |
| related resources | related-resources |

Example section order:

hero, takeaways, problem, case, diy, solution-cards, faq, cta, related-resources

### Implementation Guide Resource Mapping

| Conceptual Section | Template Section Type |
|--------------------|-----------------------|
| hero | hero |
| system context | takeaways |
| problem | problem |
| technical context | case |
| step framework | diy |
| implementation notes | templates |
| common mistakes | case |
| faq | faq |
| call to action | cta |
| related resources | related-resources |

Example section order:

hero, takeaways, problem, case, diy, templates, faq, cta, related-resources

---

## Resource Template Rules

Template behavior:

- Hero section — required
- CTA section — always included via template
- Related section — always included via template

FAQ section:

Optional. FAQ should only appear when: search intent indicates questions, or the topic benefits from clarification. Resources should not force FAQ blocks unnecessarily.

---

## Resource Metadata Model

Every resource must define the following metadata:

- Title
- industries[]
- systems[]
- topics[]
- Primary Keyword
- Intent Type

Allowed intent types: pain-based, framework, comparison, implementation, workflow, diagnostic.

---

## Resource Structure Standard

Each resource should follow this flow:

1. Problem Explanation
2. Why It Happens
3. System-Based Fix
4. Step-by-Step Framework
5. Implementation Considerations
6. Common Mistakes
7. Light CTA

---

# ===== PART 3: CASE STUDY ARCHETYPES =====

---

## Case Study Architecture Role

Case studies function as the proof layer of the system-first content architecture.

Authority flow:

Blog / Resource → Industry Page → Case Study → Service Implementation (reference only)

Case studies validate how a system was implemented inside a real industry environment. They should always sit beneath an industry page and never be positioned as standalone marketing pages.

Case studies support industries, not services. They must never be displayed or listed on service pages.

---

## Case Study Archetypes

Case studies follow one of three archetypes depending on the scenario.

### System Implementation Case

Use when the case study demonstrates how a specific system was built and deployed.
Focus: architecture, technical workflow, system design decisions.
Example: Smart Website Infrastructure Implementation.

### Operational Problem Case

Use when the case study focuses on a recurring operational failure and the system that resolved it.
Focus: problem identification, root cause, system response.
Example: Storm Season Lead Handling System.

### Revenue Recovery Case

Use when the case study demonstrates how lost or missed revenue was recovered through automation.
Focus: revenue impact, reactivation workflows, measurable business outcomes.
Example: HVAC Maintenance Plan Reactivation.

---

## Case Study Page Structure

Case studies may contain 4–9 sections depending on complexity.

### Required Sections

1. Hero
2. Operational Problem
3. System Implementation
4. Consultation CTA

### Optional Sections

5. Workflow Breakdown
6. Results
7. Metrics
8. Frameworks Used
9. Lessons

Every case study must include the four required sections. Optional sections should be added when the scenario has enough depth to justify them.

---

## Section Flexibility Rule

Case studies should not follow identical section layouts. Depending on the complexity of the scenario, different section combinations may be used.

### Structure A — Operational Case

Hero → Operational Problem → System Implementation → Workflow Breakdown → Results → Consultation CTA

### Structure B — Revenue Recovery Case

Hero → Operational Problem → System Implementation → Results → Metrics → Consultation CTA

### Structure C — System Architecture Case

Hero → Operational Problem → System Implementation → Workflow Breakdown → Frameworks Used → Lessons → Consultation CTA

Guidelines:

- Do not force every case study to include all optional sections.
- Use metrics only when meaningful data exists.
- Simpler cases may use only 4–5 sections.
- Complex cases may expand to 7–9 sections.

---

## Case Study Cluster Rules

Case studies should follow cluster rules similar to the blog and resource systems.

Each case study should be unique across the following combination:

industry + operational problem + system

Clusters should represent distinct operational scenarios rather than repeating the same problem narrative.

---

## Case Study Metadata Structure

Each case study should track:

Required:
- UI Label (Short Title)
- SEO Title (Problem-First Title)
- Slug
- industries[]
- systems[]
- resources[]
- Archetype
- Operational Problem
- Implementation Summary
- Outcome

Optional:
- topics[]
- industrySlug
- primarySystemLayer
- Scenario Type
- resultType

The resources[] field defines the frameworks used in the case study, connecting it to the specific resource frameworks that explain the methodology behind the implementation.

---

## Case Study Writing Rules

Case studies must read like operational documentation rather than marketing stories.

Writing guidelines:

- Describe the real operational environment before introducing the solution.
- Explain what system components were implemented and why they were chosen.
- Show how the workflow changed after implementation.
- Use clear operational language instead of promotional language.

Avoid writing patterns such as:

- generic marketing storytelling
- vague success claims
- "digital transformation" style narratives

Prefer concrete operational explanations such as:

- what problem existed
- what workflow was implemented
- what systems were connected
- what business outcome occurred

Example contrast:

Weak: "The company improved their digital presence and saw great results."

Correct: "The business previously missed 6–10 calls per week during peak hours. A missed-call recovery system was implemented to automatically respond by SMS, log the lead in the CRM pipeline, and trigger follow-up tasks for the service team."

---

## Case Study Hub Architecture

The Case Study Hub is the central listing page that organizes all case studies across industries.

Purpose: Provide a single location to explore implementation proof, support internal linking to industry pages, surface system implementation examples.

Primary grouping: Industries (not services).

### Category Rule

Case studies do NOT use independent content categories. Industry pages act as the natural grouping system.

The system must NOT introduce fields such as: caseStudyCategory, caseStudyGroup, caseStudyTopic.

Case studies inherit organization from the industries[] metadata field instead.

---

## System → Case Study Support Map

This map ensures every core system has proof scenarios:

- **Smart Website Systems**: Roofing Website Rebuild With CRM, Smart Website Infrastructure Implementation
- **AI Lead Handling Systems**: Storm Season Lead Handling System, HVAC Emergency Lead Routing, Auto Repair Missed Call Recovery
- **Reputation & Review Systems**: Salon Review Generation Automation
- **Local Authority & SEO Systems**: Local Authority System Impact
- **Revenue Growth Systems**: Roofing Estimate Follow-Up Automation, HVAC Maintenance Plan Reactivation, Appointment Reminder No-Show Reduction

---

END OF DOCUMENT.
