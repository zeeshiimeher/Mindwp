// ─── Image System Types ─────────────────────────────────────────────
// Central type definitions for the MindWP automated image pipeline

export type ContentDomain = 'blog' | 'resources' | 'industries' | 'case-studies' | 'features' | 'services';

export type ImageType = 'featured-clean' | 'featured-overlay' | 'content';

// ─── Provider Types ─────────────────────────────────────────────────

export type ProviderName = 'unsplash' | 'pexels' | 'pixabay';

export interface ProviderImage {
  id: string;
  provider: ProviderName;
  url: string;
  downloadUrl: string;
  width: number;
  height: number;
  description: string;
  tags: string[];
  photographer: string;
  license: string;
  isEditorial: boolean;
}

export interface ProviderSearchResult {
  provider: ProviderName;
  images: ProviderImage[];
  totalResults: number;
}

// ─── Image Intelligence Types ───────────────────────────────────────

export interface BrightnessResult {
  average: number;
  isDark: boolean;
  isBright: boolean;
}

export interface ContrastResult {
  score: number;
  isLowContrast: boolean;
}

export interface OrientationResult {
  width: number;
  height: number;
  isLandscape: boolean;
  isPortrait: boolean;
  isSquare: boolean;
}

export interface SubjectPositionResult {
  isCentered: boolean;
  region: 'left' | 'center' | 'right';
  edgeDensityCenter: number;
  /** Edge density in left third (low = clean zone for text) */
  edgeDensityLeft: number;
  /** Edge density in right third (high = subject present) */
  edgeDensityRight: number;
}

export interface TextDetectionResult {
  hasText: boolean;
  edgeDensity: number;
}

export interface ImageIntelligenceResult {
  brightness: BrightnessResult;
  contrast: ContrastResult;
  orientation: OrientationResult;
  subjectPosition: SubjectPositionResult;
  textDetection: TextDetectionResult;
  passed: boolean;
  rejectionReasons: string[];
}

// ─── Scoring Types ──────────────────────────────────────────────────

export interface RelevanceScoreFactors {
  subjectRelevance: number;
  visualClarity: number;
  compositionQuality: number;
  overlayCompatibility: number;
  resolutionQuality: number;
}

export interface ScoredImage {
  image: ProviderImage;
  intelligence: ImageIntelligenceResult;
  relevanceScore: number;
  factors: RelevanceScoreFactors;
}

// ─── Similarity Types ───────────────────────────────────────────────

export interface ImageHash {
  hash: string;
  width: number;
  height: number;
}

// ─── Semantic Query Types ───────────────────────────────────────────

export interface ContentMetadata {
  title: string;
  primaryKeyword: string;
  topics: string[];
  systems: string[];
  tags: string[];
  sectionHeadings: string[];
  slug: string;
}

export interface SemanticQuery {
  query: string;
  score: number;
  source: string;
}

// ─── Featured Image Types ───────────────────────────────────────────

export type OverlayType = 'adaptive';

export interface TitleLayoutResult {
  lines: string[];
  lineWidths: number[];
  fontSize: number;
  lineHeight: number;
  totalHeight: number;
}

// ─── Overlay Design Types ───────────────────────────────────────────

export type OverlayVariant = 'editorial' | 'system' | 'analytical' | 'results' | 'local';

export type VisualMode = 'real' | 'illustration';

export type TextStyle = 'saas' | 'hook';

export type IllustrationVariant =
  | 'dashboard'
  | 'pipeline'
  | 'calendar'
  | 'chat'
  | 'flow';

export type VisualTreatment = 'clean' | 'highlight' | 'frame' | 'depth';

/** Visual layout variant — deterministic per slug, prevents template repetition */
export type LayoutVariant = 1 | 2 | 3;

export interface ColorPalette {
  accent: string;
  /** Lighter tint of accent — highlights, badge glows */
  accentLight: string;
  /** Darker shade of accent — gradient endpoints, depth */
  accentDark: string;
  text: string;
  overlayStart: number;
  overlayEnd: number;
}

export interface OverlayDesignContext {
  slug: string;
  domain: ContentDomain;
  variant: OverlayVariant;
  layout: LayoutVariant;
  visualMode: VisualMode;
  illustration: IllustrationVariant;
  textStyle: TextStyle;
  treatment: VisualTreatment;
  icon: string | null;
  badge: string | null;
  palette: ColorPalette;
}

// ─── Featured Image Options ─────────────────────────────────────────

export interface FeaturedImageOptions {
  title: string;
  brightness: BrightnessResult;
  outputWidth: number;
  outputHeight: number;
  label?: string;
  design: OverlayDesignContext;
}

export interface FeaturedImageResult {
  clean: Buffer;
  overlay: Buffer;
}

// ─── Image Index Types ──────────────────────────────────────────────

export interface ImageIndexEntryData {
  file: string;
  hash: string;
  provider: ProviderName;
  imageId: string;
  generatedAt: string;
}

export interface ImageIndexEntry {
  featured?: ImageIndexEntryData;
  'featured-clean'?: ImageIndexEntryData;
  'featured-overlay'?: ImageIndexEntryData;
  content?: ImageIndexEntryData;
}

export type ImageIndex = Record<string, ImageIndexEntry>;

// ─── Context Memory Types ───────────────────────────────────────────

export interface TopicMemory {
  queries: string[];
  provider: ProviderName;
  avgScore: number;
  count: number;
}

export type ContextMemory = Record<string, TopicMemory>;

// ─── Provider Scores Types ──────────────────────────────────────────

export type ProviderScores = Record<ContentDomain, Record<ProviderName, number>>;

// ─── Queue Types ────────────────────────────────────────────────────

export type QueueJobStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'skipped';

export interface QueueJob {
  domain: ContentDomain;
  slug: string;
  imageType: ImageType;
  queries: string[];
  status: QueueJobStatus;
  attempts: number;
  error?: string;
  completedAt?: string;
}

// ─── Domain Style Types ─────────────────────────────────────────────

export interface DomainStyleRule {
  preferredScenes: string[];
  avoidScenes: string[];
  description: string;
}

// ─── Placement Types ────────────────────────────────────────────────

export interface PlacementAnchor {
  afterSectionIndex: number;
  reason: string;
  imageType: 'contextual' | 'diagram' | 'chart';
}

// ─── Diagram Types ──────────────────────────────────────────────────

export interface DiagramNode {
  label: string;
  index: number;
}

export interface DiagramData {
  title: string;
  nodes: DiagramNode[];
}

// ─── Chart Types ────────────────────────────────────────────────────

export interface ChartDataPoint {
  label: string;
  value: number;
  unit: string;
}

export interface ChartData {
  title: string;
  points: ChartDataPoint[];
  chartType: 'bar' | 'line' | 'comparison';
}

// ─── Safety Types ───────────────────────────────────────────────────

export interface SafetyCheckResult {
  passed: boolean;
  licenseValid: boolean;
  noLogos: boolean;
  contentSafe: boolean;
  reasons: string[];
}

// ─── Pipeline Types ─────────────────────────────────────────────────

export type PipelineMode = 'test' | 'bulk';

export interface PipelineOptions {
  mode: PipelineMode;
  domain?: ContentDomain;
  slug?: string;
  dryRun?: boolean;
}

export interface PipelineResult {
  domain: ContentDomain;
  slug: string;
  imageType: ImageType;
  outputPath: string;
  provider: ProviderName;
  imageId: string;
  relevanceScore: number;
  hash: string;
}

// ─── Debug + Auto-Tune Types ────────────────────────────────────────

export type DebugConfidence = 'high' | 'medium' | 'low';

export type DebugFixAction =
  | 'increaseText'
  | 'decreaseText'
  | 'increaseContrast'
  | 'increaseWidth'
  | 'decreaseWidth'
  | 'shiftRight'
  | 'shiftLeft'
  | 'increaseBlur'
  | 'retryImage';

export interface DebugResult {
  score: number;
  issues: string[];
  fixes: DebugFixAction[];
  confidence: DebugConfidence;
  details: Record<string, number | string>;
  /** Sub-scores for CTR, synergy, and conversion quality */
  ctrScore: number;
  synergyScore: number;
  conversionScore: number;
}

export interface DebugInput {
  layout: LayoutVariant;
  textBlockWidth: number;
  textX: number;
  imageWidth: number;
  imageHeight: number;
  contrast: number;
  brightness: number;
  titleLines: number;
  fontSize: number;
  edgeDensityLeft: number;
  subjectRegion: 'left' | 'center' | 'right';
  gradientStrength: number;
  vignetteStrength: number;
  maxTextWidth: number;
  textBlockXPercent: number;
}

export interface TuneOverrides {
  titleScale?: number;
  maxTextWidth?: number;
  gradientStrength?: number;
  vignetteStrength?: number;
  textBlockXPercent?: number;
  blurSigma?: number;
  brightnessMultiplier?: number;
}

export type TitleBucket = 'short' | 'medium' | 'long';

export interface LearnedConfig {
  titleScale: number;
  maxTextWidth: number;
  gradientStrength: number;
  layout: LayoutVariant;
  vignetteStrength: number;
  count: number;
  avgScore: number;
}

export type LearningMemory = Record<string, LearnedConfig>;

export interface ImageLogEntry {
  slug: string;
  domain: ContentDomain;
  score: number;
  layout: LayoutVariant;
  titleScale: number;
  maxTextWidth: number;
  gradientStrength: number;
  vignetteStrength: number;
  contrast: number;
  issues: string[];
  fixesApplied: DebugFixAction[];
  iteration: number;
  timestamp: string;
  /** SEO alt text for the generated image */
  alt?: string;
  /** SEO-optimized filename (e.g. slug-featured.webp) */
  filename?: string;
}
