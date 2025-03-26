'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#2c4a3c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="LFG Consulting Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-white">LFG Consulting</h3>
            </div>
            <p className="text-[#e8eeeb] mb-4 max-w-md">
              Empowering organizations to thrive through expert change management, AI-driven workflow optimization, and rapid solution development.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-2 text-[#e8eeeb]">
              <p>
                <a href="/contact" className="hover:text-[#c17f59] transition-colors">
                  Send us a message
                </a>
              </p>
              <p>
                <a href="tel:+19199359482" className="hover:text-[#c17f59] transition-colors">
                  (919) 935-9482
                </a>
              </p>
              <p>
                <a href="mailto:dave@lfgconsultants.com" className="hover:text-[#c17f59] transition-colors">
                  dave@lfgconsultants.com
                </a>
              </p>
              <p>Portland, OR</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#446b5d]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#e8eeeb] text-sm">
              © {new Date().getFullYear()} LFG Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://linkedin.com/company/let-s-find-growth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8eeeb] hover:text-[#c17f59] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:info@lfgconsultants.com"
                className="text-[#e8eeeb] hover:text-[#c17f59] transition-colors"
              >
                <span className="sr-only">Email</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 