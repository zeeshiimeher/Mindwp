import { AlertTriangle } from 'lucide-react';

import { cn } from '@/components/ui/utils';

const BLOCK = 'issues-card';

/**
 * RiskListCard - Warning display component for highlighting potential issues
 *
 * Presents a collection of issues or concerns with prominent warning icons in a clean,
 * structured layout. Each issue displays a title and description with consistent yellow
 * warning styling to draw attention to potential problems or important considerations.
 *
 * @example
 * ```tsx
 * const wordpressIssues = [
 *   {
 *     title: "Too Many Plugins",
 *     description: "Average site has 20-30 plugins, causing conflicts and slowdowns"
 *   },
 *   {
 *     title: "Outdated Themes",
 *     description: "Old themes with security vulnerabilities and poor performance"
 *   }
 * ];
 *
 * <RiskListCard
 *   title="Common WordPress Issues We Find:"
 *   issues={wordpressIssues}
 * />
 * ```
 */

/**
 * Individual issue item structure
 */
interface IssuesWarningItem {
  /** Short, descriptive title for the issue */
  title: string;

  /** Detailed explanation of the issue and its impact */
  description: string;
}

interface IssuesWarningCardProps {
  /** Main heading displayed at the top of the warning card */
  title: string;

  /** Array of issues to display, each with title and description */
  issues: IssuesWarningItem[];

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`issues-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function RiskListCard({ title, issues, cssPrefix = '' }: IssuesWarningCardProps) {
  return (
    <div className={cn(BLOCK, cssPrefix)}>
      <h3 className={`${BLOCK}__title`}>{title}</h3>
      <div className={`${BLOCK}__issues`}>
        {issues.map((issue, index) => (
          <div key={index} className={`${BLOCK}__issue`}>
            <AlertTriangle className={`${BLOCK}__icon`} aria-hidden='true' />
            <div>
              <div className={`${BLOCK}__issue-title`}>{issue.title}</div>
              <div className={`${BLOCK}__issue-desc`}>{issue.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
