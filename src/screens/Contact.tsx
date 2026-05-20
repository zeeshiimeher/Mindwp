/* eslint-disable no-console */

'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { CheckCircle2, Clock, Loader2, Mail, Send } from 'lucide-react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { buildContactHref, normalizeContactContext } from '@/lib/contact/contactHref';
import { getPrimaryCTA, getSecondaryCTA } from '@/lib/cta/primaryAction';
import { getVariantStyles } from '@/lib/ui/variantStyles';

declare global {
  interface Window {
    mindwpTurnstileSuccess?: (token: string) => void;
    mindwpTurnstileExpired?: () => void;
  }
}

const MAIN_CONCERN_OPTIONS = [
  { value: 'website-clarity', label: 'Website clarity' },
  { value: 'local-visibility', label: 'Local visibility' },
  { value: 'missed-calls-forms-messages', label: 'Missed calls, forms, or messages' },
  { value: 'follow-up-crm-visibility', label: 'Follow-up / CRM visibility' },
  { value: 'reviews-proof', label: 'Reviews / proof' },
  { value: 'not-sure-yet', label: 'Not sure yet' },
] as const;

const PREFERRED_CONTACT_METHOD_OPTIONS = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'text-message', label: 'Text message' },
  { value: 'whatsapp', label: 'WhatsApp' },
] as const;

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  organizationName: '',
  websiteUrl: '',
  industryType: '',
  mainConcern: '',
  slippingNow: '',
  afterContact: '',
  preferredContactMethod: '',
  message: '',
  website: '',
};

const turnstileDisabled =
  process.env.NODE_ENV === 'development' || process.env.ENABLE_CAPTCHA_SERVICE === 'false';
const turnstileSiteKey = turnstileDisabled
  ? ''
  : (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '');

type ContactProps = {
  initialSystem?: string;
  initialSource?: string;
};

function PageSection({
  background,
  className,
  padding,
  children,
}: {
  background?: string;
  className?: string;
  padding?: 'none';
  children: React.ReactNode;
}) {
  return (
    <section
      className={[background, padding === 'none' ? 'p-0' : 'py-16', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='mw-container'>{children}</div>
    </section>
  );
}

type ConversionData = {
  submissionId: string;
  system: string;
  source: string;
};

function trackConversion(data: ConversionData) {
  // Optional analytics hook for submitted diagnostic reviews.
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
        "Your request is in. We'll review the current path and reply with a practical next step within one working day."
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
      icon: Clock,
      label: 'Response window',
      value: 'Within one working day',
      link: null,
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you respond?',
      answer: 'We aim to respond to review requests within one working day.',
    },
    {
      question: 'What happens after I send a message?',
      answer:
        'We read the context, look at the current website or handling path where available, and reply with the clearest next step.',
    },
    {
      question: 'What information should I prepare?',
      answer:
        'Send the business or clinic name, website if available, what is slipping, and what usually happens after someone contacts you.',
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
      <PageSection
        className='contact-page-hero'
        background='bg-gradient-to-b from-blue-50 to-white'
      >
        <div className='contact-page-hero-container-1'>
          <div className='contact-page-hero-content text-center'>
            <h1 className='contact-page-hero-heading-1'>{primaryCtaLabel}</h1>
            <p className='contact-page-hero-text-1 text-xl mw-text-secondary l-container l-container--narrow'>
              Send the business or clinic context, the website if there is one, and where the
              current path is slipping. We&apos;ll review it and reply with a practical next step.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Main Content */}
      <PageSection className='contact-page-main'>
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
                      Thanks, your message is in. We&apos;ll reply within one working day.
                    </h2>
                    <p className='contact-page-success-text mw-text-secondary'>
                      {successMessage ||
                        "A real person reads every enquiry. We'll come back with the right next step, not a generic reply or sales call."}
                    </p>
                    <div className='contact-page-success-actions'>
                      <a href='/resources' className='mw-btn mw-btn--ghost'>
                        Explore Resources While You Wait
                      </a>
                      <button
                        type='button'
                        className='mw-btn mw-btn--ghost'
                        onClick={() => {
                          setSubmitted(false);
                          setSuccessMessage('');
                        }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className='contact-page-form-text-1 mb-3 text-sm font-medium mw-text-primary'>
                      Use this as a system review entry point, not a quote request. Tell us what is
                      slipping now and what usually happens after someone reaches out.
                    </p>
                    <h2 className='contact-page-form-heading-1 mb-6'>{secondaryCtaLabel}</h2>

                    <form onSubmit={handleSubmit} className='contact-page-form'>
                      <input type='hidden' name='system' value={normalizedSystem} />
                      <input type='hidden' name='source' value={normalizedSource} />

                      {hasContext ? (
                        <p className='contact-page-form-text-1 text-sm mw-text-secondary'>
                          We&apos;ll include your page context with this message so we know what you
                          were looking at.
                        </p>
                      ) : (
                        <p className='contact-page-form-text-1 text-sm mw-text-secondary'>
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
                          <Label htmlFor='phone' className='contact-page-form-label-3'>
                            Phone
                          </Label>
                          <Input
                            id='phone'
                            name='phone'
                            type='tel'
                            placeholder='Optional'
                            autoComplete='tel'
                            value={formState.phone}
                            onChange={event => handleInputChange('phone', event.target.value)}
                            className='contact-page-form-input-3'
                          />
                        </div>

                        <div>
                          <Label htmlFor='organizationName' className='contact-page-form-label-4'>
                            Business or Clinic Name *
                          </Label>
                          <Input
                            id='organizationName'
                            name='organizationName'
                            type='text'
                            placeholder='Company or clinic name'
                            required
                            autoComplete='organization'
                            value={formState.organizationName}
                            onChange={event =>
                              handleInputChange('organizationName', event.target.value)
                            }
                            className='contact-page-form-input-4'
                          />
                        </div>

                        <div>
                          <Label htmlFor='websiteUrl' className='contact-page-form-label-5'>
                            Website URL
                          </Label>
                          <Input
                            id='websiteUrl'
                            name='websiteUrl'
                            type='url'
                            placeholder='https://example.com'
                            autoComplete='url'
                            value={formState.websiteUrl}
                            onChange={event => handleInputChange('websiteUrl', event.target.value)}
                            className='contact-page-form-input-5'
                          />
                        </div>

                        <div>
                          <Label htmlFor='industryType' className='contact-page-form-label-6'>
                            Industry or Practice Type *
                          </Label>
                          <Input
                            id='industryType'
                            name='industryType'
                            type='text'
                            placeholder='HVAC, dental implant clinic, roofing, etc.'
                            required
                            value={formState.industryType}
                            onChange={event =>
                              handleInputChange('industryType', event.target.value)
                            }
                            className='contact-page-form-input-6'
                          />
                        </div>
                      </div>

                      <div className='contact-page-form-field-4 grid gap-4 md:grid-cols-2'>
                        <div>
                          <Label htmlFor='mainConcern' className='contact-page-form-label-7'>
                            Main Concern *
                          </Label>
                          <select
                            id='mainConcern'
                            name='mainConcern'
                            required
                            value={formState.mainConcern}
                            onChange={event => handleInputChange('mainConcern', event.target.value)}
                            className='contact-page-form-input-7 mw-select'
                          >
                            <option value=''>Select main concern</option>
                            {MAIN_CONCERN_OPTIONS.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label
                            htmlFor='preferredContactMethod'
                            className='contact-page-form-label-8'
                          >
                            Preferred Contact Method *
                          </Label>
                          <select
                            id='preferredContactMethod'
                            name='preferredContactMethod'
                            required
                            value={formState.preferredContactMethod}
                            onChange={event =>
                              handleInputChange('preferredContactMethod', event.target.value)
                            }
                            className='contact-page-form-input-8 mw-select'
                          >
                            <option value=''>Select contact method</option>
                            {PREFERRED_CONTACT_METHOD_OPTIONS.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <p className='contact-page-form-text-1 text-sm mw-text-secondary'>
                        We use this to understand the current path before replying.
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
                        <Label htmlFor='slippingNow' className='contact-page-form-label-9'>
                          What is slipping right now? *
                        </Label>
                        <Textarea
                          id='slippingNow'
                          name='slippingNow'
                          placeholder='Missed calls, unclear website pages, slow replies, quote follow-up, weak local visibility, reviews, or something else.'
                          rows={6}
                          required
                          value={formState.slippingNow}
                          onChange={event => handleInputChange('slippingNow', event.target.value)}
                          className='contact-page-form-textarea-1'
                        />
                      </div>

                      <div className='contact-page-form-field-8'>
                        <Label htmlFor='afterContact' className='contact-page-form-label-10'>
                          What happens after someone calls, books, messages, or fills a form? *
                        </Label>
                        <Textarea
                          id='afterContact'
                          name='afterContact'
                          placeholder='Who sees it, who replies, where it is recorded, and how follow-up happens now.'
                          rows={5}
                          required
                          value={formState.afterContact}
                          onChange={event => handleInputChange('afterContact', event.target.value)}
                          className='contact-page-form-textarea-2'
                        />
                      </div>

                      <div className='contact-page-form-field-9'>
                        <Label htmlFor='message' className='contact-page-form-label-11'>
                          Anything else we should know?
                        </Label>
                        <Textarea
                          id='message'
                          name='message'
                          placeholder='Optional context, page source, or constraints.'
                          rows={4}
                          value={formState.message}
                          onChange={event => handleInputChange('message', event.target.value)}
                          className='contact-page-form-textarea-3'
                        />
                      </div>

                      {turnstileSiteKey ? (
                        <div className='contact-page-form-field-10'>
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

                      <p className='contact-page-form-text-1 text-sm mw-text-secondary'>
                        No spam
                        <br />
                        Personal response
                        <br />
                        Reply within one working day
                      </p>

                      <p className='contact-page-form-text-1 text-sm mw-text-secondary'>
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
                            className={`contact-page-info-label-${index + 1} text-sm mw-text-secondary`}
                          >
                            {info.label}
                          </div>
                          <div
                            className={`contact-page-info-value-${index + 1} font-medium mw-text-primary`}
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
                        className={`contact-page-faq-answer-${index + 1} text-sm mw-text-secondary`}
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
      </PageSection>

      {/* Alternative CTA */}
      <PageSection className='cta footer-cta' padding='none'>
        <DecisionPanel
          heading={{
            title: 'Need to talk through the right next step?',
            description:
              "If the problem is clear but the right move is not, start the conversation and we'll help you scope it properly.",
          }}
          actions={[
            {
              label: 'Request a System Review',
              href: buildContactHref({
                system: 'smart-website-systems',
                sourceType: 'page',
                slug: 'contact-footer',
              }),
              variant: 'primary',
            },
          ]}
        />
      </PageSection>
    </div>
  );
}
