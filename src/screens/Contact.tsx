'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { primaryCta } from '@/config/primaryCta';
import { isValidContactContext } from '@/lib/contact/contactHref';
import { getVariantStyles } from '@/lib/ui/variantStyles';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [systemParam, setSystemParam] = useState('');
  const [sourceParam, setSourceParam] = useState('');
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const system = params.get('system') ?? '';
    const source = params.get('source') ?? '';
    setSystemParam(system);
    setSourceParam(source);
  }, []);

  const hasContext = Boolean(systemParam && sourceParam);
  const hasValidContext = isValidContactContext(systemParam, sourceParam);

  const handleInputChange = (field: keyof typeof INITIAL_FORM_STATE, value: string) => {
    setFormState(current => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasValidContext) {
      setErrorMessage(
        'Missing or invalid page context. Please start from a page CTA and try again.'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          system: systemParam,
          source: sourceParam,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || 'Request failed');
      }

      setFormState(INITIAL_FORM_STATE);
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : 'Something went wrong. Please try again or email us directly at hello@mindwp.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@mindwp.com',
      link: 'mailto:hello@mindwp.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 20 1234 5678',
      link: 'tel:+442012345678',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'London, United Kingdom',
      link: null,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 9am-6pm GMT',
      link: null,
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you respond?',
      answer: 'We aim to respond to all enquiries within 24 hours on business days.',
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! Book a free 30-minute demo call to discuss your needs.',
    },
    {
      question: 'What information should I prepare?',
      answer: "Just your business goals and current challenges. We'll guide the rest.",
    },
  ];

  return (
    <div className='contact-page'>
      {/* Hero Section */}
      <SectionWrapper className='contact-page-hero' background='bg-gradient-to-b from-blue-50 to-white'>
        <div className='contact-page-hero-container-1'>
          <div className='contact-page-hero-content text-center'>
            <h1 className='contact-page-hero-heading-1'>Get in Touch</h1>
            <p className='contact-page-hero-text-1 text-xl text-muted-foreground l-container l-container--narrow'>
              Have questions about our services? Want to discuss your project? We&apos;re here to
              help. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Main Content */}
      <SectionWrapper className='contact-page-main'>
        <div className='contact-page-main-container-1'>
          <div className='contact-page-main-grid'>
            {/* Contact Form */}
            <div className='contact-page-form-wrapper lg:col-span-2'>
              <Card className='contact-page-form-card-1 p-8'>
                {submitted ? (
                  <div className='contact-page-success l-stack'>
                    <div className='contact-page-success-icon'>
                      <CheckCircle2 className='text-green-600' size={48} />
                    </div>
                    <h2 className='contact-page-success-heading'>
                      Thanks — we&apos;ll respond within 24 hours
                    </h2>
                    <p className='contact-page-success-text text-muted-foreground'>
                      We&apos;ve received your message and will get back to you on the next business
                      day.
                    </p>
                    <div className='contact-page-success-actions'>
                      <Button
                        href='/resources'
                        variant='outline'
                        label='Explore Resources While You Wait'
                      />
                      <Button
                        variant='outline'
                        label='Send Another Message'
                        onClick={() => setSubmitted(false)}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className='contact-page-form-heading-1 mb-6'>Send Us a Message</h2>

                    <form onSubmit={handleSubmit} className='contact-page-form'>
                      <input type='hidden' name='system' value={systemParam} />
                      <input type='hidden' name='source' value={sourceParam} />

                      {hasContext && hasValidContext && (
                        <p className='contact-page-form-text-1 text-sm text-muted-foreground'>
                          We&apos;ll include your page context with this message so we know what you
                          were looking at.
                        </p>
                      )}

                      {!hasValidContext && (
                        <p className='contact-page-form-error text-sm text-destructive'>
                          This form requires a valid system and source context. Please reopen it
                          from a page CTA.
                        </p>
                      )}

                      <div className='contact-page-form-field-1'>
                        <Label htmlFor='name' className='contact-page-form-label-1'>
                          Full Name *
                        </Label>
                        <Input
                          id='name'
                          name='name'
                          type='text'
                          placeholder='John Smith'
                          required
                          autoComplete='name'
                          value={formState.name}
                          onChange={event => handleInputChange('name', event.target.value)}
                          className='contact-page-form-input-1'
                        />
                      </div>

                      <div className='contact-page-form-field-2'>
                        <Label htmlFor='email' className='contact-page-form-label-2'>
                          Email Address *
                        </Label>
                        <Input
                          id='email'
                          name='email'
                          type='email'
                          placeholder='john@company.com'
                          required
                          autoComplete='email'
                          value={formState.email}
                          onChange={event => handleInputChange('email', event.target.value)}
                          className='contact-page-form-input-2'
                        />
                      </div>

                      <div className='contact-page-form-field-6'>
                        <Label htmlFor='message' className='contact-page-form-label-6'>
                          Message *
                        </Label>
                        <Textarea
                          id='message'
                          name='message'
                          placeholder='Tell us what you need, what page brought you here, or what you want to discuss.'
                          rows={6}
                          required
                          value={formState.message}
                          onChange={event => handleInputChange('message', event.target.value)}
                          className='contact-page-form-textarea-1'
                        />
                      </div>

                      {errorMessage && (
                        <p className='contact-page-form-error text-sm text-destructive'>
                          {errorMessage}
                        </p>
                      )}

                      <button
                        type='submit'
                        className='btn btn-primary btn-block'
                        disabled={isSubmitting || !hasValidContext}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className='btn__icon animate-spin' />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className='btn__icon' />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className='contact-page-form-text-1 text-sm text-muted-foreground'>
                        We&apos;ll reply to the email you provide. For urgent matters, email
                        hello@mindwp.com directly.
                      </p>
                    </form>
                  </>
                )}
              </Card>
            </div>

            {/* Sidebar */}
            <div className='contact-page-sidebar'>
              {/* Contact Info */}
              <Card className='contact-page-info-card-1 p-6 mb-6'>
                <h3 className='contact-page-info-heading-1 mb-6'>Contact Information</h3>
                <div className='contact-page-info-list'>
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <>
                        <div
                          className={`contact-page-info-icon-${index + 1} icon-container-sm ${getVariantStyles('primary').icon.bg}`}
                        >
                          <Icon className={getVariantStyles('primary').icon.text} />
                        </div>
                        <div className={`contact-page-info-content-${index + 1}`}>
                          <div
                            className={`contact-page-info-label-${index + 1} text-sm text-muted-foreground`}
                          >
                            {info.label}
                          </div>
                          <div
                            className={`contact-page-info-value-${index + 1} font-medium text-foreground`}
                          >
                            {info.value}
                          </div>
                        </div>
                      </>
                    );

                    return info.link ? (
                      <a
                        key={index}
                        href={info.link}
                        className={`contact-page-info-item contact-page-info-item-${index + 1} hover:opacity-70 transition-opacity`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={index}
                        className={`contact-page-info-item contact-page-info-item-${index + 1}`}
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Quick FAQs */}
              <Card className='contact-page-faq-card-1 p-6'>
                <h3 className='contact-page-faq-heading-1 mb-6'>Quick Questions?</h3>
                <div className='contact-page-faq-list'>
                  {faqs.map((faq, index) => (
                    <div key={index} className={`contact-page-faq-item-${index + 1}`}>
                      <h4 className={`contact-page-faq-question-${index + 1} font-semibold mb-2`}>
                        {faq.question}
                      </h4>
                      <p
                        className={`contact-page-faq-answer-${index + 1} text-sm text-muted-foreground`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='mt-6'>
                  <Button
                    href='/faq'
                    variant='outline'
                    label='View All FAQs'
                    cssPrefix='btn-block'
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Alternative CTA */}
      <SectionWrapper className='cta footer-cta' padding='none'>
        <div>
          <div className='cta__panel'>
            <h2 className='cta-heading'>Prefer to Book a Demo Call?</h2>
            <p className='cta__text'>
              Schedule a free 30-minute consultation to discuss your needs and see our platform in
              action.
            </p>
            <div className='cta__actions'>
              <Button
                {...(primaryCta.type !== 'chat' ? { href: primaryCta.href } : {})}
                label={primaryCta.label}
                showDefaultIcon
                {...(primaryCta.type === 'external'
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                {...(primaryCta.type === 'chat' ? { onClick: () => {} } : {})}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
