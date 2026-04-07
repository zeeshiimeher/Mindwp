# CONTENT INVENTORY

> Unified planning inventory for blog, resource, and case study content.
> Architecture rules live in CONTENT-SYSTEM-ARCHITECTURE.md and CONTENT-BLUEPRINT-SYSTEM.md.
> This file defines planning tables, archetypes, and metadata models only.

STATUS: ARCHITECTURE LOCKED
LAST UPDATED: 2026-04-07

---

## Content Flow

Blog (problem discovery) → Resource (system frameworks) → Industry (contextual application) → Service (implementation)

---

# Blog Planning

## Categories

| Category | Scope |
|---|---|
| smart-website-systems | Website infrastructure, conversion systems |
| ai-lead-handling | Response speed, AI messaging, routing, qualification |
| local-authority-seo | Authority signals, local visibility, search structure |
| crm-automation | CRM workflows, pipeline visibility, follow-up |
| reputation-review | Review generation, monitoring, trust systems |
| home-services-industry | Roofing, HVAC, plumbing industry content |
| beauty-personal-care-industry | Salons, clinics, med spas industry content |
| future-local-business-tech | Emerging technology shifts for local business |

Categories are organizational only. SEO targeting happens through metadata fields.

## Blog Archetypes

| Archetype | Purpose |
|---|---|
| Problem Analysis | Why a business problem happens, where the breakdown starts |
| Industry Breakdown | How a specific industry experiences a repeated operational issue |
| System Explanation | How a business system works at a conceptual level |
| Operational Mistake | A repeatable mistake, its downstream cost, the correct response |
| Trend Analysis | New market/technology changes and practical implications |

### Section Rules
- Allowed sections: introduction, content, takeaways, quote, steps, checklist, image, callout, faq, cta
- FAQ must be rare. If used, it appears before `cta`.
- `cta` is always the final section.
- Every article must establish system context after introduction.
- Posts inside the same archetype must vary at least one structural component.
- Every article must contain an Observation + Implication insight pair.

## Blog Metadata Model

Required fields: slug, title, primaryKeyword, supportingKeywords, category, publishDate, systems[], industries[], topics[], tags[], seo, sections[]

### Constraints
- primaryKeyword must be substring of title, metaTitle, metaDescription (case-insensitive)
- metaTitle: 40–60 chars, metaDescription: 140–160 chars
- topic + industry combination must be unique across the blog system
- Allowed industries: roofing, hvac, plumbing, automotive, salon
- Allowed search intents: problem, analysis, mistake, strategy, industry, trend

### Linking Rules
- Every blog links to at least one primary resource hub
- Blog → Resource → Industry → Service → Resource (linking loop)
- Blog-to-blog links are secondary, never replace blog-to-resource path
- Service pages must NOT link to blog posts

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

### Blog Table Rules
- Primary Keyword must be unique across the full inventory
- topic + industry combination must be unique
- Resource Cluster must match a real resource slug from RESOURCE_REGISTRY
- publishDate: distributed 2024–2026, must not be in future

---

# Resource Planning

## Resource Categories

Five categories aligned to core system pillars:

| Category | System Pillar |
|---|---|
| smart-website-systems | Smart Website Systems |
| ai-lead-handling | AI Lead Handling Systems |
| local-seo-authority | Local Authority & SEO Systems |
| reputation-review | Reputation & Review Systems |
| revenue-growth | Revenue Growth Systems |

## Resource Archetypes

| Archetype | Purpose | Key Sections |
|---|---|---|
| Framework | Explains system structure | hero, takeaways, problem, comparison, solution-cards, diy, case |
| Workflow | Step-by-step operational workflow | hero, takeaways, problem, business-costs, diy, checklist |
| Diagnostic | Root causes behind operational problems | hero, takeaways, problem, comparison, case, solution-cards |
| Industry Example | System applied to a real industry | hero, takeaways, problem, case, diy, solution-cards |
| Implementation Guide | Practical system implementation | hero, takeaways, problem, case, diy, templates |

All archetypes end with: faq (optional), cta, related-resources

### Allowed Template Section Types
hero, takeaways, problem, business-costs, diy, solution-cards, case, comparison, templates, checklist, faq, cta, related-resources, sidebar-cta

## Resource Metadata Model

Required: Title, industries[], systems[], topics[], Primary Keyword, Intent Type

Allowed intent types: pain-based, framework, comparison, implementation, workflow, diagnostic

## Global System Resources (~30)

### Smart Website Systems
1. How Smart Website Systems Work
2. What Is a Systems-First Website?
3. Conversion Architecture for Service Websites
4. Website + CRM Integration Explained
5. Designing Websites That Support CRM Systems
6. Service Page Architecture That Converts
7. Conversion Tracking for Service Businesses
8. Booking Systems Inside Website Infrastructure

### AI Lead Handling Systems
1. Lead Automation Framework for Service Businesses
2. Service Business Follow-Up Automation Guide
3. Lead Response Time Framework
4. Multi-Channel Lead Capture Systems
5. Lead Routing Models for Service Companies
6. Missed Call Recovery System for Service Businesses
7. Lead Qualification Framework

### Reputation & Review Systems
1. Review Generation System for Local Businesses
2. How Review Automation Improves Local Authority
3. Customer Feedback Loop Framework
4. Responding to Negative Reviews Systematically
5. Reputation Monitoring Systems for Service Businesses

### Local Authority & SEO Systems
1. Local SEO vs Website Optimization
2. Local Visibility Framework for Service Businesses
3. Google Business Profile System Architecture
4. Local Service Page Architecture
5. Authority Signals for Local Search

### Revenue Growth Systems
1. Building Revenue Visibility Through CRM Tracking
2. CRM Pipeline Architecture for Service Businesses
3. Client Reactivation Systems for Service Businesses
4. Tracking Customer Lifetime Value Using CRM
5. Sales Pipeline Visibility Framework

## Industry Context Resources (~35)

Each industry cluster: ~5 contextual resources showing systems applied to real verticals.

| Industry | Resources |
|---|---|
| Roofing | Lead Handling, Missed Call Recovery, Review Generation, Estimate Follow-Up, CRM Pipeline |
| HVAC | Lead Handling, Missed Call Recovery, Emergency Call Handling, Review Generation, CRM Pipeline |
| Salon | Lead Handling, Missed Call Recovery, Review Generation, No-Show Reduction, Client Lifetime Value |
| Automotive | Lead Handling, Missed Call Recovery, Review Generation, Service Reminders, CRM Pipeline |
| Real Estate | Lead Handling, Missed Call Recovery, Inquiry Follow-Up, Review Generation, CRM Pipeline |
| Legal | Lead Handling, Missed Call Recovery, Consultation Booking, Review Generation, Client Intake CRM |
| Local Appointment | Lead Handling, Missed Call Recovery, Booking Optimization, Review Generation, CRM Pipeline |

### Linking Rules
- Global system resources → industry example resources
- Industry resources → relevant industry page
- Industry pages → service system pages
- Service pages → back to global system resources

### Publishing Order
1. Global system resources → 2. Roofing → 3. HVAC → 4. Salon → 5. Remaining

## Resource Specification Table

| Title | Archetype | Sections | systems[] | industries[] | topics[] |
|------|------|------|------|------|------|
| Lead Automation Framework for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards, diy | ai-lead-handling | [] | lead-management |
| Service Business Follow-Up Automation Guide | Workflow | hero, takeaways, problem, business-costs, diy, checklist | ai-lead-handling | [] | follow-up |
| Lead Response Time Framework | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-response-time |
| Multi-Channel Lead Capture Systems | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-capture |
| Lead Routing Models for Service Companies | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-routing |
| Missed Call Recovery System for Service Businesses | Workflow | hero, takeaways, problem, business-costs, diy, checklist | ai-lead-handling | [] | missed-calls |
| Lead Qualification Framework | Framework | hero, takeaways, problem, comparison, solution-cards | ai-lead-handling | [] | lead-qualification |
| How Smart Website Systems Work | Framework | hero, takeaways, problem, comparison, solution-cards, diy | smart-website-systems | [] | website-infrastructure |
| What Is a Systems-First Website? | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | systems-first-websites |
| Conversion Architecture for Service Websites | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | conversion-optimization |
| Website + CRM Integration Explained | Implementation Guide | hero, takeaways, problem, case, diy, templates | smart-website-systems | [] | crm-integration |
| Designing Websites That Support CRM Systems | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | crm-enabled-websites |
| Service Page Architecture That Converts | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | service-page-architecture |
| Conversion Tracking for Service Businesses | Implementation Guide | hero, takeaways, problem, case, diy, templates | smart-website-systems | [] | conversion-tracking |
| Booking Systems Inside Website Infrastructure | Framework | hero, takeaways, problem, comparison, solution-cards | smart-website-systems | [] | booking-systems |
| Review Generation System for Local Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | review-generation |
| How Review Automation Improves Local Authority | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | review-automation |
| Customer Feedback Loop Framework | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | feedback-loops |
| Responding to Negative Reviews Systematically | Workflow | hero, takeaways, problem, business-costs, diy, checklist | reputation-review | [] | negative-review-response |
| Reputation Monitoring Systems for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | reputation-review | [] | reputation-monitoring |
| Local SEO vs Website Optimization | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-seo |
| Local Visibility Framework for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-visibility |
| Google Business Profile System Architecture | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | google-business-profile |
| Local Service Page Architecture | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-service-pages |
| Authority Signals for Local Search | Framework | hero, takeaways, problem, comparison, solution-cards | local-seo-authority | [] | local-authority |
| Building Revenue Visibility Through CRM Tracking | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | revenue-visibility |
| CRM Pipeline Architecture for Service Businesses | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | crm-pipeline |
| Client Reactivation Systems for Service Businesses | Workflow | hero, takeaways, problem, diy, checklist | revenue-growth | [] | client-reactivation |
| Tracking Customer Lifetime Value Using CRM | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | customer-lifetime-value |
| Sales Pipeline Visibility Framework | Framework | hero, takeaways, problem, comparison, solution-cards | revenue-growth | [] | pipeline-visibility |

---

# Case Study Planning

## Case Study Role
Case studies = proof layer. They validate system implementation inside industry contexts.

Authority flow: Blog/Resource → Industry Page → Case Study → Service Implementation (reference only)

**Rules:**
- Case studies support industries, not services
- Must NOT appear on service pages
- Appear on industry pages and case study hub only

## Case Study Archetypes

| Archetype | Focus |
|---|---|
| System Implementation | Architecture, technical workflow, system design decisions |
| Operational Problem | Problem identification, root cause, system response |
| Revenue Recovery | Revenue impact, reactivation workflows, measurable outcomes |

## Case Study Metadata

Required: UI Label, SEO Title, Slug, industries[], systems[], resources[], Archetype, Operational Problem, Implementation Summary, Outcome

## Page Structure
Required sections: Hero, Operational Problem, System Implementation, Consultation CTA
Optional sections: Workflow Breakdown, Results, Metrics, Frameworks Used, Lessons (4–9 sections total)

## Cluster Rules
Each case study unique across: industry + operational problem + system

## Planned Scenarios (~16–20)

### Lead Handling Failures
- Storm Season Lead Handling System (Roofing)
- HVAC Emergency Lead Routing (HVAC)
- HVAC Seasonal Lead Surge Handling (HVAC)
- Auto Repair Missed Call Recovery (Automotive)
- Real Estate Inquiry Routing (Real Estate)

### Follow-Up Failures
- Roofing Estimate Follow-Up Automation (Roofing)
- Realtor Lead Follow-Up Automation (Real Estate)
- Automotive Service Reminder Automation (Automotive)
- HVAC Maintenance Plan Reactivation (HVAC)

### Booking System Breakdowns
- Salon Booking Automation (Salon)
- Law Firm Consultation Booking System (Legal)
- Appointment Business Booking Automation (Local Appointment)
- Law Firm Client Intake Automation (Legal)

### No-Show & Reminder Failures
- Salon No-Show Reduction System (Salon)
- Appointment Reminder No-Show Reduction (Local Appointment)

### Review / Revenue / Infrastructure
- Salon Review Generation Automation (Salon)
- CRM Pipeline Visibility Transformation (System-Level)
- Roofing Website Rebuild With CRM (Roofing)
- Smart Website Infrastructure Implementation (System-Level)
- Local Authority System Impact (System-Level)

## Case Study Hub
Primary grouping: by industry. NOT by service.

### Publishing Order
1. Smart Website infrastructure → 2. Roofing → 3. HVAC → 4. Salon → 5. Remaining

## Writing Rules
- Describe real operational environment before solution
- Explain system components and why chosen
- Show workflow change after implementation
- Use operational language, not marketing language
- No "digital transformation" narratives
