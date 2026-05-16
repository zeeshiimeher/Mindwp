import { SectionShell } from '@/components/layout/SectionShell';

export function ResourceNotFound({ title, description }: { title: string; description: string }) {
  return (
    <main>
      <SectionShell
        ariaLabel={title}
        tone='mist'
        heading={{
          eyebrow: 'Resource unavailable',
          title,
          description,
        }}
      >
        <div className='flex flex-wrap gap-3'>
          <a className='mw-btn mw-btn--primary' href='/resources'>
            View all resources
          </a>
          <a className='mw-btn mw-btn--secondary' href='/'>
            Go home
          </a>
        </div>
      </SectionShell>
    </main>
  );
}
