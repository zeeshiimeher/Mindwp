import type { IndustryCaseStudyGap, ResourceIndustryGap, TopicGap } from '../dashboard';

import { Card, MissingPill, NoData } from './shared';

interface Props {
  topicGaps: TopicGap[] | null;
  resourceIndustryGaps: ResourceIndustryGap[] | null;
  industryCaseStudyGaps: IndustryCaseStudyGap[] | null;
}

export function ContentGapsPanel({
  topicGaps,
  resourceIndustryGaps,
  industryCaseStudyGaps,
}: Props) {
  if (!topicGaps) {
    return (
      <Card title='Content Gaps'>
        <NoData report='npm run generate:content-gaps' />
      </Card>
    );
  }

  const sorted = [...topicGaps].sort((a, b) => b.missing.length - a.missing.length);

  return (
    <Card title='Content Gaps'>
      {/* Topic gaps table */}
      <div className='max-h-72 overflow-auto'>
        <table className='w-full text-left text-xs'>
          <thead className='sticky top-0 bg-white text-gray-500'>
            <tr>
              <th className='pb-2 font-medium'>Topic</th>
              <th className='pb-2 font-medium'>Missing</th>
              <th className='pb-2 font-medium'>Top Suggestion</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {sorted.map(g => (
              <tr key={g.topic} className='hover:bg-gray-50'>
                <td className='py-1.5 font-mono text-gray-700'>{g.topic}</td>
                <td className='py-1.5'>
                  <div className='flex flex-wrap gap-1'>
                    {g.missing.map(m => (
                      <MissingPill key={m} type={m} />
                    ))}
                  </div>
                </td>
                <td className='py-1.5 text-gray-500'>{g.suggestions[0] ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Secondary gap sections */}
      <div className='mt-6 grid gap-4 sm:grid-cols-2'>
        {/* Resource → Industry gaps */}
        <div className='rounded-lg border border-orange-100 bg-orange-50/50 p-3'>
          <h3 className='mb-2 text-xs font-semibold text-orange-700'>
            Resource → Industry Gaps ({resourceIndustryGaps?.length ?? 0})
          </h3>
          {resourceIndustryGaps && resourceIndustryGaps.length > 0 ? (
            <ul className='space-y-1 text-xs text-orange-600'>
              {resourceIndustryGaps.slice(0, 8).map(r => (
                <li key={r.slug}>
                  <span className='font-mono'>{r.slug}</span>{' '}
                  <span className='text-orange-400'>({r.industryCount} industries)</span>
                </li>
              ))}
              {resourceIndustryGaps.length > 8 && (
                <li className='text-orange-400'>+{resourceIndustryGaps.length - 8} more</li>
              )}
            </ul>
          ) : (
            <p className='text-xs text-orange-400'>None detected</p>
          )}
        </div>

        {/* Industry → Case Study gaps */}
        <div className='rounded-lg border border-red-100 bg-red-50/50 p-3'>
          <h3 className='mb-2 text-xs font-semibold text-red-700'>
            Industry → Case Study Gaps ({industryCaseStudyGaps?.length ?? 0})
          </h3>
          {industryCaseStudyGaps && industryCaseStudyGaps.length > 0 ? (
            <ul className='space-y-1 text-xs text-red-600'>
              {industryCaseStudyGaps.slice(0, 8).map(i => (
                <li key={i.slug}>
                  <span className='font-mono'>{i.slug}</span>{' '}
                  <span className='text-red-400'>({i.caseStudyCount} case studies)</span>
                </li>
              ))}
              {industryCaseStudyGaps.length > 8 && (
                <li className='text-red-400'>+{industryCaseStudyGaps.length - 8} more</li>
              )}
            </ul>
          ) : (
            <p className='text-xs text-red-400'>None detected</p>
          )}
        </div>
      </div>
    </Card>
  );
}
