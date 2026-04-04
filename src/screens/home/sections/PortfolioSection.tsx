import { ExternalLink } from 'lucide-react';

import { SectionIntro } from '@/components/reusable/single';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { primaryCta } from '@/config/primaryCta';

export function PortfolioSection() {
  const BLOCK = 'portfolio-section';

  const portfolioItems = [
    {
      title: 'Beauty Salon & Spa',
      category: 'Beauty & Personal Care',
      description: 'Modern booking system with automated reminders and review requests',
      features: ['Online Booking', 'CRM Integration', 'Review Automation'],
      visualVariant: 'purple-pink',
    },
    {
      title: 'Hair Salon',
      category: 'Beauty & Personal Care',
      description: 'Stylish website with online booking and automated appointment reminders',
      features: ['Appointment Booking', 'Staff Profiles', 'Gallery Showcase'],
      visualVariant: 'pink-rose',
    },
    {
      title: 'Roofing Company',
      category: 'Home Services',
      description: 'Lead generation website with instant quote forms and Voice AI receptionist',
      features: ['Quote Forms', 'Voice AI', 'Before/After Gallery'],
      visualVariant: 'slate-gray',
    },
    {
      title: 'Plumbing Services',
      category: 'Home Services',
      description: '24/7 emergency booking with automated dispatch and customer notifications',
      features: ['Emergency Booking', 'Service Areas', 'Live Chat'],
      visualVariant: 'blue-cyan',
    },
    {
      title: 'Electrician',
      category: 'Home Services',
      description: 'Local SEO optimized website with instant callback requests and testimonials',
      features: ['Callback Requests', 'Service Showcase', 'Local SEO'],
      visualVariant: 'warning-amber',
    },
    {
      title: 'Landscaping & Garden Services',
      category: 'Home Services',
      description: 'Portfolio showcase with project booking and seasonal service packages',
      features: ['Project Gallery', 'Service Packages', 'Quote Calculator'],
      visualVariant: 'success-emerald',
    },
    {
      title: 'Law Firm',
      category: 'Professional Services',
      description: 'Professional website with intake automation and client portal',
      features: ['Intake Forms', 'Client Portal', 'SEO Optimized'],
      visualVariant: 'slate-zinc',
    },
    {
      title: 'Accountancy Practice',
      category: 'Professional Services',
      description: 'Secure client portal with document uploads and appointment scheduling',
      features: ['Client Portal', 'Document Upload', 'Consultation Booking'],
      visualVariant: 'indigo-blue',
    },
    {
      title: 'Cleaning Services',
      category: 'Home Services',
      description: 'Online booking platform with recurring service scheduling and payments',
      features: ['Recurring Bookings', 'Area Coverage', 'Instant Quotes'],
      visualVariant: 'teal-cyan',
    },
  ];

  return (
    <section id='portfolio' className={`${BLOCK} l-section`}>
      <div className={`${BLOCK}__container l-container`}>
        <SectionIntro
          badge='Our Work'
          title='Smart Website Implementations'
          description="From small local businesses to established brands, we've helped hundreds of UK companies build smart websites that generate leads and drive growth."
          cssPrefix='portfolio-section'
        />

        <div className={`${BLOCK}__grid`}>
          {portfolioItems.map((item, index) => (
            <div key={index} className={`${BLOCK}__card ${BLOCK}__card--${item.visualVariant}`}>
              <div className={`${BLOCK}__bg`} aria-hidden='true' />

              <div className={`${BLOCK}__content ${BLOCK}__content-stack`}>
                <div className={`${BLOCK}__meta-row`}>
                  <Badge variant='outline' size='sm' context='meta'>
                    {item.category}
                  </Badge>
                  <ExternalLink className={`${BLOCK}__ext`} />
                </div>

                <div>
                  <h3 className={`${BLOCK}__title`}>{item.title}</h3>
                  <p className={`${BLOCK}__desc`}>{item.description}</p>
                </div>

                <div className={`${BLOCK}__tags`}>
                  {item.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant='outline' size='sm' context='meta'>
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${BLOCK}__bottom`}>
          <p className={`${BLOCK}__prompt`}>Want to see your business here?</p>
          <Button
            {...(primaryCta.type !== 'chat' ? { href: primaryCta.href } : {})}
            label={primaryCta.label}
            {...(primaryCta.type === 'external'
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            {...(primaryCta.type === 'chat' ? { onClick: () => {} } : {})}
          />
        </div>
      </div>
    </section>
  );
}
