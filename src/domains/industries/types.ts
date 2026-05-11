import type { IndustryCategory } from '@/domains/industries/catalog';

export type IndustrySeoData = {
  title: string;
  description: string;
  canonical: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
};

export type IndustryHeroData = {
  badge: string;
  title: string;
  description: string;
  list: string[];
};

export type IndustrySectionHeading = {
  kicker?: string;
  title: string;
  description?: string;
};

export type IndustryLeakState = 'silent' | 'slow' | 'lost' | 'risk' | 'attention' | 'healthy';

export type IndustryLeakItem = {
  id: string;
  leak: string;
  state: IndustryLeakState;
  observed: string;
};

export type IndustryTimelineStep = {
  id: string;
  time: string;
  event: string;
  leakRisk: 'low' | 'medium' | 'high';
  owner?: string;
  detail?: string;
};

export type IndustryStateColumn = {
  label: string;
  items: string[];
};

export type IndustryWorkbenchItem = {
  id: string;
  piece: string;
  state: 'in-place' | 'planned' | 'optional';
  owner: string;
  note?: string;
};

export type IndustryStartingPoint = {
  id: string;
  fix: string;
  signalIfYou: string;
  leadingSystem: string;
};

export type IndustryWorkflowRow = {
  id: string;
  trigger: string;
  action: string;
  owner: string;
  channel?: string;
};

export type IndustryRelevantSystem = {
  id: string;
  name: string;
  role: 'lead' | 'support' | 'optional';
  why: string;
};

export type IndustryScenarioBlock = {
  kind: 'scenario' | 'illustrative' | 'operational-breakdown';
  label: string;
  body: string;
  observedChange?: string;
};

export type IndustryPathwayBranch = {
  id: string;
  segment: string;
  recognition: string;
  leadingSystem: string;
  detailHref: string;
  detailLabel: string;
};

export type IndustryOperatingModel = {
  id: string;
  label: string;
  traits: string[];
  differentiator: string;
};

export type IndustrySystemMatrixEntry = {
  systemId: string;
  systemName: string;
  status: 'lead' | 'support' | 'later';
  whyNow: string;
};

export type IndustryRouteEntry = {
  detailHref: string;
  label: string;
  oneLine: string;
  leadingSystem: string;
  state?: IndustryLeakState;
};

export type IndustryHandledStateItem = {
  id: string;
  label: string;
  state: 'before' | 'after';
  note: string;
};

export type IndustrySectionData = {
  header: IndustrySectionHeading;
  items?: string[];
  routes?: IndustryRouteSummary[];
  systems?: string[];
  // Rich optional semantic fields. Renderers cherry-pick what they need.
  leaks?: IndustryLeakItem[];
  timeline?: IndustryTimelineStep[];
  before?: IndustryStateColumn;
  after?: IndustryStateColumn;
  workbench?: IndustryWorkbenchItem[];
  startingPoints?: IndustryStartingPoint[];
  workflow?: IndustryWorkflowRow[];
  relevantSystems?: IndustryRelevantSystem[];
  scenario?: IndustryScenarioBlock;
  branches?: IndustryPathwayBranch[];
  models?: IndustryOperatingModel[];
  matrix?: IndustrySystemMatrixEntry[];
  routeEntries?: IndustryRouteEntry[];
  handled?: IndustryHandledStateItem[];
  rule?: string;
};

export type IndustryRouteSummary = {
  title: string;
  href: string;
  description?: string;
};

export type IndustryFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type IndustryFaqData = {
  header: IndustrySectionHeading;
  items: IndustryFaqItem[];
};

export type IndustryCtaData = {
  heading: {
    kicker?: string;
    title: string;
    description: string;
  };
  expectations?: {
    num?: string;
    text: string;
  }[];
  reassurance?: {
    noSell?: string;
    tone?: string;
  };
};

type IndustryPageDataBase = {
  seo: IndustrySeoData;
  slug: string;
  hero: IndustryHeroData;
  industries?: string[];
  systems: string[];
  topics?: string[];
  faq: IndustryFaqData;
  cta: IndustryCtaData;
  sections?: {
    type: string;
    title?: string;
    description?: string;
  }[];
};

export type IndustryCategoryPageData = IndustryPageDataBase & {
  type: 'category';
  category: IndustryCategory;
  categoryLeaks: IndustrySectionData;
  sharedPattern: IndustrySectionData;
  breakpoints: IndustrySectionData;
  operatingModels: IndustrySectionData;
  pathwayMap: IndustrySectionData;
  startingSystems: IndustrySectionData;
  detailRoutes: IndustrySectionData;
  handledState: IndustrySectionData;
  scenarioStrip: IndustrySectionData;
  parentSlug?: undefined;
};

export type IndustryDetailPageData = IndustryPageDataBase & {
  type: 'detail';
  parentSlug: IndustryCategory;
  industryPattern: IndustrySectionData;
  leakTimeline: IndustrySectionData;
  beforeAfter: IndustrySectionData;
  workbench: IndustrySectionData;
  startingPoints: IndustrySectionData;
  workflowExamples: IndustrySectionData;
  relevantSystems: IndustrySectionData;
  scenario: IndustrySectionData;
};

export type IndustryCategoryRendererProps = {
  data: IndustryCategoryPageData;
  slug: string;
};

export type IndustryDetailRendererProps = {
  data: IndustryDetailPageData;
  slug: string;
};

export type IndustryPageData = IndustryCategoryPageData | IndustryDetailPageData;
