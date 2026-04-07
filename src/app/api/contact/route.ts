import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  system?: string;
  source?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactRequestBody;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const system = body.system?.trim();
  const source = body.source?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  if (!resend || !contactEmail) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: 'Website <onboarding@resend.dev>',
      to: [contactEmail],
      subject: 'New Contact Form Submission',
      replyTo: email,
      text: `Name: ${name}
Email: ${email}

System: ${system || 'N/A'}
Source: ${source || 'N/A'}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send message right now.' }, { status: 500 });
  }
}