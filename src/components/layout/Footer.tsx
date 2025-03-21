'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const businessHours = [
    { day: 'Monday', hours: '9:00 am – 5:00 pm' },
    { day: 'Tuesday', hours: '9:00 am – 5:00 pm' },
    { day: 'Wednesday', hours: '9:00 am – 5:00 pm' },
    { day: 'Thursday', hours: '9:00 am – 5:00 pm' },
    { day: 'Friday', hours: '9:00 am – 5:00 pm' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">LFG Consulting</h3>
            <p className="text-gray-600 mb-4">
              Delivering outstanding results in project management, change management,
              process improvement, and AI consulting.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:sue@lfgconsultants.com"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                sue@lfgconsultants.com
              </a>
              <a
                href="mailto:dave@lfgconsultants.com"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                dave@lfgconsultants.com
              </a>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Business Hours (PST/PDT)</h3>
            <div className="space-y-1">
              {businessHours.map(({ day, hours }) => (
                <div key={day} className="flex justify-between text-gray-600">
                  <span>{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} LFG Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 