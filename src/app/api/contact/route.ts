/* eslint-disable no-console */

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { env } from '@/env';
import { SERVICES } from '@/global/site-wide/services';
import { normalizeContactContext } from '@/lib/contact/contactHref';
import { logConversion } from '@/lib/conversions/logConversion';
import { SITE_ORIGIN } from '@/lib/seo/config';

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
      client: new Resend(requireConfiguredValue(env.RESEND_API_KEY, 'RESEND_API_KEY')),
      contactEmail: requireConfiguredValue(env.CONTACT_EMAIL, 'CONTACT_EMAIL'),
      contactFromEmail: requireConfiguredValue(env.CONTACT_FROM_EMAIL, 'CONTACT_FROM_EMAIL'),
    }
  : null;
const turnstileSecretKey = SERVICES.captcha.enabled
  ? requireConfiguredValue(env.TURNSTILE_SECRET_KEY, 'TURNSTILE_SECRET_KEY')
  : undefined;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const FOLLOW_UP_DELAY_MS = 1000 * 60 * 60 * 24;
const SYSTEM_EMAIL_MAP = {
  'smart-website-systems': 'hello@mindwp.com',
  'ai-lead-handling': 'sales@mindwp.com',
  'local-seo-authority': 'seo@mindwp.com',
  default: 'hello@mindwp.com',
} as const;

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  businessType?: string;
  primaryGoal?: string;
  revenueRange?: string;
  timeline?: string;
  system?: string;
  source?: string;
  website?: string;
  captchaToken?: string;
}

const BUSINESS_TYPE_VALUES = new Set(['local-service', 'agency', 'saas', 'ecommerce', 'other']);
const PRIMARY_GOAL_VALUES = new Set([
  'more-leads',
  'better-conversion',
  'automation',
  'performance',
  'full-system',
]);
const REVENUE_RANGE_VALUES = new Set(['under-1k', '1k-5k', '5k-20k', '20k-plus']);
const TIMELINE_VALUES = new Set(['asap', 'this-month', '1-3-months', 'exploring']);

function normalizeLeadField(value: string | undefined, allowedValues: Set<string>) {
  const normalizedValue = value?.trim();

  if (!normalizedValue || !allowedValues.has(normalizedValue)) {
    return undefined;
  }

  return normalizedValue;
}

function formatLeadField(value: string | undefined) {
  return value ?? 'Not provided';
}

function classifyLead({
  system,
  message,
  revenueRange,
  timeline,
}: {
  system: string;
  message: string;
  revenueRange?: string;
  timeline?: string;
}) {
  const normalizedMessage = message.toLowerCase();

  if (revenueRange === '20k-plus' && timeline === 'asap') {
    return { priority: 'high' as const };
  }

  if (/(price|cost|quote)/.test(normalizedMessage)) {
    return { priority: 'high' as const };
  }

  if (message.length > 100) {
    return { priority: 'medium' as const };
  }

  void system;
  return { priority: 'low' as const };
}

function getRoutedEmail(system: string) {
  return SYSTEM_EMAIL_MAP[system as keyof typeof SYSTEM_EMAIL_MAP] ?? SYSTEM_EMAIL_MAP.default;
}

function getPriorityMessage(priority: 'high' | 'medium' | 'low') {
  if (priority === 'high') {
    return "We're prioritizing your request and will respond shortly.";
  }

  if (priority === 'medium') {
    return 'Our team is reviewing your request.';
  }

  return "We'll get back to you within 24 hours.";
}

function getFollowUpMessage(priority: 'high' | 'medium' | 'low') {
  if (priority === 'high') {
    return 'Just checking in — we can help you get this resolved quickly.';
  }

  return "If you're still looking for a solution, I'd be happy to help.";
}

function scheduleFollowUpEmail({
  submissionId,
  name,
  email,
  system,
  priority,
  routedTo,
}: {
  submissionId: string;
  name: string;
  email: string;
  system: string;
  priority: 'high' | 'medium' | 'low';
  routedTo: string;
}) {
  if (!mailConfig) {
    return;
  }

  console.log('[FOLLOW UP SCHEDULED]', {
    submissionId,
    email,
    priority,
  });

  const timer = setTimeout(async () => {
    try {
      const { error } = await mailConfig.client.emails.send({
        from: `MindWP <${mailConfig.contactFromEmail}>`,
        to: [email],
        subject: 'Just checking in — MindWP',
        replyTo: routedTo,
        text: `Hi ${name},

Just following up on your request about:
${system}

${getFollowUpMessage(priority)}

Feel free to reply anytime.

— MindWP`,
      });

      if (error) {
        console.warn('[FOLLOW UP FAILED]', submissionId);
      }
    } catch {
      console.warn('[FOLLOW UP FAILED]', submissionId);
    }
  }, FOLLOW_UP_DELAY_MS);

  if (typeof timer === 'object' && timer && 'unref' in timer && typeof timer.unref === 'function') {
    timer.unref();
  }
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

  if (env.NODE_ENV !== 'production' && SERVICES.debug.bypassCaptchaInDev) {
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
  const message = body.message?.trim();
  const businessType = normalizeLeadField(body.businessType, BUSINESS_TYPE_VALUES);
  const primaryGoal = normalizeLeadField(body.primaryGoal, PRIMARY_GOAL_VALUES);
  const revenueRange = normalizeLeadField(body.revenueRange, REVENUE_RANGE_VALUES);
  const timeline = normalizeLeadField(body.timeline, TIMELINE_VALUES);
  const { system, source } = normalizeContactContext(body.system, body.source);
  const website = body.website?.trim();
  const captchaToken = body.captchaToken?.trim();
  const userAgent = request.headers.get('user-agent')?.trim() || 'unknown';
  const ip = getClientAddress(request);
  const timestamp = new Date().toISOString();
  const { priority } = classifyLead({
    system,
    message: message ?? '',
    revenueRange,
    timeline,
  });
  const routedTo = getRoutedEmail(system);
  const priorityLabel = priority.toUpperCase();
  const priorityMessage = getPriorityMessage(priority);

  console.info('[CONTACT] Incoming', {
    submissionId,
    name,
    email,
    system,
    source,
    messageLength: message?.length ?? 0,
    businessType,
    primaryGoal,
    revenueRange,
    timeline,
    hasCaptchaToken: Boolean(captchaToken),
    websiteFilled: Boolean(website),
    timestamp,
    userAgent,
    ip,
  });

  if (website) {
    return createErrorResponse('Spam detected.', 400, submissionId);
  }

  if (!name || !email || !message) {
    return createErrorResponse('Missing fields', 400, submissionId);
  }

  if (!isValidContactEmail(email)) {
    return createErrorResponse('Invalid email address.', 400, submissionId);
  }

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
      to: [routedTo || mailConfig.contactEmail],
      subject: `[${priorityLabel}] New Lead — ${system} — ${source}`,
      replyTo: email,
      text: `Submission ID: ${submissionId}
    Priority: ${priorityLabel}
    Routed To: ${routedTo}

    --------------------

Name: ${name}
Email: ${email}

System: ${system}
Source: ${source}

BUSINESS INFO:
- Type: ${formatLeadField(businessType)}
- Goal: ${formatLeadField(primaryGoal)}
- Revenue: ${formatLeadField(revenueRange)}
- Timeline: ${formatLeadField(timeline)}

    --------------------

Message:
${message}

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
      subject: 'We received your request — MindWP',
      replyTo: routedTo,
      text: `Hi ${name},

Thanks for reaching out.

We've received your request regarding:
${system}

${priorityMessage}

We'll review your request and get back to you soon.

If your request is urgent, feel free to reply to this email.

— MindWP`,
    });

    if (autoError) {
      console.warn('[CONTACT] Auto-response failed', autoError);
    } else {
      console.log('[AUTO RESPONSE SENT]', {
        submissionId,
        email,
        priority,
      });

      scheduleFollowUpEmail({
        submissionId,
        name,
        email,
        system,
        priority,
        routedTo,
      });
    }

    console.log('[CONVERSION]', {
      submissionId,
      system,
      source,
      email,
      priority,
      routedTo,
      timestamp: new Date().toISOString(),
    });

    logConversion({
      submissionId,
      system,
      source,
      email,
      timestamp,
      priority,
      routedTo,
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
