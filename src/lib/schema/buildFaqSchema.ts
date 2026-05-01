type FaqItemInput = {
  question?: string;
  answer?: string;
};

export function buildFaqSchema(faqs: FaqItemInput[] | null | undefined) {
  const normalizedFaqs = faqs ?? [];

  if (normalizedFaqs.length === 0) return null;

  for (const faq of normalizedFaqs) {
    if (
      !faq.question ||
      !faq.answer ||
      faq.question.trim().length === 0 ||
      faq.answer.trim().length === 0
    ) {
      throw new Error('buildFaqSchema requires question and answer for every FAQ item.');
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: normalizedFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
