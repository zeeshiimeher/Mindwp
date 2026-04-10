# EXECUTION PLAN — REVENUE ACTIVATION LAYER

Status: ACTIVE  
Last Updated: [date]

-------------------------------------
EXECUTION PRIORITY (STRICT ORDER)
-------------------------------------

1. CRM-INTEGRATION PATCH (BLOCKING)
2. SERVICE-PAGES IMPROVEMENT
3. BOFU PAGE #1 (CRM DECISION)
4. BOFU PAGE #2 (SERVICE PAGE DECISION)
5. BOFU PAGE #3 (CONVERSION DECISION)
6. PROOF INTEGRATION
7. VALIDATION FIXES

-------------------------------------
SYSTEM STATE (LOCKED)
-------------------------------------

- Authority Layer: COMPLETE ✅
- Validation Layer: COMPLETE ✅
- Topics: LOCKED (no new topics)
- Services: DEFINED

We are NOT:
- adding new topics
- redesigning architecture

We are:
- improving conversion
- activating revenue layer

-------------------------------------
DOMAIN PRIORITY CONTEXT
-------------------------------------

Priority Order:

1. Services (core revenue layer)
2. Service Landing Page
3. CRM Integration Content
4. Blogs & Resources
5. Case Studies
6. Industry Pages

Purpose:
Ensure revenue-first execution

-------------------------------------
GLOBAL AUDIT & ITERATION LAYER
-------------------------------------

Goal:
Continuously audit → plan → execute → update (loop-based system)

Approach:
- Audit real repo state (NOT assumptions)
- Convert findings → actionable tasks
- Execute in phases (no jumping)
- Update this doc after each execution cycle

Rules:
- No bulk random changes
- No parallel execution chaos
- Always follow priority order

Cycle:
1. Audit (Copilot)
2. Plan (GPT)
3. Execute (Copilot)
4. Update doc (YOU)

-------------------------------------
CORE FOCUS TOPICS
-------------------------------------

1. service-pages
2. crm-integration
3. conversion-optimization
4. website-infrastructure
5. systems-first-websites (supporting)

-------------------------------------
PHASE 0 — SYSTEM STABILIZATION (PRE-EXECUTION)
-------------------------------------

## 🔴 CTA SYSTEM HARDENING

Problems:
- 'Learn More' hardcoded in multiple components
- CTA not fully centralized
- Some CTAs bypass SmartCTA

Tasks:
- [ ] Find ALL hardcoded CTA labels (e.g. "Learn More")
- [ ] Move them into ctaLabels.ts
- [ ] Replace inline CTAs with SmartCTA where applicable
- [ ] Standardize CTA usage across:
   → blog
   → resources
   → case studies
   → landing pages

Success Criteria:
- 100% CTAs come from central config
- No inline CTA strings remain
- SmartCTA used everywhere for primary actions

---

## 🔴 SEO SYSTEM CENTRALIZATION

Problems:
- 100+ manual SEO objects across:
  → blog
  → resources
  → case studies
  → industries
- Canonical duplication risk
- No builder pattern outside services/features

Tasks:
- [ ] Create SEO builders for:
   → blog
   → resources
   → case studies
   → industries
- [ ] Remove manual SEO duplication
- [ ] Standardize canonical generation
- [ ] Ensure schema consistency

Success Criteria:
- No manual SEO objects in content files
- All domains use builder pattern
- Canonical logic centralized

---

## 🟡 RELATED SYSTEM VALIDATION

Status:
- Deterministic (NO change required)

Tasks:
- [ ] Remove dead fields:
   → relatedServices (unused)
- [ ] Document resource-specific related system (category-based)
- [ ] Ensure no future manual related arrays are introduced

Success Criteria:
- No dead fields
- No manual related logic introduced later

---

## 🔴 LOCATION SYSTEM (BLOCKED)

Status:
- NOT READY

Rules:
- DO NOT create location pages yet

Tasks (Preparation ONLY):
- [ ] Design location data structure (future)
- [ ] Plan SEO template for location pages
- [ ] Plan CTA location context support
- [ ] Plan authority-map scaling strategy

Success Criteria:
- Clear future-ready plan
- ZERO implementation now

-------------------------------------
PHASE 1 — PATCH EXISTING CONTENT (HIGH PRIORITY)
-------------------------------------

## 🔴 CRM-INTEGRATION (CRITICAL GAP)

### Pages:
- WebsiteCrmIntegrationForServiceBusinesses.tsx
- WebsiteCrmIntegrationForSalons.tsx
- WebsiteCrmIntegrationExplained.tsx

### Problems:
- validates = 0
- no service push
- weak CTA (educational, not commercial)

### Tasks:
- [ ] Add direct service mapping → crm-infrastructure-implementation
- [ ] Replace CTA with decision-based CTA
- [ ] Inject case study:
      → RoofingWebsiteRebuildWithCrm
- [ ] Add section:
      "What happens if you don’t fix this"

### Expected Outcome:
- These pages must behave as BOFU, not educational
- User should clearly move toward CRM implementation decision

### Success Criteria:
- validates > 0
- 1 direct service CTA
- 1 case study integrated
- 1 decision-driving section added

### Owner:
Copilot (code + content patch)

---

## 🟡 SERVICE-PAGES (IMPROVEMENT)

### Page:
- LocalServicePageArchitecture.tsx

### Problems:
- explanatory
- not pushing decision

### Tasks:
- [ ] Add comparison section:
      "Generic vs System-Based Service Pages"
- [ ] Add proof block
- [ ] Strengthen CTA → Smart Website Systems

### Success Criteria:
- validates > 0
- 1 comparison section added
- 1 proof block added
- CTA clearly pushes Smart Website Systems

---

-------------------------------------
PHASE 2 — HIGH-IMPACT BOFU PAGES
-------------------------------------

⚠️ Limit: ONLY 3 pages (no overproduction)

### Page Structure (MANDATORY):

- Problem (pain)
- Comparison (this vs that)
- Proof (case study)
- Decision section
- Single CTA

### 1. CRM DECISION PAGE

Title:
Website CRM Integration vs Manual Lead Handling

Goal:
Force decision to implement CRM

Service:
crm-infrastructure-implementation

Status:
[ ] Not started

---

### 2. SERVICE PAGE DECISION

Title:
Service Pages vs One Generic Services Page

Goal:
Force rebuild decision

Service:
smart-website-systems

Status:
[ ] Not started

---

### 3. CONVERSION DECISION

Title:
Conversion Funnel System vs Landing Page Development

Goal:
Choose correct service

Service:
conversion-funnel-system

Status:
[ ] Not started

---

-------------------------------------
PHASE 3 — PROOF INTEGRATION
-------------------------------------

## Primary Case Study:
- RoofingWebsiteRebuildWithCrm

Usage:
- CRM pages
- Service page content
- Conversion pages

Tasks:
- [ ] Add inline proof (not footer link)
- [ ] Add metrics-based statements
- [ ] Connect outcome → service

### Rules:
- Proof must appear mid-content (not bottom)
- Must include:
  → before vs after
  → measurable outcome
- Must directly support the service being pushed

---

-------------------------------------
PHASE 4 — SERVICE ALIGNMENT
-------------------------------------

Ensure:

- [ ] Every core topic → 1 service
- [ ] Every BOFU page → 1 CTA
- [ ] No generic CTA ("learn more")

Mapping:

- service-pages → smart-website-systems
- crm-integration → crm-infrastructure-implementation
- conversion → conversion-funnel-system
- infrastructure → smart-website-systems

-------------------------------------
PHASE 4.1 — SERVICE PAGES LEVEL 5 UPGRADE
-------------------------------------

Goal:
Upgrade ALL service pages to Level 5 (conversion-ready, proof-backed, system-aligned)

Context:
- 4 service pages already updated
- Remaining service pages are below Level 5

Tasks:
- [ ] Audit all remaining service pages
- [ ] Upgrade content to Level 5 standard
- [ ] Add comparison sections (where missing)
- [ ] Add proof blocks (case studies)
- [ ] Ensure single clear CTA per page
- [ ] Align each page with correct system + service intent

Success Criteria:
- All services = Level 5 quality
- No weak/explanatory service pages
- Every page pushes a clear decision

-------------------------------------
PHASE 4.2 — GLOBAL METADATA & GRAPH ALIGNMENT
-------------------------------------

Goal:
Ensure all domains are fully aligned at metadata + graph level

Tasks:
- [ ] Fix topics for all domains (blog, resource, case-study, services)
- [ ] Fix systems mapping across all domains
- [ ] Remove incorrect/duplicate topic associations
- [ ] Ensure every node has valid service alignment
- [ ] Rebuild authority map after fixes

Success Criteria:
- No broken topic mappings
- No invalid system associations
- Clean authority graph

-------------------------------------
PHASE 4.3 — CTA STANDARDIZATION (ALL DOMAINS)
-------------------------------------

Goal:
Make ALL CTAs conversion-focused and consistent across system

Tasks:
- [ ] Audit CTAs in all domains (services, blogs, resources, case studies)
- [ ] Replace generic CTAs (e.g., "learn more")
- [ ] Ensure each page has ONE primary CTA
- [ ] Align CTA with service intent (BOFU focus)
- [ ] Match CTA language with conversion stage

CTA Rules:
- Must be action-driven
- Must point to ONE service
- Must match user intent (BOFU preferred)
- Must appear at least 2 times on page (mid + end)
- Must avoid generic phrasing
- Must NOT be educational

Success Criteria:
- No weak CTAs across site
- Every page drives a clear next step

-------------------------------------
PHASE 4.4 — DOMAIN LANDING PAGES (STEP-BY-STEP)
-------------------------------------

Goal:
Upgrade ALL domain landing pages (services, features, etc.) from demo/catalog → conversion-driven navigation layers

Principle:
Landing pages = PRE-SELL the click (not explain everything)

Execution Strategy (MANDATORY):
⚠️ Work ONE landing page at a time (no bulk edits)

Per-Page Workflow:
1. Audit page (Copilot)
   - titles
   - descriptions
   - CTAs
   - sections

2. Identify gaps
   - generic wording
   - weak CTA
   - no positioning
   - no clear outcome

3. Patch (Copilot)
   - Rewrite titles → outcome/problem focused
   - Rewrite descriptions → transformation (before → after)
   - Replace CTA → action-driven (no "learn more")
   - Add/adjust sections if needed (top positioning + mid clarity)

4. Validate
   - Does each card push a click?
   - Is there a clear outcome?
   - Is CTA aligned with ONE service?

5. Update this doc (execution log)

Content Rules:
- Titles = outcome or problem (NOT system name only)
- Descriptions = what changes after using this
- CTA = action + intent (BOFU aligned)

Tasks:
- [ ] Identify all landing pages (services, features, etc.)
- [ ] Create execution list (order)
- [ ] Update each page step-by-step

Success Criteria:
- No generic titles/descriptions
- No "Learn More" CTAs
- Every card pushes a clear decision/action

-------------------------------------
PHASE 4.5 — INDUSTRY PAGES REWRITE
-------------------------------------

Goal:
Upgrade ALL industry pages to conversion + positioning level

Problems:
- Likely generic
- Weak differentiation
- Not pushing system-based approach strongly

Tasks:
- [ ] Audit all industry pages
- [ ] Rewrite content (positioning + specificity)
- [ ] Add system explanation per industry
- [ ] Add proof (case study mapping)
- [ ] Align CTA with relevant service

Success Criteria:
- Each industry page feels specialized
- Strong positioning (not generic templates)
- Clear path to service

-------------------------------------
PHASE 4.6 — CASE STUDIES REWRITE (HIGH IMPACT)
-------------------------------------

Goal:
Turn case studies into PROOF ASSETS (trust + authority drivers)

Context:
- Not traffic-focused
- HIGH impact on conversion + trust

Problems:
- Likely descriptive
- Not structured for persuasion

Tasks:
- [ ] Audit all case studies
- [ ] Rewrite using proof-first structure
- [ ] Add before vs after clearly
- [ ] Add measurable outcomes
- [ ] Connect case study → service explicitly
- [ ] Add inline usage for other pages

Structure (MANDATORY):
- Problem (real situation)
- System implemented
- What changed
- Results (metrics)
- Business impact

Success Criteria:
- Strong proof narrative
- Easy to reuse across pages
- Supports BOFU decisions

-------------------------------------
PHASE 4.7 — WRITING SYSTEM UPGRADE
-------------------------------------

Goal:
Upgrade writing guidelines (especially for case studies)

Tasks:
- [ ] Update writing-instructions doc
- [ ] Add case study writing framework
- [ ] Define BOFU vs MOFU vs TOFU tone
- [ ] Define CTA writing rules
- [ ] Define proof integration rules

Focus:
- Case studies = proof, not storytelling only
- Blogs = authority + transition
- Services = decision + conversion

Success Criteria:
- Consistent writing across domains
- No weak/soft content
- Clear conversion intent everywhere

-------------------------------------
PHASE 4.8 — BLOG & RESOURCE ALIGNMENT
-------------------------------------

## Goal:
Align blogs and resources at the metadata and conversion-routing layer so existing authority content supports revenue execution without triggering broad rewrites.

## Scope:
Included:
- metadata
- topics
- systems
- service mapping
- targeted CTA and proof alignment for weak pages

Excluded:
- full content rewrites
- broad writing improvements
- mass blog optimization
- non-targeted topic expansion

## Tasks:
- [ ] Audit blogs with validates = 0
- [ ] Audit resources with weak service linkage
- [ ] Patch only the affected pages
- [ ] Add 1 strong CTA per affected page
- [ ] Add 1 proof reference per affected page
- [ ] Add 1 service connection per affected page
- [ ] Revalidate metadata and graph output after patches

## Execution Steps:
1. Audit
   - identify blogs with validates = 0
   - identify resources with weak service linkage
   - confirm whether the issue is metadata, service mapping, CTA weakness, or missing proof reference

2. Patch
   - patch ONLY the affected pages
   - add 1 strong CTA
   - add 1 proof reference
   - add 1 service connection
   - keep changes targeted to alignment work, not full rewrites

3. Validate
   - regenerate or inspect graph outputs as needed
   - confirm targeted pages no longer sit in the zero-validate cluster
   - confirm each patched page routes to one clear service

4. Later, not now
   - then content upgrade for CRM blogs
   - then content upgrade for conversion blogs
   - then content upgrade for service-page related blogs

## Success Criteria:
- No targeted blog or resource remains with validates = 0
- Each patched page has 1 CTA
- Each patched page has 1 service mapping
- Each patched page has 1 proof reference
- No unnecessary rewrites were introduced

## Rules:
- Do not rewrite 75 blogs
- Do not improve writing randomly
- Do not chase perfection
- Do not turn this phase into a content-production pass
- Focus on metadata and conversion alignment first

## Preserved Working Notes:

Focus ONLY on:
- metadata
- topics
- systems
- service mapping

Step 2

Identify:
- blogs with validates = 0
- resources with weak service linkage

Step 3

Patch ONLY those:

Add:
- 1 strong CTA
- 1 proof reference
- 1 service connection

Not full rewrite

Step 4 (later, not now)

Then content upgrade for:
- CRM blogs (you already identified)
- Conversion blogs
- Service-page related blogs

⚠️ What NOT to do

❌ Don’t rewrite 75 blogs
❌ Don’t “improve writing” randomly
❌ Don’t chase perfection

👉 That’s time waste

-------------------------------------
PHASE 5 — VALIDATION FIXES
-------------------------------------

Target:

- validates ≥ 1 (minimum)
- validates ≥ 2 (ideal for core pages)

Tasks:

- [ ] CRM cluster → connect to service
- [ ] Inject proof where missing
- [ ] Re-run authority generation

---

-------------------------------------
GLOBAL EXECUTION ORDER (STRICT)
-------------------------------------

Execute domains in this exact order:

1. System Stabilization (NEW)
2. Service Pages (Level 5 upgrade)
3. CTA Standardization (all domains)
4. Service Landing Page (ONLY first)
5. CRM Blog Fixes (zero-validate cluster)
6. Blog & Resource Alignment (metadata only)
7. Case Studies Rewrite
8. Industry Pages Rewrite
9. Remaining Landing Pages

Rule:
- No jumping between steps
- Complete one layer before moving forward

-------------------------------------
PHASE COMPLETION RULES
-------------------------------------

Service Pages complete when:
- All pages meet Level 5 standard
- Each page has 1 clear CTA
- Each page has 1 proof block
- Each page has 1 comparison or decision section

CTA Standardization complete when:
- No "learn more" CTA remains as the primary action
- One primary CTA exists per page
- Every primary CTA maps to one service
- Every primary CTA appears at least 2 times on page when applicable (mid + end)
- Primary CTA language matches conversion intent

Service Landing Page complete when:
- The first landing page is fully upgraded before any remaining landing pages start
- Titles, descriptions, and CTA blocks are conversion-driven
- Every card or section pushes one clear next action

CRM Blog Fixes complete when:
- The zero-validate CRM cluster is fully patched
- Each CRM page has 1 CTA
- Each CRM page maps to 1 service
- Each CRM page includes 1 proof reference

Blog & Resource Alignment complete when:
- No node in the targeted scope has validates = 0
- Each page has 1 CTA
- Each page has 1 service mapping
- Each page has 1 proof reference

Case Studies complete when:
- Every case study uses proof-first structure
- Every case study states before vs after
- Every case study includes measurable outcomes
- Every case study connects explicitly to a service

Industry Pages complete when:
- Every page has specialized positioning
- Every page has service-aligned CTA
- Every page includes proof or mapped proof reference
- No industry page reads like a generic template

Remaining Landing Pages complete when:
- The execution list is finished in order
- No generic title, description, or CTA remains
- Every landing page functions as a conversion layer, not a catalog layer

-------------------------------------
WORKFLOW (IMPORTANT)
-------------------------------------

1. Use Copilot:
   → for system fixes + repo-wide changes

2. Use GPT:
   → for planning + validation

3. Use Claude:
   → content writing ONLY after system stabilization

4. ALWAYS:
   → Update this file after completing tasks

---

-------------------------------------
RULES
-------------------------------------

- Do NOT create random content
- Do NOT expand topics
- Do NOT over-engineer
- Do NOT scale content before system stabilization
- Do NOT introduce new pages before SEO + CTA systems are centralized
- System fixes come BEFORE content fixes

Focus ONLY on:
→ revenue
→ conversion
→ execution

- Do NOT jump to BOFU pages early
- Do NOT touch new content before fixing existing
- Do NOT over-optimize graph early

-------------------------------------
EXECUTION LOG
-------------------------------------

[Date]

- Completed:
  → 

- Result:
  → 

- Next:
  → 

# MODEL EXECUTION LAYER

Purpose:
Define strict responsibility boundaries between GPT, Copilot, and Claude to avoid inconsistency, duplication, and execution chaos.

-------------------------------------
MODEL ROLE DEFINITIONS
-------------------------------------

## GPT (5.4) — SYSTEM + PLANNING + VALIDATION

Responsibilities:
- Planning phases and execution structure
- Defining tasks and success criteria
- System design decisions
- Validation logic
- Reviewing outputs from Copilot and Claude
- Detecting inconsistencies
- Updating planning.md

Must NOT:
- Write long-form content
- Perform bulk file edits
- Modify repo directly

---

## COPILOT — EXECUTION (CODE + FILE PATCHING)

Responsibilities:
- Apply changes across repo
- Update multiple files consistently
- Refactor repeated patterns
- Implement:
   → CTA fixes
   → SEO fixes
   → system/topic alignment
   → component updates
- Run repo-level audits

Must:
- Follow planning.md strictly

Must NOT:
- Invent new structure
- Redesign logic
- Write creative content

---

## CLAUDE — CONTENT WRITING (CONTROLLED)

Responsibilities:
- Write/rewrite:
   → service pages
   → blogs (targeted)
   → case studies
   → industry pages
- Follow writing-instructions doc
- Produce conversion-focused content

Must:
- Follow structure (problem → proof → decision → CTA)
- Stay aligned with services/systems

Must NOT:
- Change metadata/system logic
- Introduce new concepts outside plan

-------------------------------------
PHASE → MODEL MAPPING
-------------------------------------

PHASE 0 — SYSTEM STABILIZATION  
Owner: Copilot + GPT  
Claude: NOT USED

---

PHASE 1 — PATCH EXISTING CONTENT  
Owner: Copilot + Claude  
GPT: Validation

---

PHASE 2 — BOFU PAGES  
Owner: Claude + GPT  
Copilot: Implementation

---

PHASE 3 — PROOF INTEGRATION  
Owner: Copilot + Claude  
GPT: Validation

---

PHASE 4 — SERVICE ALIGNMENT  
Owner: Copilot + GPT

---

PHASE 4.1 — SERVICE LEVEL 5  
Owner: Claude + Copilot  
GPT: Validation

---

PHASE 4.2 — METADATA & GRAPH  
Owner: Copilot + GPT

---

PHASE 4.3 — CTA STANDARDIZATION  
Owner: Copilot + GPT

---

PHASE 4.4 — LANDING PAGES  
Owner: Claude + Copilot  
GPT: Validation

---

PHASE 4.5 — INDUSTRY PAGES  
Owner: Claude + Copilot

---

PHASE 4.6 — CASE STUDIES  
Owner: Claude (PRIMARY)  
Copilot: Apply  
GPT: Validate

---

PHASE 4.7 — WRITING SYSTEM  
Owner: GPT

---

PHASE 4.8 — BLOG & RESOURCE ALIGNMENT  
Owner: Copilot + GPT  
Claude: LIMITED

---

PHASE 5 — VALIDATION  
Owner: GPT + Copilot

-------------------------------------
STRICT RULES
-------------------------------------

- NEVER mix responsibilities
- NEVER let Claude modify system logic
- NEVER let Copilot write content creatively
- ALWAYS validate with GPT before moving phase

-------------------------------------
SUCCESS CONDITION
-------------------------------------

- Consistent execution across 200+ files
- No tone inconsistency
- No system breakage
- Clean separation of concerns