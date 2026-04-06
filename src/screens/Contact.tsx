'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { primaryCta } from '@/config/primaryCta';
import { getVariantStyles } from '@/lib/ui/variantStyles';

export function Contact() {
  const endpoint = '/form-handler.php';
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [systemParam, setSystemParam] = useState('');
  const [sourceParam, setSourceParam] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const system = params.get('system') ?? '';
    const source = params.get('source') ?? '';
    setSystemParam(system);
    setSourceParam(source);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Request failed');
      e.currentTarget.reset();
      setSubmitted(true);
    } catch {
      setErrorMessage(
        'Something went wrong. Please try again or email us directly at hello@mindwp.com.'
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
      <section className='contact-page-hero bg-gradient-to-b from-blue-50 to-white l-section'>
        <div className='contact-page-hero-container-1 l-container'>
          <div className='contact-page-hero-content text-center'>
            <h1 className='contact-page-hero-heading-1'>Get in Touch</h1>
            <p className='contact-page-hero-text-1 text-xl text-muted-foreground l-container l-container--narrow'>
              Have questions about our services? Want to discuss your project? We&apos;re here to
              help. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='contact-page-main l-section'>
        <div className='contact-page-main-container-1 l-container'>
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
                      {/* Hidden context fields */}
                      <input type='hidden' name='system' value={systemParam} />
                      <input type='hidden' name='source' value={sourceParam} />
                      {/* Name */}
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
                          className='contact-page-form-input-1'
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className='contact-page-form-row-1'>
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
                            className='contact-page-form-input-2'
                          />
                        </div>
                        <div className='contact-page-form-field-3'>
                          <Label htmlFor='phone' className='contact-page-form-label-3'>
                            Phone Number
                          </Label>
                          <Input
                            id='phone'
                            name='phone'
                            type='tel'
                            placeholder='+44 7123 456789'
                            className='contact-page-form-input-3'
                          />
                        </div>
                      </div>

                      {/* Business Type & Website */}
                      <div className='contact-page-form-row-2'>
                        <div className='contact-page-form-field-4'>
                          <Label htmlFor='business-type' className='contact-page-form-label-4'>
                            Business Type *
                          </Label>
                          <Select name='businessType'>
                            <SelectTrigger
                              id='business-type'
                              name='businessType'
                              className='contact-page-form-select-1'
                            >
                              <SelectValue placeholder='Select your industry' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='home-services'>
                                Home Services (HVAC, Plumbing, Roofing)
                              </SelectItem>
                              <SelectItem value='beauty'>Beauty &amp; Personal Care</SelectItem>
                              <SelectItem value='healthcare'>Healthcare &amp; Clinics</SelectItem>
                              <SelectItem value='professional-services'>
                                Professional Services
                              </SelectItem>
                              <SelectItem value='other'>Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className='contact-page-form-field-5'>
                          <Label htmlFor='website' className='contact-page-form-label-5'>
                            Current Website
                          </Label>
                          <Input
                            id='website'
                            name='website'
                            type='url'
                            placeholder='https://yourwebsite.com'
                            className='contact-page-form-input-4'
                          />
                        </div>
                      </div>

                      {/* Goals */}
                      <div className='contact-page-form-field-6'>
                        <Label htmlFor='goals' className='contact-page-form-label-6'>
                          What are your main goals? *
                        </Label>
                        <Textarea
                          id='goals'
                          name='goals'
                          placeholder='e.g., Get more bookings, improve local SEO, automate follow-ups, reduce no-shows...'
                          rows={4}
                          required
                          className='contact-page-form-textarea-1'
                        />
                      </div>

                      {/* Monthly Budget */}
                      <div className='contact-page-form-field-7'>
                        <Label htmlFor='monthly-budget' className='contact-page-form-label-7'>
                          Approximate Monthly Budget
                        </Label>
                        <Select name='monthlyBudget'>
                          <SelectTrigger
                            id='monthly-budget'
                            name='monthlyBudget'
                            className='contact-page-form-select-2'
                          >
                            <SelectValue placeholder='Select budget range' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='under-1k'>Under £1,000</SelectItem>
                            <SelectItem value='1k-3k'>£1,000 - £3,000</SelectItem>
                            <SelectItem value='3k-5k'>£3,000 - £5,000</SelectItem>
                            <SelectItem value='5k-10k'>£5,000 - £10,000</SelectItem>
                            <SelectItem value='10k-plus'>£10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Error message */}
                      {errorMessage && (
                        <p className='contact-page-form-error text-sm text-destructive'>
                          {errorMessage}
                        </p>
                      )}

                      {/* Submit Button */}
                      <button
                        type='submit'
                        className='btn btn-primary btn-block'
                        disabled={isSubmitting}
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
                        We&apos;ll respond within 24 hours on business days. For urgent matters,
                        please call us directly.
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
      </section>

      {/* Alternative CTA */}
      <section className='cta footer-cta'>
        <div className='l-container'>
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
      </section>
    </div>
  );
}
