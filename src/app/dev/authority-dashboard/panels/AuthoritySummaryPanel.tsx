/**
 * Authority Summary Panel
 *
 * Shows: total nodes, topics analyzed, avg score, orphan count.
 */

import { SummaryCard } from './SummaryCard';

interface Props {
  totalNodes: number;
  topicsAnalyzed: number;
  averageScore: number;
  orphanCount: number;
}

export function AuthoritySummaryPanel({
  totalNodes,
  topicsAnalyzed,
  averageScore,
  orphanCount,
}: Props) {
  return (
    <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
      <SummaryCard label='Total Nodes' value={totalNodes} />
      <SummaryCard label='Topics Analyzed' value={topicsAnalyzed} />
      <SummaryCard label='Avg Topic Score' value={averageScore} />
      <SummaryCard label='Orphan/Weak Nodes' value={orphanCount} />
    </section>
  );
}
