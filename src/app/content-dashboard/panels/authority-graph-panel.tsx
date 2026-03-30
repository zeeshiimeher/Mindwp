import type { GraphNode } from '../dashboard';

import { Card, NoData } from './shared';

interface Props {
  svgContent: string | null;
  nodes: GraphNode[] | null;
}

export function AuthorityGraphPanel({ svgContent, nodes }: Props) {
  return (
    <Card title='Authority Graph' className='col-span-full'>
      {svgContent ? (
        <div
          className='overflow-auto rounded-lg border border-gray-100 bg-gray-50 p-2'
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : nodes && nodes.length > 0 ? (
        <div className='space-y-4'>
          <div className='rounded-lg bg-yellow-50 p-4 text-sm text-yellow-700'>
            SVG not generated — install Graphviz (
            <code className='rounded bg-yellow-100 px-1 py-0.5 font-mono text-xs'>
              brew install graphviz
            </code>
            ) then run{' '}
            <code className='rounded bg-yellow-100 px-1 py-0.5 font-mono text-xs'>
              npm run generate:authority-map
            </code>{' '}
            to render the graph.
          </div>

          {/* Fallback: node grid view */}
          <div>
            <h3 className='mb-3 text-sm font-medium text-gray-600'>Graph Nodes ({nodes.length})</h3>
            <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {nodes.slice(0, 60).map(n => (
                <NodeTile key={n.id} node={n} />
              ))}
              {nodes.length > 60 && (
                <div className='flex items-center justify-center rounded-lg bg-gray-100 p-2 text-xs text-gray-400'>
                  +{nodes.length - 60} more
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <NoData report='npm run generate:authority-map' />
      )}
    </Card>
  );
}

const TYPE_BG: Record<string, string> = {
  blog: 'bg-blue-50 border-blue-200',
  resource: 'bg-purple-50 border-purple-200',
  industry: 'bg-green-50 border-green-200',
  'industry-category': 'bg-green-50 border-green-200',
  'industry-detail': 'bg-emerald-50 border-emerald-200',
  service: 'bg-orange-50 border-orange-200',
  'case-study': 'bg-red-50 border-red-200',
  feature: 'bg-teal-50 border-teal-200',
};

const HEALTH_RING: Record<string, string> = {
  orphan: 'ring-2 ring-red-400',
  weak: 'ring-2 ring-yellow-400',
  strong: '',
  normal: '',
};

function NodeTile({ node }: { node: GraphNode }) {
  const bg = TYPE_BG[node.type] ?? 'bg-gray-50 border-gray-200';
  const ring = HEALTH_RING[node.health] ?? '';
  const label = node.id.replace(/^[^:]+:/, '');

  return (
    <div
      className={`truncate rounded-lg border p-2 text-xs ${bg} ${ring}`}
      title={`${node.id} (${node.health})`}
    >
      <div className='truncate font-mono text-gray-700'>{label}</div>
      <div className='mt-0.5 text-[10px] text-gray-400'>{node.type}</div>
    </div>
  );
}
