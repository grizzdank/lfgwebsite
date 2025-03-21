'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Sue Weinberger, PMP, LSSBB',
    title: 'Founder, Co-Owner, Principal Consultant',
    image: '/sues-headshot.jpeg',
    bio: 'With over 15 years of extensive experience across diverse industries, I specialize in project management, change management, and business strategy. My expertise encompasses the successful execution of complex projects, guiding organizations through transformative change initiatives, and developing strategic roadmaps that drive business growth and operational efficiency.',
    linkedin: 'https://www.linkedin.com/in/sueweinberger',
    email: 'sue@lfgconsultants.com'
  },
  {
    name: 'Dave Graham, MBA',
    title: 'Co-Owner, Principal Consultant',
    image: '/daves-headshot.png',
    bio: 'As an accomplished leader with over 21 years of experience in U.S. Air Force Special Warfare as a Pararescueman, I bring a robust skill set in organizational leadership, team management, and operational excellence. I specialize in developing and executing detailed operational plans that achieve results while minimizing risks and conserving resources.',
    linkedin: 'https://www.linkedin.com/in/dave-e-graham/',
    email: 'dave@lfgconsultants.com'
  }
];

export default function About() {
  return (
    <section id="team" className="py-20 bg-[#f3f7f5]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16 text-[#2c4a3c]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#2c4a3c]">{member.name}</h3>
              <p className="text-[#c17f59] font-medium mb-4">{member.title}</p>
              <p className="text-[#385449] mb-6 max-w-xl leading-relaxed">{member.bio}</p>
              <div className="flex space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#446b5d] hover:text-[#c17f59] transition-colors"
                >
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
                  href={`mailto:${member.email}`}
                  className="text-[#446b5d] hover:text-[#c17f59] transition-colors"
                >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 