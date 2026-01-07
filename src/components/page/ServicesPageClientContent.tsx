"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services, pricingTiers } from "@/data/services";
import { generateServiceSlug } from "@/utils/slugs";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Extended service details for the dedicated page
const serviceDetails = {
  "organizational-change-management-ocm": {
    tagline: "Transform resistance into engagement",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    highlights: [
      "Stakeholder alignment strategies",
      "Custom training programs",
      "Adoption metrics & reporting",
      "Risk mitigation frameworks",
    ],
  },
  "ai-workflow-design-integration": {
    tagline: "Human-AI collaboration, perfected",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlights: [
      "Process automation with GenAI",
      "Intelligent agent integration",
      "Team enablement & upskilling",
      "Custom AI policy development",
    ],
  },
  "rapid-mvp-development": {
    tagline: "From idea to market, accelerated",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    highlights: [
      "4-6 week development sprints",
      "AI-powered prototyping",
      "User testing & validation",
      "Production-grade delivery",
    ],
  },
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#2c4a3c] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export default function ServicesPageClientContent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfa]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden z-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.webp"
            alt="Pacific Northwest mountain vista with converging trails"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e23]/80 via-[#1a2e23]/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-32">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              className="text-[#c17f59] font-semibold tracking-widest uppercase text-sm mb-4"
              variants={fadeInUp}
            >
              What We Do
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
              variants={fadeInUp}
              style={{ fontFamily: "Georgia, serif" }}
            >
              Services built for
              <br />
              <span className="text-white/90">bold transformation</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/80 max-w-2xl leading-relaxed"
              variants={fadeInUp}
            >
              We partner with organizations ready to embrace change, harness AI, and
              accelerate growth. Our expertise spans organizational transformation,
              intelligent automation, and rapid development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((service, index) => {
        const slug = generateServiceSlug(service.title);
        const details = serviceDetails[slug as keyof typeof serviceDetails];
        const tiers = pricingTiers[slug as keyof typeof pricingTiers] || [];
        const isEven = index % 2 === 0;

        return (
          <section
            key={slug}
            className={`py-24 ${isEven ? "bg-white" : "bg-[#f3f7f5]"}`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                className={`grid lg:grid-cols-2 gap-16 items-start ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Content Side */}
                <motion.div
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#2c4a3c] rounded-2xl flex items-center justify-center text-white">
                      {details?.icon}
                    </div>
                    <span className="px-4 py-1.5 bg-[#e8f4f0] text-[#2c4a3c] rounded-full text-sm font-semibold">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2
                    className="text-4xl md:text-5xl font-bold text-[#1a2e23] mb-4"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {service.title}
                  </h2>

                  {details?.tagline && (
                    <p className="text-xl text-[#c17f59] font-medium mb-6">
                      {details.tagline}
                    </p>
                  )}

                  <p className="text-lg text-[#4a5d52] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  {details?.highlights && (
                    <div className="bg-[#f3f7f5] rounded-2xl p-6 mb-8 border border-[#e8eeeb]">
                      <h4 className="font-semibold text-[#1a2e23] mb-4">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {details.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-[#4a5d52]">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 text-[#2c4a3c] font-semibold hover:text-[#c17f59] transition-colors"
                  >
                    Discuss This Service
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>

                {/* Image & Pricing Side */}
                <motion.div
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Service Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e23]/20 to-transparent" />
                  </div>

                  {/* Pricing Tiers */}
                  {tiers.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#1a2e23] text-lg">
                        Engagement Options
                      </h4>
                      <div className="grid gap-4">
                        {tiers.map((tier, tierIndex) => (
                          <motion.div
                            key={tier.name}
                            className="bg-white rounded-xl p-5 border border-[#e8eeeb] shadow-sm hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h5 className="font-bold text-[#1a2e23]">
                                  {tier.name}
                                </h5>
                                <p className="text-[#c17f59] font-semibold">
                                  {tier.price}
                                </p>
                              </div>
                              <div className="w-10 h-10 bg-[#f3f7f5] rounded-lg flex items-center justify-center">
                                <span className="text-[#2c4a3c] font-bold text-sm">
                                  {String(tierIndex + 1).padStart(2, "0")}
                                </span>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {tier.features.map((feature, fIndex) => (
                                <li
                                  key={fIndex}
                                  className="flex items-start gap-2 text-sm text-[#4a5d52]"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#2c4a3c] mt-1.5 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="py-24 bg-[#1a2e23] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c17f59] font-semibold tracking-widest uppercase text-sm mb-4">
              How We Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Engagement Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We listen deeply to understand your challenges, goals, and organizational context.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We design a tailored approach that aligns with your timeline and resources.",
              },
              {
                step: "03",
                title: "Execute",
                description: "We deliver with precision, keeping you informed at every milestone.",
              },
              {
                step: "04",
                title: "Sustain",
                description: "We ensure lasting impact through training, documentation, and ongoing support.",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-[#2c4a3c] mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-white/70">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-[#c17f59] to-transparent -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f3f7f5]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1a2e23] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Ready to take the
              <br />
              <span className="text-[#2c4a3c]">next step?</span>
            </h2>
            <p className="text-xl text-[#4a5d52] mb-10 max-w-2xl mx-auto">
              Whether you&apos;re navigating a major transformation, exploring AI
              integration, or ready to build your next product—let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="btn-forest inline-flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-lg font-semibold text-[#2c4a3c] bg-white border-2 border-[#2c4a3c] hover:bg-[#2c4a3c] hover:text-white transition-all duration-300"
              >
                Send a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
