import type { GraphDiagnostics, GraphNode } from '../dashboard';

import { Card, HealthBadge, NoData } from './shared';

interface Props {
  diagnostics: GraphDiagnostics | null;
  nodes: GraphNode[] | null;
}

export function GraphSummaryPanel({ diagnostics, nodes }: Props) {
  if (!diagnostics || !nodes) {
    return (
      <Card title='Authority Graph Diagnostics'>
        <NoData report='npm run generate:authority-map' />
      </Card>
    );
  }

  // Type distribution
  const typeCounts: Record<string, number> = {};
  const healthCounts: Record<string, number> = {};
  for (const n of nodes) {
    typeCounts[n.type] = (typeCounts[n.type] || 0) + 1;
    healthCounts[n.health] = (healthCounts[n.health] || 0) + 1;
  }

  const typeEntries = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);

  const TYPE_COLORS: Record<string, string> = {
    blog: 'bg-blue-500',
    resource: 'bg-purple-500',
    industry: 'bg-green-500',
    'industry-category': 'bg-green-400',
    'industry-detail': 'bg-green-300',
    service: 'bg-orange-500',
    'case-study': 'bg-red-500',
    feature: 'bg-teal-500',
  };

  return (
    <Card title='Authority Graph Diagnostics'>
      {/* Health summary */}
      <div className='mb-4 grid grid-cols-4 gap-2'>
        {[
          {
            label: 'Strong',
            count: diagnostics.strong.length,
            bg: 'bg-green-50',
            text: 'text-green-700',
            border: 'border-green-100',
          },
          {
            label: 'Normal',
            count: healthCounts['normal'] ?? 0,
            bg: 'bg-gray-50',
            text: 'text-gray-700',
            border: 'border-gray-100',
          },
          {
            label: 'Weak',
            count: diagnostics.weak.length,
            bg: 'bg-yellow-50',
            text: 'text-yellow-700',
            border: 'border-yellow-100',
          },
          {
            label: 'Orphan',
            count: diagnostics.orphans.length,
            bg: 'bg-red-50',
            text: 'text-red-700',
            border: 'border-red-100',
          },
        ].map(h => (
          <div key={h.label} className={`rounded-lg border ${h.border} ${h.bg} p-2 text-center`}>
            <div className={`text-lg font-bold ${h.text}`}>{h.count}</div>
            <div className='text-xs text-gray-500'>{h.label}</div>
          </div>
        ))}
      </div>

      {/* Node type distribution */}
      <div className='mb-4'>
        <h3 className='mb-2 text-xs font-medium text-gray-500'>Node Distribution</h3>
        <div className='flex h-4 overflow-hidden rounded-full'>
          {typeEntries.map(([type, count]) => (
            <div
              key={type}
              className={`${TYPE_COLORS[type] ?? 'bg-gray-400'}`}
              style={{ width: `${(count / nodes.length) * 100}%` }}
              title={`${type}: ${count}`}
            />
          ))}
        </div>
        <div className='mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs'>
          {typeEntries.map(([type, count]) => (
            <span key={type} className='flex items-center gap-1 text-gray-500'>
              <span
                className={`inline-block h-2 w-2 rounded-full ${TYPE_COLORS[type] ?? 'bg-gray-400'}`}
              />
              {type}: {count}
            </span>
          ))}
        </div>
      </div>

      {/* Orphan nodes list */}
      {diagnostics.orphans.length > 0 && (
        <div>
          <h3 className='mb-2 text-xs font-medium text-gray-500'>
            Orphan Nodes ({diagnostics.orphans.length})
          </h3>
          <div className='max-h-40 overflow-auto'>
            <ul className='space-y-1'>
              {diagnostics.orphans.map(id => (
                <li key={id} className='flex items-center gap-2 text-xs'>
                  <HealthBadge health='orphan' />
                  <span className='font-mono text-gray-600'>{id}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
}
