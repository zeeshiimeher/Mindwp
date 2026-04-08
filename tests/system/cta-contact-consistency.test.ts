// @vitest-environment node

import { afterEach, beforeAll, describe, expect, test, vi } from 'vitest';

import { buildContactHref, isValidContactContext } from '@/lib/contact/contactHref';

import { getGraphNodes, initRuntime, primarySystemForNode, sourceTypeForNode } from './runtime';

const originalEnv = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
};

async function loadContactHandler() {
  const send = vi.fn().mockResolvedValue({ id: 'email_123' });

  vi.resetModules();
  vi.doMock('resend', () => ({
    Resend: class Resend {
      emails = {
        send,
      };
    },
  }));

  process.env.RESEND_API_KEY = 'test-key';
  process.env.CONTACT_EMAIL = 'hello@mindwp.com';

  const module = await import('@/app/api/contact/route');
  return { POST: module.POST, send };
}

describe('system invariant: CTA contact context stays compatible with the contact API', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  afterEach(() => {
    vi.doUnmock('resend');
    vi.resetModules();
    process.env.RESEND_API_KEY = originalEnv.RESEND_API_KEY;
    process.env.CONTACT_EMAIL = originalEnv.CONTACT_EMAIL;
  });

  test('every graph-backed CTA context produces a valid contact query string', () => {
    for (const node of getGraphNodes()) {
      const href = buildContactHref({
        system: primarySystemForNode(node),
        sourceType: sourceTypeForNode(node),
        slug: node.slug,
      });

      const url = new URL(href, 'https://mindwp.local');
      const system = url.searchParams.get('system') ?? '';
      const source = url.searchParams.get('source') ?? '';

      expect(url.pathname, `CTA path must stay on /contact for ${node.path}`).toBe('/contact');
      expect(system, `Missing system query param for ${node.path}`).toBe(primarySystemForNode(node));
      expect(source, `Missing source query param for ${node.path}`).toBe(
        `${sourceTypeForNode(node)}/${node.slug}`
      );
      expect(isValidContactContext(system, source), `Invalid contact context for ${node.path}`).toBe(true);
    }
  });

  test('the contact API accepts valid CTA contexts for every publishable page family', async () => {
    const { POST, send } = await loadContactHandler();
    const representativeNodes = [
      ...getGraphNodes('service').slice(0, 1),
      ...getGraphNodes('feature').slice(0, 1),
      ...getGraphNodes('blog').slice(0, 1),
      ...getGraphNodes('resource').slice(0, 1),
      ...getGraphNodes('case-study').slice(0, 1),
      ...getGraphNodes('industry-category').slice(0, 1),
      ...getGraphNodes('industry-detail').slice(0, 1),
    ];

    for (const node of representativeNodes) {
      const href = buildContactHref({
        system: primarySystemForNode(node),
        sourceType: sourceTypeForNode(node),
        slug: node.slug,
      });
      const url = new URL(href, 'https://mindwp.local');

      const response = await POST(
        new Request('https://mindwp.local/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'MindWP Test',
            email: 'test@example.com',
            message: `Runtime CTA context check for ${node.path}`,
            system: url.searchParams.get('system'),
            source: url.searchParams.get('source'),
          }),
        })
      );

      expect(response.status, `Valid CTA context rejected for ${node.path}`).toBe(200);
    }

    expect(send).toHaveBeenCalledTimes(representativeNodes.length);
  });
});