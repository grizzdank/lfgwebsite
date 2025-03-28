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
      const cal = await getCalApi();
      // Using type assertion since the Cal.com types are not complete
      const calWithNs = cal as { ns?: { [key: string]: { on: (event: string, callback: (event: CalEventType) => void) => void } } };
      calWithNs.ns?.['dave-graham-xhc6rb']?.on('eventTypeSelected', (event: CalEventType) => {
        console.log('Event type selected:', event);
      });
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 border border-[#e8eeeb]">
        <Cal
          calLink={calLink}
          style={{ width: '100%', height: '100%', minHeight: '550px' }}
          config={{
            'name': 'LFG Consulting',
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