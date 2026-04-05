# CASE STUDIES PLANNING INVENTORY
STATUS: WORKING INVENTORY
LAST UPDATED: 2026-03-12

This document defines the planned case study inventory for the MindWP ecosystem.

Case studies act as the proof layer of the architecture and must demonstrate how systems are implemented within real industry contexts.

Permanent rules for case studies live in:

- FOUNDATION-AND-POSITIONING.md
- BUSINESS-ARCHITECTURE.md
- CONTENT-ARCHITECTURE.md

This file only plans:

- case study scenarios
- industry coverage
- system relationships

---

# 1. Case Study Role in Architecture

## Case Study Architecture

Case studies function as the proof layer of the system-first content architecture.

Authority flow:

Blog / Resource
↓
Industry Page
↓
Case Study
↓
Service Implementation (reference only)

Case studies validate how a system was implemented inside a real industry environment. They should always sit beneath an industry page and never be positioned as standalone marketing pages.

---

Case studies validate system implementation inside industries.

Correct relationship:

SERVICE SYSTEM
↓
INDUSTRY PAGE
↓
CASE STUDY

Visual placement model:

INDUSTRY PAGE
↓
Case Studies Section
↓
Individual Case Study Page

This ensures case studies remain industry-context proof and never appear inside service pages.

Important rule:
Case studies support industries, not services. They must never be displayed or listed on service pages.

Case studies must NOT appear on service pages.

They should appear only in:

- industry pages (context proof)
- the case studies hub / listing page

---

# 2. Phase-1 Case Study Inventory

Phase-1 will contain 16–20 case studies.

This is enough proof coverage without creating unnecessary content overhead.

Case studies should focus on:

- operational problems
- system implementation
- structured outcomes

Avoid marketing-style storytelling.

---

# 3. System Coverage Targets

Each Tier-1 system should have supporting case studies.

Smart Website Systems
AI Lead Handling Systems
Reputation & Review Systems
Local Authority & SEO Systems
Revenue Growth Systems

---

# 3A. System → Case Study Support Map

This map clarifies which case studies demonstrate the implementation of each Tier-1 system.

Case studies remain attached to industry pages, but this mapping ensures every core system has proof scenarios.

## Smart Website Systems

Supporting Case Studies:
- Roofing Website Rebuild With CRM
- Smart Website Infrastructure Implementation

## AI Lead Handling Systems

Supporting Case Studies:
- Storm Season Lead Handling System
- HVAC Emergency Lead Routing
- Auto Repair Missed Call Recovery

## Reputation & Review Systems

Supporting Case Studies:
- Salon Review Generation Automation

## Local Authority & SEO Systems

Supporting Case Studies:
- Local Authority System Impact

## Revenue Growth Systems

Supporting Case Studies:
- Roofing Estimate Follow‑Up Automation
- HVAC Maintenance Plan Reactivation
- Appointment Reminder No‑Show Reduction

---

# 4A. Case Study Cluster Rules

Case studies should follow cluster rules similar to the blog and resource systems.

Cluster rules prevent duplication and keep proof scenarios distinct.

Each case study should be unique across the following combination:

industry + operational problem + system

Example:

Roofing + missed leads + AI Lead Handling
HVAC + missed leads + AI Lead Handling

But avoid duplicates like:

Roofing + missed leads + AI Lead Handling (duplicate scenario)

Clusters should represent distinct operational scenarios rather than repeating the same problem narrative.

---

# 4. Industry Coverage Targets

Case studies should prioritize the primary and expansion lanes.

Primary Industry
Home Services

Expansion Industry
Beauty & Personal Care

Coverage Industries
Automotive Services
Real Estate & Property Services
Legal & Professional Services
Local Appointment Businesses

---

# 5. Planned Case Study Scenarios (By Problem Cluster)

Case studies are grouped by operational problem cluster.
Each cluster includes scenarios across multiple industries where possible.
Some case studies may be classified as System-Level scenarios.  
These cases demonstrate the implementation of a system architecture rather than a single industry workflow.  
System-Level case studies may appear in multiple industry contexts or in the case study hub as cross-industry implementations.

## Lead Handling Failures

Storm Season Lead Handling System (Roofing)
SEO Title: Why Roofing Companies Lose Leads During Storm Season (And the Lead Handling System That Captured Them)

HVAC Emergency Lead Routing (HVAC)
SEO Title: Why HVAC Emergency Calls Get Missed (And the Routing System That Solved It)

HVAC Seasonal Lead Surge Handling (HVAC)
SEO Title: Why HVAC Companies Lose Leads During Seasonal Demand (And the System That Stabilized Lead Handling)

Auto Repair Missed Call Recovery (Automotive)
SEO Title: Why Auto Repair Shops Lose Calls (And the Recovery System That Captures Them)

Real Estate Inquiry Routing (Real Estate)
SEO Title: Why Real Estate Inquiries Get Lost (And the Routing System That Organizes Them)

## Follow‑Up Failures

Roofing Estimate Follow‑Up Automation (Roofing)
SEO Title: Why Roofing Estimates Go Unanswered (And the Follow‑Up System That Fixed It)

Realtor Lead Follow‑Up Automation (Real Estate)
SEO Title: Why Realtor Leads Go Cold (And the Follow‑Up System That Revives Them)

Automotive Service Reminder Automation (Automotive)
SEO Title: How Service Reminder Automation Brings Auto Repair Customers Back

HVAC Maintenance Plan Reactivation (HVAC)
SEO Title: How HVAC Companies Recover Lost Maintenance Revenue With Reactivation Automation

## Booking System Breakdowns

Salon Booking Automation (Salon)
SEO Title: Why Salon Booking Systems Break Down (And the Automation That Fixed It)

Law Firm Consultation Booking System (Legal)
SEO Title: Why Law Firm Consultations Get Missed (And the Booking System That Captures Them)

Appointment Business Booking Automation (Local Appointment)
SEO Title: Why Appointment‑Based Businesses Lose Bookings (And the Automation System That Prevents It)

Law Firm Client Intake Automation (Legal)
SEO Title: How Automation Streamlines Client Intake for Small Law Firms

## No‑Show & Reminder Failures

Salon No‑Show Reduction System (Salon)
SEO Title: Why Salon Clients Miss Appointments (And the Automation That Reduced No‑Shows)

Appointment Reminder No‑Show Reduction (Local Appointment)
SEO Title: How Appointment Reminder Systems Reduce No‑Shows for Local Businesses

## Review Generation Problems

Salon Review Generation Automation (Salon)
SEO Title: Why Salons Struggle to Get Reviews (And the System That Generates Them Automatically)

## Revenue Visibility Issues

CRM Pipeline Visibility Transformation (System‑Level)
SEO Title: Why Service Businesses Lack Revenue Visibility (And the CRM Pipeline System That Solved It)

## Smart Website & Infrastructure Problems

Roofing Website Rebuild With CRM (Roofing)
SEO Title: Why Roofing Websites Fail to Convert Leads (And the Smart Website System That Fixed It)

Smart Website Infrastructure Implementation (System‑Level)
SEO Title: How a Smart Website Infrastructure Transforms Lead Handling for Service Businesses

## Local Authority / SEO Problems

Local Authority System Impact (System‑Level)
SEO Title: How Local Authority Systems Improve Lead Quality for Local Businesses

---

# 5A. Case Study Inventory Table

The inventory table acts as the operational planning system for case study creation.

Each row represents one planned case study scenario.

Recommended fields:

| UI Label | Industry | System | Archetype | Operational Problem | Resources | Result Type | Industry Page | Notes |

Result Type examples:
lead-capture
revenue-recovery
booking-automation
review-generation
crm-visibility
authority-growth
Result Type defines the primary business outcome demonstrated in the case study.

Example:

| Roofing Estimate Follow-Up Automation | Roofing | Revenue Growth Systems | Revenue Recovery Case | Lost estimate follow-ups | estimate-follow-up-framework | revenue-recovery | /industries/home-services/roofing-companies | estimate follow-up automation |

Industry Page should reference the canonical industry detail page where the case study will appear.

The table ensures scenario coverage across industries and prevents overlapping case studies.

---

# 5B. Case Study Specification Table

The specification table acts as the execution blueprint for generating case study pages.

Unlike the inventory table (which lists ideas), the specification table defines the exact metadata that will be used to generate each case study.

Each row represents one case study to be created.

Recommended fields:

| UI Label | Slug | Industry | System | Archetype | Operational Problem | Resources | Result Type | Industry Page |

Example:

| Roofing Estimate Follow-Up Automation | roofing-estimate-follow-up-automation | Roofing | Revenue Growth Systems | Revenue Recovery Case | Lost estimate follow-ups | estimate-follow-up-framework | revenue-recovery | /industries/home-services/roofing-companies |

Guidelines:

• Slug should follow kebab-case format
• Industry must match the industry detail page where the case study will appear
• Resources should reference the framework pages used in the implementation
• Result Type should match one of the approved outcome categories

The specification table ensures case studies can be generated consistently and prevents duplicate implementation scenarios.

---

# 6. Case Study Archetypes

Case studies follow one of three archetypes depending on the scenario.

## System Implementation Case

Use when the case study demonstrates how a specific system was built and deployed.
Focus: architecture, technical workflow, system design decisions.
Example: Smart Website Infrastructure Implementation.

## Operational Problem Case

Use when the case study focuses on a recurring operational failure and the system that resolved it.
Focus: problem identification, root cause, system response.
Example: Storm Season Lead Handling System.

## Revenue Recovery Case

Use when the case study demonstrates how lost or missed revenue was recovered through automation.
Focus: revenue impact, reactivation workflows, measurable business outcomes.
Example: HVAC Maintenance Plan Reactivation.

---

# 7. Case Study Metadata Structure

Each case study should track:

Required:

UI Label (Short Title)
SEO Title (Problem‑First Title)
Slug
industries[]
systems[]
resources[]
Archetype
Operational Problem
Implementation Summary
Outcome

Optional:

topics[]
industrySlug
primarySystemLayer
Scenario Type
resultType

The resources[] field defines the frameworks used in the case study.
This connects the case study to the specific resource frameworks that explain the methodology behind the implementation.

Example:

resources:
- lead-response-time-framework
- missed-call-recovery-system

---

# 8. Case Study Page Structure

Case studies may contain 4–9 sections depending on complexity.

Required Sections:

1. Hero
2. Operational Problem
3. System Implementation
4. Consultation CTA

Optional Sections:

5. Workflow Breakdown
6. Results
7. Metrics
8. Frameworks Used
9. Lessons

Every case study must include the four required sections.
Optional sections should be added when the scenario has enough depth to justify them.

---

## Section Flexibility Rule

Case studies should not follow identical section layouts.

Depending on the complexity of the scenario, different section combinations may be used.

Example variations:

Structure A — Operational Case

Hero  
Operational Problem  
System Implementation  
Workflow Breakdown  
Results  
Consultation CTA  

Structure B — Revenue Recovery Case

Hero  
Operational Problem  
System Implementation  
Results  
Metrics  
Consultation CTA  

Structure C — System Architecture Case

Hero  
Operational Problem  
System Implementation  
Workflow Breakdown  
Frameworks Used  
Lessons  
Consultation CTA  

Guidelines:

• Do not force every case study to include all optional sections  
• Use metrics only when meaningful data exists  
• Simpler cases may use only 4–5 sections  
• Complex cases may expand to 7–9 sections  

This rule prevents structural repetition across the case study library.

---

# 9. Content Quality Rule

Case studies must focus on:

- operational problem
- system implementation
- business outcome

Avoid marketing storytelling.
Case studies are proof documents, not promotional content.
Every section should describe what happened, what was built, and what changed.

---

# 9A. Case Study Writing Rules

Case studies must read like operational documentation rather than marketing stories.

Writing guidelines:

• Describe the real operational environment before introducing the solution  
• Explain what system components were implemented and why they were chosen  
• Show how the workflow changed after implementation  
• Use clear operational language instead of promotional language  

Avoid writing patterns such as:

- generic marketing storytelling
- vague success claims
- “digital transformation” style narratives

Prefer concrete operational explanations such as:

- what problem existed
- what workflow was implemented
- what systems were connected
- what business outcome occurred

Example contrast:

Weak:

"The company improved their digital presence and saw great results."

Correct:

"The business previously missed 6–10 calls per week during peak hours. A missed-call recovery system was implemented to automatically respond by SMS, log the lead in the CRM pipeline, and trigger follow-up tasks for the service team."

These rules ensure case studies remain consistent with the MindWP system-first positioning.

---

# 10. Phase‑1 Publishing Plan

## Publishing Strategy

Recommended publishing order:

1. Smart Website infrastructure case
2. Roofing case studies
3. HVAC case studies
4. Salon case studies
5. Remaining industries

Estimated total: 16–20 case studies.

---

# 11. Content Relationship Map

## Internal Linking Architecture

Case studies connect industries to system frameworks.

Relationship model:

Blog / Resource
↓
Industry Page
↓
Case Study
↓
Service Implementation

Case studies demonstrate real implementation scenarios within that industry.

Case Study should link to:
- Related Industry Page
- Related System (reference only)
- Related Resource Frameworks

Industry Page may link to:
- 1–3 relevant case studies

Service System pages:
- Must NOT display case studies

Case studies must appear on industry pages and the case study hub.
They must never appear on service pages.

---

# 12. Case Study Hub Architecture

The Case Study Hub is the central listing page that organizes all case studies across industries.

Purpose of the hub:

- Provide a single location to explore implementation proof
- Support internal linking to industry pages
- Surface system implementation examples

The hub should NOT organize case studies by services.

Primary grouping:
Industries

Example layout:

Home Services
- Roofing Estimate Follow‑Up Automation
- HVAC Emergency Lead Routing

Beauty & Personal Care
- Salon Booking Automation

Automotive Services
- Auto Repair Missed Call Recovery

Real Estate & Property Services
- Realtor Lead Follow‑Up Automation

Legal & Professional Services
- Law Firm Consultation Booking System

Local Appointment Businesses
- Appointment Business Booking Automation

---

## Category Rule

Case studies do NOT use independent content categories.

Industry pages act as the natural grouping system for case studies.

This means the hub and internal architecture must organize case studies using the existing industry structure instead of creating a new taxonomy.

Correct grouping model:

Industry
↓
Case Study

Example:

Home Services
- Roofing Estimate Follow‑Up Automation
- HVAC Emergency Lead Routing

Beauty & Personal Care
- Salon Booking Automation

Automotive Services
- Auto Repair Missed Call Recovery

Because of this rule, the system must NOT introduce fields such as:

- caseStudyCategory
- caseStudyGroup
- caseStudyTopic

Case studies inherit organization from the industries[] metadata field instead.

---

# 13. Working Rule

This document is a planning inventory only.

If case study scenarios change, update this file rather than modifying the architectural documents.

Architecture rules must remain in the governing docs.