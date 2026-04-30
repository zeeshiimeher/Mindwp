/* eslint-disable no-console */

'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Button } from '@/components/reusable/single/Button';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { normalizeContactContext } from '@/lib/contact/contactHref';
import { getPrimaryCTA, getSecondaryCTA } from '@/lib/cta/primaryAction';
import { getVariantStyles } from '@/lib/ui/variantStyles';

declare global {
  interface Window {
    mindwpTurnstileSuccess?: (token: string) => void;
    mindwpTurnstileExpired?: () => void;
  }
}

const BUSINESS_TYPE_OPTIONS = [
  { value: 'local-service', label: 'Local service business' },
  { value: 'agency', label: 'Agency' },
  { value: 'saas', label: 'SaaS' },
  { value: 'ecommerce', label: 'Ecommerce' },
  { value: 'other', label: 'Other' },
] as const;

const PRIMARY_GOAL_OPTIONS = [
  { value: 'more-leads', label: 'More leads' },
  { value: 'better-conversion', label: 'Better conversion' },
  { value: 'automation', label: 'Automation' },
  { value: 'performance', label: 'Performance' },
  { value: 'full-system', label: 'Full system' },
] as const;

const REVENUE_RANGE_OPTIONS = [
  { value: 'under-1k', label: 'Under $1k / month' },
  { value: '1k-5k', label: '$1k-$5k / month' },
  { value: '5k-20k', label: '$5k-$20k / month' },
  { value: '20k-plus', label: '$20k+ / month' },
] as const;

const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP' },
  { value: 'this-month', label: 'This month' },
  { value: '1-3-months', label: '1-3 months' },
  { value: 'exploring', label: 'Just exploring' },
] as const;

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
  businessType: '',
  primaryGoal: '',
  revenueRange: '',
  timeline: '',
  website: '',
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

type ContactProps = {
  initialSystem?: string;
  initialSource?: string;
};

type ConversionData = {
  submissionId: string;
  system: string;
  source: string;
};

function trackConversion(data: ConversionData) {
  // future: Google Analytics / Meta Pixel / CRM
  void data;
}

export function Contact({ initialSystem = '', initialSource = '' }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [systemParam, setSystemParam] = useState(initialSystem);
  const [sourceParam, setSourceParam] = useState(initialSource);
  const [captchaToken, setCaptchaToken] = useState('');
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    setSystemParam(initialSystem);
    setSourceParam(initialSource);
  }, [initialSource, initialSystem]);

  useEffect(() => {
    window.mindwpTurnstileSuccess = (token: string) => {
      setCaptchaToken(token);
    };

    window.mindwpTurnstileExpired = () => {
      setCaptchaToken('');
    };

    return () => {
      delete window.mindwpTurnstileSuccess;
      delete window.mindwpTurnstileExpired;
    };
  }, []);

  const hasContext = Boolean(systemParam && sourceParam);
  const { system: normalizedSystem, source: normalizedSource } = normalizeContactContext(
    systemParam,
    sourceParam
  );
  const primaryCtaLabel = getPrimaryCTA();
  const secondaryCtaLabel = getSecondaryCTA(true);

  const handleInputChange = (field: keyof typeof INITIAL_FORM_STATE, value: string) => {
    setFormState(current => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileSiteKey) {
      setSuccessMessage('');
      setErrorMessage(
        'Form protection is not configured. Please email us directly at hello@mindwp.com.'
      );
      return;
    }

    if (!captchaToken) {
      setSuccessMessage('');
      setErrorMessage('Please complete the CAPTCHA challenge before sending your message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          system: normalizedSystem,
          source: normalizedSource,
          captchaToken,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
        error?: string;
        submissionId?: string;
      } | null;

      if (!response.ok || payload?.success === false) {
        throw new Error(payload?.error || 'Request failed');
      }

      const conversion = {
        submissionId: payload?.submissionId ?? '',
        system: normalizedSystem,
        source: normalizedSource,
      };

      window.dispatchEvent(
        new CustomEvent('mindwp:conversion', {
          detail: conversion,
        })
      );

      if (process.env.NODE_ENV === 'development') {
        console.log('[CLIENT CONVERSION]', conversion);
      }

      localStorage.setItem('last_conversion', JSON.stringify(conversion));
      trackConversion(conversion);

      setFormState(INITIAL_FORM_STATE);
      setCaptchaToken('');
      setSuccessMessage(
        "Your request has been analyzed and routed to the right specialist. We'll respond with next steps within 24 hours."
      );
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
      question: 'What happens after I send a message?',
      answer: 'We review the context, route it correctly, and reply with the clearest next step.',
    },
    {
      question: 'What information should I prepare?',
      answer: "Just your business goals and current challenges. We'll guide the rest.",
    },
  ];

  return (
    <div className='contact-page'>
      {turnstileSiteKey && (
        <Script
          src='https://challenges.cloudflare.com/turnstile/v0/api.js'
          strategy='afterInteractive'
        />
      )}

      {/* Hero Section */}
      <SectionWrapper
        className='contact-page-hero'
        background='bg-gradient-to-b from-blue-50 to-white'
      >
        <div className='contact-page-hero-container-1'>
          <div className='contact-page-hero-content text-center'>
            <h1 className='contact-page-hero-heading-1'>{primaryCtaLabel}</h1>
            <p className='contact-page-hero-text-1 text-xl text-muted-foreground l-container l-container--narrow'>
              Tell us what you&apos;re trying to fix, improve, or build. We&apos;ll review it and
              reply with the right next step.
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
                      Thanks — your message is in. We&apos;ll reply within one working day.
                    </h2>
                    <p className='contact-page-success-text text-muted-foreground'>
                      {successMessage ||
                        "A real person reads every enquiry. We'll come back with the right next step — not a generic reply, not a sales call."}
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
                        onClick={() => {
                          setSubmitted(false);
                          setSuccessMessage('');
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <p className='contact-page-form-text-1 mb-3 text-sm font-medium text-foreground'>
                      Tell us where things are slipping — calls, follow-up, visibility, anything
                      that&apos;s costing you work. A real person reads it and replies within one
                      working day.
                    </p>
                    <h2 className='contact-page-form-heading-1 mb-6'>{secondaryCtaLabel}</h2>

                    <form onSubmit={handleSubmit} className='contact-page-form'>
                      <input type='hidden' name='system' value={normalizedSystem} />
                      <input type='hidden' name='source' value={normalizedSource} />

                      {hasContext ? (
                        <p className='contact-page-form-text-1 text-sm text-muted-foreground'>
                          We&apos;ll include your page context with this message so we know what you
                          were looking at.
                        </p>
                      ) : (
                        <p className='contact-page-form-text-1 text-sm text-muted-foreground'>
                          We&apos;ll include that you reached out directly if no page context is
                          available.
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

                      <div className='contact-page-form-field-3 grid gap-4 md:grid-cols-2'>
                        <div>
                          <Label htmlFor='businessType' className='contact-page-form-label-3'>
                            Business Type *
                          </Label>
                          <select
                            id='businessType'
                            name='businessType'
                            required
                            value={formState.businessType}
                            onChange={event =>
                              handleInputChange('businessType', event.target.value)
                            }
                            className='contact-page-form-input-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
                          >
                            <option value=''>Select business type</option>
                            {BUSINESS_TYPE_OPTIONS.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label htmlFor='primaryGoal' className='contact-page-form-label-4'>
                            Primary Goal *
                          </Label>
                          <select
                            id='primaryGoal'
                            name='primaryGoal'
                            required
                            value={formState.primaryGoal}
                            onChange={event => handleInputChange('primaryGoal', event.target.value)}
                            className='contact-page-form-input-4 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
                          >
                            <option value=''>Select primary goal</option>
                            {PRIMARY_GOAL_OPTIONS.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label htmlFor='revenueRange' className='contact-page-form-label-5'>
                            Revenue Range *
                          </Label>
                          <select
                            id='revenueRange'
                            name='revenueRange'
                            required
                            value={formState.revenueRange}
                            onChange={event =>
                              handleInputChange('revenueRange', event.target.value)
                            }
                            className='contact-page-form-input-5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
                          >
                            <option value=''>Select revenue range</option>
                            {REVENUE_RANGE_OPTIONS.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label htmlFor='timeline' className='contact-page-form-label-6'>
                            Timeline *
                          </Label>
                          <select
                            id='timeline'
                            name='timeline'
                            required
                            value={formState.timeline}
                            onChange={event => handleInputChange('timeline', event.target.value)}
                            className='contact-page-form-input-6 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
                          >
                            <option value=''>Select timeline</option>
                            {TIMELINE_OPTIONS.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <p className='contact-page-form-text-1 text-sm text-muted-foreground'>
                        We use this to prioritize your request and tailor your response.
                      </p>

                      <div className='hidden' aria-hidden='true'>
                        <Label htmlFor='website'>Website</Label>
                        <Input
                          id='website'
                          name='website'
                          type='text'
                          tabIndex={-1}
                          autoComplete='off'
                          value={formState.website}
                          onChange={event => handleInputChange('website', event.target.value)}
                        />
                      </div>

                      <div className='contact-page-form-field-7'>
                        <Label htmlFor='message' className='contact-page-form-label-7'>
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

                      {turnstileSiteKey ? (
                        <div className='contact-page-form-field-8'>
                          <div
                            className='cf-turnstile'
                            data-sitekey={turnstileSiteKey}
                            data-callback='mindwpTurnstileSuccess'
                            data-expired-callback='mindwpTurnstileExpired'
                          />
                        </div>
                      ) : (
                        <p className='contact-page-form-error text-sm text-destructive'>
                          Form protection is unavailable right now. Please email hello@mindwp.com
                          directly.
                        </p>
                      )}

                      {errorMessage && (
                        <p className='contact-page-form-error text-sm text-destructive'>
                          {errorMessage}
                        </p>
                      )}

                      <button
                        type='submit'
                        className='btn btn-primary btn-block'
                        disabled={isSubmitting || !turnstileSiteKey}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className='btn__icon animate-spin' />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className='btn__icon' />
                            {primaryCtaLabel}
                          </>
                        )}
                      </button>

                      <p className='contact-page-form-text-1 text-sm text-muted-foreground'>
                        ✔ No spam
                        <br />
                        ✔ Personal response
                        <br />✔ Reply within 24 hours
                      </p>

                      <p className='contact-page-form-text-1 text-sm text-muted-foreground'>
                        We&apos;ll reply to the email you provide with the clearest next step. For
                        urgent matters, email hello@mindwp.com directly.
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
                        key={info.label}
                        href={info.link}
                        className={`contact-page-info-item contact-page-info-item-${index + 1} hover:opacity-70 transition-opacity`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={info.label}
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
                    <div
                      key={`${faq.question}-${index}`}
                      className={`contact-page-faq-item-${index + 1}`}
                    >
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
              </Card>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Alternative CTA */}
      <SectionWrapper className='cta footer-cta' padding='none'>
        <PrimaryCTASection
          heading={{
            title: 'Need to talk through the right next step?',
            description:
              "If the problem is clear but the right move is not, start the conversation and we'll help you scope it properly.",
          }}
          actions={[
            {
              label: 'Get Started',
              href: buildContactHref({
                system: 'contact',
                sourceType: 'contact',
                slug: 'contact-footer',
              }),
            },
          ]}
        />
      </SectionWrapper>
    </div>
  );
}
