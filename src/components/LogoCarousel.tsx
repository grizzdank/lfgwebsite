'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
  alt: string;
  width?: number;
}

const partners: Partner[] = [
  {
    name: 'Intel',
    logo: '/images/logos/intel.svg',
    alt: 'Intel Corporation Logo',
    width: 140
  },
  {
    name: 'Nike',
    logo: '/images/logos/001_nike-logos-swoosh-black.png',
    alt: 'Nike Logo',
    width: 160
  },
  {
    name: 'Travel Oregon',
    logo: '/images/logos/travel-oregon.svg',
    alt: 'Travel Oregon Logo',
    width: 160
  }
  // Add more partners here
];

export default function LogoCarousel() {
  const [width, setWidth] = useState(0);
  const [duplicatedPartners, setDuplicatedPartners] = useState<Partner[]>([]);

  // Duplicate partners to create seamless loop
  useEffect(() => {
    setDuplicatedPartners([...partners, ...partners, ...partners, ...partners]);
  }, []);

  // Track container width for animation
  useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector('.logo-container');
      if (container) {
        setWidth(container.scrollWidth / 4);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [duplicatedPartners]);

  return (
    <div className="w-full bg-[#f3f7f5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-[#2c4a3c] mb-12">
          Current and Former Partners
        </h3>
        
        <div className="relative w-full h-28 overflow-hidden">
          <div className="logo-container absolute left-0 right-0">
            <motion.div
              className="flex items-center gap-24"
              animate={{
                x: [-width, 0],
              }}
              transition={{
                duration: 30,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center"
                  style={{ minWidth: partner.width ? `${partner.width}px` : '140px' }}
                >
                  <div className="relative w-full h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      fill
                      className="object-contain"
                      priority={index < 3}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 