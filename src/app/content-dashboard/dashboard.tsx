import fs from 'node:fs';
import path from 'node:path';

import { AuthorityGraphPanel } from './panels/authority-graph-panel';
import { ContentGapsPanel } from './panels/content-gaps-panel';
import { GraphSummaryPanel } from './panels/graph-summary-panel';
import { OverviewPanel } from './panels/overview-panel';
import { TopicAuthorityPanel } from './panels/topic-authority-panel';

// ── Types matching report JSON shapes ────────────────────────────────
export interface TopicScore {
  topic: string;
  blogCount: number;
  resourceCount: number;
  industryCount: number;
  serviceCount: number;
  caseStudyCount: number;
  score: number;
  level: string;
}

export interface TopicGap {
  topic: string;
  blogCount: number;
  resourceCount: number;
  industryCount: number;
  caseStudyCount: number;
  missing: string[];
  suggestions: string[];
}

export interface ResourceIndustryGap {
  slug: string;
  industryCount: number;
  suggestions: string[];
}

export interface IndustryCaseStudyGap {
  slug: string;
  caseStudyCount: number;
  suggestions: string[];
}

export interface GraphNode {
  id: string;
  type: string;
  health: string;
}

export interface GraphDiagnostics {
  orphans: string[];
  weak: string[];
  strong: string[];
}

// ── Safe JSON loader ─────────────────────────────────────────────────
function loadJson<T>(filename: string): T | null {
  try {
    const filePath = path.join(process.cwd(), 'reports', filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T;
  } catch {
    return null;
  }
}

// ── Main server component ────────────────────────────────────────────
export default function Dashboard() {
  const authorityScores = loadJson<{
    generatedAt: string;
    topicsAnalyzed: number;
    averageScore: number;
    scores: TopicScore[];
  }>('topic-authority-scores.json');

  const contentGaps = loadJson<{
    generatedAt: string;
    stats: {
      totalNodes: number;
      blogs: number;
      resources: number;
      industries: number;
      caseStudies: number;
      topics: number;
    };
    topicGaps: TopicGap[];
    resourceIndustryGaps: ResourceIndustryGap[];
    industryCaseStudyGaps: IndustryCaseStudyGap[];
  }>('content-gaps.json');

  const authorityMap = loadJson<{
    nodes: GraphNode[];
    edges: { from: string; to: string; relation: string }[];
    diagnostics: GraphDiagnostics;
  }>('authority-map.json');

  // Check for optional SVG
  let svgContent: string | null = null;
  try {
    const svgPath = path.join(process.cwd(), 'reports', 'authority-map.svg');
    svgContent = fs.readFileSync(svgPath, 'utf-8');
  } catch {
    // SVG not generated
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <header className='mb-10'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Content Command Center</h1>
        <p className='mt-2 text-sm text-gray-500'>
          Internal content intelligence dashboard — development only
        </p>
      </header>

      {/* Row 1 — Overview + Authority Score Distribution */}
      <div className='mb-8 grid gap-6 lg:grid-cols-2'>
        <OverviewPanel
          contentGaps={contentGaps}
          authorityScores={authorityScores}
          authorityMap={authorityMap}
        />
        <TopicAuthorityPanel scores={authorityScores?.scores ?? null} />
      </div>

      {/* Row 2 — Content Gaps + Opportunities */}
      <div className='mb-8 grid gap-6 lg:grid-cols-2'>
        <ContentGapsPanel
          topicGaps={contentGaps?.topicGaps ?? null}
          resourceIndustryGaps={contentGaps?.resourceIndustryGaps ?? null}
          industryCaseStudyGaps={contentGaps?.industryCaseStudyGaps ?? null}
        />
        <GraphSummaryPanel
          diagnostics={authorityMap?.diagnostics ?? null}
          nodes={authorityMap?.nodes ?? null}
        />
      </div>

      {/* Row 3 — Authority Graph (full width) */}
      <AuthorityGraphPanel svgContent={svgContent} nodes={authorityMap?.nodes ?? null} />
    </div>
  );
}
