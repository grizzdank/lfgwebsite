'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CaseStudy } from '@/data/portfolio';

interface PortfolioCarouselProps {
  items: CaseStudy[];
}

export default function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'OCM':
        return 'bg-blue-100 text-blue-800';
      case 'AI':
        return 'bg-green-100 text-green-800';
      case 'MVP':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-l-2xl md:rounded-l-2xl md:rounded-r-none"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(items[currentIndex].category)}`}>
                    {items[currentIndex].category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#2c4a3c] mb-2">
                    {items[currentIndex].title}
                  </h3>
                  <p className="text-lg font-semibold text-[#385449] mb-4">
                    {items[currentIndex].client}
                  </p>
                  <p className="text-[#385449] leading-relaxed mb-6">
                    {items[currentIndex].description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4">
                  {items[currentIndex].metrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-sm font-medium text-[#385449]">{metric.name}</span>
                      <span className="text-lg font-bold text-[#2c4a3c]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2c4a3c] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous case study"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2c4a3c] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next case study"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-[#2c4a3c] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to case study ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnails (Desktop Only) */}
      <div className="hidden lg:flex justify-center mt-6 space-x-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
              index === currentIndex
                ? 'ring-2 ring-[#2c4a3c] scale-110'
                : 'opacity-60 hover:opacity-80'
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="80px"
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
} 