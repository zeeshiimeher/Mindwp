import { ArrowRight, Mail, Phone } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { primaryCta } from '@/config/primaryCta';
import { buildContactHref } from '@/lib/contact/contactHref';

const faqContactHref = buildContactHref({
  system: 'smart-website-systems',
  sourceType: 'page',
  slug: 'faq',
});

export function FAQPage() {
  const faqCategories = {
    general: [
      {
        question: "What exactly is a 'Smart Website'?",
        answer:
          "A Smart Website is more than just a pretty design. It's a WordPress website with built-in CRM, automation, AI features (AI chat/voice calls), and marketing tools. Everything works together to capture leads, book appointments, and grow your business automatically.",
      },
      {
        question: 'Do I already have a website. Can you work with it?',
        answer:
          "Yes! If you have a WordPress website, we can audit it, optimize it, and integrate our CRM and automation tools. If it's on another platform (Wix, Squarespace, etc.), we typically recommend building a new WordPress site and migrating your content for better functionality.",
      },
      {
        question: 'How long does it take to get started?',
        answer:
          "After our discovery call and proposal approval: 2-4 weeks for most Smart Websites. Rush projects available for additional fee. We'll give you an exact timeline in your proposal.",
      },
      {
        question: 'Do you require a long-term contract?',
        answer:
          "No. All plans are month-to-month after setup. If we're not delivering results, you can cancel anytime. We earn your business every month.",
      },
    ],
    seo: [
      {
        question: 'How long does SEO take to work?',
        answer:
          "For local SEO (Google Maps, 'near me' searches): expect early wins in 6-12 weeks. For broader organic SEO: 3-6 months for significant results. SEO is a long-term strategy, but we focus on quick wins while building toward bigger gains.",
      },
      {
        question: 'Can you guarantee #1 rankings?',
        answer:
          "No legitimate SEO agency can guarantee specific rankings — Google's algorithm is complex and always changing. We can guarantee: (1) we follow best practices, (2) we track progress transparently, (3) we optimize until we see results. Our track record speaks for itself.",
      },
      {
        question: "What if I'm in a competitive industry?",
        answer:
          "Competitive industries require more aggressive strategies — more content, more backlinks, more optimization. We'll be upfront about what it takes. Many 'competitive' niches still have gaps we can exploit with smart local SEO.",
      },
      {
        question: 'Do you work with service area businesses (no physical location)?',
        answer:
          'Yes! We specialize in service area businesses — plumbers, electricians, mobile services, etc. We create location pages, optimize for service area keywords, and build local citations.',
      },
    ],
    crm: [
      {
        question: 'Is the CRM only for SEO leads?',
        answer:
          "No! The CRM tracks ALL your leads and customers — website forms, phone calls, social media messages, referrals, walk-ins, anywhere they come from. It's your central database for every contact.",
      },
      {
        question: 'Can I import my existing contacts?',
        answer:
          "Yes. We can import contacts from spreadsheets, other CRMs, email lists, etc. during setup. We'll clean and organize your data as part of onboarding.",
      },
      {
        question: "What if I'm already using another CRM?",
        answer:
          'We can integrate with most CRMs (HubSpot, Salesforce, Pipedrive, etc.) or you can switch to ours. Many clients find our all-in-one solution simpler than juggling multiple tools.',
      },
    ],
    pricing: [
      {
        question: "What are 'usage costs' exactly?",
        answer:
          "Usage costs are for AI conversations, SMS messages, and voice calls — things billed per use by our providers. We pass these through at cost (what we pay). Typical costs: AI chat £0.02-0.10 each, SMS £0.05-0.08 each, voice calls £0.03-0.08/min. We'll estimate based on your volume.",
      },
      {
        question: 'Are there any hidden fees?',
        answer:
          "No. You pay: (1) Setup fee (one-time), (2) Monthly subscription (hosting, CRM, support, updates), (3) Usage costs (AI, SMS, voice — if you use those features). That's it. Complete transparency.",
      },
      {
        question: 'Can I pay annually for a discount?',
        answer:
          'Yes. Annual plans receive 2 months free (equivalent to 17% discount). Contact us to set up annual billing.',
      },
      {
        question: "What's your refund policy?",
        answer:
          "Setup fees are non-refundable after work begins. Monthly subscriptions can be cancelled anytime with 30 days' notice — we'll pro-rate your final month. If you're unhappy in the first 30 days after launch, we'll work with you to make it right.",
      },
    ],
    technical: [
      {
        question: 'Who owns the website and data?',
        answer:
          "You do! You own your domain, website, content, and all customer data. If you ever leave, you take everything with you. We'll export your data and provide documentation.",
      },
      {
        question: 'What happens if I cancel?',
        answer:
          "Give us 30 days' notice. We'll export all your data (CRM contacts, website content, etc.) and provide access credentials. Your website stays on our hosting through the paid month, then you'll need to move it to another host or it'll go offline.",
      },
      {
        question: 'Is my data secure and backed up?',
        answer:
          'Yes. We use enterprise-grade security (SSL, firewalls, malware scanning) and automated daily backups stored redundantly. Your data is protected and recoverable.',
      },
      {
        question: 'What if my website goes down?',
        answer:
          "We monitor uptime 24/7. If your site goes down, we're alerted immediately and work to restore it. Our hosting has 99.9% uptime SLA. If downtime occurs, we'll investigate, fix, and report what happened.",
      },
    ],
  };

  return (
    <div className='min-h-screen faq-page'>
      <main>
        {/* Hero */}
        <section className='l-section bg-gradient-to-b from-muted/50 to-background'>
          <div className='l-container'>
            <div className='text-center faq-page__hero'>
              <Badge variant='secondary' context='hero'>
                Help Center
              </Badge>
              <h1>Frequently Asked Questions</h1>
              <p className='text-muted-foreground text-lg l-container l-container--narrow'>
                Got questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking for?
                Contact us and we&apos;ll help.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Tabs */}
        <section className='l-section'>
          <div className='l-container'>
            <Tabs defaultValue='general' className='w-full'>
              <TabsList className='w-full faq-page__tabs-list'>
                <TabsTrigger value='general'>General</TabsTrigger>
                <TabsTrigger value='seo'>SEO</TabsTrigger>
                <TabsTrigger value='crm'>CRM & Features</TabsTrigger>
                <TabsTrigger value='pricing'>Pricing</TabsTrigger>
                <TabsTrigger value='technical'>Technical</TabsTrigger>
              </TabsList>

              <TabsContent value='general'>
                <Accordion type='single' collapsible className='w-full'>
                  {faqCategories.general.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`}>
                      <AccordionTrigger className='text-left'>{faq.question}</AccordionTrigger>
                      <AccordionContent className='text-muted-foreground'>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value='seo'>
                <Accordion type='single' collapsible className='w-full'>
                  {faqCategories.seo.map((faq, index) => (
                    <AccordionItem key={index} value={`seo-${index}`}>
                      <AccordionTrigger className='text-left'>{faq.question}</AccordionTrigger>
                      <AccordionContent className='text-muted-foreground'>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value='crm'>
                <Accordion type='single' collapsible className='w-full'>
                  {faqCategories.crm.map((faq, index) => (
                    <AccordionItem key={index} value={`crm-${index}`}>
                      <AccordionTrigger className='text-left'>{faq.question}</AccordionTrigger>
                      <AccordionContent className='text-muted-foreground'>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value='pricing'>
                <Accordion type='single' collapsible className='w-full'>
                  {faqCategories.pricing.map((faq, index) => (
                    <AccordionItem key={index} value={`pricing-${index}`}>
                      <AccordionTrigger className='text-left'>{faq.question}</AccordionTrigger>
                      <AccordionContent className='text-muted-foreground'>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value='technical'>
                <Accordion type='single' collapsible className='w-full'>
                  {faqCategories.technical.map((faq, index) => (
                    <AccordionItem key={index} value={`technical-${index}`}>
                      <AccordionTrigger className='text-left'>{faq.question}</AccordionTrigger>
                      <AccordionContent className='text-muted-foreground'>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Card */}
        <section className='l-section bg-base'>
          <div className='l-container'>
            <Card className='p-8 md:p-12 text-center'>
              <h2 className='mb-4'>Still Have Questions?</h2>
              <p className='text-muted-foreground mb-8'>
                Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help.
              </p>
              <div className='faq-page__contact-actions'>
                <Button
                  href='mailto:hello@mindwp.comm'
                  variant='outline'
                  label='hello@mindwp.comm'
                  icon={Mail}
                  iconPosition='left'
                />
                <Button
                  href='tel:02012345678'
                  variant='outline'
                  label='020 1234 5678'
                  icon={Phone}
                  iconPosition='left'
                />
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className='footer-cta cta'>
          <div className='l-container'>
            <div className='cta__panel cta__content bg-gradient-primary'>
              <h2 className='cta-heading'>Ready to Get Started?</h2>
              <p className='cta__text'>
                Book a free demo and we&apos;ll answer all your questions about how MindWP can grow
                your business.
              </p>
              <div className='cta__actions'>
                <Button
                  {...(primaryCta.type !== 'chat' ? { href: faqContactHref } : {})}
                  variant='white'
                  label={primaryCta.label}
                  icon={ArrowRight}
                  showDefaultIcon
                  {...(primaryCta.type === 'external'
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  {...(primaryCta.type === 'chat' ? { onClick: () => {} } : {})}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
