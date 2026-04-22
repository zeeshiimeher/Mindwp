import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-signal-response-section';

export interface SignalResponseItem {
  title: string;
  signal: string;
  response: string;
  points?: string[];
}

export interface SignalResponseSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: SignalResponseItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function SignalResponseSection({
  badge,
  title,
  description,
  items,
  backgroundColor = '',
  cssPrefix = '',
}: SignalResponseSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__rows l-stack l-gap-8`}>
        {items.map(item => (
          <SplitLayout key={item.title} breakpoint='lg' ratio='50/50' gap={8}>
            <div className={`${BLOCK}__content`}>
              <h3 className={`${BLOCK}__title`}>{item.title}</h3>
              <p className={`${BLOCK}__signal`}>
                <strong>Signal:</strong> {item.signal}
              </p>
              <p className={`${BLOCK}__response`}>
                <strong>Response:</strong> {item.response}
              </p>
            </div>

            <Card className={`${BLOCK}__card`}>
              <ul className={`${BLOCK}__points l-stack`}>
                {(item.points ?? []).map(point => (
                  <li key={point} className={`${BLOCK}__point`}>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </SplitLayout>
        ))}
      </div>
    </SectionWrapper>
  );
}
