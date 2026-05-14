import type { ReactNode } from 'react';

function SectionWrapper({
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

export default function CookiePolicy() {
  return (
    <div className='legal-page legal-cookies'>
      <SectionWrapper className='legal-cookies-hero' background='bg-gradient-surface-muted'>
        <div className='legal-cookies-hero-container'>
          <div className='legal-content text-center'>
            <h1>Cookie Policy</h1>
            <p>
              This Cookie Policy explains how MindWP uses cookies and similar technologies on our
              website in connection with our website infrastructure, WordPress implementation,
              automation, and digital systems services.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='legal-cookies-content'>
        <div className='legal-cookies-content-container'>
          <div className='legal-content'>
            <h2>What cookies are</h2>
            <p>
              Cookies are small text files stored on your device. They help websites remember
              preferences, improve performance, and understand how pages are used. Similar
              technologies (like local storage or pixels) may be used for comparable purposes.
            </p>

            <h2>Why we use cookies</h2>
            <ul>
              <li>To make the website work reliably and securely</li>
              <li>To remember basic preferences (where applicable)</li>
              <li>
                To understand how visitors use the site so we can improve content and performance
              </li>
              <li>
                To understand engagement patterns and improve the clarity, structure, and
                performance of our website where applicable
              </li>
            </ul>

            <h2>Types of cookies we may use</h2>
            <ul>
              <li>
                <strong>Essential cookies</strong>: needed for core site functionality and security.
              </li>
              <li>
                <strong>Performance and analytics cookies</strong>: help us understand traffic and
                usage patterns (usually in aggregated form).
              </li>
              <li>
                <strong>Functionality cookies</strong>: remember choices to provide a smoother
                experience (for example, preferences you select).
              </li>
              <li>
                <strong>Marketing cookies</strong>: may be used in limited circumstances to measure
                communication effectiveness or support relevant content delivery where applicable.
              </li>
            </ul>

            <h2>Your control and choices</h2>
            <p>
              You can control cookies through your browser settings, including blocking or deleting
              cookies. If you disable certain cookies, some parts of the website may not function as
              intended.
            </p>

            <h2>Third‑party cookies</h2>
            <p>
              Some cookies may be set by trusted third‑party services we use, such as analytics,
              hosting, scheduling, or embedded content providers. These third parties manage their
              own cookies in accordance with their respective privacy policies.
            </p>

            <h2>Updates to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time as our website evolves. The latest
              version will be posted on this page.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about cookies can be sent to{' '}
              <a className='link-primary' href='mailto:hello@mindwp.com'>
                hello@mindwp.com
              </a>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
