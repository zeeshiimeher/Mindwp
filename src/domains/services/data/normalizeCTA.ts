// Central CTA data normalization for all service pages
export function normalizeCTA(data: any) {
    return {
        ...data,
        ctaList: Array.isArray(data?.ctaList)
            ? data.ctaList.filter((x: unknown): x is string => typeof x === 'string')
            : [],
    };
}
