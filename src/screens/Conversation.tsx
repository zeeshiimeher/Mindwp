import { CheckCircle, Clock, Mail, Phone } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Card } from '@/components/ui/card';

import { ConversationFormIsland } from './ConversationFormIsland';

export function ConversationPage() {
  return (
    <div className='min-h-screen conversation-page'>
      <main>
        {/* Hero */}
        <section className='l-section bg-gradient-to-b from-muted/50 to-background'>
          <div className='l-container'>
            <div className='text-center conversation-page__hero'>
              <Badge variant='secondary' context='hero'>
                Strategy Conversation
              </Badge>
              <h1>Book a Structured Strategy Call</h1>
              <p className='text-muted-foreground text-lg l-container l-container--narrow'>
                Schedule a focused conversation to review your current website, operational
                workflows, and visibility foundations. We will assess how your digital
                infrastructure is performing and outline clear next steps if improvements are
                needed.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='l-section'>
          <div className='l-container '>
            <div className='conversation-page__main-grid'>
              {/* Form */}
              <div className='lg:col-span-2'>
                <ConversationFormIsland />
              </div>

              {/* Sidebar */}
              <div className='conversation-page__sidebar'>
                {/* Contact Info */}
                <Card className='p-6'>
                  <h3 className='mb-4'>Get in Touch</h3>
                  <div className='conversation-page__contact-list'>
                    <div className='conversation-page__contact-item'>
                      <Mail className='text-foreground' />
                      <div>
                        <div className='font-medium'>Email</div>
                        <a
                          href='mailto:hello@mindwp.comm'
                          className='text-sm text-muted-foreground hover:text-foreground'
                        >
                          hello@mindwp.comm
                        </a>
                      </div>
                    </div>
                    <div className='conversation-page__contact-item'>
                      <Phone className='text-foreground' />
                      <div>
                        <div className='font-medium'>Phone</div>
                        <a
                          href='tel:02012345678'
                          className='text-sm text-muted-foreground hover:text-foreground'
                        >
                          020 1234 5678
                        </a>
                      </div>
                    </div>
                    <div className='conversation-page__contact-item'>
                      <Clock className='text-foreground' />
                      <div>
                        <div className='font-medium'>Hours</div>
                        <div className='text-sm text-muted-foreground'>Mon-Fri: 9am-6pm GMT</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Trust Signals */}
                <Card className='p-6'>
                  <h4 className='mb-4'>What This Call Covers</h4>
                  <ul className='conversation-page__trust-list'>
                    {[
                      'Review of your current website structure',
                      'Assessment of enquiry handling and workflow clarity',
                      'Discussion of visibility foundations and SEO approach',
                      'Recommendations for automation and CRM integration',
                      'Clear next steps and investment overview',
                    ].map((item, i) => (
                      <li key={i} className='conversation-page__trust-item'>
                        <CheckCircle className='text-primary' />
                        <span className='text-sm'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Testimonial */}
                <Card className='p-6 bg-muted/30 border-0'>
                  <div className='conversation-page__testimonial'>
                    <div className='text-sm italic text-muted-foreground'>
                      &ldquo;MindWP helped us clarify how our website should support real
                      operations. The conversation brought immediate clarity.&rdquo;
                    </div>
                    <div className='text-sm font-medium'>— Sarah M., BrightSmile Dental</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className='l-section bg-base'>
          <div className='l-container'>
            <div className='text-center mb-12'>
              <h2>After You Submit</h2>
            </div>
            <div className='conversation-page__steps-grid'>
              {[
                {
                  number: '1',
                  title: "We'll Contact You",
                  description:
                    "Within 24 hours, we'll reach out to schedule your strategy call at a time that works for you.",
                },
                {
                  number: '2',
                  title: '30-Minute Strategy Call',
                  description:
                    'We review your current setup, discuss operational goals, and explore whether Smart Website implementation is appropriate.',
                },
                {
                  number: '3',
                  title: 'Custom Proposal',
                  description:
                    'If aligned, we prepare a structured proposal outlining scope, investment, and implementation phases.',
                },
              ].map((step, i) => (
                <Card key={i} className='p-6 relative text-center'>
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background conversation-page__step-number shadow-lg'>
                    {step.number}
                  </div>
                  <div className='pt-6 conversation-page__step-content'>
                    <h4>{step.title}</h4>
                    <p className='text-sm text-muted-foreground'>{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
