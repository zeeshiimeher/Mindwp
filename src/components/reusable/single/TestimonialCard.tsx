import { Star } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'testimonial-card';

/**
 * TestimonialCard - Single testimonial component with star rating
 *
 * Displays a customer testimonial with star rating, quote, author name, and business.
 * Perfect for featuring customer success stories and social proof.
 *
 * @example
 * ```tsx
 * <TestimonialCard
 *   quote="This product changed our business completely!"
 *   author="John Smith"
 *   business="ABC Company"
 *   rating={5}
 *   className="testimonial-card--featured"
 * />
 * ```
 */
export interface TestimonialCardProps {
  /** Optional title shown above the quote */
  title?: string;

  /** The testimonial quote text */
  quote: string;

  /** Author's name */
  author: string;

  /** Author's business/company */
  business: string;

  /** Star rating (1-5) */
  rating?: number;

  /** Additional CSS classes */
  className?: string;
}

export function TestimonialCard({
  title,
  quote,
  author,
  business,
  rating = 5,
  className = '',
}: TestimonialCardProps) {
  return (
    <Card className={cn(BLOCK, className)}>
      {title ? <h3 className={`${BLOCK}__title`}>{title}</h3> : null}

      {/* Star Rating */}
      <div className={`${BLOCK}__stars`}>
        {Array.from({ length: 5 }, (_, starValue) => starValue + 1).map(starValue => (
          <Star
            key={`star-${starValue}`}
            className={cn(
              `${BLOCK}__star`,
              starValue <= rating ? `${BLOCK}__star--on` : `${BLOCK}__star--off`
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className={`${BLOCK}__quote`}>&ldquo;{quote}&rdquo;</blockquote>

      {/* Author Info */}
      <div>
        <div className={`${BLOCK}__author`}>{author}</div>
        <div className={`${BLOCK}__business`}>{business}</div>
      </div>
    </Card>
  );
}
