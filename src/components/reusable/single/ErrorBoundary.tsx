'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary - Catches and handles React component errors
 *
 * Provides graceful error handling with user-friendly fallback UI
 * Logs errors for debugging and can be customized with fallback content
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className='error-boundary'>
          <AlertTriangle className='error-boundary__icon' />
          <h3 className='error-boundary__title'>Something went wrong</h3>
          <p className='error-boundary__text'>
            We encountered an error while loading this section. Please try refreshing the page.
          </p>
          <Button onClick={() => this.setState({ hasError: false })} label='Try Again' />
        </div>
      );
    }

    return this.props.children;
  }
}
