// @vitest-environment node

import { afterEach, describe, expect, test, vi } from 'vitest';

const originalEnv = {
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
  system: 'smart-website-systems',
  source: 'service/smart-website-systems',
  captchaToken: 'turnstile-token',
};

async function loadContactRoute({
  apiKey = true,
  contactEmail = true,
  contactFromEmail = true,
  turnstileSecretKey = true,
  turnstileVerified = true,
}: {
  apiKey?: boolean;
  contactEmail?: boolean;
  contactFromEmail?: boolean;
  turnstileSecretKey?: boolean;
  turnstileVerified?: boolean;
}) {
  const send = vi.fn().mockResolvedValue({ id: 'email_123' });

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

  process.env.RESEND_API_KEY = apiKey ? 'test-key' : '';
  process.env.CONTACT_EMAIL = contactEmail ? 'hello@mindwp.com' : '';
  process.env.CONTACT_FROM_EMAIL = contactFromEmail ? 'noreply@mindwp.com' : '';
  process.env.TURNSTILE_SECRET_KEY = turnstileSecretKey ? 'turnstile-secret' : '';

  const module = await import('@/app/api/contact/route');
  return { POST: module.POST, send };
}

describe('integration: contact API', () => {
  afterEach(() => {
    vi.doUnmock('resend');
    vi.unstubAllGlobals();
    vi.resetModules();
    process.env.RESEND_API_KEY = originalEnv.RESEND_API_KEY;
    process.env.CONTACT_EMAIL = originalEnv.CONTACT_EMAIL;
    process.env.CONTACT_FROM_EMAIL = originalEnv.CONTACT_FROM_EMAIL;
    process.env.TURNSTILE_SECRET_KEY = originalEnv.TURNSTILE_SECRET_KEY;
    global.fetch = originalFetch;
  });

  test('rejects payloads missing required fields', async () => {
    const { POST } = await loadContactRoute({
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
    await expect(response.json()).resolves.toEqual({ error: 'Missing fields' });
  });

  test('rejects payloads without valid CTA context', async () => {
    const { POST } = await loadContactRoute({
      apiKey: false,
      contactEmail: false,
      contactFromEmail: false,
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

    expect(missingContextResponse.status).toBe(400);
    await expect(missingContextResponse.json()).resolves.toEqual({
      error: 'Missing contact context. Please start from a valid page CTA.',
    });

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

    expect(invalidContextResponse.status).toBe(400);
    await expect(invalidContextResponse.json()).resolves.toEqual({
      error: 'Invalid contact context. Please use a valid page CTA and try again.',
    });
  });

  test('accepts a valid payload and sends the email when configured', async () => {
    const { POST, send } = await loadContactRoute({});

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify(validBody),
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ success: true });
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'Website <noreply@mindwp.com>',
      })
    );
  });

  test('rejects valid payloads when sender configuration is missing', async () => {
    const { POST, send } = await loadContactRoute({ contactFromEmail: false });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: validHeaders,
        body: JSON.stringify(validBody),
      })
    );

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({ error: 'Email service is not configured.' });
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
    await expect(response.json()).resolves.toEqual({ error: 'Invalid request origin.' });
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
    await expect(response.json()).resolves.toEqual({ error: 'Invalid email address.' });
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
    await expect(response.json()).resolves.toEqual({ error: 'Spam detected.' });
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
    await expect(response.json()).resolves.toEqual({ error: 'Missing CAPTCHA token.' });
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
      error: 'Too many contact requests. Please try again later.',
    });
    expect(send).toHaveBeenCalledTimes(5);
  });
});
