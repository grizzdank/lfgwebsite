import { Metadata } from 'next';
import { siteMetadata } from '@/config/metadata';
// No longer dynamically importing here
// import dynamic from 'next/dynamic'; 
import SchedulePageClientWrapper from '@/components/page/SchedulePageClientWrapper'; // Import the new client wrapper

// const SchedulingCalendarWithNoSSR = dynamic(...); // Removed dynamic import from here

export const metadata: Metadata = {
  title: 'Schedule a Discovery Meeting | LFG Consulting',
  description: 'Book a discovery meeting with LFG Consulting to discuss your business needs and how we can help you achieve your goals.',
  openGraph: {
    ...siteMetadata.openGraph,
    title: 'Schedule a Discovery Meeting | LFG Consulting',
    description: 'Book a discovery meeting with LFG Consulting to discuss your business needs and how we can help you achieve your goals.',
    url: '/schedule',
    images: siteMetadata.openGraph?.images || [],
  },
  twitter: {
    ...siteMetadata.twitter,
    title: 'Schedule a Discovery Meeting | LFG Consulting',
    description: 'Book a discovery meeting with LFG Consulting to discuss your business needs and how we can help you achieve your goals.',
    images: siteMetadata.twitter?.images || [],
  },
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#f3f7f5] py-20">
      <div className="w-full max-w-4xl mx-auto text-center px-4 mb-12">
        <h1 className="text-4xl font-bold text-[#2c4a3c] mb-4">Schedule a Discovery Meeting</h1>
        <p className="text-[#385449] text-lg mb-8">
          Choose a time that works best for you to discuss your business needs and explore how we can help you achieve your goals.
        </p>
      </div>
      {/* Render the client wrapper, which handles the dynamic import */}
      <SchedulePageClientWrapper />
    </main>
  );
} 