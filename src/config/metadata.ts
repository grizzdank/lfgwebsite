import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "LFG Consulting - Navigate Change. Embrace AI. Grow Boldly.",
  description: "Empowering organizations to thrive through expert change management, AI-driven workflow optimization, and rapid solution development.",
  metadataBase: new URL('https://lfgconsultants.com'),
  keywords: "project management, change management, process improvement, AI consulting, business consulting",
  openGraph: {
    type: 'website',
    title: 'LFG Consulting - Navigate Change. Embrace AI. Grow Boldly.',
    description: 'Empowering organizations to thrive through expert change management, AI-driven workflow optimization, and rapid solution development.',
    url: 'https://lfgconsultants.com',
    siteName: 'LFG Consulting',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'LFG Consulting Logo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'LFG Consulting - Navigate Change. Embrace AI. Grow Boldly.',
    description: 'Empowering organizations to thrive through expert change management, AI-driven workflow optimization, and rapid solution development.',
    images: ['/images/logo.png']
  },
  icons: {
    icon: [
      {
        url: '/images/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/images/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/images/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}; 