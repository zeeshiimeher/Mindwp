import type { LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';

const BLOCK = 'how-it-works-step';

type IconType = 'primary' | 'secondary' | 'accent';

export interface DetailedStepCardProps {
  number: string;
  icon: LucideIcon;
  iconType: IconType;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  cssPrefix?: string;
  /**
   * Optional additive class for the number badge.
   * Use this to override default tone modifiers when needed.
   */
  gradientClassOverride?: string;
}

export function DetailedStepCard({
  number,
  icon: Icon,
  iconType,
  title,
  subtitle,
  description,
  highlights,
  cssPrefix = '',
  gradientClassOverride,
}: DetailedStepCardProps) {
  const iconMap: Record<IconType, { bg: string; text: string; from: string; to: string }> = {
    primary: {
      bg: 'icon-bg-primary',
      text: 'icon-text-primary',
      from: 'var(--gradient-primary-from)',
      to: 'var(--gradient-primary-to)',
    },
    secondary: {
      bg: 'icon-bg-secondary',
      text: 'icon-text-secondary',
      from: 'var(--gradient-secondary-from)',
      to: 'var(--gradient-secondary-to)',
    },
    accent: {
      bg: 'icon-bg-accent',
      text: 'icon-text-accent',
      from: 'var(--gradient-accent-from)',
      to: 'var(--gradient-accent-to)',
    },
  };

  const styles = iconMap[iconType];
  const numberToneClass =
    gradientClassOverride ||
    `${BLOCK}__number--${iconType === 'primary' ? 'primary' : iconType === 'secondary' ? 'secondary' : 'accent'}`;

  return (
    <div className={[BLOCK, cssPrefix].filter(Boolean).join(' ')}>
      <Card className={`${BLOCK}__card`}>
        <div className={`${BLOCK}__number ${numberToneClass}`}>
          <span className={`${BLOCK}__number-text`}>{number}</span>
        </div>

        <div className={`${BLOCK}__content`}>
          <div className={`${BLOCK}__icon ${styles.bg}`}>
            <Icon className={`${BLOCK}__icon-svg ${styles.text}`} />
          </div>

          <div className={`${BLOCK}__title-wrap`}>
            <h3 className={`${BLOCK}__title`}>{title}</h3>
            <p className={`${BLOCK}__subtitle ${styles.text}`}>{subtitle}</p>
          </div>

          <p className={`${BLOCK}__description`}>{description}</p>

          <div className={`${BLOCK}__highlights`}>
            {highlights.map((highlight, idx) => (
              <div key={idx} className={`${BLOCK}__highlight`}>
                <CheckCircle2 className={`${BLOCK}__highlight-icon ${styles.text}`} />
                <span className={`${BLOCK}__highlight-text`}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${BLOCK}__corner ${styles.bg}`} />
      </Card>
    </div>
  );
}
