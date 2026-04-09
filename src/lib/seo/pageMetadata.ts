import type { Metadata } from 'next';

import { getInventoryMetadata } from '@/lib/content-quality/inventory';

type InventoryMetadataInput = {
  canonicalPath?: string;
  fallbackPath: string;
};

async function getInventoryBackedMetadata({
  canonicalPath,
  fallbackPath,
}: InventoryMetadataInput): Promise<Metadata> {
  return getInventoryMetadata(canonicalPath || fallbackPath);
}

export async function getServiceMetadata(path: string): Promise<Metadata> {
  return getInventoryBackedMetadata({ fallbackPath: path });
}

export async function getFeatureMetadata(path: string): Promise<Metadata> {
  return getInventoryBackedMetadata({ fallbackPath: path });
}

export async function getBlogMetadata(input: InventoryMetadataInput): Promise<Metadata> {
  return getInventoryBackedMetadata(input);
}

export async function getResourceMetadata(path: string): Promise<Metadata> {
  return getInventoryBackedMetadata({ fallbackPath: path });
}

export async function getCaseStudyMetadata(path: string): Promise<Metadata> {
  return getInventoryBackedMetadata({ fallbackPath: path });
}
