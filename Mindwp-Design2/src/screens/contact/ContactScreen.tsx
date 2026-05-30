import { Container } from '@/components/primitives/Container';
import { SignalDot } from '@/components/primitives/SignalDot';

/**
 * Placeholder contact screen. Real contact UI + backend wiring happen in a
 * later task.
 */
export function ContactScreen() {
  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <div className='section-kicker text-[#6f8190]'>
          <SignalDot tone='cyan' /> Contact
        </div>
        <h1>Contact page placeholder</h1>
        <p className='section-intro'>
          The contact form UI and backend wiring are added in a later task.
        </p>
      </Container>
    </section>
  );
}
