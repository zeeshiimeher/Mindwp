import { Copy } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

export interface ResourceTemplateItem {
  title: string;
  description?: string;
  template: string;
}

export interface ResourceTemplatesSectionProps {
  heading: string;
  content?: string[];
  items: ResourceTemplateItem[];
  className?: string;
}

export function ResourceTemplatesSection({
  heading,
  content,
  items,
  className = '',
}: ResourceTemplatesSectionProps) {
  const BLOCK = 'resource-templates-section';

  const safeItems = Array.isArray(items) ? items : [];
  if (!heading || safeItems.length === 0) return null;

  return (
    <section className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={Copy}
        title={heading}
        variant='templates'
        {...(content && content.length > 0 && { subtitle: content[0] })}
      />

      {content && content.length > 1 && (
        <div className={`${BLOCK}__description`}>
          {content.slice(1).map((paragraph, index) => (
            <p key={index} className={`${BLOCK}__paragraph`}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <div className={`${BLOCK}__stack`}>
        {safeItems.map((item, index) => (
          <Card key={index} className={`${BLOCK}__card`}>
            <div className={`${BLOCK}__card-inner`}>
              <div>
                <h3 className={`${BLOCK}__title`}>{item.title}</h3>
                {item.description && <p className={`${BLOCK}__subtitle`}>{item.description}</p>}
              </div>

              <pre className={`${BLOCK}__pre`}>
                <code className={`${BLOCK}__code`}>{item.template}</code>
              </pre>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
