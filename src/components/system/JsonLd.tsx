type JsonLdProps = {
  schema: Record<string, unknown>;
  id?: string;
};

export default function JsonLd({ schema, id }: JsonLdProps) {
  return (
    <script
      {...(id ? { id } : {})}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
