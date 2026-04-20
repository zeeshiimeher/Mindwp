import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'warning-list';

export interface WarningListProps {
  title: string;
  items: string[];
  className?: string;
}

export function AlertList({ title, items, className = '' }: WarningListProps) {
  return (
    <Card className={cn(BLOCK, className)}>
      <h3 className={`${BLOCK}__title`}>{title}</h3>
      <ul className={`${BLOCK}__list`}>
        {items.map((item, index) => (
          <li key={index} className={`${BLOCK}__item`}>
            <span className={`${BLOCK}__bullet`} aria-hidden='true'>
              •
            </span>
            <span className={`${BLOCK}__text`}>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
