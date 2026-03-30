import { RetryButtonIsland } from '@/components/system/RetryButtonIsland';

export function GenericErrorFallback() {
  return (
    <div className='feature-err l-row l-items-center l-row-center'>
      <div className='feature-err__inner'>
        <h1 className='feature-err__title'>Something went wrong</h1>
        <p className='feature-err__text'>
          We encountered an error while loading this page. Please try refreshing.
        </p>
        <RetryButtonIsland />
      </div>
    </div>
  );
}
