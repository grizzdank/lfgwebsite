"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { portfolioProjects, capabilities } from "@/data/portfolioProjects";

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

function DeviceMockup({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url?: string;
}) {
  const content = (
    <div className="relative">
      {/* Browser Frame */}
      <div className="bg-[#1a1a1a] rounded-t-xl p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
        </div>
        {url && (
          <div className="flex-1 ml-4">
            <div className="bg-[#2a2a2a] rounded-md px-3 py-1.5 text-xs text-gray-400 font-mono truncate">
              {url}
            </div>
          </div>
        )}
      </div>
      {/* Screen */}
      <div className="relative aspect-[16/10] bg-white rounded-b-xl overflow-hidden shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.02] transition-transform duration-500"
      >
        {content}
      </a>
    );
  }
  return content;
}

function CapabilityIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    globe: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    rocket: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.09 14.09 0 006.16-12.12A14.09 14.09 0 009.63 2.23a6 6 0 015.96 12.14zm-5.84 2.56L4.5 21.75m5.25-5.82v4.82a6 6 0 01-5.84-7.38l5.84 2.56z"
        />
      </svg>
    ),
    cpu: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
        />
      </svg>
    ),
    palette: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
        />
      </svg>
    ),
  };
  return icons[name] || icons.globe;
}

export default function PortfolioPageClientContent() {
  const pearlywrites = portfolioProjects.find((p) => p.id === "pearlywrites")!;
  const lfg = portfolioProjects.find((p) => p.id === "lfg-consulting")!;
  const contractflo = portfolioProjects.find((p) => p.id === "contractflo")!;

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfa]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              className="text-[#c17f59] font-semibold tracking-widest uppercase text-sm mb-4"
              variants={fadeInUp}
            >
              Selected Work
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-[#1a2e23] leading-[1.1] mb-6"
              variants={fadeInUp}
              style={{ fontFamily: "Georgia, serif" }}
            >
              Projects that
              <br />
              <span className="text-[#2c4a3c]">make an impact</span>
            </motion.h1>
            <motion.p
              className="text-xl text-[#4a5d52] max-w-2xl leading-relaxed"
              variants={fadeInUp}
            >
              From complete website transformations to AI-powered SaaS
              platforms, here&apos;s a look at how we help organizations achieve
              their digital goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project 1: PearlyWrites - Before/After Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block px-4 py-1.5 bg-[#e8f4f0] text-[#2c4a3c] rounded-full text-sm font-semibold mb-6">
                {pearlywrites.category}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1a2e23] mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {pearlywrites.title}
              </h2>
              <p className="text-xl text-[#c17f59] font-medium mb-6">
                {pearlywrites.subtitle}
              </p>
              <p className="text-lg text-[#4a5d52] leading-relaxed mb-8">
                {pearlywrites.description}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-[#1a2e23] mb-2">
                    The Challenge
                  </h4>
                  <p className="text-[#4a5d52]">{pearlywrites.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2e23] mb-2">
                    Our Solution
                  </h4>
                  <p className="text-[#4a5d52]">{pearlywrites.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-[#f3f7f5] rounded-2xl p-6">
                <h4 className="font-semibold text-[#1a2e23] mb-4">Results</h4>
                <ul className="space-y-3">
                  {pearlywrites.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#2c4a3c] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#4a5d52]">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pearlywrites.url && (
                <a
                  href={pearlywrites.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-[#2c4a3c] font-semibold hover:text-[#c17f59] transition-colors"
                >
                  Visit Live Site
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>

            {/* Before/After Slider */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm text-[#6b7c72] mb-4 text-center font-medium">
                Drag the slider to compare before &amp; after
              </p>
              <BeforeAfterSlider
                beforeImage={pearlywrites.images.before!}
                afterImage="/images/portfolio/pearlywrites/after-home.png"
                beforeAlt="PearlyWrites before redesign"
                afterAlt="PearlyWrites after redesign"
              />
              <div className="flex justify-between mt-4 text-sm">
                <span className="text-[#6b7c72]">
                  <span className="font-semibold text-[#1a2e23]">Before:</span>{" "}
                  WordPress (2008)
                </span>
                <span className="text-[#6b7c72]">
                  <span className="font-semibold text-[#2c4a3c]">After:</span>{" "}
                  Next.js (2025)
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project 2: LFG Consulting */}
      <section className="py-24 bg-gradient-to-b from-[#f3f7f5] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <DeviceMockup
                src="/hero-background.jpg"
                alt="LFG Consulting website"
                url={lfg.url}
              />
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-[#2c4a3c] text-white rounded-full text-sm font-semibold mb-6">
                {lfg.category}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1a2e23] mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {lfg.title}
              </h2>
              <p className="text-xl text-[#c17f59] font-medium mb-6">
                {lfg.subtitle}
              </p>
              <p className="text-lg text-[#4a5d52] leading-relaxed mb-8">
                {lfg.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {lfg.results.map((result, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 shadow-sm border border-[#e8eeeb]"
                  >
                    <p className="text-sm text-[#4a5d52]">{result}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {lfg.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#e8eeeb] text-[#2c4a3c] rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project 3: ContractFlo */}
      <section className="py-24 bg-[#1a2e23] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#c17f59] text-white rounded-full text-sm font-semibold mb-6">
                {contractflo.category}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {contractflo.title}
              </h2>
              <p className="text-xl text-[#c17f59] font-medium mb-6">
                {contractflo.subtitle}
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {contractflo.description}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    The Challenge
                  </h4>
                  <p className="text-white/70">{contractflo.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Our Solution
                  </h4>
                  <p className="text-white/70">{contractflo.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {contractflo.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#c17f59] mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{result}</span>
                  </div>
                ))}
              </div>

              {contractflo.url && (
                <a
                  href={contractflo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c17f59] text-white rounded-lg font-semibold hover:bg-[#a86b4a] transition-colors"
                >
                  Explore ContractFlo
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating cards representing the SaaS */}
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-40 bg-gradient-to-br from-[#2c4a3c] to-[#1a2e23] rounded-2xl shadow-2xl p-6 transform -rotate-6">
                  <div className="w-8 h-1 bg-[#c17f59] rounded mb-4" />
                  <div className="w-full h-2 bg-white/20 rounded mb-2" />
                  <div className="w-3/4 h-2 bg-white/20 rounded mb-2" />
                  <div className="w-1/2 h-2 bg-white/20 rounded" />
                </div>
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#c17f59] rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2e23]">
                        ContractFlo
                      </p>
                      <p className="text-sm text-[#6b7c72]">
                        Contract Management
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[#f3f7f5] rounded-lg">
                      <span className="text-sm text-[#4a5d52]">
                        Active Contracts
                      </span>
                      <span className="font-semibold text-[#2c4a3c]">247</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#f3f7f5] rounded-lg">
                      <span className="text-sm text-[#4a5d52]">
                        Pending Review
                      </span>
                      <span className="font-semibold text-[#c17f59]">12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#f3f7f5] rounded-lg">
                      <span className="text-sm text-[#4a5d52]">Risk Score</span>
                      <span className="font-semibold text-green-600">Low</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-32 bg-gradient-to-br from-[#c17f59] to-[#a86b4a] rounded-2xl shadow-2xl p-4 transform rotate-6">
                  <div className="text-white/80 text-xs mb-2">AI Analysis</div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white/30 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c17f59] font-semibold tracking-widest uppercase text-sm mb-4">
              What We Do
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1a2e23]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Capabilities
            </h2>
            <p className="mt-4 text-lg text-[#4a5d52] max-w-2xl mx-auto">
              Beyond these featured projects, here&apos;s the full range of what
              we bring to the table.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className="group p-8 bg-[#f3f7f5] rounded-2xl hover:bg-[#2c4a3c] transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[#2c4a3c] group-hover:text-[#c17f59] transition-colors duration-500 mb-4">
                  <CapabilityIcon name={cap.icon} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2e23] group-hover:text-white transition-colors duration-500 mb-2">
                  {cap.title}
                </h3>
                <p className="text-[#4a5d52] group-hover:text-white/80 transition-colors duration-500">
                  {cap.description}
                </p>
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
              Let&apos;s build something
              <br />
              <span className="text-[#2c4a3c]">remarkable together</span>
            </h2>
            <p className="text-xl text-[#4a5d52] mb-10 max-w-2xl mx-auto">
              Whether you need a website refresh, an MVP to validate your idea,
              or AI integration to transform your workflows—we&apos;re ready to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-forest inline-flex items-center justify-center gap-2"
              >
                Start a Conversation
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-lg font-semibold text-[#2c4a3c] bg-white border-2 border-[#2c4a3c] hover:bg-[#2c4a3c] hover:text-white transition-all duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
