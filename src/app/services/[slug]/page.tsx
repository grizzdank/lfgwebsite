// 'use client'; // This line MUST be removed or commented out for metadata to work.

// import { motion } from 'framer-motion'; // Removed unused import
// import Image from 'next/image'; // Removed unused import
// import { useParams } from 'next/navigation'; // Removed unused import
import { services } from '@/data/services'; // Removed unused type Service and pricingTiers
import type { Metadata, ResolvingMetadata } from 'next'; // Added ResolvingMetadata back
import { siteMetadata } from '@/config/metadata';
import ServicePageClientContent from '@/components/page/ServicePageClientContent';
import { generateServiceSlug } from '@/utils/slugs';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent: ResolvingMetadata // Added ESLint disable comment for unused _parent
): Promise<Metadata> {
  const slug = params.slug;
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

  const finalOGImages: OGImageObject[] = [serviceOGImage]; // Changed let to const
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

interface ServicePageProps {
  params: { slug: string };
  // searchParams?: { [key: string]: string | string[] | undefined }; // We can add this if needed later
}

export default function ServicePage({ params }: ServicePageProps) {
  return <ServicePageClientContent />;
} 