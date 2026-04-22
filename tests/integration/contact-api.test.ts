// @vitest-environment node

import { afterEach, describe, expect, test, vi } from 'vitest';

const FOLLOW_UP_DELAY_MS = 1000 * 60 * 60 * 24;

const originalEnv = {
  ENABLE_MAIL_SERVICE: process.env.ENABLE_MAIL_SERVICE,
  ENABLE_CAPTCHA_SERVICE: process.env.ENABLE_CAPTCHA_SERVICE,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
};
const originalFetch = global.fetch;

const validHeaders = {
  'Content-Type': 'application/json',
  Origin: 'https://mindwp.local',
};

const validBody = {
  name: 'MindWP Test',
  email: 'test@example.com',
  message: 'Please show me the service options.',
  businessType: 'local-service',
  primaryGoal: 'more-leads',
  revenueRange: '1k-5k',
  timeline: 'exploring',
  system: 'smart-website-systems',
  source: 'service/smart-website-systems',
  captchaToken: 'turnstile-token',
};

async function loadContactRoute({
  mailEnabled = true,
  captchaEnabled = true,
  apiKey = true,
  contactEmail = true,
  contactFromEmail = true,
  turnstileSecretKey = true,
  turnstileVerified = true,
  sendResult = { data: { id: 'email_123' }, error: null },
  sendResults,
}: {
  mailEnabled?: boolean;
  captchaEnabled?: boolean;
  apiKey?: boolean;
  contactEmail?: boolean;
  contactFromEmail?: boolean;
  turnstileSecretKey?: boolean;
  turnstileVerified?: boolean;
  sendResult?: {
    data?: { id?: string | null } | null;
    error?: { message: string; name?: string } | null;
  };
  sendResults?: Array<{
    data?: { id?: string | null } | null;
    error?: { message: string; name?: string } | null;
  }>;
}) {
  const send = vi.fn();
  const resolvedSendResults = sendResults && sendResults.length > 0 ? sendResults : [sendResult];
  for (const result of resolvedSendResults) {
    send.mockResolvedValueOnce(result);
  }
  if (resolvedSendResults.length > 0) {
    send.mockResolvedValue(resolvedSendResults[resolvedSendResults.length - 1]);
  }
  const logConversion = vi.fn();

  vi.resetModules();
  vi.stubGlobal(
    'fetch',
    vi.fn().mockImplementation(
      async () =>
        new Response(JSON.stringify({ success: turnstileVerified }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        })
    )
  );
  vi.doMock('resend', () => ({
    Resend: class Resend {
      emails = {
        send,
      };
    },
  }));
  vi.doMock('@/lib/conversions/logConversion', () => ({
    logConversion,
  }));

  process.env.ENABLE_MAIL_SERVICE = mailEnabled ? 'true' : 'false';
  process.env.ENABLE_CAPTCHA_SERVICE = captchaEnabled ? 'true' : 'false';
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = captchaEnabled ? 'site-key' : '';
  process.env.RESEND_API_KEY = apiKey ? 'test-key' : '';
  process.env.CONTACT_EMAIL = contactEmail ? 'hello@mindwp.com' : '';
  process.env.CONTACT_FROM_EMAIL = contactFromEmail ? 'noreply@mindwp.com' : '';
  process.env.TURNSTILE_SECRET_KEY = turnstileSecretKey ? 'turnstile-secret' : '';

  const module = await import('@/app/api/contact/route');
  return { POST: module.POST, send, logConversion };
}

describe('integration: contact API', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.doUnmock('resend');
    vi.unstubAllGlobals();
    vi.resetModules();
    process.env.ENABLE_MAIL_SERVICE = originalEnv.ENABLE_MAIL_SERVICE;
    process.env.ENABLE_CAPTCHA_SERVICE = originalEnv.ENABLE_CAPTCHA_SERVICE;
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = originalEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    process.env.RESEND_API_KEY = originalEnv.RESEND_API_KEY;
    process.env.CONTACT_EMAIL = originalEnv.CONTACT_EMAIL;
    process.env.CONTACT_FROM_EMAIL = originalEnv.CONTACT_FROM_EMAIL;
    process.env.TURNSTILE_SECRET_KEY = originalEnv.TURNSTILE_SECRET_KEY;
    global.fetch = originalFetch;
  });

  test('rejects payloads missing required fields', async () => {
    const { POST } = await loadContactRoute({
      mailEnabled: false,
      captchaEnabled: false,
      apiKey: false,
      contactEmail: false,
      contactFromEmail: false,
    });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({ email: 'test@example.com' }),
      })
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: false,
        error: 'Missing fields',
      })
    );
  });

  test('normalizes missing and unknown contact context without blocking delivery', async () => {
    const { POST } = await loadContactRoute({
      captchaEnabled: false,
    });

    const missingContextResponse = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          name: 'MindWP Test',
          email: 'test@example.com',
          message: 'Hello',
        }),
      })
    );

    expect(missingContextResponse.status).toBe(200);
    await expect(missingContextResponse.json()).resolves.toEqual(
      expect.objectContaining({
        success: true,
        message: 'Message sent successfully',
      })
    );

    const invalidContextResponse = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          name: 'MindWP Test',
          email: 'test@example.com',
          message: 'Hello',
          system: 'invalid-system',
          source: 'fake/source',
        }),
      })
    );

    expect(invalidContextResponse.status).toBe(200);
    await expect(invalidContextResponse.json()).resolves.toEqual(
      expect.objectContaining({
        success: true,
        message: 'Message sent successfully',
      })
    );
  });

  test('accepts a valid payload and sends the email when configured', async () => {
    vi.useFakeTimers();
    const conversionSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    const autoResponseSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    const { POST, send, logConversion } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify(validBody),
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: true,
        message: 'Message sent successfully',
      })
    );
    expect(send).toHaveBeenCalledTimes(2);
    expect(send).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        from: 'Website <noreply@mindwp.com>',
        to: ['hello@mindwp.com'],
        subject: '[LOW] New Lead — smart-website-systems — service/smart-website-systems',
        replyTo: 'test@example.com',
        text: expect.stringContaining('Priority: LOW'),
      })
    );
    expect(send.mock.calls[0]?.[0]?.text).toContain('BUSINESS INFO:');
    expect(send.mock.calls[0]?.[0]?.text).toContain('- Type: local-service');
    expect(send.mock.calls[0]?.[0]?.text).toContain('- Goal: more-leads');
    expect(send.mock.calls[0]?.[0]?.text).toContain('- Revenue: 1k-5k');
    expect(send.mock.calls[0]?.[0]?.text).toContain('- Timeline: exploring');
    expect(send).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        from: 'MindWP <noreply@mindwp.com>',
        to: ['test@example.com'],
        subject: 'We received your request — MindWP',
        replyTo: 'hello@mindwp.com',
        text: expect.stringContaining("We'll get back to you within 24 hours."),
      })
    );
    expect(autoResponseSpy).toHaveBeenCalledWith(
      '[FOLLOW UP SCHEDULED]',
      expect.objectContaining({
        submissionId: expect.any(String),
        email: 'test@example.com',
        priority: 'low',
      })
    );
    await vi.advanceTimersByTimeAsync(FOLLOW_UP_DELAY_MS);
    expect(send).toHaveBeenCalledTimes(3);
    expect(send).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        from: 'MindWP <noreply@mindwp.com>',
        to: ['test@example.com'],
        subject: 'Just checking in — MindWP',
        replyTo: 'hello@mindwp.com',
        text: expect.stringContaining("If you're still looking for a solution, I'd be happy to help."),
      })
    );
    expect(autoResponseSpy).toHaveBeenCalledWith(
      '[AUTO RESPONSE SENT]',
      expect.objectContaining({
        submissionId: expect.any(String),
        email: 'test@example.com',
        priority: 'low',
      })
    );
    expect(conversionSpy).toHaveBeenCalledWith(
      '[CONVERSION]',
      expect.objectContaining({
        email: 'test@example.com',
        priority: 'low',
        routedTo: 'hello@mindwp.com',
        system: 'smart-website-systems',
        source: 'service/smart-website-systems',
        submissionId: expect.any(String),
        timestamp: expect.any(String),
      })
    );
    expect(logConversion).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'test@example.com',
        priority: 'low',
        routedTo: 'hello@mindwp.com',
        system: 'smart-website-systems',
        source: 'service/smart-website-systems',
        submissionId: expect.any(String),
        timestamp: expect.any(String),
      })
    );
    autoResponseSpy.mockRestore();
    conversionSpy.mockRestore();
  });

  test('classifies and routes high-intent ai lead submissions', async () => {
    vi.useFakeTimers();
    const conversionSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    const autoResponseSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    const { POST, send, logConversion } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          ...validBody,
          system: 'ai-lead-handling',
          source: 'page/homepage',
          message: 'Can you send a quote and pricing breakdown for AI lead handling?',
        }),
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: true,
        message: 'Message sent successfully',
      })
    );
    expect(send).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: ['sales@mindwp.com'],
        subject: '[HIGH] New Lead — ai-lead-handling — page/homepage',
        text: expect.stringContaining('Routed To: sales@mindwp.com'),
      })
    );
    expect(send).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: ['test@example.com'],
        subject: 'We received your request — MindWP',
        replyTo: 'sales@mindwp.com',
        text: expect.stringContaining("We're prioritizing your request and will respond shortly."),
      })
    );
    await vi.advanceTimersByTimeAsync(FOLLOW_UP_DELAY_MS);
    expect(send).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: ['test@example.com'],
        subject: 'Just checking in — MindWP',
        replyTo: 'sales@mindwp.com',
        text: expect.stringContaining('Just checking in — we can help you get this resolved quickly.'),
      })
    );
    expect(autoResponseSpy).toHaveBeenCalledWith(
      '[AUTO RESPONSE SENT]',
      expect.objectContaining({
        email: 'test@example.com',
        priority: 'high',
      })
    );
    expect(conversionSpy).toHaveBeenCalledWith(
      '[CONVERSION]',
      expect.objectContaining({
        priority: 'high',
        routedTo: 'sales@mindwp.com',
        system: 'ai-lead-handling',
        source: 'page/homepage',
      })
    );
    expect(logConversion).toHaveBeenCalledWith(
      expect.objectContaining({
        priority: 'high',
        routedTo: 'sales@mindwp.com',
        system: 'ai-lead-handling',
        source: 'page/homepage',
      })
    );
    autoResponseSpy.mockRestore();
    conversionSpy.mockRestore();
  });

  test('prioritizes urgent high-revenue leads from structured intake fields', async () => {
    vi.useFakeTimers();
    const { POST, send, logConversion } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          ...validBody,
          message: 'We need help improving our site operations.',
          revenueRange: '20k-plus',
          timeline: 'asap',
        }),
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: true,
        message: 'Message sent successfully',
      })
    );
    expect(send).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        subject: '[HIGH] New Lead — smart-website-systems — service/smart-website-systems',
        text: expect.stringContaining('- Revenue: 20k-plus'),
      })
    );
    expect(logConversion).toHaveBeenCalledWith(
      expect.objectContaining({
        priority: 'high',
      })
    );
  });

  test('does not fail the main response when auto-response delivery fails', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
    const autoResponseSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    const { POST, send } = await loadContactRoute({
      sendResults: [
        { data: { id: 'email_123' }, error: null },
        {
          data: null,
          error: {
            message: 'Auto-response rejected',
            name: 'application_error',
          },
        },
      ],
    });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify(validBody),
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: true,
        message: 'Message sent successfully',
      })
    );
    expect(send).toHaveBeenCalledTimes(2);
    expect(warnSpy).toHaveBeenCalledWith(
      '[CONTACT] Auto-response failed',
      expect.objectContaining({
        message: 'Auto-response rejected',
      })
    );
    expect(autoResponseSpy).not.toHaveBeenCalledWith(
      '[AUTO RESPONSE SENT]',
      expect.anything()
    );
    autoResponseSpy.mockRestore();
    warnSpy.mockRestore();
  });

  test('does not affect the main response when the scheduled follow-up fails', async () => {
    vi.useFakeTimers();
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
    const followUpSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    const { POST, send } = await loadContactRoute({
      sendResults: [
        { data: { id: 'email_123' }, error: null },
        { data: { id: 'email_124' }, error: null },
        {
          data: null,
          error: {
            message: 'Follow-up rejected',
            name: 'application_error',
          },
        },
      ],
    });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify(validBody),
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: true,
        message: 'Message sent successfully',
      })
    );
    expect(send).toHaveBeenCalledTimes(2);
    expect(followUpSpy).toHaveBeenCalledWith(
      '[FOLLOW UP SCHEDULED]',
      expect.objectContaining({
        submissionId: expect.any(String),
        email: 'test@example.com',
        priority: 'low',
      })
    );

    await vi.advanceTimersByTimeAsync(FOLLOW_UP_DELAY_MS);

    expect(send).toHaveBeenCalledTimes(3);
    expect(warnSpy).toHaveBeenCalledWith('[FOLLOW UP FAILED]', expect.any(String));
    followUpSpy.mockRestore();
    warnSpy.mockRestore();
  });

  test('returns 500 when Resend resolves with an error payload', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
    const { POST, send } = await loadContactRoute({
      sendResult: {
        data: null,
        error: {
          message: 'Resend rejected the message',
          name: 'application_error',
        },
      },
    });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify(validBody),
      })
    );

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: false,
        error: 'Email delivery failed',
      })
    );
    expect(send).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith(
      '[CONTACT] Failed',
      expect.objectContaining({
        reason: 'resend-error',
        error: expect.objectContaining({
          message: 'Resend rejected the message',
        }),
      })
    );
    errorSpy.mockRestore();
  });

  test('returns service unavailable when mail delivery is disabled', async () => {
    const { POST, send } = await loadContactRoute({
      mailEnabled: false,
      captchaEnabled: false,
      apiKey: false,
      contactEmail: false,
      contactFromEmail: false,
    });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          ...validBody,
          captchaToken: undefined,
        }),
      })
    );

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: false,
        error: 'Email service is currently disabled.',
      })
    );
    expect(send).not.toHaveBeenCalled();
  });

  test('rejects payloads from invalid origins', async () => {
    const { POST, send } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: {
          ...validHeaders,
          Origin: 'https://evil.example',
        },
        body: JSON.stringify(validBody),
      })
    );

    expect(response.status).toBe(403);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: false,
        error: 'Invalid request origin.',
      })
    );
    expect(send).not.toHaveBeenCalled();
  });

  test('rejects invalid email addresses', async () => {
    const { POST, send } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          ...validBody,
          email: 'invalid-email',
        }),
      })
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: false,
        error: 'Invalid email address.',
      })
    );
    expect(send).not.toHaveBeenCalled();
  });

  test('rejects honeypot spam payloads', async () => {
    const { POST, send } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          ...validBody,
          website: 'https://spam.example',
        }),
      })
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: false,
        error: 'Spam detected.',
      })
    );
    expect(send).not.toHaveBeenCalled();
  });

  test('rejects payloads when CAPTCHA token is missing', async () => {
    const { POST, send } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify({
          ...validBody,
          captchaToken: '',
        }),
      })
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({
        success: false,
        error: 'Missing CAPTCHA token.',
      })
    );
    expect(send).not.toHaveBeenCalled();
  });

  test('rate limits repeated valid requests', async () => {
    const { POST, send } = await loadContactRoute({});

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await POST(
        new Request('https://mindwp.local/api/contact', {
          method: 'POST',
          headers: {
            ...validHeaders,
            'x-forwarded-for': '203.0.113.10',
          },
          body: JSON.stringify(validBody),
        })
      );

      expect(response.status).toBe(200);
      await expect(response.json()).resolves.toEqual(
        expect.objectContaining({
          success: true,
          message: 'Message sent successfully',
        })
      );
    }

    const blockedResponse = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: {
          ...validHeaders,
          'x-forwarded-for': '203.0.113.10',
        },
        body: JSON.stringify(validBody),
      })
    );

    expect(blockedResponse.status).toBe(429);
    await expect(blockedResponse.json()).resolves.toEqual({
      success: false,
      error: 'Too many requests, try again later',
      submissionId: expect.any(String),
    });
    expect(send).toHaveBeenCalledTimes(10);
  });
});
