export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Organizational Change Management (OCM)',
    description: 'Navigate organizational transformation with confidence and precision. Our expert OCM strategists design and implement comprehensive change programs that align people, processes, and technology. We deliver tailored training, communication frameworks, and adoption strategies that transform resistance into engagement, ensuring your initiatives not only succeed but create lasting positive impact across your organization.',
    image: '/images/services/ocm.webp'
  },
  {
    title: 'AI Workflow Design & Integration',
    description: 'Transform your business operations with tailored AI workflow design. We expertly map your existing human processes into AI-augmented workflows, embedding cutting-edge Generative AI (GenAI), intelligent agents, and advanced automation directly into your operational backbone. Streamline your processes, amplify efficiency, and empower your teams to harness AI for sustainable productivity and innovation.',
    image: '/images/services/aitailor.webp'
  },
  {
    title: 'Rapid MVP Development',
    description: 'Accelerate your path from concept to market-ready solutions with our innovative MVP development approach. We combine cutting-edge AI-powered prototyping with lean development methodologies to rapidly deliver scalable, production-grade applications. Our process helps you validate ideas quickly, capture market opportunities decisively, and iterate based on real-world feedback, ensuring your innovation stays ahead of the competition.',
    image: '/images/services/mvp.webp'
  }
];

export const pricingTiers = {
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
  'ai-workflow-design-integration': [
    {
      name: 'Advisory',
      price: 'From $2,000',
      features: [
        'AI Readiness Assessment',
        'Policy and Strategy Development',
        'Implementation Roadmap',
      ]
    },
    {
      name: 'Starter',
      price: 'From $5,000',
      features: [
        'AI Readiness Assessment',
        'Policy and Strategy Development',
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
        'Policy and Strategy Development',
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
      price: 'From $8,000',
      features: [
        '4-6 Week Development Sprint',
        'Core Feature Set',
        'User Testing',
        'Technical Documentation',
        'Deployment Support'
      ]
    },
    {
      name: 'Scale-Up',
      price: 'Custom Monthly Retainer',
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