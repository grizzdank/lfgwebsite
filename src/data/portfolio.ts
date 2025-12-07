export interface CaseStudy {
  title: string;
  client: string;
  clientUrl?: string;
  description: string;
  metrics: {
    name: string;
    value: string;
  }[];
  image: string;
  category: 'OCM' | 'AI' | 'MVP';
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Digital Transformation OCM',
    client: 'Fortune 500 Manufacturing Company',
    description: 'Led comprehensive organizational change management for a major digital transformation initiative, including ERP implementation and workflow modernization. Delivered structured change strategy, stakeholder engagement, and training programs.',
    metrics: [
      { name: 'Employee Adoption Rate', value: '95%' },
      { name: 'Training Completion', value: '98%' },
      { name: 'Project Timeline', value: 'On Schedule' },
    ],
    image: '/images/portfolio/manufacturing-transformation.jpg',
    category: 'OCM'
  },
  {
    title: 'AI-Powered Customer Service',
    client: 'Regional Healthcare Network',
    description: 'Designed and implemented AI workflow integration for patient service operations, including intelligent routing, automated responses, and predictive analytics for improved patient experience.',
    metrics: [
      { name: 'Response Time Reduction', value: '60%' },
      { name: 'Patient Satisfaction', value: '+25%' },
      { name: 'Operational Efficiency', value: '+40%' },
    ],
    image: '/images/portfolio/healthcare-ai.jpg',
    category: 'AI'
  },
  {
    title: 'Supply Chain MVP Platform',
    client: 'Mid-Market Logistics Company',
    description: 'Rapid MVP development for supply chain visibility platform, delivered in 6 weeks with real-time tracking, predictive analytics, and vendor integration capabilities.',
    metrics: [
      { name: 'Development Timeline', value: '6 Weeks' },
      { name: 'User Adoption', value: '100%' },
      { name: 'Cost Savings', value: '$2M+' },
    ],
    image: '/images/portfolio/supply-chain-mvp.jpg',
    category: 'MVP'
  },
  {
    title: 'Merger Integration Strategy',
    client: 'Technology Services Firm',
    description: 'Orchestrated change management strategy for post-merger integration, aligning corporate cultures, standardizing processes, and ensuring seamless technology integration across two organizations.',
    metrics: [
      { name: 'Integration Timeline', value: '4 Months' },
      { name: 'Employee Retention', value: '92%' },
      { name: 'Synergy Achievement', value: '110%' },
    ],
    image: '/images/portfolio/merger-integration.jpg',
    category: 'OCM'
  },
  {
    title: 'AI Document Processing',
    client: 'Legal Services Partnership',
    description: 'Implemented intelligent document processing workflow using AI for contract analysis, clause extraction, and risk assessment, reducing manual review time by 75%.',
    metrics: [
      { name: 'Processing Speed', value: '75% Faster' },
      { name: 'Accuracy Rate', value: '99.2%' },
      { name: 'Cost Reduction', value: '45%' },
    ],
    image: '/images/portfolio/legal-ai.jpg',
    category: 'AI'
  },
  {
    title: 'Customer Portal MVP',
    client: 'Financial Services Company',
    description: 'Rapid development of customer self-service portal with account management, document upload, and real-time communication features. Delivered in 8 weeks with mobile-first design.',
    metrics: [
      { name: 'User Engagement', value: '+180%' },
      { name: 'Support Tickets', value: '-50%' },
      { name: 'Customer Satisfaction', value: '4.8/5' },
    ],
    image: '/images/portfolio/financial-portal.jpg',
    category: 'MVP'
  }
];

export interface Testimonial {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    body: 'LFG Consulting transformed our digital transformation from a daunting challenge to a strategic advantage. Their OCM expertise ensured our team embraced change with confidence.',
    author: {
      name: 'Sarah Chen',
      handle: 'VP of Operations, Fortune 500 Manufacturing',
      imageUrl: '/images/testimonials/sarah-chen.jpg',
    },
  },
  {
    body: 'The AI workflow integration delivered by LFG exceeded our expectations. Patient satisfaction improved dramatically while reducing operational overhead.',
    author: {
      name: 'Dr. Michael Torres',
      handle: 'Chief Innovation Officer, Regional Healthcare Network',
      imageUrl: '/images/testimonials/michael-torres.jpg',
    },
  },
  {
    body: 'Their rapid MVP development approach got us to market faster than we thought possible. The platform has become a competitive differentiator for our business.',
    author: {
      name: 'Jennifer Walsh',
      handle: 'CEO, Mid-Market Logistics Company',
      imageUrl: '/images/testimonials/jennifer-walsh.jpg',
    },
  },
]; 