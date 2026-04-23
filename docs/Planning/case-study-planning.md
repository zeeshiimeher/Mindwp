# Case Study System - Executable Plan (MindWP)

This document turns the current case-study surface into an executable planning inventory.

This is not content writing.
This does not change template structure, schema, or system ownership.

It aligns execution to:

- `FOUNDATION.md` for behavior
- `WRITING.md` for narrative tone
- `CONTENT.md` for case-study role
- `GRAPH.md` for proof-node alignment
- `CONVERSION.md` for end-only soft CTA behavior

## Locked Constraints

- Follow existing doc ownership.
- Do not invent a new case-study system.
- Do not change `CaseStudyTemplate` or section schema.
- Do not rewrite production case-study copy in this document.
- Do not change metadata contracts.

## Repo Inventory Scope

Production case studies currently resolve from:

- `src/domains/case-studies/content/*.tsx`
- `src/domains/case-studies/registry.ts`

Current production inventory count: 22 files.

Included in that count are two template-demo variants already registered as public case studies:

- `BeautySalonManchesterAllSections.tsx`
- `BeautySalonManchesterCustom.tsx`

These still need naming, classification, and section planning because they exist in the active registry.

## Template-Safe Section Mapping

Planning labels below describe narrative intent only. They must map onto existing template section types.

Required planning sections:

- `hero` -> existing `hero`
- `situation` -> existing `problem`
- `outcome` -> existing `results`
- `CTA` -> existing `cta`

Optional planning sections:

- `breakdown` -> existing `deliverables` or `process`
- `friction` -> existing `problem` emphasis or a tighter `problem` block
- `adjustment` -> existing `solution` or `process`
- `workflow glimpse` -> existing `workflows`
- `impact` -> existing `metrics`, `business-impact`, or a restrained `results` framing
- `testimonial` -> existing `testimonial` only if already present in content data

Execution rule:

- Every case study must resolve to 4-7 total sections.
- `hero`, `situation`, `outcome`, and `CTA` are always required.
- Only 1-3 optional section intents may be used.
- `more` remains a related-content surface, not part of the narrative section count.
- `metrics` is optional support only. It is not required on every case study.

## Classification Model

Each case study gets one dominant type only:

- `missed leads`
- `follow-up`
- `quote conversion`
- `visibility`
- `operations`

This is a planning label for rewrite control. It does not change schema, routing, or graph behavior.

## Execution Order

1. Lock the dominant type for each file.
2. Rename slugs and titles around the business moment, not the implementation label.
3. Reduce each page to 4-7 narrative sections using the mapping above.
4. Soften metrics that currently read like dashboards.
5. Replace at least one clean success edge with a realism layer.
6. Keep CTA soft and end-only.
7. Validate against behavior, graph, and conversion rules after content execution.

## Master Inventory And Execution Table

| File | Current Slug | New Slug | Type | Title | SEO Title | Sections | Metrics Plan | Realism Plan |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/domains/case-studies/content/AppointmentBusinessBookingAutomation.tsx` | `appointment-business-booking-automation` | `dental-phone-lines-still-busy` | operations | Most appointments still depended on someone picking up the phone | Dental booking case study: fewer phone bottlenecks | hero, situation, friction, adjustment, outcome, CTA | Soften `52% online booking`, `28% appointments`, and `14 hours/week`; turn quieter front-desk pressure and after-hours bookings into narrative. | human limitation: reception still manually checked edge-case bookings in the first few weeks. |
| `src/domains/case-studies/content/AppointmentReminderNoShowReduction.tsx` | `appointment-reminder-no-show-reduction` | `dental-chair-time-lost-to-no-shows` | follow-up | The chair was booked, then nobody came | Dental no-show case study: fewer missed appointments | hero, situation, workflow glimpse, adjustment, outcome, CTA | Soften `16% to 5%` and `GBP1,400/week`; convert recovered chair time and fewer same-day gaps into narrative. | inconsistency: reminder response rates varied by appointment type and time of week. |
| `src/domains/case-studies/content/AutoRepairMissedCallRecovery.tsx` | `auto-repair-missed-call-recovery` | `garage-morning-rush-missed-calls` | missed leads | The phone kept ringing while the ramps were full | Garage missed call case study: more enquiries recovered | hero, situation, friction, workflow glimpse, outcome, CTA | Soften `9 leads/week` and `GBP3,800/month`; turn the morning rush and recovered conversations into narrative. | delay: staff still called some people back manually until they trusted the missed-call flow. |
| `src/domains/case-studies/content/AutomotiveServiceReminderAutomation.tsx` | `automotive-service-reminder-automation` | `garage-service-due-calls-not-happening` | follow-up | Service reminders only went out when someone remembered | Garage service reminder case study: more repeat bookings | hero, situation, friction, adjustment, outcome, CTA | Soften `48% to 72%` and `GBP5,100/month`; convert steadier repeat bookings and fewer lapsed clients into narrative. | human limitation: the team did not clean old customer records all at once, so some reminders needed manual correction. |
| `src/domains/case-studies/content/BeautySalonManchesterAllSections.tsx` | `beauty-salon-online-booking-local-seo-manchester-all-sections` | `manchester-salon-bookings-came-from-everywhere` | visibility | Bookings were coming in from too many different places to manage properly | Salon visibility case study: clearer booking paths in Manchester | hero, situation, breakdown, impact, outcome, CTA | Soften all demo-style stacked metrics; convert channel clarity, easier booking, and stronger local discovery into narrative. | inconsistency: some booking sources stayed messy until the team stopped using old habits. |
| `src/domains/case-studies/content/BeautySalonManchesterCustom.tsx` | `beauty-salon-online-booking-local-seo-manchester-custom` | `manchester-salon-admin-was-split-across-channels` | operations | The salon looked busy online, but the day-to-day admin kept slipping | Salon admin case study: fewer booking handoff issues in Manchester | hero, situation, breakdown, adjustment, outcome, CTA | Soften any demo-only precision; convert fewer handoffs and clearer day-to-day handling into narrative. | delay: staff kept checking DMs and the old process before fully trusting the new flow. |
| `src/domains/case-studies/content/CrmPipelineVisibilityTransformation.tsx` | `crm-pipeline-visibility-transformation` | `quotes-sat-in-inboxes-and-nobody-knew` | operations | Nobody could tell which quotes were still worth chasing properly | CRM visibility case study: clearer quote tracking | hero, situation, friction, workflow glimpse, impact, outcome, CTA | Soften `21% to 34%`; convert visibility, fewer blind spots, and clearer ownership into narrative. | human limitation: the team needed time to use stages consistently instead of keeping side notes. |
| `src/domains/case-studies/content/HvacEmergencyLeadRouting.tsx` | `hvac-emergency-lead-routing` | `hvac-after-hours-calls-going-cold` | missed leads | Emergency calls kept coming in after the office had closed | HVAC after-hours call case study: more emergency jobs captured | hero, situation, friction, workflow glimpse, outcome, CTA | Soften `91% capture`; turn night calls answered faster and fewer silent drop-offs into narrative. | inconsistency: not every caller completed the SMS triage, especially at the start. |
| `src/domains/case-studies/content/HvacMaintenancePlanReactivation.tsx` | `hvac-maintenance-plan-reactivation` | `hvac-lapsed-plans-not-getting-renewed` | follow-up | Maintenance renewals kept slipping through without anyone noticing | HVAC renewal reactivation case study: more maintenance plans renewed | hero, situation, friction, adjustment, impact, outcome, CTA | Soften `54% to 71%`, `73 customers`, and `GBP4,800/month`; convert steadier renewal conversations into narrative. | missed follow-up: some long-lapsed accounts still needed manual chasing before they responded. |
| `src/domains/case-studies/content/HvacSeasonalLeadSurgeHandling.tsx` | `hvac-seasonal-lead-surge-handling` | `hvac-first-cold-snap-call-overflow` | missed leads | The first cold snap buried the phone lines within hours | HVAC surge handling case study: more peak-demand calls handled | hero, situation, breakdown, adjustment, outcome, CTA | Soften `3x call capacity`; convert fewer dropped calls and calmer queue handling into narrative. | delay: the team needed a short bedding-in period before overflow rules matched real demand peaks. |
| `src/domains/case-studies/content/LawFirmClientIntakeAutomation.tsx` | `law-firm-client-intake-automation` | `law-firm-intake-stalled-after-first-enquiry` | operations | New matters kept slowing down before the paperwork even started | Law firm intake case study: faster enquiry-to-intake handling | hero, situation, friction, workflow glimpse, outcome, CTA | Soften `4 days to 6 hours`, `58% to 87%`, and `18 admin hours`; convert less chasing and faster file readiness into narrative. | delay: some clients still uploaded documents late, even after the intake changes. |
| `src/domains/case-studies/content/LawFirmConsultationBookingSystem.tsx` | `law-firm-consultation-booking-system` | `law-firm-consultations-stuck-on-phone-tag` | quote conversion | Too many consultations were lost to back-and-forth phone tag | Law firm consultation booking case study: easier first meetings | hero, situation, friction, adjustment, outcome, CTA | Soften `34% more consultations` and `12 hours/week`; turn faster booking and less receptionist back-and-forth into narrative. | human limitation: some solicitors still preferred manual confirmation for selected matter types. |
| `src/domains/case-studies/content/LocalAuthoritySystemImpact.tsx` | `local-authority-system-impact` | `electrician-not-showing-up-where-locals-search` | visibility | They were doing the work, but not showing up where people searched | Local visibility case study: electrician found more often in Google Maps | hero, situation, breakdown, impact, outcome, CTA | Soften `page 2 to top 3`, `2 to 17 leads`, and ad-dependency claims; convert better-fit local enquiries and steadier visibility into narrative. | inconsistency: rankings moved unevenly across service areas before settling. |
| `src/domains/case-studies/content/RealEstateInquiryRouting.tsx` | `real-estate-inquiry-routing` | `estate-agent-enquiries-sat-too-long` | operations | Property enquiries kept sitting too long before anyone actually replied | Estate agent enquiry routing case study: faster response | hero, situation, friction, workflow glimpse, outcome, CTA | Soften `8 hours to 11 minutes` and `38% more viewings`; turn faster first contact and less shared-inbox chaos into narrative. | delay: portal leads and direct website leads did not cleanly match on day one. |
| `src/domains/case-studies/content/RealtorLeadFollowUpAutomation.tsx` | `realtor-lead-follow-up-automation` | `estate-agent-viewing-follow-ups-fading-out` | follow-up | Buyer conversations kept fading after the first reply went out | Estate agent follow-up case study: more viewings booked | hero, situation, friction, adjustment, outcome, CTA | Soften `22% to 41%` and `GBP14,000/quarter`; convert more viewings booked and fewer cold enquiries into narrative. | missed follow-up: negotiators still stepped in manually for high-intent buyers and urgent properties. |
| `src/domains/case-studies/content/RoofingEstimateFollowUpAutomation.tsx` | `roofing-estimate-follow-up-automation` | `roofing-quotes-not-being-followed-up` | quote conversion | Roofing quotes kept going quiet after they were sent out | Roofing quote follow-up case study: more estimates turning into jobs | hero, situation, friction, workflow glimpse, outcome, CTA | Soften `18% to 35%` and `GBP8,200/month`; convert revived quote conversations and steadier follow-up into narrative. | inconsistency: some estimate categories still needed custom follow-up timing instead of one cadence. |
| `src/domains/case-studies/content/RoofingWebsiteRebuildWithCrm.tsx` | `roofing-website-rebuild-with-crm` | `roofing-site-got-visits-but-not-calls` | visibility | The website was live, but the phone still was not ringing enough | Roofing website case study: more leads from the same traffic | hero, situation, breakdown, adjustment, outcome, CTA | Soften `6 to 22 weekly leads`; convert clearer service paths, better-fit enquiries, and fewer dead-end visits into narrative. | delay: launch week still surfaced missed page details and form tweaks before performance settled. |
| `src/domains/case-studies/content/SalonBookingAutomation.tsx` | `salon-booking-automation` | `salon-bookings-still-tied-to-the-phone` | operations | Too many appointments still depended on someone picking up the phone | Salon booking case study: more appointments booked online | hero, situation, friction, adjustment, outcome, CTA | Soften `68% online adoption` and `22% more volume`; turn after-hours bookings and lower admin pressure into narrative. | human limitation: stylists still asked reception to override some complex bookings manually. |
| `src/domains/case-studies/content/SalonNoShowReductionSystem.tsx` | `salon-no-show-reduction-system` | `salon-empty-chairs-from-late-cancellations` | follow-up | The appointment book looked full until the gaps started appearing | Salon no-show case study: fewer empty-chair losses | hero, situation, workflow glimpse, adjustment, outcome, CTA | Soften `18% to 4%` and `GBP870/week`; convert fewer last-minute gaps and better refill behaviour into narrative. | inconsistency: some regular clients still ignored reminders, so results were not perfectly uniform. |
| `src/domains/case-studies/content/SalonReviewGenerationAutomation.tsx` | `salon-review-generation-automation` | `salon-happy-clients-not-leaving-reviews` | visibility | Clients were happy in person, but reviews stayed quiet online | Salon review case study: more Google reviews from completed visits | hero, situation, friction, adjustment, impact, outcome, CTA | Soften `23 to 67 reviews`; convert a fuller Google profile and more visible trust signals into narrative. | delay: review lift started slowly until the team tightened when requests were sent. |
| `src/domains/case-studies/content/SmartWebsiteInfrastructureImplementation.tsx` | `smart-website-infrastructure-implementation` | `plumbing-website-looked-fine-but-underperformed` | visibility | The website looked acceptable, but it was not pulling its weight in leads | Plumbing website infrastructure case study: more leads from a stronger site | hero, situation, breakdown, adjustment, impact, outcome, CTA | Soften `4 to 31 monthly leads`; convert clearer next steps, better lead capture, and less brochure-site drift into narrative. | delay: the rebuilt site needed real usage data before form and page-flow issues became obvious. |
| `src/domains/case-studies/content/StormSeasonLeadHandlingSystem.tsx` | `storm-season-lead-handling-system` | `roofing-storm-calls-overwhelmed-the-team` | missed leads | Storm calls spiked faster than the team could realistically answer | Roofing storm-season call case study: more missed calls recovered | hero, situation, friction, workflow glimpse, outcome, CTA | Soften `89% missed call recovery`; convert storm-day responsiveness and fewer silent losses into narrative. | human limitation: crews still could not answer every live call during peak weather windows. |

## Type Distribution

- Missed leads: `AutoRepairMissedCallRecovery`, `HvacEmergencyLeadRouting`, `HvacSeasonalLeadSurgeHandling`, `StormSeasonLeadHandlingSystem`
- Follow-up: `AppointmentReminderNoShowReduction`, `AutomotiveServiceReminderAutomation`, `HvacMaintenancePlanReactivation`, `RealtorLeadFollowUpAutomation`, `SalonNoShowReductionSystem`
- Quote conversion: `LawFirmConsultationBookingSystem`, `RoofingEstimateFollowUpAutomation`
- Visibility: `BeautySalonManchesterAllSections`, `LocalAuthoritySystemImpact`, `RoofingWebsiteRebuildWithCrm`, `SalonReviewGenerationAutomation`, `SmartWebsiteInfrastructureImplementation`
- Operations: `AppointmentBusinessBookingAutomation`, `BeautySalonManchesterCustom`, `CrmPipelineVisibilityTransformation`, `LawFirmClientIntakeAutomation`, `RealEstateInquiryRouting`, `SalonBookingAutomation`

## Execution Priorities

Priority 1 - Strongest production proof pages:

- `StormSeasonLeadHandlingSystem`
- `HvacEmergencyLeadRouting`
- `RoofingEstimateFollowUpAutomation`
- `LocalAuthoritySystemImpact`
- `SmartWebsiteInfrastructureImplementation`
- `LawFirmClientIntakeAutomation`

Priority 2 - Operational and follow-up pages that share repeated structure:

- `AppointmentBusinessBookingAutomation`
- `AppointmentReminderNoShowReduction`
- `AutomotiveServiceReminderAutomation`
- `CrmPipelineVisibilityTransformation`
- `RealtorLeadFollowUpAutomation`
- `SalonBookingAutomation`
- `SalonNoShowReductionSystem`

Priority 3 - Demo and lower-trust surfaces already in registry:

- `BeautySalonManchesterAllSections`
- `BeautySalonManchesterCustom`

Execution rule for Priority 3:

- keep them registry-safe
- align naming and section count with the same standard
- avoid letting demo language set the tone for production proof pages

## End State

When execution is complete, every case study should have:

- one dominant type
- a situation-first slug
- a human-moment page title
- a clear SEO title
- 4-7 narrative sections only
- softer metrics where precision currently weakens trust
- at least one visible imperfection
- an end-only soft CTA

That completes the planning definition without changing template, schema, routing, graph rules, or conversion ownership.
