import { Button } from '@/components/reusable/single/Button';

export function ResourceNotFound({ title, description }: { title: string; description: string }) {
  return (
    <div className='resource-not-found'>
      <main>
        <section className='resource-not-found__hero l-section bg-gradient-light'>
          <div className='l-container resource-not-found__content'>
            <h1>{title}</h1>
            <p className='resource-not-found__description'>{description}</p>
            <div className='resource-not-found__actions'>
              <Button href='/resources' label='View all resources' />
              <Button href='/' variant='outline' label='Go home' />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
