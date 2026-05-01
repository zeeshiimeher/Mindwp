import { getInventoryEntry } from '@/lib/content-quality/inventory';
import { buildOGInputFromRoute, isOGType, resolveOGEntityFromPath } from '@/lib/seo/og/contract';
import { generateOGImage } from '@/lib/seo/og/render';

export const runtime = 'nodejs';

function buildPathFromEntity(type: string, slug: string) {
  switch (type) {
    case 'service':
      return `/services/${slug}`;
    case 'feature':
      return `/features/${slug}`;
    case 'industry':
      return `/industries/${slug}`;
    case 'blog':
      return `/blog/${slug}`;
    case 'resource':
      return `/resources/${slug}`;
    case 'case-study':
      return `/case-studies/${slug}`;
    default:
      return null;
  }
}

function badRequest(message: string) {
  return new Response(message, { status: 400 });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedType = searchParams.get('type');
  const requestedSlug = searchParams.get('slug');
  const requestedPath = searchParams.get('path');

  let routePath: string | null = null;

  if (requestedType || requestedSlug) {
    if (!requestedType || !requestedSlug) {
      return badRequest('Open Graph requests require both type and slug.');
    }

    if (!isOGType(requestedType)) {
      return badRequest(`Unsupported Open Graph type: ${requestedType}.`);
    }

    routePath = buildPathFromEntity(requestedType, requestedSlug.trim());
    if (!routePath) {
      return badRequest(`Unable to resolve Open Graph path for type: ${requestedType}.`);
    }
  } else if (requestedPath) {
    routePath = requestedPath.trim();
  } else {
    return badRequest('Open Graph requests require either path or type/slug.');
  }

  const entry = await getInventoryEntry(routePath);
  if (!entry) {
    return new Response('Open Graph entity not found.', { status: 404 });
  }

  const entity = resolveOGEntityFromPath(entry.path);
  if (requestedType && entity?.type !== requestedType) {
    return badRequest(
      `Resolved route ${entry.path} does not match requested type ${requestedType}.`
    );
  }

  return generateOGImage(
    buildOGInputFromRoute({
      path: entry.path,
      title: entry.title,
      description: entry.description,
      openGraph: {
        title: entry.openGraph.title,
        description: entry.openGraph.description,
      },
    })
  );
}
