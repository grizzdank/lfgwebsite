'use client';

// import { motion } from 'framer-motion'; // Moved to client component
// import Image from 'next/image'; // Moved to client component
import { useParams } from 'next/navigation'; // Moved to client component
import { services, type Service, pricingTiers } from '@/data/services';
import type { Metadata, ResolvingMetadata } from 'next';
import { siteMetadata } from '@/config/metadata';
import ServicePageClientContent from '@/components/page/ServicePageClientContent'; // Import the new client component
import { generateServiceSlug } from '@/utils/slugs'; // Import shared function

// pricingTiers definition was here. It needs to be accessible by the client component.
// For generateMetadata, it only needs 'services' and 'generateServiceSlug'.
// The client component will handle its own data fetching/filtering using useParams.

// Helper function to generate slugs (consistent with component logic)
// This is used by generateMetadata. The client component should have its own or import a shared one.
// function generateServiceSlug(title: string): string { ... }

// Define a simpler type for what we expect an image object to be for OpenGraph
type OGImageObject = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: string;
};

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  // generateServiceSlug is defined above in this file for generateMetadata's use
  const service = services.find(s => generateServiceSlug(s.title) === slug);

  if (!service) {
    return {
      title: 'Service Not Found | LFG Consulting',
      description: 'The service you are looking for could not be found.',
      openGraph: {
        ...siteMetadata.openGraph,
        title: 'Service Not Found | LFG Consulting',
        description: 'The service you are looking for could not be found.',
        url: `/services/${slug}`,
        images: siteMetadata.openGraph?.images || [],
      },
      twitter: {
        ...siteMetadata.twitter,
        title: 'Service Not Found | LFG Consulting',
        description: 'The service you are looking for could not be found.',
        images: siteMetadata.twitter?.images || [],
      }
    };
  }

  const servicePageTitle = `${service.title} | Services | LFG Consulting`;
  const servicePageDescription = service.description;

  const serviceOGImage: OGImageObject = {
    url: service.image, 
    alt: service.title,
  };

  let finalOGImages: OGImageObject[] = [serviceOGImage];
  const defaultSiteOGImages = siteMetadata.openGraph?.images;
  if (Array.isArray(defaultSiteOGImages) && defaultSiteOGImages.length > 0) {
    const siteLogo = defaultSiteOGImages[0] as OGImageObject; 
    if (siteLogo && siteLogo.url !== service.image) {
      finalOGImages.push(siteLogo);
    }
  } else if (typeof defaultSiteOGImages === 'object' && defaultSiteOGImages !== null && 'url' in defaultSiteOGImages) {
    const singleSiteLogo = defaultSiteOGImages as OGImageObject;
    if (singleSiteLogo.url !== service.image) {
        finalOGImages.push(singleSiteLogo);
    }
  }

  return {
    title: servicePageTitle,
    description: servicePageDescription,
    openGraph: {
      ...siteMetadata.openGraph, 
      title: `${service.title} | LFG Consulting`, 
      description: servicePageDescription, 
      url: `/services/${slug}`, 
      images: finalOGImages, 
    },
    twitter: {
      ...siteMetadata.twitter, 
      card: 'summary_large_image',
      title: `${service.title} | LFG Consulting`, 
      description: servicePageDescription, 
      images: [service.image], 
    },
  };
}

export default function ServicePage() {
  // This Server Component no longer needs to pass props like slug or service to the client component,
  // as the client component will use useParams itself.
  return <ServicePageClientContent />;
} 