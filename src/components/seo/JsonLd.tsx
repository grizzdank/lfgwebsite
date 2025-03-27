'use client';

type JsonLdObject = {
  "@type"?: string;
  "@context"?: string;
  "@id"?: string;
  [key: string]: JsonLdValue | undefined;
};

type JsonLdValue = string | number | boolean | JsonLdObject | Array<JsonLdValue> | undefined;

type JsonLdProps = {
  data: JsonLdObject;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
} 