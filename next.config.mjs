import path from 'path';
import { fileURLToPath } from 'url';
import bundleAnalyzer from '@next/bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: process.env.NEXT_DIST_DIR || '.next',
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
