'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { services, type Service } from '@/app/page';

const pricingTiers = {
  'organizational-change-management-ocm': [
    {
      name: 'Assessment & Strategy',
      price: 'Custom Quote',
      features: [
        'Change Readiness Assessment',
        'Stakeholder Analysis',
        'Custom Change Strategy',
        'Risk Assessment',
        'Communication Plan'
      ]
    },
    {
      name: 'Implementation',
      price: 'Project-Based',
      features: [
        'Change Leadership Training',
        'Process Documentation',
        'Training Program Development',
        'Adoption Metrics',
        'Ongoing Support'
      ]
    }
  ],
  'ai-workflow-integration': [
    {
      name: 'Starter',
      price: 'From $5,000',
      features: [
        'AI Readiness Assessment',
        'Workflow Analysis',
        'Basic AI Integration',
        'Team Training',
        '30-Day Support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom Quote',
      features: [
        'Advanced AI Implementation',
        'Custom Model Development',
        'Full Process Automation',
        'Extended Training Program',
        'Dedicated Support'
      ]
    }
  ],
  'rapid-mvp-development': [
    {
      name: 'MVP Sprint',
      price: 'From $15,000',
      features: [
        '4-Week Development Sprint',
        'Core Feature Set',
        'User Testing',
        'Technical Documentation',
        'Deployment Support'
      ]
    },
    {
      name: 'Scale-Up',
      price: 'Custom Quote',
      features: [
        'Extended Development',
        'Advanced Features',
        'Performance Optimization',
        'Security Hardening',
        'Maintenance Plan'
      ]
    }
  ]
};

export default function ServicePage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  
  const service = services.find((s: Service) => 
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  const pricing = pricingTiers[slug as keyof typeof pricingTiers] || [];

  return (
    <div className="min-h-screen bg-[#f3f7f5]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-[#385449] mb-8">{service.description}</p>
              
              {/* Additional service-specific content can be added here */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-[#2c4a3c]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pricing Options
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricing.map((tier, index) => (
              <motion.div
                key={tier.name}
                className="bg-[#f3f7f5] rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e8eeeb]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#2c4a3c]">{tier.name}</h3>
                <p className="text-xl font-semibold mb-6 text-[#c17f59]">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[#385449]">
                      <svg className="w-5 h-5 mr-3 text-[#2c4a3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full px-6 py-3 bg-[#2c4a3c] text-white rounded-md hover:bg-[#446b5d] transition-colors duration-300">
                  Contact Us
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 