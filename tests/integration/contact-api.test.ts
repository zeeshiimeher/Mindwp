// @vitest-environment node

import { afterEach, describe, expect, test, vi } from 'vitest';

const originalEnv = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
};

async function loadContactRoute({ configured }: { configured: boolean }) {
  const send = vi.fn().mockResolvedValue({ id: 'email_123' });

  vi.resetModules();
  vi.doMock('resend', () => ({
    Resend: class Resend {
      emails = {
        send,
      };
    },
  }));

  process.env.RESEND_API_KEY = configured ? 'test-key' : '';
  process.env.CONTACT_EMAIL = configured ? 'hello@mindwp.com' : '';

  const module = await import('@/app/api/contact/route');
  return { POST: module.POST, send };
}

describe('integration: contact API', () => {
  afterEach(() => {
    vi.doUnmock('resend');
    vi.resetModules();
    process.env.RESEND_API_KEY = originalEnv.RESEND_API_KEY;
    process.env.CONTACT_EMAIL = originalEnv.CONTACT_EMAIL;
  });

  test('rejects payloads missing required fields', async () => {
    const { POST } = await loadContactRoute({ configured: false });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'test@example.com' }),
      })
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error: 'Missing fields' });
  });

  test('rejects payloads without valid CTA context', async () => {
    const { POST } = await loadContactRoute({ configured: false });

    const missingContextResponse = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
        headers: {
          'Content-Type': 'application/json',
        },
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
    const { POST, send } = await loadContactRoute({ configured: true });

    const response = await POST(
      new Request('https://mindwp.local/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'MindWP Test',
          email: 'test@example.com',
          message: 'Please show me the service options.',
          system: 'smart-website-systems',
          source: 'service/smart-website-systems',
        }),
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ success: true });
    expect(send).toHaveBeenCalledTimes(1);
  });
});