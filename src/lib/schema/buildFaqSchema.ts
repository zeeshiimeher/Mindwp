type FaqItemInput = {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
};

export function buildFaqSchema(faqs: FaqItemInput[] | null | undefined) {
  const normalizedFaqs =
    faqs
      ?.map(faq => ({
        question: faq.question ?? faq.q,
        answer: faq.answer ?? faq.a,
      }))
      .filter((faq): faq is { question: string; answer: string } =>
        Boolean(faq.question && faq.answer)
      ) ?? [];

  if (normalizedFaqs.length === 0) return null;

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
