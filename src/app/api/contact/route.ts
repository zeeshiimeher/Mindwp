/* eslint-disable no-console */

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { SERVICES } from '@/global/site-wide/services';
import { normalizeContactContext } from '@/lib/contact/contactHref';
import { logConversion } from '@/lib/conversions/logConversion';

export const runtime = 'nodejs';

function requireConfiguredValue(value: string | undefined, variableName: string) {
  if (!value) {
    throw new Error(
      `${variableName} is required when its service is enabled. Run scripts/validate-env.ts before startup.`
    );
  }

  return value;
}

const mailConfig = SERVICES.mail.enabled
  ? {
      client: new Resend(requireConfiguredValue(process.env.RESEND_API_KEY, 'RESEND_API_KEY')),
      contactEmail: requireConfiguredValue(process.env.CONTACT_EMAIL, 'CONTACT_EMAIL'),
      contactFromEmail: requireConfiguredValue(
        process.env.CONTACT_FROM_EMAIL,
        'CONTACT_FROM_EMAIL'
      ),
    }
  : null;
const turnstileSecretKey = SERVICES.captcha.enabled
  ? requireConfiguredValue(process.env.TURNSTILE_SECRET_KEY, 'TURNSTILE_SECRET_KEY')
  : undefined;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const configuredSiteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  process.env.NEXT_PUBLIC_APP_URL;

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  organizationName?: string;
  websiteUrl?: string;
  industryType?: string;
  mainConcern?: string;
  slippingNow?: string;
  afterContact?: string;
  preferredContactMethod?: string;
  message?: string;
  system?: string;
  source?: string;
  website?: string;
  captchaToken?: string;
}

const MAIN_CONCERN_VALUES = new Set([
  'website-clarity',
  'local-visibility',
  'missed-calls-forms-messages',
  'follow-up-crm-visibility',
  'reviews-proof',
  'not-sure-yet',
]);
const PREFERRED_CONTACT_METHOD_VALUES = new Set(['email', 'phone', 'text-message', 'whatsapp']);

function normalizeSelectField(value: string | undefined, allowedValues: Set<string>) {
  const normalizedValue = value?.trim();

  if (!normalizedValue || !allowedValues.has(normalizedValue)) {
    return undefined;
  }

  return normalizedValue;
}

function formatReviewField(value: string | undefined) {
  return value ?? 'Not provided';
}

function isValidContactEmail(email: string) {
  return emailPattern.test(email);
}

function createErrorResponse(
  error: string,
  status: number,
  submissionId?: string,
  headers?: HeadersInit
) {
  return NextResponse.json(
    {
      success: false,
      error,
      ...(submissionId ? { submissionId } : {}),
    },
    {
      status,
      ...(headers ? { headers } : {}),
    }
  );
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) {
    return false;
  }

  const requestOrigin = new URL(request.url).origin;
  const configuredOrigin = configuredSiteOrigin ? new URL(configuredSiteOrigin).origin : null;
  return origin === requestOrigin || origin === configuredOrigin;
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

  const captchaSecret = requireConfiguredValue(turnstileSecretKey, 'TURNSTILE_SECRET_KEY');

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: captchaSecret,
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
    return createErrorResponse('Invalid request origin.', 403);
  }

  const submissionId = crypto.randomUUID();
  const body = (await request.json()) as ContactRequestBody;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const organizationName = body.organizationName?.trim();
  const websiteUrl = body.websiteUrl?.trim();
  const industryType = body.industryType?.trim();
  const slippingNow = body.slippingNow?.trim();
  const afterContact = body.afterContact?.trim();
  const message = body.message?.trim();
  const website = body.website?.trim();
  const captchaToken = body.captchaToken?.trim();
  const userAgent = request.headers.get('user-agent')?.trim() || 'unknown';
  const ip = getClientAddress(request);
  const timestamp = new Date().toISOString();
  const mainConcern = normalizeSelectField(body.mainConcern, MAIN_CONCERN_VALUES);
  const preferredContactMethod = normalizeSelectField(
    body.preferredContactMethod,
    PREFERRED_CONTACT_METHOD_VALUES
  );

  if (website) {
    return createErrorResponse('Spam detected.', 400, submissionId);
  }

  if (
    !name ||
    !email ||
    !organizationName ||
    !industryType ||
    !mainConcern ||
    !slippingNow ||
    !afterContact ||
    !preferredContactMethod
  ) {
    return createErrorResponse('Missing fields', 400, submissionId);
  }

  if (!isValidContactEmail(email)) {
    return createErrorResponse('Invalid email address.', 400, submissionId);
  }

  let system: string;
  let source: string;

  try {
    ({ system, source } = normalizeContactContext(body.system, body.source));
  } catch (error) {
    return createErrorResponse(
      error instanceof Error ? error.message : 'Invalid contact context.',
      400,
      submissionId
    );
  }

  console.info('[CONTACT] Incoming', {
    submissionId,
    name,
    email,
    phone,
    system,
    source,
    organizationName,
    websiteUrl,
    industryType,
    mainConcern,
    preferredContactMethod,
    slippingNowLength: slippingNow.length,
    afterContactLength: afterContact.length,
    messageLength: message?.length ?? 0,
    hasCaptchaToken: Boolean(captchaToken),
    websiteFilled: Boolean(website),
    timestamp,
    userAgent,
    ip,
  });

  const rateLimit = checkRateLimit(request);
  if (!rateLimit.allowed) {
    console.warn('[CONTACT] Failed', {
      submissionId,
      reason: 'rate-limit',
      retryAfterSeconds: rateLimit.retryAfterSeconds,
      ip,
    });

    return createErrorResponse('Too many requests, try again later', 429, submissionId, {
      'Retry-After': String(rateLimit.retryAfterSeconds),
    });
  }

  if (SERVICES.captcha.enabled) {
    if (!captchaToken) {
      return createErrorResponse('Missing CAPTCHA token.', 400, submissionId);
    }

    const captchaVerified = await verifyTurnstileToken(request, captchaToken);
    if (!captchaVerified) {
      return createErrorResponse('CAPTCHA verification failed.', 400, submissionId);
    }
  }

  if (!mailConfig) {
    return createErrorResponse('Email service is currently disabled.', 503, submissionId);
  }

  try {
    const { data, error } = await mailConfig.client.emails.send({
      from: `Website <${mailConfig.contactFromEmail}>`,
      to: [mailConfig.contactEmail],
      subject: `New System Review Request - ${system} - ${source}`,
      replyTo: email,
      text: `Submission ID: ${submissionId}

    --------------------

Name: ${name}
Email: ${email}
Phone: ${formatReviewField(phone)}
Preferred Contact Method: ${formatReviewField(preferredContactMethod)}

System: ${system}
Source: ${source}

DIAGNOSTIC CONTEXT:
- Business or Clinic: ${organizationName}
- Website URL: ${formatReviewField(websiteUrl)}
- Industry or Practice Type: ${industryType}
- Main Concern: ${mainConcern}

WHAT IS SLIPPING:
${slippingNow}

WHAT HAPPENS AFTER CONTACT:
${afterContact}

    --------------------

Additional Context:
${formatReviewField(message)}

    --------------------

Metadata:
- Timestamp: ${timestamp}
- User Agent: ${userAgent}
- IP: ${ip}`,
    });

    if (error) {
      console.error('[CONTACT] Failed', {
        submissionId,
        reason: 'resend-error',
        error,
      });
      return createErrorResponse('Email delivery failed', 500, submissionId);
    }

    console.info('[CONTACT] Sent', {
      submissionId,
      data,
    });

    const { error: autoError } = await mailConfig.client.emails.send({
      from: `MindWP <${mailConfig.contactFromEmail}>`,
      to: [email],
      subject: 'We received your system review request - MindWP',
      replyTo: mailConfig.contactEmail,
      text: `Hi ${name},

Thanks for reaching out.

We've received your system review request for:
${organizationName}

We'll review the context you sent, including the current website or handling path where available, and reply with a practical next step within one working day.

If something urgent changes, reply to this email with the update.

- MindWP`,
    });

    if (autoError) {
      console.warn('[CONTACT] Auto-response failed', autoError);
    } else {
      console.log('[AUTO RESPONSE SENT]', {
        submissionId,
        email,
      });
    }

    console.log('[CONVERSION]', {
      submissionId,
      system,
      source,
      email,
      mainConcern,
      preferredContactMethod,
      timestamp: new Date().toISOString(),
    });

    logConversion({
      submissionId,
      system,
      source,
      email,
      timestamp,
      mainConcern,
      preferredContactMethod,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      submissionId,
    });
  } catch (error) {
    console.error('[CONTACT] Failed', {
      submissionId,
      reason: 'exception',
      error,
    });
    return createErrorResponse('Email delivery failed', 500, submissionId);
  }
}
