import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ResourceErrorBoundary - Catches and handles errors in resource-related components
 *
 * Provides graceful error handling with user-friendly fallback UI for resource pages.
 * Logs errors for debugging and can be customized with fallback content.
 * Follows the same pattern as the global ErrorBoundary for consistency.
 */
export class ResourceErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ResourceErrorBoundary caught an error:', error, errorInfo);

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI - consistent with global ErrorBoundary
      return (
        <div className='resource-error-boundary'>
          <AlertTriangle className='resource-error-boundary__icon' aria-hidden='true' />
          <h3 className='resource-error-boundary__title'>Something went wrong</h3>
          <p className='resource-error-boundary__text'>
            We encountered an error while loading this resource. Please try refreshing the page.
          </p>
          <Button onClick={() => this.setState({ hasError: false })} label='Try Again' />
        </div>
      );
    }

    return this.props.children;
  }
}
