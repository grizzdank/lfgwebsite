'use client';

import dynamic from 'next/dynamic';

// Dynamically import SchedulingCalendar with SSR turned off INSIDE the client component
const SchedulingCalendarWithNoSSR = dynamic(
  () => import('@/components/SchedulingCalendar'),
  {
    ssr: false,
    // Optional: Add a loading component while the calendar loads
    loading: () => <div className="w-full max-w-4xl mx-auto px-4 py-10 text-center">Loading Calendar...</div>
  }
);

export default function SchedulePageClientWrapper() {
  // This client component now renders the dynamically loaded calendar
  return <SchedulingCalendarWithNoSSR />;
} 