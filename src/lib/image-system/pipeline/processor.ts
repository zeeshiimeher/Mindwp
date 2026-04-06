// ─── Main Pipeline Orchestrator ─────────────────────────────────────
// Coordinates the full image generation pipeline from content to output

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import { DOMAIN_IMAGE_RULES, getImageOutputPath, IMAGE_SIZES } from '../config';
import { applyFixes, clampOverrides } from '../debug/autoTune';
import { debugImage } from '../debug/debugImage';
import { loadLearnedOverrides, saveWinningConfig } from '../debug/learningMemory';
import { appendImageLog } from '../debug/logger';
import { hasImage, isHashTooSimilar, isImageUsed, registerImage } from '../dedup/imageIndex';
import { analyzeImage, detectBrightness } from '../intelligence/imageAnalysis';
import { checkImageSafety } from '../intelligence/safety';
import { rankImages, scoreImage } from '../intelligence/scoring';
import { generatePerceptualHash } from '../intelligence/similarity';
import { updateContextMemory } from '../learning/contextMemory';
import { updateProviderScore } from '../learning/providerLearning';
import { searchAllProviders } from '../providers';
import { generateSemanticQueries } from '../semantic/queryGenerator';
import type {
  ContentDomain,
  ContentMetadata,
  DebugFixAction,
  ImageType,
  PipelineResult,
  ProviderImage,
  ScoredImage,
  TuneOverrides,
} from '../types';

import { downloadImage } from './downloader';
import { generateStandardFeaturedImage } from './featuredImage';
import { optimizeImage, saveImage } from './optimizer';
import { buildDesignContext } from './overlayDesign';

/** Verify white text contrast on the generated image (WCAG AA = 4.5:1) */
async function verifyContrast(imageBuffer: Buffer): Promise<{ ratio: number; pass: boolean }> {
  const meta = await sharp(imageBuffer).metadata();
  const w = meta.width ?? 1600;
  const h = meta.height ?? 900;

  // Sample the center region where text is rendered
  const { data, info } = await sharp(imageBuffer)
    .extract({
      left: Math.floor(w * 0.1),
      top: Math.floor(h * 0.3),
      width: Math.floor(w * 0.8),
      height: Math.floor(h * 0.4),
    })
    .resize(50, 50)
    .raw()
    .toBuffer({ resolveWithObject: true });

  let luma = 0;
  const px = info.width * info.height;
  for (let i = 0; i < data.length; i += info.channels) {
    luma += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  }
  const avgLuma = luma / px / 255;
  const bgLinear = avgLuma <= 0.03928 ? avgLuma / 12.92 : Math.pow((avgLuma + 0.055) / 1.055, 2.4);
  const ratio = (1.0 + 0.05) / (bgLinear + 0.05);
  return { ratio, pass: ratio >= 4.5 };
}

/** Process a single image for a post (featured or content) */
export async function processImage(
  metadata: ContentMetadata,
  domain: ContentDomain,
  imageType: ImageType,
  blockedImageId?: string
): Promise<PipelineResult | null> {
  const slug = metadata.slug;
  const rules = DOMAIN_IMAGE_RULES[domain];
  const isFeatured = imageType === 'featured-clean' || imageType === 'featured-overlay';

  // Check if already generated
  // For featured images, check for featured-clean as the canonical marker
  const guardType = isFeatured ? 'featured-clean' : imageType;
  if (hasImage(slug, guardType)) {
    console.log(`[pipeline] ${domain}/${slug} already has ${guardType} image, skipping`);
    return null;
  }

  // Check if domain allows this image type
  if (imageType === 'content' && !rules.contentAllowed) {
    console.log(`[pipeline] ${domain} does not allow content images, skipping`);
    return null;
  }

  console.log(`[pipeline] Processing ${imageType} image for ${domain}/${slug}`);

  // Generate semantic search queries
  const queries = generateSemanticQueries(metadata, domain);
  console.log(`[pipeline] Generated ${queries.length} search queries`);

  // Try each query until we find a good image
  for (const semanticQuery of queries) {
    console.log(`[pipeline] Searching: "${semanticQuery.query}"`);

    // Search all providers
    const providerResults = await searchAllProviders(semanticQuery.query, domain, 4);
    const allImages: ProviderImage[] = providerResults.flatMap(r => r.images);

    if (allImages.length === 0) {
      console.log(`[pipeline] No results for "${semanticQuery.query}"`);
      continue;
    }

    console.log(`[pipeline] Found ${allImages.length} candidates`);

    // Score and rank all candidates
    const scoredCandidates: ScoredImage[] = [];

    for (let i = 0; i < allImages.length; i++) {
      const image = allImages[i];
      console.log(
        `[pipeline] Evaluating candidate ${i + 1}/${allImages.length} (${image.provider}/${image.id})`
      );

      // Stop early if we have enough good candidates
      if (scoredCandidates.length >= 3) {
        console.log(`[pipeline] Have ${scoredCandidates.length} good candidates, stopping early`);
        break;
      }

      // Quick filters first
      if (image.width < 1200) {
        console.log(`[pipeline]   ↳ skipped: too small (${image.width}px)`);
        continue;
      }
      if (isImageUsed(image.id, image.provider)) {
        console.log(`[pipeline]   ↳ skipped: already used`);
        continue;
      }
      if (blockedImageId && image.id === blockedImageId) {
        console.log(`[pipeline]   ↳ skipped: blocked (previous image)`);
        continue;
      }

      // Safety check
      const safety = checkImageSafety(image);
      if (!safety.passed) {
        console.log(`[pipeline] Safety rejected: ${safety.reasons.join(', ')}`);
        continue;
      }

      // Download for analysis
      let buffer: Buffer;
      try {
        console.log(`[pipeline]   ↳ downloading...`);
        buffer = await downloadImage(image.downloadUrl);
        console.log(`[pipeline]   ↳ downloaded (${(buffer.length / 1024).toFixed(0)}KB)`);
      } catch (err) {
        console.warn(`[pipeline]   ↳ download failed: ${(err as Error).message}`);
        continue;
      }

      // Run intelligence analysis
      console.log(`[pipeline]   ↳ analyzing...`);
      const intelligence = await analyzeImage(buffer);
      if (!intelligence.passed) {
        console.log(
          `[pipeline] Intelligence rejected ${image.id}: ${intelligence.rejectionReasons.join(', ')}`
        );
        // Update provider score negatively
        updateProviderScore(domain, image.provider, false, 30);
        continue;
      }

      // Check visual similarity
      const hashResult = await generatePerceptualHash(buffer);
      if (isHashTooSimilar(hashResult.hash)) {
        console.log(`[pipeline] Image ${image.id} too similar to existing images`);
        continue;
      }

      // Score the candidate
      const scored = scoreImage(image, intelligence, metadata);
      console.log(`[pipeline]   ↳ scored: ${scored.relevanceScore.toFixed(2)}`);
      scoredCandidates.push(scored);

      // Store buffer for later use (attach to scored object)
      (scored as ScoredImage & { _buffer: Buffer })._buffer = buffer;
      (scored as ScoredImage & { _hash: string })._hash = hashResult.hash;
    }

    if (scoredCandidates.length === 0) continue;

    // Rank and select best
    const ranked = rankImages(scoredCandidates);
    const best = ranked[0];
    const bestBuffer = (best as ScoredImage & { _buffer: Buffer })._buffer;
    const bestHash = (best as ScoredImage & { _hash: string })._hash;

    console.log(
      `[pipeline] Selected: ${best.image.provider}/${best.image.id} (score: ${best.relevanceScore})`
    );

    // Generate output
    if (isFeatured) {
      // Generate both clean and overlay variants from one download
      const brightness = best.intelligence.brightness;
      const design = buildDesignContext(metadata, domain, brightness);
      console.log(
        `[design] Variant: ${design.variant} | Layout: L${design.layout} | Icon: ${design.icon ? 'yes' : 'none'} | Badge: ${design.badge ?? 'none'} | Accent: ${design.palette.accent}`
      );

      // ── Auto-tune loop (max 2 iterations) ──
      let tuneOverrides: TuneOverrides = loadLearnedOverrides(domain, metadata.title) ?? {};
      let bestClean: Buffer | null = null;
      let bestOverlay: Buffer | null = null;
      let bestDebugScore = 0;
      let allFixesApplied: DebugFixAction[] = [];
      let finalIteration = 0;

      const MAX_TUNE_ITERATIONS = 2;

      for (let iteration = 0; iteration <= MAX_TUNE_ITERATIONS; iteration++) {
        const result = await generateStandardFeaturedImage(
          bestBuffer,
          metadata.title,
          brightness,
          design,
          metadata.primaryKeyword,
          Object.keys(tuneOverrides).length > 0 ? tuneOverrides : undefined
        );

        // Verify contrast
        const contrastCheck = await verifyContrast(result.overlay);
        console.log(
          `[pipeline] Contrast check: ${contrastCheck.ratio.toFixed(2)}:1 ${contrastCheck.pass ? '✅' : '⚠️'}`
        );

        // Fill in debug input fields from intelligence + contrast
        result.debugInput.contrast = contrastCheck.ratio;
        result.debugInput.edgeDensityLeft = best.intelligence.subjectPosition.edgeDensityLeft;
        result.debugInput.subjectRegion = best.intelligence.subjectPosition.region;

        // Run visual debug analysis
        const debug = debugImage(result.debugInput);
        console.log(
          `[debug] Score: ${debug.score}/10 | Confidence: ${debug.confidence} | Issues: ${debug.issues.length > 0 ? debug.issues.join(', ') : 'none'}`
        );

        // Track best result
        if (debug.score > bestDebugScore || !bestClean) {
          bestClean = result.clean;
          bestOverlay = result.overlay;
          bestDebugScore = debug.score;
          finalIteration = iteration;
        }

        // Good enough — stop tuning
        if (debug.score >= 8) {
          console.log(`[tune] Score ${debug.score} ≥ 8 — accepting result`);
          break;
        }

        // Last iteration — nothing more to try
        if (iteration >= MAX_TUNE_ITERATIONS) {
          console.log(`[tune] Max iterations reached — using best (score: ${bestDebugScore})`);
          break;
        }

        // Apply fixes for next iteration
        console.log(`[tune] Applying fixes: ${debug.fixes.join(', ')}`);
        tuneOverrides = clampOverrides(applyFixes(tuneOverrides, debug.fixes));
        allFixesApplied.push(...debug.fixes);
      }

      // ── Log generation result ──
      const lp = design.layout;
      appendImageLog({
        slug,
        domain,
        score: bestDebugScore,
        layout: lp,
        titleScale: tuneOverrides.titleScale ?? 1.0,
        maxTextWidth: tuneOverrides.maxTextWidth ?? 780,
        gradientStrength: tuneOverrides.gradientStrength ?? 1.0,
        vignetteStrength: tuneOverrides.vignetteStrength ?? 1.0,
        contrast: 0, // Already logged above
        issues: [],
        fixesApplied: allFixesApplied,
        iteration: finalIteration,
        timestamp: new Date().toISOString(),
      });

      // ── Save winning config to learning memory ──
      if (bestDebugScore >= 8) {
        saveWinningConfig(domain, metadata.title, {
          titleScale: tuneOverrides.titleScale ?? 1.0,
          maxTextWidth: tuneOverrides.maxTextWidth ?? 780,
          gradientStrength: tuneOverrides.gradientStrength ?? 1.0,
          layout: design.layout,
          vignetteStrength: tuneOverrides.vignetteStrength ?? 1.0,
          score: bestDebugScore,
        });
      }

      // Save both variants
      const cleanPath = getImageOutputPath(domain, slug, 'featured-clean');
      const overlayPath = getImageOutputPath(domain, slug, 'featured-overlay');

      await saveImage(bestClean!, cleanPath);
      console.log(`[pipeline] Saved: ${cleanPath}`);

      await saveImage(bestOverlay!, overlayPath);
      console.log(`[pipeline] Saved: ${overlayPath}`);

      // Register both in index
      const registrationData = {
        hash: bestHash,
        provider: best.image.provider,
        imageId: best.image.id,
      };

      registerImage(slug, 'featured-clean', { file: cleanPath, ...registrationData });
      registerImage(slug, 'featured-overlay', { file: overlayPath, ...registrationData });

      // Update learning systems
      updateContextMemory(
        metadata.topics[0] ?? metadata.primaryKeyword,
        semanticQuery.query,
        best.image.provider,
        best.relevanceScore
      );
      updateProviderScore(domain, best.image.provider, true, best.relevanceScore);

      return {
        domain,
        slug,
        imageType: 'featured-clean',
        outputPath: cleanPath,
        provider: best.image.provider,
        imageId: best.image.id,
        relevanceScore: best.relevanceScore,
        hash: bestHash,
      };
    } else {
      // Optimize content image
      const outputBuffer = await optimizeImage(bestBuffer, 'content');
      const outputPath = getImageOutputPath(domain, slug, imageType);

      // Save to disk
      await saveImage(outputBuffer, outputPath);
      console.log(`[pipeline] Saved: ${outputPath}`);

      // Register in index
      registerImage(slug, imageType, {
        file: outputPath,
        hash: bestHash,
        provider: best.image.provider,
        imageId: best.image.id,
      });

      // Update learning systems
      updateContextMemory(
        metadata.topics[0] ?? metadata.primaryKeyword,
        semanticQuery.query,
        best.image.provider,
        best.relevanceScore
      );
      updateProviderScore(domain, best.image.provider, true, best.relevanceScore);

      return {
        domain,
        slug,
        imageType,
        outputPath,
        provider: best.image.provider,
        imageId: best.image.id,
        relevanceScore: best.relevanceScore,
        hash: bestHash,
      };
    }
  }

  console.log(`[pipeline] Failed to find suitable image for ${domain}/${slug}`);
  return null;
}

/** Process all needed images for a single post */
export async function processPost(
  metadata: ContentMetadata,
  domain: ContentDomain
): Promise<PipelineResult[]> {
  const results: PipelineResult[] = [];
  const rules = DOMAIN_IMAGE_RULES[domain];

  // Always try featured image (produces both clean + overlay)
  if (rules.featuredRequired) {
    const featured = await processImage(metadata, domain, 'featured-clean');
    if (featured) results.push(featured);
  }

  // Content image if allowed (skip for now in initial pipeline — focus on featured)
  // Content images require placement analysis which is a separate step

  return results;
}
