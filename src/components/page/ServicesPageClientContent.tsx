"use client";

import { useState } from "react";
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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

// Flip card component for service image/pricing
function ServiceFlipCard({
  service,
  tiers,
  isFlipped,
  onFlip,
}: {
  service: { title: string; image: string };
  tiers: { name: string; price: string; features: string[] }[];
  isFlipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div
      className="flip-card aspect-[4/3] w-full"
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onFlip()}
      aria-label={isFlipped ? "Click to see service image" : "Click to see pricing options"}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front - Service Image */}
        <div className="flip-card-front shadow-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e23]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-white/90 text-sm font-medium bg-[#1a2e23]/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
              Click for pricing
            </span>
            <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>

        {/* Back - Pricing Tiers */}
        <div className="flip-card-back p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold text-lg">Engagement Options</h4>
            <span className="text-white/60 text-sm">Click to flip back</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3">
            {tiers.map((tier, tierIndex) => (
              <div
                key={tier.name}
                className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-bold text-white">{tier.name}</h5>
                    <p className="text-[#c17f59] font-semibold text-sm">{tier.price}</p>
                  </div>
                  <span className="text-white/40 font-bold text-sm">
                    {String(tierIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-xs text-white/80">
                      <div className="w-1 h-1 rounded-full bg-[#c17f59] mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPageClientContent() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (slug: string) => {
    setFlippedCards((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfa]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden z-0">
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
            className={`py-32 ${isEven ? "bg-white" : "bg-[#f3f7f5]"}`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Content Side - Always Left */}
                <motion.div
                  className="lg:order-1"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Simplified header with inline icon */}
                  <div className="flex items-center gap-3 mb-4 text-[#2c4a3c]">
                    {details?.icon}
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {service.title.includes("OCM") ? "Change Management" :
                       service.title.includes("AI") ? "AI Integration" : "Development"}
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
                    <ul className="space-y-3 mb-8">
                      {details.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckIcon />
                          <span className="text-[#4a5d52]">{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

                {/* Image/Pricing Flip Card - Always Right */}
                <motion.div
                  className="lg:order-2"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <ServiceFlipCard
                    service={service}
                    tiers={tiers}
                    isFlipped={flippedCards[slug] || false}
                    onFlip={() => toggleFlip(slug)}
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Process Section - Simplified */}
      <section className="py-32 bg-[#1a2e23] text-white">
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
                step: "1",
                title: "Discovery",
                description: "We listen deeply to understand your challenges, goals, and organizational context.",
              },
              {
                step: "2",
                title: "Strategy",
                description: "We design a tailored approach that aligns with your timeline and resources.",
              },
              {
                step: "3",
                title: "Execute",
                description: "We deliver with precision, keeping you informed at every milestone.",
              },
              {
                step: "4",
                title: "Sustain",
                description: "We ensure lasting impact through training, documentation, and ongoing support.",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#2c4a3c] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-white/70">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#f3f7f5]">
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
