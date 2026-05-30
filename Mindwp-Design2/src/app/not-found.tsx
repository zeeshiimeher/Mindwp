import { Container } from '@/components/primitives/Container';
import { Button } from '@/components/primitives/Button';
import { ROUTES } from '@/config/routes';

export default function NotFound() {
  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <div className='section-kicker text-[#6f8190]'>404</div>
        <h1>Page not found</h1>
        <p className='section-intro'>
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div>
          <Button href={ROUTES.home}>Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
