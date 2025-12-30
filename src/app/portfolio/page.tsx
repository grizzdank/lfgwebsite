import type { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';
import PortfolioPageClientContent from '@/components/page/PortfolioPageClientContent';

export const metadata: Metadata = {
  title: "Portfolio: LFG Consulting Success Stories & Case Studies",
  description: "Explore LFG Consulting's proven track record with real client success stories across organizational change management, AI workflow integration, and rapid MVP development.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Portfolio: LFG Consulting Success Stories & Case Studies",
    description: "Explore LFG Consulting's proven track record with real client success stories across organizational change management, AI workflow integration, and rapid MVP development.",
    url: '/portfolio',
    images: siteMetadata.openGraph?.images || [],
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "Portfolio: LFG Consulting Success Stories & Case Studies",
    description: "Explore LFG Consulting's proven track record with real client success stories across organizational change management, AI workflow integration, and rapid MVP development.",
    images: siteMetadata.twitter?.images || [],
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClientContent />;
} 