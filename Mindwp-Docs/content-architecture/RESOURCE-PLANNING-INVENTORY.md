# RESOURCE PLANNING INVENTORY
STATUS: ARCHITECTURE LOCKED
LAST UPDATED: 2026-03-11

This document defines the **final resource architecture and inventory** used by the MindWP content system.

It replaces earlier planning lists and ensures the resource layer supports the full system‑first SEO architecture.

Permanent architectural rules remain in **CONTENT-ARCHITECTURE.md**.

This file defines:

• resource categories  
• system resource pillars  
• industry contextual resources  
• metadata structure  
• archetype structures  
• publishing order  
• internal linking rules  
• resource specification planning  

---

# 1. Resource Architecture Overview

Resources exist to explain **systems, frameworks, and operational structures** used by service businesses.

They are part of the MindWP authority architecture:

BLOG (problem discovery / trends)  
↓  
RESOURCE (system frameworks)  
↓  
INDUSTRY (contextual application)  
↓  
SERVICE SYSTEM (implementation)

Resources explain **how systems work**.

They are not commentary content.

They are evergreen operational knowledge.

---

# 2. Resource vs Blog Rule

Resources must NOT contain:

• trend commentary  
• marketing opinions  
• news discussion  
• industry commentary  

Those belong in the **Blog layer**.

Resources must focus on:

• frameworks  
• operational workflows  
• system design  
• implementation structures  

---

# 3. Resource Categories

Approved resource categories (aligned with core system pillars):

smart-website-systems  
ai-lead-handling  
local-seo-authority  
reputation-review  
revenue-growth  

These categories intentionally mirror the **five core system pillars** used across the site architecture.

Rule:

A resource category must match the **primary system it supports**.

category = primary system pillar.

systems[] may contain multiple systems, but the category must match the first system listed in systems[].

Example:

Lead Automation Framework for Service Businesses  
category: ai-lead-handling  
systems: ["ai-lead-handling"]

---

# 4. Core System Pillars

All resources must reinforce one of the following systems:

Smart Website Systems  
Local Authority & SEO Systems  
AI Lead Handling Systems  
Reputation & Review Systems  
Revenue Growth Systems  

Resources support these systems and strengthen topical authority.

---

# 5. Resource Archetype System (Locked)

Resources must follow **defined structural archetypes**.

This prevents every resource from looking identical while maintaining architectural consistency.

Approved archetypes:

### Framework Resource

Explains the structure of a system.

Sections:

hero  
takeaways  
problem  
comparison  
solution-cards  
implementation-considerations  
common-mistakes  
cta  
related

Example topics:

• Lead Automation Framework  
• CRM Pipeline Architecture  
• Review Generation Systems

---

### Workflow Resource

Explains a step‑by‑step operational workflow.

Sections:

hero  
problem  
business-costs  
step-framework  
checklist  
implementation-considerations  
cta  
related

Sections may be reduced for simpler workflow resources if the topic does not require full operational depth.

Example topics:

• Follow‑Up Automation  
• Missed Call Recovery  
• Booking Workflows

---
### Diagnostic Resource

Explains the **root causes behind operational problems** before introducing the system solution.

These resources target **problem‑aware search intent**.

Typical queries:

• why service businesses lose leads  
• why roofing companies lose leads  
• why HVAC companies miss calls  
• why salons lose bookings  

Sections:

hero  
problem  
root-causes  
industry-data  
system-fix  
solution-cards  
optional-faq  
cta  
related

Purpose:

Diagnostic resources act as a **bridge between blog insights and system frameworks**.

Content flow:

Problem explanation  
↓  
Root causes  
↓  
System framework introduction  
↓  
Service system implementation

Example topics:

• Why Service Businesses Lose Leads  
• Why Roofing Companies Lose Leads  
• Why HVAC Companies Miss Emergency Calls  
• Why Hair Salons Lose Bookings

Rule:

Diagnostic resources should be limited to **high-value operational problems**.

Avoid creating diagnostic content for every industry unless the problem represents a major operational pattern.

---

### Industry Example Resource

Shows a system applied to a real industry.

Sections:

hero  
problem  
industry-context  
workflow  
solution-cards  
implementation-notes  
optional-faq  
cta  
related

Example topics:

• Roofing Lead Handling Example  
• HVAC Emergency Call Handling  
• Salon Review Generation

---

### Implementation Guide Resource

Explains practical system implementation details.

Sections:

hero  
problem  
technical-context  
step-framework  
implementation-notes  
common-mistakes  
cta  
related

Example topics:

• CRM Pipeline Setup  
• Website + CRM Integration

---

## Archetype → Template Section Mapping

The archetypes described above define the conceptual structure of resources.

However, the runtime resource template system only supports a fixed set of section types.

The conceptual sections described in the archetypes are mapped to the actual template section types used by the renderer.

Only the following section types are allowed in resource files:

hero  
takeaways  
problem  
business-costs  
diy  
solution-cards  
case  
comparison  
templates  
checklist  
faq  
cta  
related-resources  
sidebar-cta  

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

hero  
takeaways  
problem  
comparison  
solution-cards  
diy  
case  
faq  
cta  
related-resources  

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

hero  
takeaways  
problem  
business-costs  
diy  
checklist  
faq  
cta  
related-resources  

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

hero  
takeaways  
problem  
comparison  
case  
solution-cards  
faq  
cta  
related-resources  

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

hero  
takeaways  
problem  
case  
diy  
solution-cards  
faq  
cta  
related-resources  

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

hero  
takeaways  
problem  
case  
diy  
templates  
faq  
cta  
related-resources  

---

# 6. Global System Resources

Global resources explain the **framework once at the system level**.

Industry resources then demonstrate how the system works inside real verticals.

## Smart Website Systems

1. How Smart Website Systems Work  
2. What Is a Systems‑First Website?  
3. Conversion Architecture for Service Websites  
4. Website + CRM Integration Explained  
5. Designing Websites That Support CRM Systems  
6. Service Page Architecture That Converts  
7. Conversion Tracking for Service Businesses  
8. Booking Systems Inside Website Infrastructure  

---

## AI Lead Handling Systems

1. Lead Automation Framework for Service Businesses  
2. Service Business Follow‑Up Automation Guide  
3. Lead Response Time Framework  
4. Multi‑Channel Lead Capture Systems  
5. Lead Routing Models for Service Companies  
6. Missed Call Recovery System for Service Businesses  
7. Lead Qualification Framework  

---

## Reputation & Review Systems

1. Review Generation System for Local Businesses  
2. How Review Automation Improves Local Authority  
3. Customer Feedback Loop Framework  
4. Responding to Negative Reviews Systematically  
5. Reputation Monitoring Systems for Service Businesses  

---

## Local Authority & SEO Systems

1. Local SEO vs Website Optimization (System View)  
2. Local Visibility Framework for Service Businesses  
3. Google Business Profile System Architecture  
4. Local Service Page Architecture  
5. Authority Signals for Local Search  

---

## Revenue Growth Systems

1. Building Revenue Visibility Through CRM Tracking  
2. CRM Pipeline Architecture for Service Businesses  
3. Client Reactivation Systems for Service Businesses  
4. Tracking Customer Lifetime Value Using CRM  
5. Sales Pipeline Visibility Framework  

Total Global System Resources: ~20

---

# 7. Industry Context Resources

Industry resources demonstrate **how systems appear in real operational environments**.

They must NOT repeat full system explanations.

They should show:

• workflows  
• operational context  
• practical scenarios  

Each industry cluster contains **~5 contextual resources**.

---

## Roofing Industry

1. Roofing Lead Handling Example  
2. Missed Call Recovery for Roofing Companies  
3. Roofing Review Generation System  
4. Roofing Estimate Follow‑Up Workflow  
5. Roofing CRM Pipeline Structure  

---

## HVAC Industry

1. HVAC Lead Handling Example  
2. Missed Call Recovery for HVAC Companies  
3. HVAC Emergency Call Handling System  
4. HVAC Review Generation Framework  
5. HVAC CRM Pipeline Structure  

---

## Hair / Salon Industry

1. Salon Lead Handling Example  
2. Missed Call Recovery for Hair Salons  
3. Salon Review Generation Framework  
4. Reducing Salon No‑Shows With Automation  
5. Tracking Salon Client Lifetime Value With CRM  

---

## Automotive Services

1. Auto Repair Lead Handling Example  
2. Missed Call Recovery for Auto Repair Shops  
3. Automotive Review Generation System  
4. Automotive Service Reminder Automation  
5. Automotive CRM Pipeline for Repair Jobs  

---

## Real Estate & Property Services

1. Realtor Lead Handling Example  
2. Missed Call Recovery for Realtors  
3. Real Estate Inquiry Follow‑Up System  
4. Realtor Review Generation Framework  
5. Real Estate CRM Pipeline for Buyers and Sellers  

---

## Legal & Professional Services

1. Small Law Firm Lead Handling Example  
2. Missed Call Recovery for Law Firms  
3. Legal Consultation Booking Workflow  
4. Law Firm Review Generation Framework  
5. Legal CRM Pipeline for Client Intake  

---

## Local Appointment Businesses

1. Appointment Business Lead Handling Example  
2. Missed Call Recovery for Appointment Businesses  
3. Appointment Booking Workflow Optimization  
4. Review Generation for Appointment Businesses  
5. CRM Pipeline for Appointment Businesses  

Total Industry Context Resources: ~35

---

# 8. Resource Metadata Model

Every resource must define the following metadata:

Title  
industries[]  
systems[]  
topics[]  
Primary Keyword  
Intent Type  

Example:

Title: Missed Call Recovery for Roofing Companies

industries: ["roofing"]  
systems: ["ai-lead-handling"]  
topics: ["missed-calls"]  

Primary Keyword: roofing missed call recovery  
Intent Type: pain-based

Allowed intent types:

pain-based
framework
comparison
implementation
workflow
diagnostic

---

# 9. Resource Linking Rules

Each resource should connect to:

• one system page  
• one industry page  
• one related resource  

Example:

Lead Automation Framework  
→ AI Lead Handling Systems  
→ Roofing Companies page  
→ Missed Call Recovery System  

---

# Resource Cluster Linking Strategy

To strengthen topical authority, resources must follow a structured linking loop.

Content hierarchy:

System Resource  
↓  
Industry Context Resource  
↓  
Industry Page  
↓  
Service System Page  

Example cluster:

Lead Automation Framework  
→ Roofing Lead Handling Example  
→ Roofing Companies Page  
→ AI Lead Handling Systems Page  

This creates a closed topical loop that strengthens authority signals for both the system and the industry cluster.

Rules:

• Global system resources should link to industry example resources.  
• Industry resources should link to the relevant industry page.  
• Industry pages link to service system pages.  
• Service pages link back to the global system resources.  

This structure allows search engines to understand the full system architecture.

---

# 10. Publishing Order

Resources should be published in this order:

1. Global system resources  
2. Roofing cluster  
3. HVAC cluster  
4. Salon cluster  
5. Remaining industry clusters  

This ensures authority grows around the strongest industry first.

---

# 11. Final Resource Inventory Target

Total resources planned:

40–50 resources

Distribution:

System resources: ~15–20  
Industry contextual resources: ~25–30  

This balance ensures strong topical clusters without diluting authority.

---

# 12. Resource Specification Table (Planning Layer)

Before generating a resource, define its **content specification**.

Each resource must have a defined structure before writing.

NOTE:
The specification table currently covers global system resources.
Industry contextual resources will be added after system resources are implemented.

Example format:

Title  
Archetype  
Sections Used  
systems[]  
industries[]  
topics[]  

Example:

Lead Automation Framework for Service Businesses  
Archetype: Framework  
Sections: hero, takeaways, problem, comparison, solution-cards, implementation-considerations  
systems: ["ai-lead-handling"]  
industries: []  
topics: ["lead-management"]

---

## Resource Specification Table

| Title | Archetype | Sections | systems[] | industries[] | topics[] |
|------|------|------|------|------|------|
Lead Automation Framework for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards, implementation-considerations | ai-lead-handling | [] | lead-management |
Service Business Follow-Up Automation Guide | Workflow | hero, problem, business-costs, step-framework, checklist | ai-lead-handling | [] | follow-up |
Lead Response Time Framework | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-response-time |
Multi-Channel Lead Capture Systems | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-capture |
Lead Routing Models for Service Companies | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-routing |
Missed Call Recovery System for Service Businesses | Workflow | hero, problem, business-costs, step-framework, checklist | ai-lead-handling | [] | missed-calls |
Lead Qualification Framework | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-qualification |
How Smart Website Systems Work | Framework | hero, takeaways, problem, comparison, solution-cards, implementation-considerations | smart-website-systems | [] | website-infrastructure |
What Is a Systems-First Website? | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | systems-first-websites |
Conversion Architecture for Service Websites | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | conversion-optimization |
Website + CRM Integration Explained | Implementation Guide | hero, problem, technical-context, step-framework, implementation-notes | smart-website-systems | [] | crm-integration |
Designing Websites That Support CRM Systems | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | crm-enabled-websites |
Service Page Architecture That Converts | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | service-page-architecture |
Conversion Tracking for Service Businesses | Implementation Guide | hero, problem, technical-context, step-framework, implementation-notes | smart-website-systems | [] | conversion-tracking |
Booking Systems Inside Website Infrastructure | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | booking-systems |
Review Generation System for Local Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | review-generation |
How Review Automation Improves Local Authority | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | review-automation |
Customer Feedback Loop Framework | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | feedback-loops |
Responding to Negative Reviews Systematically | Workflow | hero, problem, business-costs, step-framework, checklist, implementation-considerations | reputation-review | [] | negative-review-response |
Reputation Monitoring Systems for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | reputation-monitoring |
Local SEO vs Website Optimization (System View) | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-seo |
Local Visibility Framework for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-visibility |
Google Business Profile System Architecture | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | google-business-profile |
Local Service Page Architecture | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-service-pages |
Authority Signals for Local Search | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-authority |
Building Revenue Visibility Through CRM Tracking | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | revenue-visibility |
CRM Pipeline Architecture for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | crm-pipeline |
Client Reactivation Systems for Service Businesses | Workflow | hero, problem, step-framework, checklist | revenue-growth | [] | client-reactivation |
Tracking Customer Lifetime Value Using CRM | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | customer-lifetime-value |
Sales Pipeline Visibility Framework | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | pipeline-visibility |

# 13. Resource Content Specification Table (AI Writing Blueprint)

This table defines the full specification used when generating resource content with AI.

The planning table above defines structural architecture.

This table defines the writing inputs used during content generation.

Each resource must define:

• primary keyword  
• supporting keywords  
• search intent  
• core problem  
• systems mapping  
• industry mapping  
• topic classification  
• internal linking targets  
• content goal  
• target outcome  

This ensures AI-generated resources remain aligned with the system-first architecture.

| Title | Archetype | Primary Keyword | Supporting Keywords | Search Intent | Core Problem | systems[] | industries[] | topics[] | Internal Links | Content Goal | Target Outcome |
|------|------|------|------|------|------|------|------|------|------|------|------|
| Lead Automation Framework for Service Businesses | Framework | lead automation framework for service businesses | service business lead automation, lead handling automation | framework | service businesses often lose leads because notifications, routing, and CRM capture systems are disconnected | ai-lead-handling | [] | lead-management | AI Lead Handling Systems | explain the architecture of automated lead handling | help service businesses understand how automation improves lead capture reliability and response speed |
| Lead Response Time Framework | Framework | lead response time for service businesses | response time automation, fast lead response | diagnostic | slow lead response causes lost opportunities because prospects move to competitors within minutes | ai-lead-handling | [] | lead-response-time | AI Lead Handling Systems | diagnose why slow lead response causes lost opportunities | help service businesses identify and fix response time gaps that cost them leads |
| Missed Call Recovery System for Service Businesses | Workflow | missed call recovery for service businesses | missed calls automation, call recovery system | pain-based | missed calls go unrecovered because most service businesses lack automated callback and follow-up systems | ai-lead-handling | [] | missed-calls | AI Lead Handling Systems | demonstrate how automated systems recover missed calls | help service businesses implement automated recovery workflows that recapture missed call revenue |

This table will expand as additional resources are created.

Each resource must define its content specification before writing begins.

Resource Writing Rule:

AI must always read the specification table before generating a resource.

The table defines:

• search intent  
• primary keyword  
• core problem  
• system context  
• internal linking targets  
• content goal  
• target outcome  

This prevents AI from generating generic content and ensures consistency across the resource library.

Target Outcome defines the operational result the resource should help the reader achieve.

It ensures AI-generated resources move toward a real business outcome rather than producing generic explanations.

Examples:

• understand how automation prevents missed leads  
• identify operational weaknesses in lead response systems  
• implement a repeatable lead handling workflow  
• improve visibility into CRM pipelines  
• strengthen local authority signals for service pages  

This column helps maintain consistent narrative direction across the resource library.

# 14. Template Rules

Template behavior:

Hero section — required  
CTA section — always included via template  
Related section — always included via template  

FAQ section:

Optional.

FAQ should only appear when:

• search intent indicates questions  
• the topic benefits from clarification  

Resources should not force FAQ blocks unnecessarily.

---

# 15. Working Rule

This file defines the **resource inventory and planning layer**.

Permanent architectural rules remain inside:

CONTENT-ARCHITECTURE.md

If resource topics expand in the future, update this document while maintaining the system‑first architecture.
