// ─── Image System Main Exports ──────────────────────────────────────
// Internal experimental image pipeline. Do not use dashboard, analytics,
// workflow, SaaS, or tool-screen tone from this folder as public page direction.

// Types
export type {
  ColorPalette,
  ContentDomain,
  ContentMetadata,
  DebugConfidence,
  DebugFixAction,
  DebugInput,
  DebugResult,
  FeaturedImageResult,
  ImageLogEntry,
  ImageType,
  LayoutVariant,
  LearnedConfig,
  LearningMemory,
  OverlayDesignContext,
  OverlayVariant,
  PipelineMode,
  PipelineOptions,
  PipelineResult,
  ProviderName,
  TitleBucket,
  TuneOverrides,
} from './types';

// Pipeline
export { downloadImage, getRateLimitStatus } from './pipeline/downloader';
export { generateStandardFeaturedImage } from './pipeline/featuredImage';
export { optimizeImage, saveImage } from './pipeline/optimizer';
export {
  buildDesignContext,
  extractBadgeText,
  resolveColorPalette,
  resolveIcon,
  resolveLayoutVariant,
  resolveOverlayVariant,
} from './pipeline/overlayDesign';
export { processImage, processPost } from './pipeline/processor';
export { calculateTitleLayout } from './pipeline/titleLayout';

// Debug + Auto-Tune
export { applyFixes, clampOverrides } from './debug/autoTune';
export { debugImage } from './debug/debugImage';
export {
  loadLearnedOverrides,
  loadLearningMemory,
  saveWinningConfig,
  titleBucket,
} from './debug/learningMemory';
export { appendImageLog, loadImageLog } from './debug/logger';

// Providers
export { searchAllProviders, searchWithFallback } from './providers';

// Intelligence
export { analyzeImage, detectBrightness } from './intelligence/imageAnalysis';
export { checkImageSafety } from './intelligence/safety';
export { rankImages, scoreImage } from './intelligence/scoring';
export { generatePerceptualHash, hammingDistance, isTooSimilar } from './intelligence/similarity';

// Semantic
export {
  extractBlogMetadata,
  extractCaseStudyMetadata,
  extractResourceMetadata,
} from './semantic/contentAnalyzer';
export { generateSemanticQueries } from './semantic/queryGenerator';

// SEO
export { buildExifMetadata, generateImageSeo } from './seo/imageMetadata';

// Dedup
export {
  getImageEntry,
  hasImage,
  isImageUsed,
  loadImageIndex,
  registerImage,
  removeImage,
} from './dedup/imageIndex';

// Learning
export { getTopicQueries, updateContextMemory } from './learning/contextMemory';
export { getRankedProviders, updateProviderScore } from './learning/providerLearning';

// Queue
export {
  addJob,
  getNextPendingJob,
  getQueueStatus,
  loadQueue,
  resetFailedJobs,
  updateJobStatus,
} from './queue/queueManager';

// Placement
export { getPlacementAnchors } from './placement/contentPlacement';

// Diagrams & Charts
export { extractChartData, renderChart } from './diagrams/chartGenerator';
export { extractDiagramSteps, renderDiagramSvg } from './diagrams/diagramGenerator';

// Config
export { DOMAIN_IMAGE_RULES, DOMAIN_STYLES, getImageOutputPath } from './config';
