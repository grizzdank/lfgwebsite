'use client';

type JsonLdData = {
  "@context": string;
  "@type": string;
  "@id"?: string;
  [key: string]: string | number | boolean | JsonLdData | Array<string | JsonLdData> | undefined;
};

type JsonLdProps = {
  data: JsonLdData;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
} 