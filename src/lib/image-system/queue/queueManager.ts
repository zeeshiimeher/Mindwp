// ─── Image Generation Queue System ──────────────────────────────────
// Manages job scheduling, rate limits, retries, and bulk processing

import fs from 'fs';
import path from 'path';

import { DATA_FILES, RATE_LIMIT } from '../config';
import type { ContentDomain, ImageType, QueueJob, QueueJobStatus } from '../types';

/** Load queue from disk */
export function loadQueue(): QueueJob[] {
  const filePath = path.resolve(DATA_FILES.imageQueue);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as QueueJob[];
  }
  return [];
}

/** Save queue to disk */
export function saveQueue(queue: QueueJob[]): void {
  const filePath = path.resolve(DATA_FILES.imageQueue);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(queue, null, 2));
}

/** Add a job to the queue */
export function addJob(
  domain: ContentDomain,
  slug: string,
  imageType: ImageType,
  queries: string[]
): QueueJob {
  const queue = loadQueue();

  // Skip if already queued
  const existing = queue.find(
    j => j.domain === domain && j.slug === slug && j.imageType === imageType
  );
  if (existing && existing.status !== 'failed') return existing;

  const job: QueueJob = {
    domain,
    slug,
    imageType,
    queries,
    status: 'pending',
    attempts: 0,
  };

  queue.push(job);
  saveQueue(queue);
  return job;
}

/** Update a job's status */
export function updateJobStatus(
  domain: ContentDomain,
  slug: string,
  imageType: ImageType,
  status: QueueJobStatus,
  error?: string
): void {
  const queue = loadQueue();
  const job = queue.find(j => j.domain === domain && j.slug === slug && j.imageType === imageType);

  if (job) {
    job.status = status;
    job.attempts++;
    if (error) job.error = error;
    if (status === 'completed') job.completedAt = new Date().toISOString();
    saveQueue(queue);
  }
}

/** Get the next pending job */
export function getNextPendingJob(): QueueJob | null {
  const queue = loadQueue();
  return queue.find(j => j.status === 'pending') ?? null;
}

/** Get queue status summary */
export function getQueueStatus(): {
  total: number;
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  skipped: number;
} {
  const queue = loadQueue();
  return {
    total: queue.length,
    pending: queue.filter(j => j.status === 'pending').length,
    processing: queue.filter(j => j.status === 'processing').length,
    completed: queue.filter(j => j.status === 'completed').length,
    failed: queue.filter(j => j.status === 'failed').length,
    skipped: queue.filter(j => j.status === 'skipped').length,
  };
}

/** Reset all failed jobs to pending for retry */
export function resetFailedJobs(): number {
  const queue = loadQueue();
  let reset = 0;

  for (const job of queue) {
    if (job.status === 'failed' && job.attempts < 3) {
      job.status = 'pending';
      job.error = undefined;
      reset++;
    }
  }

  saveQueue(queue);
  return reset;
}

/** Clear completed jobs from queue */
export function clearCompleted(): number {
  const queue = loadQueue();
  const remaining = queue.filter(j => j.status !== 'completed');
  const cleared = queue.length - remaining.length;
  saveQueue(remaining);
  return cleared;
}

/** Create jobs for all content in a domain that needs images */
export function createDomainJobs(
  domain: ContentDomain,
  posts: Array<{ slug: string; queries: string[] }>
): number {
  let added = 0;
  for (const post of posts) {
    addJob(domain, post.slug, 'featured', post.queries);
    added++;
  }
  return added;
}
