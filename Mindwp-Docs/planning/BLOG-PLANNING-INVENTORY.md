# BLOG PLANNING INVENTORY
STATUS: ARCHITECTURE LOCKED
LAST UPDATED: 2026-03-11

This document defines the finalized blog architecture used by the MindWP content system.

Blogs exist to capture problem-aware demand, explain operational mistakes, and route readers into the evergreen authority layer.

Blog posts do not replace resource hubs.
They strengthen them.

---

# 1. Blog Architecture

The blog layer sits at the top of the editorial discovery system.

Content flow:

Blog
↓
Resource
↓
Industry
↓
Service

Role of each layer:

- Blog: captures search demand around problems, trends, breakdowns, and mistakes.
- Resource: explains the evergreen framework or system behind the problem.
- Industry: contextualizes the framework for a specific market.
- Service: stays conversion-focused and explains implementation.

Architectural rule:

Blogs feed authority into resource hubs.
They are not standalone authority targets.

Every blog post must support a deeper content node in the architecture.

---

# 2. Blog Categories

Final category list:

- smart-website-systems
- ai-lead-handling
- local-authority-seo
- crm-automation
- reputation-review
- home-services-industry
- beauty-personal-care-industry
- future-local-business-tech

Category definitions:

- smart-website-systems: website infrastructure, conversion systems, and systems-first architecture.
- ai-lead-handling: response speed, missed calls, AI messaging, routing, and qualification workflows.
- local-authority-seo: authority signals, local visibility, search behavior, and local search structure.
- crm-automation: CRM workflows, operational automation, pipeline visibility, and follow-up systems.
- reputation-review: review generation, monitoring, trust systems, and reputation workflows.
- home-services-industry: industry-specific blog content for roofing, HVAC, plumbing, and adjacent operators.
- beauty-personal-care-industry: industry-specific blog content for salons, clinics, med spas, and appointment-led beauty businesses.
- future-local-business-tech: emerging technology shifts affecting local business operations and customer handling.

Rule:

Categories are organizational only.
SEO targeting happens through metadata fields such as primaryKeyword, supportingKeywords, systems[], industries[], topics[], and search intent.

---

# 3. Blog Archetypes

The blog archetype system defines the editorial shape of a post before writing begins.

All blog archetypes must be built from supported template sections only:

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

FAQ rule:

FAQ should be rare.
Use it only when search intent clearly suggests clarification is necessary or when a post covers a system that creates repeatable reader questions.
If FAQ is used, it must appear before `cta`.
`cta` must always be the final section.

System context rule:

Every article must establish system context using this placement logic:

- introduction
- system context
- main sections
- takeaways
- cta

System context is not a separate template type.
It is usually implemented as the first `content` section after the introduction.

The system context block must explain:

- what system layer the problem belongs to
- why the issue is operational rather than purely promotional
- which deeper resource or framework the post should naturally lead into

Section diversity rule:

- Do not repeat the exact same section sequence across multiple posts.
- Posts inside the same archetype must vary at least one structural component such as `quote`, `checklist`, `steps`, `image`, `callout`, or `faq`.
- Two posts may share the same archetype, but they must not feel templated in identical order and cadence.
- Diversity should come from structure and emphasis, not random section insertion.

Blog insight writing rule:

Every article must contain two explicit insight statements:

- Observation: what is happening in the business, market, or workflow.
- Implication: why that observation changes the decision, risk, or system requirement.

These insight statements should appear inside the main body, usually in `content` or `callout` sections.
They should not be treated as decorative copy.

### Problem Analysis

Purpose: Explain why a business problem happens and where the operational breakdown starts.

### Industry Breakdown

Purpose: Explain how a specific industry experiences a repeated operational issue.

### System Explanation

Purpose: Explain how a business system works at a conceptual level without becoming a resource page.

### Operational Mistake

Purpose: Highlight a repeatable mistake, its downstream cost, and the correct system response.

### Trend Analysis

Purpose: Interpret new market or technology changes and explain practical implications.

---

# 4. Blog Metadata Model

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
- category: one of the locked organizational categories above.
- publishDate: realistic ISO date aligned to the publishing timeline.
- systems[]: canonical system mappings.
- industries[]: canonical industry mappings.
- topics[]: canonical topic mappings.
- tags[]: editorial labels for browsing and filtering.
- seo: title, description, canonical, keywords, and open graph metadata.
- sections[]: only supported template section types.

FAQ rule:

FAQ schema is generated only from explicit faq sections.
Checklist and steps content must never be treated as FAQ content.

---

# Canonical Industry Registry

The blog system uses a locked industry taxonomy.

Allowed industries:

- roofing
- hvac
- plumbing
- automotive
- salon

Rules:

- industries[] must match this registry.
- Generic blogs may use industries: [] when the article is not tied to a specific industry.
- Industry-focused blogs must use exactly one industry.

---

# 5. Unique Topic Cluster Rule

To prevent keyword cannibalization, the combination of:

topic + industry

must be unique across the blog system.

Example:

- topics[]: ["missed-calls"]
- industries[]: ["roofing"]

That combination may appear in one blog post only.

Implications:

- If a topic already exists for an industry, new content must target a different problem angle.
- Supporting keywords may vary, but the primary topic + industry pairing cannot repeat.
- Generic posts with industries[] = [] must still avoid duplicating an existing global topic target.

This rule defines the keyword and cluster architecture for blog planning.

Primary keyword rule:

- Each post owns one primary keyword.
- Supporting keywords expand semantic coverage for the same search intent.
- Cluster ID groups multiple blogs that strengthen the same resource hub without targeting the same topic + industry pairing.

---

# 6. Blog Specification Table

Before writing any blog post, define it in the planning table below.

Allowed Search Intent values:

- problem
- analysis
- mistake
- strategy
- industry
- trend

Column definitions:

- Title: working editorial headline.
- Category: organizational category only.
- Primary Keyword: exact search target for the post.
- Search Intent: one of the allowed planning intents above.
- Supporting Keywords: secondary phrases that support the same topic.
- systems[]: canonical system mappings.
- industries[]: canonical industry mappings.
- topics[]: canonical topic mappings.
- Resource Cluster: the resource hub the post should strengthen.
- Cluster ID: normalized cluster grouping for related blog posts.

Cluster ID examples:

- lead-response-cluster
- missed-calls-cluster
- review-generation-cluster

## Blog Specification Table

| Title | Category | Primary Keyword | Search Intent | Supporting Keywords | systems[] | industries[] | topics[] | Resource Cluster | Cluster ID |
|------|------|------|------|------|------|------|------|------|------|
| Why Most Service Business Websites Fail to Convert | smart-website-systems | why service business websites fail to convert | problem | website conversion problems, service website lead loss, low converting service websites | smart-website-systems | [] | conversion-optimization | conversion-architecture-for-service-websites | conversion-optimization-cluster |
| What Is a Systems-First Website for Service Businesses | smart-website-systems | what is a systems-first website | analysis | systems first website meaning, systems first web design, service business website systems | smart-website-systems | [] | systems-first-websites | what-is-a-systems-first-website | systems-first-websites-cluster |
| How Smart Website Systems Work for Local Businesses | smart-website-systems | how smart website systems work | analysis | smart website systems, website operations system, service business website infrastructure | smart-website-systems | [] | website-infrastructure | how-smart-website-systems-work | website-infrastructure-cluster |
| Website CRM Integration for Service Businesses | smart-website-systems | website crm integration for service businesses | strategy | crm website integration, website to crm workflow, service business crm forms | smart-website-systems | [] | crm-integration | website-crm-integration-explained | crm-integration-cluster |
| Website Design That Supports CRM Systems | smart-website-systems | website design that supports crm systems | strategy | crm-ready website design, websites that support automation, crm-connected website structure | smart-website-systems | [] | crm-enabled-websites | designing-websites-that-support-crm-systems | crm-enabled-websites-cluster |
| Service Page Architecture for Service Businesses | smart-website-systems | service page architecture for service businesses | strategy | service page structure, service page conversion architecture, service page system design | smart-website-systems | [] | service-page-architecture | service-page-architecture-that-converts | service-page-architecture-cluster |
| Conversion Tracking for Service Businesses Explained | smart-website-systems | conversion tracking for service businesses | strategy | crm conversion tracking, lead source attribution for services, website conversion measurement | smart-website-systems | [] | conversion-tracking | conversion-tracking-for-service-businesses | conversion-tracking-cluster |
| Why Booking Systems Need Website Infrastructure | smart-website-systems | booking systems need website infrastructure | analysis | booking infrastructure, booking system website integration, service booking architecture | smart-website-systems | [] | booking-systems | booking-systems-inside-website-infrastructure | booking-systems-cluster |
| Lead Automation Framework for Service Businesses | ai-lead-handling | lead automation framework for service businesses | strategy | service business lead automation, lead handling automation, automated enquiry systems | ai-lead-handling | [] | lead-management | lead-automation-framework | lead-handling-cluster |
| Lead Response Time for Service Businesses | ai-lead-handling | lead response time for service businesses | analysis | fast lead response, response speed for enquiries, service lead response delays | ai-lead-handling | [] | lead-response-time | lead-response-time-framework | lead-response-time-cluster |
| Multi Channel Lead Capture System for Service Businesses | ai-lead-handling | multi channel lead capture system for service businesses | strategy | lead capture across phone and web, unified lead capture, omnichannel enquiry capture | ai-lead-handling | [] | lead-capture | multi-channel-lead-capture-systems | lead-capture-cluster |
| Lead Routing Models for Service Companies | ai-lead-handling | lead routing models for service companies | analysis | lead routing workflow, routing enquiries by service, lead assignment models | ai-lead-handling | [] | lead-routing | lead-routing-models-for-service-companies | lead-routing-cluster |
| Missed Call Recovery for Service Businesses | ai-lead-handling | missed call recovery for service businesses | problem | missed calls automation, unanswered call recovery, service business call follow-up | ai-lead-handling | [] | missed-calls | missed-call-recovery-system | missed-calls-cluster |
| Lead Qualification Framework for Service Businesses | ai-lead-handling | lead qualification framework for service businesses | strategy | lead scoring for service businesses, enquiry qualification workflow, qualify service leads | ai-lead-handling | [] | lead-qualification | lead-qualification-framework | lead-qualification-cluster |
| Service Business Follow Up Automation | crm-automation | service business follow up automation | strategy | follow up automation for leads, crm follow up workflow, service business nurture automation | ai-lead-handling | [] | follow-up | service-business-follow-up-automation-guide | follow-up-cluster |
| Review Generation System for Local Businesses | reputation-review | review generation system for local businesses | strategy | automated review requests, review workflow system, local business review generation | reputation-review | [] | review-generation | review-generation-system | review-generation-cluster |
| How Review Automation Improves Local Authority | reputation-review | how review automation improves local authority | analysis | review automation and seo, review velocity and local rankings, review systems for authority | reputation-review | [] | review-automation | how-review-automation-improves-local-authority | review-automation-cluster |
| Customer Feedback Loop Framework for Service Businesses | reputation-review | customer feedback loop framework for service businesses | strategy | customer feedback system, post-service feedback workflow, service quality feedback loop | reputation-review | [] | feedback-loops | customer-feedback-loop-framework | feedback-loops-cluster |
| Responding to Negative Reviews Systematically | reputation-review | responding to negative reviews systematically | mistake | negative review response process, review damage control workflow, reply to bad reviews system | reputation-review | [] | negative-review-response | responding-to-negative-reviews-systematically | negative-review-response-cluster |
| Reputation Monitoring Systems for Service Businesses | reputation-review | reputation monitoring systems for service businesses | strategy | review monitoring workflow, reputation alerts for service businesses, reputation tracking system | reputation-review | [] | reputation-monitoring | reputation-monitoring-systems | reputation-monitoring-cluster |
| Local SEO vs Website Optimization | local-authority-seo | local seo vs website optimization | analysis | local seo compared with website optimization, local visibility vs website conversion, search vs site structure | local-seo-authority | [] | local-seo | local-seo-vs-website-optimization | local-seo-cluster |
| Local Visibility Framework for Service Businesses | local-authority-seo | local visibility framework for service businesses | strategy | local visibility system, visibility framework for service companies, local discovery workflow | local-seo-authority | [] | local-visibility | local-visibility-framework | local-visibility-cluster |
| Google Business Profile System Architecture | local-authority-seo | google business profile system architecture | strategy | google business profile workflow, gbp optimization system, local profile architecture | local-seo-authority | [] | google-business-profile | google-business-profile-system-architecture | google-business-profile-cluster |
| Local Service Page Architecture for Local Businesses | local-authority-seo | local service page architecture for local businesses | strategy | local service page structure, geo service page architecture, local page system design | local-seo-authority | [] | local-service-pages | local-service-page-architecture | local-service-pages-cluster |
| Authority Signals for Local Search | local-authority-seo | authority signals for local search | analysis | local authority signals, trust signals for local rankings, authority building for local seo | local-seo-authority | [] | local-authority | authority-signals-for-local-search | local-authority-cluster |
| Building Revenue Visibility Through CRM Tracking | crm-automation | building revenue visibility through crm tracking | strategy | crm revenue tracking, revenue attribution in crm, service business revenue visibility | crm-automation | [] | revenue-visibility | building-revenue-visibility-through-crm-tracking | revenue-visibility-cluster |
| CRM Pipeline Architecture for Service Businesses | crm-automation | crm pipeline architecture for service businesses | strategy | service business crm stages, pipeline architecture workflow, crm stages for leads | crm-automation | [] | crm-pipeline | crm-pipeline-architecture | crm-pipeline-cluster |
| Client Reactivation Systems for Service Businesses | crm-automation | client reactivation systems for service businesses | strategy | reactivation campaigns for service businesses, crm reactivation workflow, win back clients system | crm-automation | [] | client-reactivation | client-reactivation-systems | client-reactivation-cluster |
| Tracking Customer Lifetime Value Using CRM | crm-automation | tracking customer lifetime value using crm | strategy | crm lifetime value tracking, customer value analytics in crm, service business clv tracking | crm-automation | [] | customer-lifetime-value | tracking-customer-lifetime-value-using-crm | customer-lifetime-value-cluster |
| Sales Pipeline Visibility Framework | crm-automation | sales pipeline visibility framework | strategy | pipeline visibility in crm, deal visibility framework, service sales pipeline tracking | crm-automation | [] | pipeline-visibility | sales-pipeline-visibility-framework | pipeline-visibility-cluster |
| Why Roofing Companies Lose Leads During Storm Season | home-services-industry | why roofing companies lose leads during storm season | problem | roofing lead response, storm season enquiries, roofing lead handling gaps | ai-lead-handling | roofing | lead-management | roofing-lead-handling-example | lead-handling-cluster |
| Why HVAC Companies Lose Leads After Hours | home-services-industry | why hvac companies lose leads after hours | problem | hvac after hours leads, emergency hvac lead response, hvac enquiry loss | ai-lead-handling | hvac | lead-management | hvac-lead-handling-example | lead-handling-cluster |
| Why Auto Repair Shops Lose Phone Leads | ai-lead-handling | why auto repair shops lose phone leads | problem | auto repair enquiry loss, repair shop lead response, missed repair calls | ai-lead-handling | automotive | lead-management | auto-repair-lead-handling-example | lead-handling-cluster |
| Why Roofing Missed Calls Cost Emergency Jobs | home-services-industry | why roofing missed calls cost emergency jobs | problem | roofing missed calls, storm repair missed enquiries, roofing call recovery | ai-lead-handling | roofing | missed-calls | missed-call-recovery-for-roofing | missed-calls-cluster |
| Why HVAC Missed Calls Lose After Hours Revenue | home-services-industry | why hvac missed calls lose after hours revenue | problem | hvac missed calls, after hours hvac response, emergency hvac call loss | ai-lead-handling | hvac | missed-calls | missed-call-recovery-for-hvac | missed-calls-cluster |
| Why Auto Repair Missed Calls Lose Booked Work | ai-lead-handling | why auto repair missed calls lose booked work | problem | repair shop missed calls, auto repair callback workflow, lost jobs from missed calls | ai-lead-handling | automotive | missed-calls | missed-call-recovery-for-auto-repair | missed-calls-cluster |
| Why Salons Lose Calls During Service Hours | beauty-personal-care-industry | why salons lose calls during service hours | problem | salon missed calls, busy salon call handling, booking calls lost in service hours | ai-lead-handling | salon | missed-calls | missed-call-recovery-for-salons | missed-calls-cluster |
| Roofing Estimate Follow Up Delays | home-services-industry | roofing estimate follow up delays | mistake | roofing quote follow up, estimate delays in roofing, roofing sales follow-up gaps | ai-lead-handling, crm-automation | roofing | follow-up | roofing-estimate-follow-up-workflow | follow-up-cluster |
| HVAC Emergency Call Handling Mistakes | home-services-industry | hvac emergency call handling mistakes | mistake | hvac emergency dispatch errors, emergency call workflow, after hours hvac triage | ai-lead-handling, crm-automation | hvac | emergency-handling | hvac-emergency-call-handling-system | emergency-handling-cluster |
| Automotive Service Reminders Explained | crm-automation | automotive service reminders explained | strategy | service reminder automation for auto shops, mot reminder systems, repair shop reactivation reminders | crm-automation | automotive | service-reminders | automotive-service-reminder-automation | service-reminders-cluster |
| Roofing CRM Pipeline for Estimates | home-services-industry | roofing crm pipeline for estimates | strategy | roofing crm stages, roofing estimate pipeline, crm workflow for roofers | crm-automation | roofing | crm-pipeline | roofing-crm-pipeline-structure | crm-pipeline-cluster |
| HVAC CRM Pipeline for Service Companies | home-services-industry | hvac crm pipeline for service companies | strategy | hvac crm stages, hvac sales pipeline, hvac pipeline workflow | crm-automation | hvac | crm-pipeline | hvac-crm-pipeline-structure | crm-pipeline-cluster |
| Automotive CRM Pipeline for Repair Jobs | crm-automation | automotive crm pipeline for repair jobs | strategy | auto repair crm stages, repair job pipeline, workshop crm workflow | crm-automation | automotive | crm-pipeline | automotive-crm-pipeline-for-repair-jobs | crm-pipeline-cluster |
| Why Salons Need Lead Handling Systems | beauty-personal-care-industry | why salons need lead handling systems | industry | salon lead handling, salon enquiry workflow, salon booking lead system | ai-lead-handling | salon | lead-management | salon-lead-handling-example | lead-handling-cluster |
| Reducing Salon No Shows With Automation | beauty-personal-care-industry | reducing salon no shows with automation | strategy | salon reminder automation, reduce appointment no shows, salon booking reliability | crm-automation, ai-lead-handling | salon | no-show-reduction | reducing-salon-no-shows-with-automation | no-show-reduction-cluster |
| Tracking Salon Client Lifetime Value | beauty-personal-care-industry | tracking salon client lifetime value | strategy | salon client value tracking, salon crm revenue insights, repeat visit value in salons | crm-automation | salon | customer-lifetime-value | tracking-salon-client-lifetime-value | customer-lifetime-value-cluster |
| Roofing Review Generation System | home-services-industry | roofing review generation system | strategy | roofing review requests, contractor review automation, roofing google review workflow | reputation-review | roofing | review-generation | roofing-review-generation-system | review-generation-cluster |
| HVAC Review Generation Framework | home-services-industry | hvac review generation framework | strategy | hvac review requests, hvac customer review system, hvac review workflow | reputation-review | hvac | review-generation | hvac-review-generation-framework | review-generation-cluster |
| Salon Review Generation Framework | beauty-personal-care-industry | salon review generation framework | strategy | salon review requests, salon review system, beauty business review workflow | reputation-review | salon | review-generation | salon-review-generation-framework | review-generation-cluster |
| Automotive Review Generation System | reputation-review | automotive review generation system | strategy | auto repair review requests, workshop review system, automotive google review workflow | reputation-review | automotive | review-generation | automotive-review-generation-system | review-generation-cluster |
| Smart Website Systems for Roofing Companies | home-services-industry | smart website systems for roofing companies | industry | roofing website systems, roofing website infrastructure, roofer website operations | smart-website-systems | roofing | website-infrastructure | how-smart-website-systems-work | website-infrastructure-cluster |
| Systems First Website for HVAC Companies | home-services-industry | systems first website for hvac companies | industry | hvac systems first website, hvac website infrastructure, hvac website operations | smart-website-systems | hvac | systems-first-websites | what-is-a-systems-first-website | systems-first-websites-cluster |
| Website CRM Integration for Salons | beauty-personal-care-industry | website crm integration for salons | strategy | salon crm integration, salon website to crm workflow, appointment crm capture | smart-website-systems | salon | crm-integration | website-crm-integration-explained | crm-integration-cluster |
| Local SEO for Roofing Companies Explained | local-authority-seo | local seo for roofing companies explained | strategy | roofing local seo, roofer local rankings, local visibility for roofers | local-seo-authority | roofing | local-seo | local-seo-vs-website-optimization | local-seo-cluster |
| Google Business Profile for HVAC Companies | local-authority-seo | google business profile for hvac companies | strategy | hvac google business profile, hvac maps visibility, hvac local profile optimization | local-seo-authority | hvac | google-business-profile | google-business-profile-system-architecture | google-business-profile-cluster |
| Authority Signals for Salons | local-authority-seo | authority signals for salons | strategy | salon authority signals, salon local trust factors, beauty business ranking signals | local-seo-authority, reputation-review | salon | local-authority | authority-signals-for-local-search | local-authority-cluster |
| Review Automation for Roofing Companies | reputation-review | review automation for roofing companies | strategy | roofing review automation, contractor review follow up, automated reviews for roofers | reputation-review | roofing | review-automation | how-review-automation-improves-local-authority | review-automation-cluster |
| Review Automation for HVAC Companies | reputation-review | review automation for hvac companies | strategy | hvac review automation, technician review requests, automated hvac reviews | reputation-review | hvac | review-automation | how-review-automation-improves-local-authority | review-automation-cluster |
| Review Automation for Salons | beauty-personal-care-industry | review automation for salons | strategy | salon review automation, beauty business review follow up, automated salon reviews | reputation-review | salon | review-automation | how-review-automation-improves-local-authority | review-automation-cluster |
| Negative Reviews for Auto Repair Shops | reputation-review | negative reviews for auto repair shops | mistake | auto repair bad reviews, repair shop review responses, workshop reputation recovery | reputation-review | automotive | negative-review-response | responding-to-negative-reviews-systematically | negative-review-response-cluster |
| Customer Feedback Loop for Plumbing Companies | home-services-industry | customer feedback loop for plumbing companies | strategy | plumbing customer feedback, plumber service feedback system, plumbing quality feedback workflow | reputation-review | plumbing | feedback-loops | customer-feedback-loop-framework | feedback-loops-cluster |
| Revenue Visibility for Roofing Companies | crm-automation | revenue visibility for roofing companies | strategy | roofing revenue tracking, roofer crm reporting, roofing pipeline revenue visibility | crm-automation | roofing | revenue-visibility | building-revenue-visibility-through-crm-tracking | revenue-visibility-cluster |
| Sales Pipeline Visibility for HVAC Companies | crm-automation | sales pipeline visibility for hvac companies | strategy | hvac pipeline visibility, hvac deal tracking, hvac crm forecasting | crm-automation | hvac | pipeline-visibility | sales-pipeline-visibility-framework | pipeline-visibility-cluster |
| Client Reactivation for Salons | beauty-personal-care-industry | client reactivation for salons | strategy | salon reactivation campaigns, lapsed salon clients, salon win back workflow | crm-automation | salon | client-reactivation | client-reactivation-systems | client-reactivation-cluster |
| Local Service Page Architecture for Roofing Companies | local-authority-seo | local service page architecture for roofing companies | strategy | roofing location pages, roofing service area pages, roofer local landing pages | local-seo-authority, smart-website-systems | roofing | local-service-pages | local-service-page-architecture | local-service-pages-cluster |
| Conversion Tracking for HVAC Companies | crm-automation | conversion tracking for hvac companies | strategy | hvac conversion tracking, hvac lead attribution, hvac marketing measurement | smart-website-systems, crm-automation | hvac | conversion-tracking | conversion-tracking-for-service-businesses | conversion-tracking-cluster |
| Booking Systems for Salons Explained | beauty-personal-care-industry | booking systems for salons explained | strategy | salon booking system architecture, appointment booking flow for salons, salon scheduling infrastructure | smart-website-systems, crm-automation | salon | booking-systems | booking-systems-inside-website-infrastructure | booking-systems-cluster |
| Lead Qualification for Roofing Companies | home-services-industry | lead qualification for roofing companies | strategy | roofing lead scoring, qualify roofing enquiries, roofing lead screening workflow | ai-lead-handling | roofing | lead-qualification | lead-qualification-framework | lead-qualification-cluster |
| Lead Routing for HVAC Companies | home-services-industry | lead routing for hvac companies | strategy | hvac lead routing, assign hvac enquiries, hvac dispatch lead routing | ai-lead-handling | hvac | lead-routing | lead-routing-models-for-service-companies | lead-routing-cluster |
| Multi Channel Lead Capture for Salons | beauty-personal-care-industry | multi channel lead capture for salons | strategy | salon lead capture across instagram and phone, salon enquiry capture, omnichannel booking capture | ai-lead-handling | salon | lead-capture | multi-channel-lead-capture-systems | lead-capture-cluster |
| How AI Search Changes Local Business Visibility | future-local-business-tech | how ai search changes local business visibility | trend | ai search for local services, generative search visibility, future of local discovery | local-seo-authority | [] | local-authority, local-visibility | authority-signals-for-local-search | local-authority-cluster |
| AI Reception for Automotive Shops | future-local-business-tech | ai reception for automotive shops | trend | automotive ai reception, repair shop ai answering, workshop ai response systems | ai-lead-handling | automotive | lead-response-time | lead-response-time-framework | lead-response-time-cluster |
| Autonomous Booking Systems for Salons | future-local-business-tech | autonomous booking systems for salons | trend | salon ai booking, autonomous scheduling for salons, ai-assisted appointment booking | smart-website-systems, crm-automation | salon | booking-automation | booking-systems-inside-website-infrastructure | booking-automation-cluster |
| Future Local SEO After Google Business Profile Automation | future-local-business-tech | future local seo after google business profile automation | trend | automated gbp workflows, ai local search changes, future of google business profile | local-seo-authority | plumbing | google-business-profile | google-business-profile-system-architecture | google-business-profile-cluster |
| Future CRM Visibility for HVAC Companies | future-local-business-tech | future crm visibility for hvac companies | trend | predictive hvac crm, ai crm forecasting for hvac, future pipeline visibility | crm-automation | hvac | crm-visibility | building-revenue-visibility-through-crm-tracking | crm-visibility-cluster |

Planning note:

Resource Cluster values should map to real runtime resource slugs already present in RESOURCE_REGISTRY.

Resource Cluster Rule:

The value in the "Resource Cluster" column must match a real resource slug from RESOURCE_REGISTRY.

Resource titles should never be used in this column.

Topic Registry Note:

If a topic used in the blog planning table does not exist in CANONICAL_TOPICS (defined in src/lib/content-graph/canonical.ts), it must be added to the canonical registry before blog generation begins.

Topics referenced by this planning table that may require canonical registration include:

- emergency-handling
- service-reminders
- no-show-reduction

Table rules:

- Primary Keyword values must remain unique across the full blog inventory.
- The combination of topics[] + industries[] must remain unique across the full table.
- Resource Cluster identifies the primary hub each blog must strengthen.
- Cluster ID groups multiple blog posts that reinforce the same resource without duplicating the same topic + industry target.

---

# 7. Publishing Timeline

Blog publishDate values distributed across 2024–2026.

- 2024: foundation topics, repeated business problems, core system explanations.
- 2025: expansion topics, industry breakdowns, broader operational strategy.
- 2026: advanced trends, AI shifts, mature cluster depth.

Rules:
- publishDate must not be in the future.
- Dates should appear naturally distributed.
- Posts within the same cluster should show believable sequencing.

---

# 8. Topical Authority Linking Architecture

Internal linking loop: Blog → Resource → Industry → Service → Resource

Rules:
- Every blog post must link to at least one primary resource hub.
- Resource pages should link to the most relevant industry page.
- Industry pages should link to the appropriate service page.
- Service pages may link back to resource hubs but must NOT link to blog posts.
- Blog-to-blog links are secondary and must never replace the blog-to-resource path.

---

# Working Rule

This file is the planning inventory for blog normalization.

If categories, clusters, or metadata requirements change, update this file first so implementation, validation, and future content generation stay aligned.
