'use client';

import React from 'react';

import { RetryButtonIsland } from '@/components/system/RetryButtonIsland';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error }>;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean; error?: Error }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Optional: report to an error service (Sentry, etc.)
    void error;
    void errorInfo;
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback || DefaultFallback;
      return <Fallback error={this.state.error ?? new Error('Unknown error')} />;
    }
    return this.props.children;
  }
}

const DefaultFallback = ({ error }: { error: Error }) => (
  <div className='p-4 text-center'>
    <h2>Something went wrong.</h2>
    <p>{error.message}</p>
    <RetryButtonIsland className='btn btn-primary' label='Reload Page' />
  </div>
);

export default ErrorBoundary;
