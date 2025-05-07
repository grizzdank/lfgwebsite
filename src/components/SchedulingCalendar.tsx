'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { motion } from 'framer-motion';

interface SchedulingCalendarProps {
  calLink?: string;
}

interface CalEventType {
  name: string;
  slug: string;
  duration: number;
}

export default function SchedulingCalendar({ calLink = 'dave-graham-xhc6rb/discovery-meeting' }: SchedulingCalendarProps) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        // Using type assertion since the Cal.com types might not be fully up-to-date or complete for ns
        const calWithNs = cal as { ns?: { [key: string]: { on: (event: string, callback: (event: CalEventType) => void) => void } } };
        
        // Check if ns and the specific namespace exist before trying to attach 'on'
        if (calWithNs.ns && calWithNs.ns['dave-graham-xhc6rb']) {
          calWithNs.ns['dave-graham-xhc6rb'].on('eventTypeSelected', (event: CalEventType) => {
            console.log('Cal.com eventTypeSelected:', event);
          });
        } else {
          // console.warn("Cal.com namespace 'dave-graham-xhc6rb' not found for event listener.");
        }
      } catch (error) {
        console.error("Error with Cal.com API:", error);
      }
    })();
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 border border-[#e8eeeb]">
        <Cal
          calLink={calLink}
          style={{ width: '100%', height: '100%', minHeight: '550px' }}
          config={{ // Restoring config for styling
            'theme': 'light',
            'hideEventTypeDetails': 'false',
            'layout': 'month_view',
            'styles.branding.brandColor': '#2c4a3c',
            'styles.body.background': 'transparent'
          }}
        />
      </div>
    </motion.div>
  );
} 