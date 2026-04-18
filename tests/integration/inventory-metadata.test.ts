// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import { getRouteMetadata } from '@/lib/seo/pageMetadata';

type OpenGraphImage = string | URL | { url?: string | URL };

function getFirstOpenGraphImage(images: OpenGraphImage | OpenGraphImage[] | undefined) {
	if (!images) {
		return undefined;
	}

	return Array.isArray(images) ? images[0] : images;
}

function toImageUrl(image: OpenGraphImage | undefined) {
	if (!image) {
		return undefined;
	}

	if (typeof image === 'string') {
		return image;
	}

	if (image instanceof URL) {
		return image.toString();
	}

	return typeof image.url === 'string' ? image.url : image.url?.toString();
}

describe('integration: inventory metadata', () => {
	test('resolves complete metadata for known publishable routes', async () => {
		const metadata = await getInventoryMetadata('/contact');

		expect(metadata.title).toBeTruthy();
		expect(metadata.description).toBeTruthy();
		expect(metadata.alternates?.canonical).toBe('/contact');
		expect(metadata.openGraph?.title).toBeTruthy();
		expect(metadata.robots).toEqual({ index: true, follow: true });
	});

	test('uses page-specific open graph images when a publishable route image exists', async () => {
		const serviceMetadata = await getInventoryMetadata('/services/smart-website-systems');
		const resourceMetadata = await getInventoryMetadata('/resources/hvac-review-generation-framework');

		const serviceImage = getFirstOpenGraphImage(serviceMetadata.openGraph?.images);
		const resourceImage = getFirstOpenGraphImage(resourceMetadata.openGraph?.images);

		expect(toImageUrl(serviceImage)).toBe(
			'/images/services/smart-website-systems.webp'
		);
		expect(toImageUrl(resourceImage)).toBe(
			'/images/resources/hvac-review-generation-framework.webp'
		);
	});

	test('throws when inventory-backed metadata is missing', async () => {
		await expect(getRouteMetadata('/__missing-route__')).rejects.toThrow(
			'Missing inventory metadata for path: /__missing-route__'
		);
	});
});