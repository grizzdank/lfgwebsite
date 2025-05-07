// 'use client'; // This line MUST be removed or commented out for metadata to work.

import type { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';
import HomePageClientContent from '@/components/page/HomePageClientContent';

export const metadata: Metadata = {
  title: "LFG Consulting: Expert Change Management & AI-Driven Growth Solutions",
  description: "Partner with LFG Consulting to navigate complex changes, harness AI for workflow optimization, and achieve bold business growth. Explore our services.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "LFG Consulting: Expert Change Management & AI-Driven Growth Solutions",
    description: "Partner with LFG Consulting to navigate complex changes, harness AI for workflow optimization, and achieve bold business growth. Explore our services.",
    url: '/',
    images: siteMetadata.openGraph?.images || [],
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "LFG Consulting: Expert Change Management & AI-Driven Growth Solutions",
    description: "Partner with LFG Consulting to navigate complex changes, harness AI for workflow optimization, and achieve bold business growth. Explore our services.",
    images: siteMetadata.twitter?.images || [],
  },
};

export default function Home() {
  return <HomePageClientContent />;
}
