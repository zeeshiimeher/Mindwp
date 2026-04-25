type JsonLdProps = {
  schema: Record<string, unknown>;
  id?: string;
};

function assertJsonLdSchema(schema: Record<string, unknown>) {
  const context = schema['@context'];
  const type = schema['@type'];

  if (typeof context !== 'string' || context.trim().length === 0) {
    throw new Error('JsonLd requires a non-empty @context.');
  }

  if (typeof type !== 'string' || type.trim().length === 0) {
    throw new Error('JsonLd requires a non-empty @type.');
  }
}

export default function JsonLd({ schema, id }: JsonLdProps) {
  assertJsonLdSchema(schema);

  return (
    <script
      {...(id ? { id } : {})}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
