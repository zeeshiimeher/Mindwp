export type ContentRulePageType =
  | 'static'
  | 'service'
  | 'feature'
  | 'industry'
  | 'blog'
  | 'resource'
  | 'case-study';

type PartialDeep<T> = {
  [K in keyof T]?: T[K] extends RegExp
    ? T[K]
    : T[K] extends readonly unknown[]
      ? T[K]
      : T[K] extends object
        ? PartialDeep<T[K]>
        : T[K];
};

export interface ContentRules {
  sectionStructure: {
    minimumCollectionItems: number;
    minimumNestedCollectionItems: number;
    service: {
      comparisonItemsMin: number;
      valueItemsMin: number;
      coreLayerCardsMin: number;
      coreLayerCardPointsMin: number;
      typesItemsMin: number;
      includedItemsMin: number;
      processStepsMin: number;
      visibilityFoundationsNarrativeParagraphsMin: number;
      visibilityFoundationsItemsMin: number;
      technologiesItemsMin: number;
      businessSizesItemsMin: number;
      concernsItemsMin: number;
      qualificationStrongFitMin: number;
      qualificationNotForMin: number;
      faqItemsMin: number;
    };
    feature: {
      processStepsMin: number;
      benefitsItemsMin: number;
      useCasesItemsMin: number;
      capabilitiesFeatureCategoriesMin: number;
      faqItemsMin: number;
      exploreCardsMin: number;
      channelsItemsMin: number;
      painPointsItemsMin: number;
      testimonialsItemsMin: number;
    };
    resource: {
      takeawaysItemsMin: number;
      problemItemsMin: number;
      businessCostsItemsMin: number;
      diyStepsMin: number;
      solutionCardsMin: number;
      templatesItemsMin: number;
      checklistItemsMin: number;
      faqItemsMin: number;
      comparisonBeforeItemsMin: number;
      comparisonAfterItemsMin: number;
      relatedResourcesMin: number;
    };
    caseStudy: {
      metricsKeyMetricsMin: number;
      problemPainPointsMin: number;
      solutionWhatWeDidMin: number;
      processHowWeDidItMin: number;
      featuresUsedMin: number;
      resultsMin: number;
      deliverablesItemsMin: number;
      workflowsMin: number;
      workflowActionsMin: number;
      faqItemsMin: number;
    };
  };
  templatePayload: {
    service: {
      heroTitleRequired: boolean;
      heroDescriptionRequired: boolean;
      ctaTitleRequired: boolean;
      ctaDescriptionRequired: boolean;
    };
    feature: {
      heroTitleRequired: boolean;
      heroDescriptionRequired: boolean;
      requiredSectionKeys: string[];
      ctaTitleRequired: boolean;
      ctaDescriptionRequired: boolean;
    };
    blog: {
      minimumSections: number;
    };
    resource: {
      requiredSectionTypes: string[];
      ctaHeadingRequired: boolean;
      ctaContentRequired: boolean;
      relatedResourcesMin: number;
      minimumSections: number;
    };
    caseStudy: {
      heroSectionRequired: boolean;
      ctaSectionRequired: boolean;
      ctaHeadingRequired: boolean;
      ctaBodyRequired: boolean;
    };
    industry: {
      heroTitleRequired: boolean;
      heroDescriptionRequired: boolean;
      ctaTitleRequired: boolean;
      ctaDescriptionRequired: boolean;
      detailFaqMin: number;
    };
  };
  internalLinks: {
    maxSectionsPerPage: number;
    maxTotalLinks: number;
  };
  contentQuality: {
    weakTitleMinimumLength: number;
    weakTitleAcronymPattern: RegExp;
    minIndexableDescriptionLength: number;
    minNonIndexableDescriptionLength: number;
  };
}

const DEFAULT_CONTENT_RULES: ContentRules = {
  sectionStructure: {
    minimumCollectionItems: 2,
    minimumNestedCollectionItems: 1,
    service: {
      comparisonItemsMin: 2,
      valueItemsMin: 2,
      coreLayerCardsMin: 2,
      coreLayerCardPointsMin: 1,
      typesItemsMin: 2,
      includedItemsMin: 2,
      processStepsMin: 2,
      visibilityFoundationsNarrativeParagraphsMin: 1,
      visibilityFoundationsItemsMin: 2,
      technologiesItemsMin: 2,
      businessSizesItemsMin: 2,
      concernsItemsMin: 2,
      qualificationStrongFitMin: 1,
      qualificationNotForMin: 1,
      faqItemsMin: 2,
    },
    feature: {
      processStepsMin: 2,
      benefitsItemsMin: 2,
      useCasesItemsMin: 2,
      capabilitiesFeatureCategoriesMin: 1,
      faqItemsMin: 2,
      exploreCardsMin: 2,
      channelsItemsMin: 1,
      painPointsItemsMin: 2,
      testimonialsItemsMin: 1,
    },
    resource: {
      takeawaysItemsMin: 2,
      problemItemsMin: 2,
      businessCostsItemsMin: 2,
      diyStepsMin: 2,
      solutionCardsMin: 2,
      templatesItemsMin: 2,
      checklistItemsMin: 2,
      faqItemsMin: 2,
      comparisonBeforeItemsMin: 1,
      comparisonAfterItemsMin: 1,
      relatedResourcesMin: 1,
    },
    caseStudy: {
      metricsKeyMetricsMin: 1,
      problemPainPointsMin: 1,
      solutionWhatWeDidMin: 1,
      processHowWeDidItMin: 1,
      featuresUsedMin: 1,
      resultsMin: 1,
      deliverablesItemsMin: 1,
      workflowsMin: 1,
      workflowActionsMin: 1,
      faqItemsMin: 1,
    },
  },
  templatePayload: {
    service: {
      heroTitleRequired: true,
      heroDescriptionRequired: true,
      ctaTitleRequired: true,
      ctaDescriptionRequired: true,
    },
    feature: {
      heroTitleRequired: true,
      heroDescriptionRequired: true,
      requiredSectionKeys: [],
      ctaTitleRequired: true,
      ctaDescriptionRequired: true,
    },
    blog: {
      minimumSections: 5,
    },
    resource: {
      requiredSectionTypes: [],
      ctaHeadingRequired: true,
      ctaContentRequired: true,
      relatedResourcesMin: 0,
      minimumSections: 5,
    },
    caseStudy: {
      heroSectionRequired: true,
      ctaSectionRequired: true,
      ctaHeadingRequired: true,
      ctaBodyRequired: true,
    },
    industry: {
      heroTitleRequired: true,
      heroDescriptionRequired: true,
      ctaTitleRequired: true,
      ctaDescriptionRequired: true,
      detailFaqMin: 0,
    },
  },
  internalLinks: {
    maxSectionsPerPage: 1,
    maxTotalLinks: 3,
  },
  contentQuality: {
    weakTitleMinimumLength: 4,
    weakTitleAcronymPattern: /^[A-Z0-9]{2,6}$/,
    minIndexableDescriptionLength: 60,
    minNonIndexableDescriptionLength: 50,
  },
};

const PAGE_TYPE_RULE_OVERRIDES: Partial<Record<ContentRulePageType, PartialDeep<ContentRules>>> =
  {};

const SLUG_RULE_OVERRIDES: Partial<
  Record<`${ContentRulePageType}:${string}`, PartialDeep<ContentRules>>
> = {};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    Boolean(value) &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !(value instanceof RegExp)
  );
}

function deepMerge<T>(base: T, override?: PartialDeep<T>): T {
  if (!override) {
    return base;
  }

  if (!isPlainObject(base) || !isPlainObject(override)) {
    return override as T;
  }

  const merged = { ...base } as Record<string, unknown>;

  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) {
      continue;
    }

    const current = merged[key];
    merged[key] =
      isPlainObject(current) && isPlainObject(value) ? deepMerge(current, value) : value;
  }

  return merged as T;
}

export function resolveContentRules(pageType: ContentRulePageType, slug?: string): ContentRules {
  const pageTypeRules = PAGE_TYPE_RULE_OVERRIDES[pageType];
  const slugRules = slug ? SLUG_RULE_OVERRIDES[`${pageType}:${slug}`] : undefined;

  return deepMerge(deepMerge(DEFAULT_CONTENT_RULES, pageTypeRules), slugRules);
}
