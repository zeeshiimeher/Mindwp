import type { ReactNode } from 'react';

function PageSection({
  background,
  className,
  children,
}: {
  background?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={[background, 'py-16', className].filter(Boolean).join(' ')}>
      <div className='mw-container'>{children}</div>
    </section>
  );
}

export default function TermsConditions() {
  return (
    <div className='legal-page legal-terms'>
      <PageSection className='legal-terms-hero' background='bg-gradient-surface-muted'>
        <div className='legal-terms-hero-container'>
          <div className='legal-content text-center'>
            <h1>Terms &amp; Conditions</h1>
            <p>
              These Terms &amp; Conditions explain how MindWP works with clients across website
              systems, WordPress implementation, enquiry handling, follow-up, and review-support
              services. By engaging our services, you agree to these terms.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection className='legal-terms-content'>
        <div className='legal-terms-content-container'>
          <div className='legal-content'>
            <h2>Services</h2>
            <p>
              We provide professional services that may include strategic planning, website
              architecture, WordPress implementation, enquiry handling, follow-up structure,
              review-support setup, consulting, training, and ongoing refinement. Deliverables,
              timelines, scope, and investment are defined in a proposal, statement of work, or
              invoice.
            </p>

            <h2>Client responsibilities</h2>
            <ul>
              <li>Provide accurate information, approvals, and feedback in a timely manner.</li>
              <li>
                Provide required access to systems (hosting, CMS or website admin access,
                domain/DNS, analytics, enquiry records, and related accounts) where applicable.
              </li>
              <li>
                Ensure you have the rights to use any content, images, logos, and data you provide.
              </li>
            </ul>

            <h2>Payments</h2>
            <ul>
              <li>Invoices are due as stated in the invoice or proposal.</li>
              <li>Work may be paused if payments are overdue.</li>
              <li>
                Third‑party costs (plugins, themes, hosting, subscriptions, platform fees, and other
                external services) are typically billed separately unless otherwise agreed.
              </li>
            </ul>

            <h2>Scope and revisions</h2>
            <p>
              We work to the agreed scope. Revisions that relate to the original scope are handled
              within the review process. New features, new pages, or major changes are treated as a
              change request and may require additional fees and timeline changes.
            </p>

            <h2>Ownership</h2>
            <ul>
              <li>You retain ownership of your pre‑existing brand assets and materials.</li>
              <li>
                Once all invoices for the relevant deliverables are paid in full, you own the final
                deliverables created specifically for you, unless otherwise agreed in writing.
              </li>
              <li>Third‑party tools remain subject to their own licence terms.</li>
            </ul>

            <h2>Limitation of liability</h2>
            <p>
              Outcomes may be influenced by factors outside our control, including platform changes,
              regulatory shifts, market conditions, algorithm updates, and third‑party service
              interruptions. To the maximum extent permitted by applicable law, MindWP shall not be
              liable for indirect, incidental, or consequential losses arising from the use of our
              services.
            </p>

            <h2>Contact</h2>
            <p>
              Questions can be sent to{' '}
              <a className='link-primary' href='mailto:hello@mindwp.com'>
                hello@mindwp.com
              </a>
              .
            </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
