// 'use client';

import type { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';
import ContactPageClientContent from '@/components/page/ContactPageClientContent';

export const metadata: Metadata = {
  title: "Contact LFG Consulting | Get in Touch for Expert Solutions",
  description: "Connect with LFG Consulting to discuss your business challenges. Whether it's change management, AI integration, or MVP development, we're ready to help.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Contact LFG Consulting | Get in Touch for Expert Solutions",
    description: "Connect with LFG Consulting to discuss your business challenges. Whether it's change management, AI integration, or MVP development, we're ready to help.",
    url: '/contact',
    images: siteMetadata.openGraph?.images || [],
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "Contact LFG Consulting | Get in Touch for Expert Solutions",
    description: "Connect with LFG Consulting to discuss your business challenges. Whether it's change management, AI integration, or MVP development, we're ready to help.",
    images: siteMetadata.twitter?.images || [],
  },
};

export default function Contact() {
  return <ContactPageClientContent />;
} 