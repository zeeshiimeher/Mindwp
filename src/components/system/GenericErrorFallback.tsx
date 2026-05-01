import { RetryButtonIsland } from '@/components/system/RetryButtonIsland';
import { GENERIC_ERROR_FALLBACK_CONTENT } from '@/domains/shared/systemUiContent';

export function GenericErrorFallback() {
  return (
    <div className='feature-err l-row l-items-center l-row-center'>
      <div className='feature-err__inner'>
        <h1 className='feature-err__title'>{GENERIC_ERROR_FALLBACK_CONTENT.title}</h1>
        <p className='feature-err__text'>{GENERIC_ERROR_FALLBACK_CONTENT.description}</p>
        <RetryButtonIsland label={GENERIC_ERROR_FALLBACK_CONTENT.retryLabel} />
      </div>
    </div>
  );
}
