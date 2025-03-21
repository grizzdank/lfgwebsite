'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import About from '@/components/sections/About';

const services = [
  {
    title: 'Project and Change Management',
    description: 'Expert guidance in managing complex projects and organizational change initiatives. We help you navigate transitions smoothly while maintaining operational excellence.',
    image: '/images/services/project-management.jpg'
  },
  {
    title: 'Process Improvement',
    description: 'Streamline your operations and enhance efficiency through data-driven process analysis and optimization strategies.',
    image: '/images/services/process-improvement.jpg'
  },
  {
    title: 'AI Consulting',
    description: 'Navigate the future of business with our AI consulting services. We help you identify and implement AI solutions that drive innovation and growth.',
    image: '/images/services/ai-consulting.jpg'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt="Mountain landscape"
            fill
            style={{ objectFit: 'cover', objectPosition: '54% 81%' }}
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let Us Help You Find Your Path
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We deliver outstanding results in project management, change management,
            process improvement, and AI consulting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#services" className="btn-forest">
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </section>

      <About />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-[#2c4a3c]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-[#f3f7f5] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#e8eeeb]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2c4a3c]">{service.title}</h3>
                <p className="text-[#385449] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
