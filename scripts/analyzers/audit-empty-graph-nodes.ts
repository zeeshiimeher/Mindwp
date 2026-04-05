/**
 * Phase 10.3 — Audit Empty Graph Nodes
 *
 * Finds all pages with 0 or weak related content from getRelatedContent().
 * Groups by contentType and identifies missing metadata signals.
 *
 * Usage: npx tsx scripts/analyzers/audit-empty-graph-nodes.ts
 */

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { getRelatedContent } from '../../src/lib/graph/query';
import { BLOG_POSTS } from '../../src/domains/blog/registry';
import { RESOURCE_REGISTRY } from '../../src/domains/resources/generatedRegistry';
import { CASE_STUDY_REGISTRY } from '../../src/domains/case-studies/registry';
import { SERVICE_REGISTRY } from '../../src/domains/services/registry';
import { FEATURE_REGISTRY } from '../../src/domains/features/registry';
import { INDUSTRY_REGISTRY } from '../../src/domains/industries/registry';
import type { ContentNodeType } from '../../src/lib/content-graph/types';

await ensureGraphInitialized();

interface NodeInfo {
  slug: string;
  type: ContentNodeType;
  systems: string[];
  topics: string[];
  industries: string[];
  relatedCount: number;
  filledSlots: number;
}

const allNodes: NodeInfo[] = [];

// Blogs
for (const [slug, post] of Object.entries(BLOG_POSTS)) {
  const related = getRelatedContent(slug, 'blog');
  const total = Object.values(related).flat().length;
  const filled = Object.values(related).filter(v => v.length > 0).length;
  allNodes.push({ slug, type: 'blog', systems: post.systems ?? [], topics: post.topics ?? [], industries: post.industries ?? [], relatedCount: total, filledSlots: filled });
}

// Resources
for (const [slug, r] of Object.entries(RESOURCE_REGISTRY)) {
  const related = getRelatedContent(slug, 'resource');
  const total = Object.values(related).flat().length;
  const filled = Object.values(related).filter(v => v.length > 0).length;
  allNodes.push({ slug, type: 'resource', systems: r.systems ?? [], topics: r.topics ?? [], industries: r.industries ?? [], relatedCount: total, filledSlots: filled });
}

// Case Studies
for (const [slug, cs] of Object.entries(CASE_STUDY_REGISTRY)) {
  const related = getRelatedContent(slug, 'case-study');
  const total = Object.values(related).flat().length;
  const filled = Object.values(related).filter(v => v.length > 0).length;
  allNodes.push({ slug, type: 'case-study', systems: cs.systems ?? [], topics: (cs as any).topics ?? [], industries: cs.industries ?? [], relatedCount: total, filledSlots: filled });
}

// Services
for (const [slug, svc] of Object.entries(SERVICE_REGISTRY)) {
  const related = getRelatedContent(slug, 'service');
  const total = Object.values(related).flat().length;
  const filled = Object.values(related).filter(v => v.length > 0).length;
  allNodes.push({ slug, type: 'service', systems: svc.systems ?? [], topics: svc.topics ?? [], industries: [], relatedCount: total, filledSlots: filled });
}

// Features
for (const feat of FEATURE_REGISTRY) {
  const related = getRelatedContent(feat.slug, 'feature');
  const total = Object.values(related).flat().length;
  const filled = Object.values(related).filter(v => v.length > 0).length;
  allNodes.push({ slug: feat.slug, type: 'feature', systems: feat.systems ?? [], topics: (feat as any).topics ?? [], industries: [], relatedCount: total, filledSlots: filled });
}

// Industries
for (const [, ind] of Object.entries(INDUSTRY_REGISTRY)) {
  const type: ContentNodeType = ind.type === 'detail' ? 'industry-detail' : 'industry-category';
  const related = getRelatedContent(ind.slug, type);
  const total = Object.values(related).flat().length;
  const filled = Object.values(related).filter(v => v.length > 0).length;
  allNodes.push({ slug: ind.slug, type, systems: ind.systems ?? [], topics: ind.topics ?? [], industries: ind.industries ?? [], relatedCount: total, filledSlots: filled });
}

// ── Report ─────────────────────────────────────────────────────────

const empty = allNodes.filter(n => n.relatedCount === 0);
const weak = allNodes.filter(n => n.relatedCount > 0 && n.relatedCount < 2);
const total = allNodes.length;
const avgRelated = (allNodes.reduce((s, n) => s + n.relatedCount, 0) / total).toFixed(1);

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('  PHASE 10.3 — EMPTY GRAPH NODE AUDIT');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`  Total nodes: ${total}`);
console.log(`  Empty (0 related): ${empty.length}`);
console.log(`  Weak (<2 related): ${weak.length}`);
console.log(`  Avg related/node: ${avgRelated}`);
console.log('');

// Group empty by type
const byType = new Map<string, NodeInfo[]>();
for (const n of empty) {
  if (!byType.has(n.type)) byType.set(n.type, []);
  byType.get(n.type)!.push(n);
}

console.log('  EMPTY NODES BY TYPE:');
for (const [type, nodes] of byType) {
  console.log(`\n  [${type}] — ${nodes.length} node(s):`);
  for (const n of nodes) {
    const missing = [];
    if (n.systems.length === 0) missing.push('systems');
    if (n.topics.length === 0) missing.push('topics');
    if (n.industries.length === 0) missing.push('industries');
    console.log(`    ${n.slug} ${missing.length > 0 ? `— missing: ${missing.join(', ')}` : '— has metadata but no graph matches'}`);
  }
}

if (weak.length > 0) {
  console.log('\n  WEAK NODES (<2 related):');
  for (const n of weak) {
    console.log(`    ${n.type}/${n.slug}: ${n.relatedCount} related`);
  }
}

console.log('\n═══════════════════════════════════════════════════════════════\n');
