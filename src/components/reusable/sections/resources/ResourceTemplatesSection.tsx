import { Copy } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';

import { ResourceSectionShell } from './ResourceSectionShell';

const BLOCK = 'resource-templates-section';

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
  const safeItems = Array.isArray(items) ? items : [];
  if (!heading || safeItems.length === 0) return null;

  return (
    <ResourceSectionShell
      block={BLOCK}
      className={className}
      content={content}
      icon={Copy}
      title={heading}
      variant='templates'
    >
      <div className={`${BLOCK}__stack`}>
        {safeItems.map(item => (
          <Card key={item.title} className={`${BLOCK}__card`}>
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
    </ResourceSectionShell>
  );
}
