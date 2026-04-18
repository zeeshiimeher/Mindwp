import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { SERVICES } from '@/global/site-wide/services';
import { isValidContactContext } from '@/lib/contact/contactHref';
import { SITE_ORIGIN } from '@/lib/seo/config';

export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  system?: string;
  source?: string;
  website?: string;
  captchaToken?: string;
}

function isValidContactEmail(email: string) {
  return emailPattern.test(email);
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) {
    return false;
  }

  const requestOrigin = new URL(request.url).origin;
  return origin === requestOrigin || origin === SITE_ORIGIN;
}

function getClientAddress(request: Request) {
  return (
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-real-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  );
}

function checkRateLimit(request: Request) {
  const now = Date.now();

  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const clientKey = getClientAddress(request);
  const existing = rateLimitStore.get(clientKey);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(clientKey, {
      count: 1,
      resetAt: now + SERVICES.contactForm.rateLimit.windowMs,
    });

    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= SERVICES.contactForm.rateLimit.maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  rateLimitStore.set(clientKey, existing);

  return { allowed: true, retryAfterSeconds: 0 };
}

async function verifyTurnstileToken(request: Request, captchaToken: string) {
  if (!SERVICES.captcha.enabled) {
    return true;
  }

  if (process.env.NODE_ENV !== 'production' && SERVICES.debug.bypassCaptchaInDev) {
    return true;
  }

  if (!turnstileSecretKey) {
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: turnstileSecretKey,
        response: captchaToken,
        remoteip: getClientAddress(request),
      }),
    });

    if (!response.ok) {
      return false;
    }

    const payload = (await response.json()) as { success?: boolean };
    return payload.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
  }

  const body = (await request.json()) as ContactRequestBody;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const system = body.system?.trim();
  const source = body.source?.trim();
  const website = body.website?.trim();
  const captchaToken = body.captchaToken?.trim();

  if (website) {
    return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  if (!isValidContactEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (!system || !source) {
    return NextResponse.json(
      { error: 'Missing contact context. Please start from a valid page CTA.' },
      { status: 400 }
    );
  }

  if (!isValidContactContext(system, source)) {
    return NextResponse.json(
      { error: 'Invalid contact context. Please use a valid page CTA and try again.' },
      { status: 400 }
    );
  }

  const rateLimit = checkRateLimit(request);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Too many contact requests. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  if (SERVICES.captcha.enabled) {
    if (!captchaToken) {
      return NextResponse.json({ error: 'Missing CAPTCHA token.' }, { status: 400 });
    }

    if (!turnstileSecretKey) {
      return NextResponse.json({ error: 'CAPTCHA service is not configured.' }, { status: 500 });
    }

    const captchaVerified = await verifyTurnstileToken(request, captchaToken);
    if (!captchaVerified) {
      return NextResponse.json({ error: 'CAPTCHA verification failed.' }, { status: 400 });
    }
  }

  if (!resend || !contactEmail || !contactFromEmail) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: `Website <${contactFromEmail}>`,
      to: [contactEmail],
      subject: 'New Contact Form Submission',
      replyTo: email,
      text: `Name: ${name}
Email: ${email}

    System: ${system}
    Source: ${source}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send message right now.' }, { status: 500 });
  }
}
