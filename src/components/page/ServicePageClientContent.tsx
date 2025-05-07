'use client';

// import { motion } from 'framer-motion'; // Moved to client component
// import Image from 'next/image'; // Moved to client component
// import { useParams } from 'next/navigation'; // Will be removed as unused for now
// import { services, type Service, pricingTiers } from '@/data/services'; // Service and pricingTiers to be removed as unused for now

// The following imports are likely related to the removed generateMetadata and will be removed:
// import type { Metadata, ResolvingMetadata } from 'next';
// import { siteMetadata } from '@/config/metadata';
// import ServicePageClientContent from '@/components/page/ServicePageClientContent'; // Self import, definitely remove
// import { generateServiceSlug } from '@/utils/slugs';

// All generateMetadata logic, OGImageObject type, and the old ServicePage export will be removed.

// TODO: Implement actual client component rendering logic here.
// For now, ensure it imports what it actually uses.
// Assuming useParams, services, pricingTiers might be used in the future for rendering.
// For now, let's only keep imports that are *not* flagged by ESLint or are essential.

import { useParams } from 'next/navigation';
import { services } from '@/data/services';
import { generateServiceSlug } from '@/utils/slugs';

export default function ServicePageClientContent() {
  const params = useParams();
  const slug = params.slug as string;

  // Example: Find the current service based on slug
  const currentService = services.find(s => generateServiceSlug(s.title) === slug);
  // Example: Get pricing for the current service
  // const currentPricing = pricingTiers[slug]; // pricingTiers is no longer imported

  if (!currentService) {
    return <div>Service not found.</div>;
  }

  return (
    <div>
      <h1>{currentService.title}</h1>
      <p>{currentService.description}</p>
      {/* TODO: Render pricing information using currentPricing if available */}
      {/* TODO: Add Framer Motion animations and Image components as needed */}
    </div>
  );
} 