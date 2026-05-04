import path from 'path';
import { fileURLToPath } from 'url';
import bundleAnalyzer from '@next/bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://challenges.cloudflare.com",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'self' https://challenges.cloudflare.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://pixabay.com",
  "manifest-src 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "worker-src 'self' blob:",
  'upgrade-insecure-requests',
].join('; ');

const SECURITY_HEADERS = [
  {
    key: 'Content-Security-Policy',
    value: CONTENT_SECURITY_POLICY,
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-site',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), geolocation=(), microphone=(), payment=(), usb=()',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  outputFileTracingExcludes: {
    '/*': [
      'artifacts/**/*',
      'scripts/**/*',
      'reports/**/*',
      '_workspace/**/*',
      'docs/**/*',
      'system/**/*',
    ],
  },
  async redirects() {
    return [
      {
        source: '/case-study/:slug',
        destination: '/case-studies/:slug',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: SECURITY_HEADERS,
      },
    ];
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'pixabay.com' },
    ],
  },
  experimental: {
    externalDir: true,
  },
  turbopack: {
    resolveAlias: {
      '@/components/routing/InternalLink': path.resolve(
        __dirname,
        './src/components/routing/InternalLink'
      ),
      '@/screens': path.resolve(__dirname, './src/screens'),
      '@': path.resolve(__dirname, './src'),
    },
  },
};

export default withBundleAnalyzer(nextConfig);
