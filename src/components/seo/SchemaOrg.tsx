'use client';

import JsonLd from './JsonLd';
import { organizationSchema, websiteSchema } from '@/config/structuredData';

export default function SchemaOrg() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
    </>
  );
} 