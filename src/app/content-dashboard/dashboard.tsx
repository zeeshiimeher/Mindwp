import fs from 'node:fs';
import path from 'node:path';

import { ContentGapsPanel } from './panels/content-gaps-panel';
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

  return (
    <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <header className='mb-10'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Content Intelligence</h1>
        <p className='mt-2 text-sm text-gray-500'>
          Topic authority scores and content gap analysis.
        </p>
      </header>

      <div className='mb-8 grid gap-6 lg:grid-cols-2'>
        <TopicAuthorityPanel scores={authorityScores?.scores ?? null} />
        <ContentGapsPanel
          topicGaps={contentGaps?.topicGaps ?? null}
          resourceIndustryGaps={contentGaps?.resourceIndustryGaps ?? null}
          industryCaseStudyGaps={contentGaps?.industryCaseStudyGaps ?? null}
        />
      </div>
    </div>
  );
}
