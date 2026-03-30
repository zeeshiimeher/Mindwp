'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { TopicScore } from '../dashboard';

import { Card, LevelBadge, NoData } from './shared';

const LEVEL_COLORS: Record<string, string> = {
  Dominant: '#16A34A',
  Strong: '#2563EB',
  Growing: '#EAB308',
  Weak: '#F97316',
  Gap: '#DC2626',
};

interface Props {
  scores: TopicScore[] | null;
}

export function TopicAuthorityPanel({ scores }: Props) {
  if (!scores) {
    return (
      <Card title='Topic Authority Scores'>
        <NoData report='npm run generate:authority-scores' />
      </Card>
    );
  }

  const sorted = [...scores].sort((a, b) => a.score - b.score);
  const chartData = sorted.map(s => ({
    topic: s.topic,
    score: s.score,
    level: s.level,
  }));

  return (
    <Card title='Topic Authority Scores'>
      {/* Chart */}
      <div className='mb-6 h-64'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={chartData} layout='vertical' margin={{ left: 120 }}>
            <CartesianGrid strokeDasharray='3 3' horizontal={false} />
            <XAxis type='number' domain={[0, 100]} tick={{ fontSize: 11 }} />
            <YAxis type='category' dataKey='topic' tick={{ fontSize: 10 }} width={120} />
            <Tooltip formatter={value => [`${value ?? 0}/100`, 'Score']} />
            <Bar dataKey='score' radius={[0, 4, 4, 0]}>
              {chartData.map(entry => (
                <Cell key={entry.topic} fill={LEVEL_COLORS[entry.level] ?? '#6B7280'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className='max-h-80 overflow-auto'>
        <table className='w-full text-left text-xs'>
          <thead className='sticky top-0 bg-white text-gray-500'>
            <tr>
              <th className='pb-2 font-medium'>Topic</th>
              <th className='pb-2 text-center font-medium'>Blogs</th>
              <th className='pb-2 text-center font-medium'>Res</th>
              <th className='pb-2 text-center font-medium'>Ind</th>
              <th className='pb-2 text-center font-medium'>Svc</th>
              <th className='pb-2 text-center font-medium'>CS</th>
              <th className='pb-2 text-center font-medium'>Score</th>
              <th className='pb-2 font-medium'>Level</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {sorted.map(s => (
              <tr key={s.topic} className='hover:bg-gray-50'>
                <td className='py-1.5 font-mono text-gray-700'>{s.topic}</td>
                <td className='py-1.5 text-center'>{s.blogCount}</td>
                <td className='py-1.5 text-center'>{s.resourceCount}</td>
                <td className='py-1.5 text-center'>{s.industryCount}</td>
                <td className='py-1.5 text-center'>{s.serviceCount}</td>
                <td className='py-1.5 text-center'>{s.caseStudyCount}</td>
                <td className='py-1.5 text-center font-semibold'>{s.score}</td>
                <td className='py-1.5'>
                  <LevelBadge level={s.level} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
