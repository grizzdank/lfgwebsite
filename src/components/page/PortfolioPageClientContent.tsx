'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import { caseStudies, testimonials } from '@/data/portfolio';

export default function PortfolioPageClientContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h1
              className="text-3xl font-bold tracking-tight text-[#2c4a3c] sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Work
            </motion.h1>
            <motion.p
              className="mt-2 text-lg leading-8 text-[#385449]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how we&apos;ve helped organizations achieve remarkable growth through strategic organizational change management, AI workflow integration, and rapid MVP development.
            </motion.p>
          </div>

          {/* Portfolio Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PortfolioCarousel items={caseStudies} />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#f3f7f5]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#2c4a3c] sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-lg leading-8 text-[#385449]">
              Real feedback from organizations we&apos;ve helped transform and grow.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <blockquote className="text-[#385449] leading-relaxed mb-6">
                    &quot;{testimonial.body}&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-[#e8eeeb]">
                      <Image
                        src={testimonial.author.imageUrl}
                        alt={testimonial.author.name}
                        fill
                        sizes="48px"
                        style={{ objectFit: 'cover' }}
                        className="opacity-60"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c4a3c]">
                        {testimonial.author.name}
                      </p>
                      <p className="text-sm text-[#385449]">
                        {testimonial.author.handle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results by Numbers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#2c4a3c] sm:text-4xl">
              Results That Matter
            </h2>
            <p className="mt-2 text-lg leading-8 text-[#385449]">
              Our track record speaks for itself with measurable outcomes across all projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '95%+', label: 'Average Employee Adoption Rate' },
              { number: '60%', label: 'Average Efficiency Improvement' },
              { number: '6-8', label: 'Weeks Average MVP Delivery' },
              { number: '100%', label: 'On-Time Project Delivery' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#2c4a3c] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#385449] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#2d5a27] to-[#3a7234] px-6 py-24 text-center shadow-2xl rounded-3xl">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Organization?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
              Let&apos;s discuss how our proven strategies in change management, AI integration, and rapid development can drive meaningful results for your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="btn-forest bg-white text-[#2d5a27] hover:bg-gray-100 shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center text-lg font-semibold text-white hover:text-white/80 transition-colors duration-200"
              >
                Learn More About Our Services <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 